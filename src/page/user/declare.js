import { useState, useEffect, memo } from "react";
import { withRouter, useHistory } from "react-router-dom";
import {
  cancelAttention,
  myAttention,
  readMessage,
  attentionList,
  attentionInfo,
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
import "./declare.less";

const { TabPane } = Tabs;
const defaultColor = "rgba(0,0,0,0.3)";

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

const titles = [
  "财务报表",
  "基本信息",
  "公司战略",
  "公司经营",
  "核心竞争力",
  "核心团队",
  "核心技术",
  "投资方",
  "行业成长性",
  "提交完成",
];

function Declare(props) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [tabInx, setTabInx] = useState(0); // tab切换索引

  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1); // 页码
  const [companyName, setCompanyName] = useState("");
  const [status, setStatus] = useState("");
  // const [data, setData] = useState([]) // 饼图数据
  const [inx, setInx] = useState(0);

  const history = useHistory();

  useEffect(() => {
    document.getElementsByTagName("html")[0].style.overflowX = "hidden";
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
  }, []);

  // 调用接口
  useEffect(() => {
    _attentionInfo();
    // _readMessage()
    // _myAttention()
  }, []);

  // 用户管理调用列表
  useEffect(() => {
    if (page == 1) {
      _attentionList();
    } else {
      setPage(1);
    }
  }, [companyName, status]);

  useEffect(() => {
    _attentionList();
  }, [page]);

  const _attentionList = async () => {
    const params = {
      page,
      industry: status,
      companyName,
      limit: 10,
    };
    const res = await attentionList(params);
    if (res && res.code === 2000) {
      let arr = res.result.data;
      arr &&
        arr.map((item, index) => {
          arr[index].key = item.id;
        });

      setTotal(res.result.totalRecord);
    }
  };

  // 关注的信息
  const _attentionInfo = async () => {
    const res = await attentionInfo();
    if (res && res.code === 2000) {
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

  return (
    <div className="declare_page">
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
          <span
            style={{ color: "rgba(0,0,0,0.6)", cursor: "pointer" }}
            onClick={() => {
              history.go(-1);
            }}
          >
            个人中心
          </span>
          <span style={{ margin: "0 0.1rem" }}>/</span>
          <span>企业申报</span>
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
            height: "0.7rem",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderLeft: CutLine,
            borderRight: CutLine,
            boxSizing: "border-box",
          }}
        >
          <ul
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              margin: 0,
              padding: 0,
            }}
          >
            {titles.map((item, index) => {
              return (
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setInx(index);
                  }}
                  key={index}
                >
                  <div
                    style={{
                      height: "0.18rem",
                      width: "0.18rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "0.12rem",
                      borderRadius: "50%",
                      border:
                        inx == index ? "none" : `0.01rem solid ${defaultColor}`,
                      marginRight: "0.05rem",
                      color: inx == index ? "white" : defaultColor,
                      background: inx == index ? ThemeColor : "white",
                    }}
                  >
                    {index + 1}
                  </div>
                  <span
                    style={{
                      fontSize: "0.14rem",
                      color: inx == index ? "black" : defaultColor,
                      fontWeight: inx == index ? 600 : 400,
                    }}
                  >
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
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
            // height: "0.7rem",
            alignItems: "center",
            justifyContent: "space-between",
            border: CutLine,
            borderTop: "none",
            borderBottom: "none",
          }}
        >
          {/* 1 - 财务报表 */}
          {inx == 0 && (
            <div className="active_1">
              <section>
                <div className="tabs">
                  {["资产负债表", "利润表", "现金流量表"].map((item, index) => {
                    return (
                      <span
                        key={index}
                        style={{
                          color: tabInx == index ? ThemeColor : "black",
                          borderBottom:
                            tabInx == index
                              ? `0.02rem solid ${ThemeColor}`
                              : defaultColor,
                        }}
                        onClick={() => setTabInx(index)}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              </section>

              {/* 主要表格区域 */}
              <table className="table_1" rules="all">
                <thead>
                  <tr>
                    <th>资产</th>
                    <th>行次</th>
                    <th>期末余额</th>
                    <th>年初余额</th>
                    <th>负债和所有者权益</th>
                    <th>行次</th>
                    <th>期末余额</th>
                    <th>年初余额</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="sub_t">流动资产：</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="sub_t">流动负债：</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <span>货币资金</span>
                    </td>{" "}
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td>
                      <span>短期借款</span>
                    </td>{" "}
                    <td>32</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <span>以公允价值计量且其变动计入当期损益的金融资产</span>
                    </td>{" "}
                    <td>2</td>
                    <td></td>
                    <td></td>
                    <td>
                      <span>以公允价值计量且其变动计入当期损益的金融负债</span>
                    </td>{" "}
                    <td>33</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <span>应收票据</span>
                    </td>{" "}
                    <td>3</td>
                    <td></td>
                    <td></td>
                    <td>
                      <span>应付票据</span>
                    </td>{" "}
                    <td>34</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <span>应收账款</span>
                    </td>{" "}
                    <td>4</td>
                    <td></td>
                    <td></td>
                    <td>
                      <span>应付账款</span>
                    </td>{" "}
                    <td>35</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default withRouter(Declare);
