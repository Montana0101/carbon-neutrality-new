import { useState, useEffect, memo } from "react";
import { withRouter, useHistory } from "react-router-dom";
import {
  cancelAttention,
  myAttention,
  readMessage,
  attentionList,
  attentionInfo,
  myDeclare,deleteDeclare
} from "../../apis/index";
import { ThemeColor, CutLine } from "../../lib/const";
import { ExclamationCircleFilled } from "@ant-design/icons";
import {
  Tabs,
  Radio,
  Col,
  Row,
  Form,
  Input,
  Table,
  message,
  Popconfirm,
} from "antd";
import { Pie } from "@ant-design/plots";
import "moment/locale/zh-cn";
import DefaultLogo from "../../static/imgs/person.png"; // 默认企业logo
import "./admin.less";

const { TabPane } = Tabs;

const DemoPie = memo(() => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    _myAttention();
  }, []);

  // 饼图数据
  const _myAttention = async () => {
    const res = await myAttention();
    if (res && res.code === 2000) {
      if (res.result) {
        setData(res.result.analyList);
        setTotal(res.result.total);
      }
    }
  };

  const config = {
    appendPadding: 10,
    data,
    angleField: "count",
    colorField: "industry",
    radius: 1,
    innerRadius: 0.6,
    position: "left",
    label: {
      // type: 'inner',
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "left",
        fontSize: 12,
        opacity: 0,
      },
    },
    legend: {
      position: "right",
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: `<div style="font-size:0.12rem;font-weight:normal;padding-bottom:0.25rem;">
            <div style="font-size:0.2rem;margin-bottom:0.05rem;font-weight:bold;">${total}</div><div style="font-size:0.12rem">我的关注</div></div>`,
      },
    },
  };
  return (
    <div style={{ width: "90%", height: "100%", padding: "0 0.2rem" }}>
      <Pie {...config} style={{ height: "100%", width: "100%" }} />
    </div>
  );
});

const ButtonCmt = (bg, color, text, w = "0.8rem") => {
  return (
    <button
      style={{
        background: bg,
        color: color,
        fontSize: "0.12rem",
        padding: "0.03rem 0.1rem",
        width: w,
        borderRadius: "0.03rem",
        cursor: "pointer",
        border: `0.01rem solid ${color}`,
      }}
    >
      {text}
    </button>
  );
};

function CommonUser(props) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [tabInx, setTabInx] = useState(1); // tab切换索引

  const [info, setInfo] = useState({});
  const [list, setList] = useState([]); //返回数据集合
  const [attention, setAttention] = useState({});

  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1); // 页码
  const [limit,setLimit] = useState(10);
  const [companyName, setCompanyName] = useState("");
  const [status, setStatus] = useState("");
  // const [data, setData] = useState([]) // 饼图数据

  const [d_list, setDlist] = useState([]); // 申报列表
  const history = useHistory();

  // 业务咨询
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setSelectedRowKeys(selectedRowKeys);
      setSelectedRows(selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };

  useEffect(() => {
    document.getElementsByTagName("html")[0].style.overflowX = "hidden";
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";

    const user = localStorage.getItem("user");
    if (JSON.parse(user)) {
      setInfo(JSON.parse(user));
    }
  }, []);

  // 调用接口
  useEffect(() => {
    // _attentionInfo();
    _readMessage();
    _declareList();
    // _myAttention()
  }, []);

  // 用户管理调用列表
  useEffect(() => {
    if (tabInx * 1 === 2) {
      if (page == 1) {
        _attentionList();
      } else {
        setPage(1);
      }
    }
  }, [companyName, status]);

  useEffect(() => {
    if (tabInx * 1 == 1) {
      _declareList();
    } else {
      _attentionList();
    }
  }, [tabInx, page]);

  // 读取信息
  const _readMessage = async () => {
    const res = await readMessage();
    if (res && res.code !== 2000) {
      console.warn("readMessage 接口功能异常");
    }
  };

  // 关注列表
  const _attentionList = async () => {
    const params = {
      page,
      industry: status,
      companyName,
      limit: limit,
    };
    const res = await attentionList(params);
    if (res && res.code === 2000) {
      let arr = res.result.data;
      arr &&
        arr.map((item, index) => {
          arr[index].key = item.id;
        });
      setList(arr);
      setTotal(res.result.totalRecord);
    }
  };

  // 申报列表
  const _declareList = async () => {
    const res = await myDeclare();
    if (res && res.code === 2000) {
      setDlist(res.result);
      setTotal(res.result.length);
    }
  };

  // 关注的信息
  const _attentionInfo = async () => {
    const res = await attentionInfo();
    if (res && res.code === 2000) {
      setAttention(res.result);
      _attentionList();
    }
  };

  // 取下关注
  const _cancelAttention = async (arr) => {
    const res = await cancelAttention(arr);
    if (res && res.code === 2000) {
      message.success("操作成功");
    } else {
      message.error("操作失败");
    }
  };

  // 删除申报记录
  const _deleteRecord = async (id) => {
    const res = await deleteDeclare(id)
    if (res && res.code === 2000) {
      message.success("删除成功");
      _declareList()
    } else {
      message.error("删除失败");
    }
  }

  // 申报模型
  const columns_d = [
    {
      title: "序号",
      render: (text, record, index) => {
        return <span>{(page-1)*limit + (index + 1)}</span>;
      },
    },
    {
      title: "状态",
      render: (text, record, index) => {
        return <span style={{
          color: record.declareStatus ==0 ? "#EFA71C" : (record.declareStatus ==1 ? "#5163AA" : ThemeColor)
        }}>{record.declareStatus ==0 ? "正在编辑" : (record.declareStatus ==1 ? "待审核" : "已审核 " + record.score)}</span>;
      },
    },
    {
      title: "公司名称",
      dataIndex: "companyName",
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
    },
    {
      title: "最后操作时间",
      dataIndex: "lastUpdateTime",
    },
    {
      title: "操作",
      width: 200,
      render: (text, record) => {
        return (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ marginBottom: "0.05rem" }} onClick={
              ()=>{
                // _editDeclare([record.id]);
                history.push("declare",{id:record.id,action:1})
              }
            }>
              {ButtonCmt(ThemeColor, "white", "编辑")}
            </div>
            <div
              onClick={() => {
                _deleteRecord([record.id]);
              }}
            >
              {ButtonCmt("#FD867F", "white", "删除")}
            </div>
          </div>
        );
      },
    },
  ]

  // 关注模型
  const columns = [
    {
      title: "序号",
      render: (text, record, index) => {
        return <span>{record.index}</span>;
      },
    },
    {
      title: "公司名称",
      dataIndex: "companyName",
    },
    {
      title: "关注时间",
      dataIndex: "attentionTime",
    },
    {
      title: "操作",
      width: 200,
      render: (text, record) => {
        return (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ marginBottom: "0.05rem" }}>
              {ButtonCmt("white", ThemeColor, "查看详情")}
            </div>
            <div
              onClick={() => {
                _cancelAttention([record.id]);
              }}
            >
              {ButtonCmt("#FD867F", "white", "取消关注")}
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div
      className="admin_page"
      style={{
        height: "auto",
        width: "100%",
        background: "white",
        padding: "0 0.3rem",
      }}
    >
      {/* 碳中和技术创新联盟 */}
      <div
        style={{
          border: CutLine,
          padding: "0 0.5rem",
          borderRight: "none",
          borderLeft: "none",
        }}
      >
        <h3
          style={{
            fontSize: "0.12rem",
            fontWeight: "400",
            display: "flex",
            margin: 0,
            padding: "0 0.3rem",
            height: "0.7rem",
            lineHeight: "0.7rem",
            borderLeft: CutLine,
            borderRight: CutLine,
          }}
        >
          <span
            style={{ color: "rgba(0,0,0,0.6)", cursor: "pointer" }}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            首页
          </span>
          <span style={{ margin: "0 0.1rem" }}>/</span>
          <span>个人中心</span>
        </h3>
      </div>

      <div
        style={{
          border: CutLine,
          padding: "0 0.5rem",
          borderRight: "none",
          borderLeft: "none",
          borderTop: "none",
          boxSizing: "border-box",
        }}
      >
        <section
          style={{
            fontSize: "0.12rem",
            fontWeight: "400",
            display: "flex",
            margin: 0,
            padding: "0 0.3rem",
            height: "2.8rem",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderLeft: CutLine,
            borderRight: CutLine,
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              background: "#EEF7EE",
              width: "100%",
              height: "100%",
              margin: "0.2rem 0",
              padding: "0.2rem",
              display: "flex",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                background: "white",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "0.2rem 0.15rem",
                boxSizing: "content-box",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.12rem",
                color: "rgba(0,0,0,0.6)",
              }}
            >
              {info.logoUrl ? (
                <img style={{ height: "0.8rem" }} src={info.logoUrl} alt="" />
              ) : (
                <img style={{ height: "0.8rem" }} src={DefaultLogo} alt="" />
              )}
              <span
                style={{
                  fontSize: "0.16rem",
                  fontWeight: "bold",
                  color: "black",
                  marginTop: "0.05rem",
                }}
              >
                {info.name}
              </span>
              <span>{info.email}</span>
              <span>{info.companyName}</span>
            </div>
            <div
              style={{
                flex: 3,
                margin: "0 0.2rem",
                background: "white",
                padding: "0.1rem",
              }}
            >
              <DemoPie />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <section
                style={{
                  background: "white",
                  marginBottom: "0.05rem",
                  flex: 1,
                  padding: "0.1rem",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ color: "rgba(0,0,0,0.5)", fontSize: "0.12rem" }}>
                  公司今日收到的关注
                </div>
                <div
                  style={{
                    alignSelf: "flex-end",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.07rem",
                  }}
                >
                  <span style={{ fontSize: "0.2rem" }}>
                    {attention ? attention.current : 0}
                  </span>
                  <span style={{ fontSize: "0.12rem", marginTop: "0.03rem" }}>
                    个
                  </span>
                </div>
              </section>
              <section
                style={{
                  background: "white",
                  marginBottom: "0.05rem",
                  flex: 1,
                  padding: "0.1rem",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ color: "rgba(0,0,0,0.5)", fontSize: "0.12rem" }}>
                  公司累计收到的关注
                </div>
                <div
                  style={{
                    alignSelf: "flex-end",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.07rem",
                  }}
                >
                  <span style={{ fontSize: "0.2rem" }}>
                    {attention ? attention.total : 0}
                  </span>
                  <span style={{ fontSize: "0.12rem", marginTop: "0.03rem" }}>
                    个
                  </span>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>

      <div
        style={{
          boxSizing: "border-box",
          color: "white",
          marginBottom: "-0.5rem",
          border: CutLine,
          borderTop: "none",
          borderBottom: "none",
          margin: "0 0.5rem 0 0.5rem",
        }}
      >
        <Tabs
          defaultActiveKey="1"
          onChange={(e) => {
            setTabInx(e);
          }}
          style={{}}
        >
          <TabPane tab="我的申报" key="1"></TabPane>
          <TabPane tab="我的关注" key="2">
            <section style={{ padding: "0.2rem 0.3rem",paddingTop:"0.3rem" }}>
              <Form>
                <Row>
                  <Col span={11}>
                    <Form.Item label="公司名称">
                      <Input
                        placeholder="请输入公司名称"
                        onChange={(e) => {
                          setCompanyName(e.target.value);
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row>
                  <Form.Item label="行业分类">
                    <Radio.Group
                      defaultValue=""
                      buttonStyle="solid"
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <Radio.Button value={""} key={0}>
                        全部
                      </Radio.Button>
                      <Radio.Button value={0} key={2}>
                        农、林、牧、渔业
                      </Radio.Button>
                      <Radio.Button value={1} key={3}>
                        采矿业
                      </Radio.Button>
                      <Radio.Button value={2} key={4}>
                        制造业
                      </Radio.Button>
                      <Radio.Button value={3} key={5}>
                        电力、热力、燃气及水生产和供应业
                      </Radio.Button>
                      <Radio.Button value={4} key={6}>
                        建筑业
                      </Radio.Button>
                      <Radio.Button value={5} key={7}>
                        批发和零售业
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                </Row>
              </Form>
            </section>
          </TabPane>
        </Tabs>
      </div>

      <div
        style={{
          border: "none",
          padding: "0 0.5rem",
          borderRight: "none",
          borderLeft: "none",
          // borderTop: "none"
        }}
      >
        <section
          style={{
            fontSize: "0.12rem",
            fontWeight: "400",
            display: "flex",
            margin: 0,
            padding: "0 0.3rem",
            height: "0.7rem",
            alignItems: "center",
            justifyContent: "space-between",
            border: CutLine,
          }}
        >
          <div
            style={{
              color: ThemeColor,
              fontSize: "0.12rem",
              fontWeight: "bold",
            }}
          >
            为您找到<span style={{ margin: "0 0.02rem" }}>{total}</span>
            条相关结果
          </div>

          <div style={{ display: "flex" }}>
            {tabInx * 1 === 2 ? (
              <div
                onClick={() => {
                  let arr = [];
                  selectedRows &&
                    selectedRows.map((item) => {
                      arr.push(item.id);
                    });
                  _cancelAttention(arr);
                }}
              >
                {ButtonCmt("#FD867F", "white", "批量取消关注", "1.1rem")}
              </div>
            ) : (
              <div
                onClick={() => {
                  history.push("/declare",{action:0});
                }}
              >
                {ButtonCmt(ThemeColor, "white", "+ 添加申报", "1rem")}
              </div>
            )}
          </div>
        </section>
      </div>

      {/* 表格数据区域 */}
      <section
        style={{
          fontSize: "0.12rem",
          fontWeight: "400",
          display: "flex",
          margin: "0 0.5rem",
          padding: tabInx==1 ? "0 0.3rem" : "0.3rem",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          border: CutLine,
          borderTop: "none",
        }}
      >
        {tabInx * 1 === 2 && (
          <div
            style={{
              display: "flex",
              background: "#E6F7FF",
              width: "100%",
              height: "0.4rem",
              alignItems: "center",
              paddingLeft: "0.2rem",
              fontSize: "0.12rem",
            }}
          >
            <ExclamationCircleFilled
              style={{
                marginRight: "0.1rem",
                color: "#337FFF",
                fontSize: "0.14rem",
              }}
            />
            <span>已选择</span>
            <span style={{ margin: "0 0.1rem", color: "#337FFF" }}>
              {selectedRowKeys.length}
            </span>
            <span>项</span>
            <a
              style={{
                marginLeft: "0.15rem",
                textDecoration: "underline",
                color: "#337FFF",
              }}
              onClick={() => {
                setSelectedRowKeys([]);
              }}
            >
              清空
            </a>
          </div>
        )}

        {tabInx * 1 === 1 ? (
          <Table
            style={{}}
            columns={columns_d}
            dataSource={d_list}
            style={{
              width: "100%",
              marginTop: "0.3rem",
            }}
            bordered
            pagination={{
              total: total,
              onChange: (e) => {
                setPage(e);
              },
            }}
          />
        ) : (
          <Table
            style={{}}
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
            columns={columns}
            dataSource={list}
            style={{
              width: "100%",
              marginTop: "0.3rem",
            }}
            bordered
            pagination={{
              total: total,
              onChange: (e) => {
                setPage(e);
              },
            }}
          />
        )}
      </section>
    </div>
  );
}

export default withRouter(CommonUser);
