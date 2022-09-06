import { useState, useEffect, useRef } from "react";
import { screen_scale } from "../../util/rem";
import { withRouter, useHistory } from "react-router-dom";
import { LeftOutlined, createFromIconfontCN } from "@ant-design/icons";
import { AliOss, ThemeColor, CutLine } from "../../lib/const";
import { Input, Button, Radio, Timeline, Anchor, Pagination } from "antd";
import RadarChart from "./radar";
import * as $ from "jquery";
import "./index.less";
import * as echarts from "echarts";

const defaultImg = AliOss + "/new_version_0518/company_default.png";
const { Link } = Anchor;
const CompanyCard = (props) => {
  let { data } = props;

  useEffect(() => {}, [data]);

  return (
    <div className="card">
      <section className="left">
        <img src={defaultImg} alt="" />
      </section>
      <section className="middle">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.1rem",
          }}
        >
          <span
            style={{
              fontSize: "0.2rem",
              fontWeight: "bold",
              color: "rgba(0,0,0,0.8)",
            }}
          >
            {data.companyName}
          </span>
          <span style={{ marginLeft: "0.1rem" }}>
            (简称：{data.enterpriseAbbreviation})
          </span>
        </div>
        <ul>
          <li>
            <p>
              <span>行业：</span>
              <span>{data.industryName}</span>
            </p>
            <p>
              <span>电话：</span>
              <span>{data.contactNumber}</span>
            </p>
            <p>
              <span>邮箱：</span>
              <span>{data.email}</span>
            </p>
            <p>
              <span>统一社会信用代码：</span>
              <span>{data.industryName}</span>
            </p>
          </li>
          <li>
            <p>
              <span>法定代表人：</span>
              <span>{data.legalPersonName}</span>
            </p>
            <p>
              <span>注册地：</span>
              <span>{data.cityName}</span>
            </p>
            <p>
              <span>注册资金：</span>
              <span>{data.regCapital}万元</span>
            </p>
            <p>
              <span>企业注册时间：</span>
              <span>{data.regTime}</span>
            </p>
          </li>
          <li>
            <p>
              <span>网址：</span>
              <span>{data.website}</span>
            </p>
            <p>
              <span>融资阶段：</span>
              <span>{data.stageName}</span>
            </p>
            <p>
              <span>融资金额：</span>
              <span>{data.financingScale}万元</span>
            </p>
            <p>
              <span>投前估值：</span>
              <span>{data.enterpriseValuation}万元</span>
            </p>
          </li>
        </ul>
      </section>
      <section className="right">
        <RadarChart data={data} />
      </section>
    </div>
  );
};

const SearchResult = (props) => {
  const [obj, setObj] = useState({});

  const [targetOffset, setTargetOffset] = useState(undefined);

  const initPie = (_node, _data, _total, _title) => {
    let data = [];
    if (_title == "核心客户") {
      _data &&
        _data.map((item) => {
          data.push({
            value: item.proportionSale,
            name: item.customerName,
          });
        });
    } else {
      _data &&
        _data.map((item) => {
          data.push({
            value: item.purchaseProportion,
            name: item.supplierName,
          });
        });
    }

    console.log("打印下数据xx", _data);
    let option = {
      tooltip: {
        trigger: "item",
        formatter: function (params) {
          return `${params.name}  ${params.value}%`;
        },
        textStyle: {
          color: "#232325",
        },
        backgroundColor: "rgba(255,255,255,1)",
      },
      legend: {
        // top: "5%",
        left: "center",
        orient: "vertical",

        bottom: "bottom",
      },
      series: [
        {
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "center",
            color: "#232325",
            formatter: `{total|${_total}\n}` + `${_title}`,
            rich: {
              total: {
                fontSize: 20,
                fontWeight: "bold", // fontFamily : “微软雅黑”,
                color: "#232325",
                lineHeight: 30,
              },
              active: {
                // fontFamily : “微软雅黑”,
                // fontSize: 12,
                // color: "#232325",
                // color: "#fff",
                // lineHeight: 30,
              },
            },
          },
          // emphasis: {
          //   label: {
          //     show: false,
          //     fontSize: "20",
          //     fontWeight: "bold",
          //     formatter: function(item){
          //       return `{${item.name} : ${item.value}%}`
          //     },
          //   },
          // },
          labelLine: {
            show: false,
          },
          data: data,
        },
      ],
    };
    var myChart = echarts.init(_node);
    option && myChart.setOption(option);
  };

  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);

  useEffect(() => {
    document.getElementsByTagName("html")[0].style.overflowX = "hidden";
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
    // chrome
    document.body.scrollTop = 0;
    // firefox
    document.documentElement.scrollTop = 0;
    // safari
    window.pageYOffset = 0;
    let { state } = props.location;
    if (state && state.value) {
      setObj(JSON.parse(state.value));
    } else {
      setObj(JSON.parse(localStorage.getItem("search")));
    }

    let h1 = $("#position1").offset().top;
    let h0 = $("#nav").offset().top;

    setTargetOffset((h1 - h0).toFixed(2));
  }, []);

  useEffect(() => {
    console.log("当前定位点", targetOffset);
  }, [targetOffset]);

  useEffect(() => {
    if (obj != null) {
      let node1 = document.getElementById("pie1");
      initPie(
        node1,
        obj.cpCustomers,
        obj.cpCustomers && obj.cpCustomers.length,
        "核心客户"
      );
      let node2 = document.getElementById("pie2");
      initPie(
        node2,
        obj.cpSuppliers,
        obj.cpSuppliers && obj.cpSuppliers.length,
        "核心供应商"
      );
    }
  }, [obj]);

  return (
    <div className="result_page">
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
            className="homeBtn"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            首页
          </span>
          <span style={{ margin: "0 0.1rem" }}>/</span>
          <span
            className="dynamicBtn"
            onClick={() => {
              window.location.href = "/dynamic";
            }}
          >
            企业搜索
          </span>
        </h3>
      </div>

      <div
        style={{
          border: CutLine,
          padding: "0 0.5rem",
          borderRight: "none",
          borderLeft: "none",
          borderTop: "none",
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
            justifyContent: "center",
            borderLeft: CutLine,
            borderRight: CutLine,
          }}
        >
          <Input placeholder="请输入公司名进行查询" />
          <Button type="primary">搜索</Button>
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
          padding: "0.3rem 0",
        }}
      >
        <CompanyCard data={obj} />
      </div>

      <main
        style={{
          boxSizing: "border-box",
          color: "black",
          marginBottom: "-0.5rem",
          border: CutLine,
          borderTop: "none",
          borderBottom: "none",
          margin: "0 0.5rem 0 0.5rem",
          padding: "0 0.3rem",
        }}
      >
        <nav id="nav">
          <h3>基本信息</h3>
          <p id="position1">企业简介</p>
          <h3>公司战略</h3>
          <p>战略定位</p>
          <p>战略规划</p>
          <h3>公司经营</h3>
          <p>商业模式</p>
          <p>主营业务</p>
          <p>业务构成</p>
          <p>核心客户&amp;供应商</p>
          <h3>核心能力</h3>
          <p>核心竞争力</p>
          <p>领军人物</p>
          <p>核心团队</p>
          <p>核心技术</p>
          <p>专利</p>
          <h3>财务能力</h3>
          <h3>投资方</h3>
          <h3>行业成长</h3>
        </nav>

        <div className="line">
          <section
            style={{
              top: targetOffset + "px",
            }}
          >
            <span></span>
          </section>
        </div>

        <article>
          <section
            style={{ color: ThemeColor, marginTop: targetOffset - 6 + "px" }}
          >
            <p className="sub">企业简介：</p>
            <p className="content">{obj.companyProfile}</p>
            <div className="underline"></div>
          </section>

          <section style={{ color: ThemeColor }}>
            <p className="sub">战略定位：</p>
            <p className="content">{obj.corporateStrategy}</p>
          </section>
          <section style={{ color: ThemeColor }}>
            <p className="sub">战略规划：</p>
            <p className="content">{obj.strategicPlanning}</p>
          </section>
          <div className="underline"></div>
          <section style={{ color: ThemeColor }}>
            <p className="sub">商业模式：</p>
            <p className="content">{obj.businessModel}</p>
          </section>
          <section style={{ color: ThemeColor }}>
            <p className="sub">主营业务：</p>
            <p className="content">{obj.mainBusiness}</p>
          </section>
          <section style={{ color: ThemeColor }} className="sub_table">
            <p className="sub">业务构成：</p>
            <table style={{ width: "100%" }}>
              <tr style={{ width: "100%", color: "white", height: "0.4rem" }}>
                <th style={{ width: "0.7rem" }}>序号</th>
                <th>构成</th>
                {/* <th>占比</th> */}
              </tr>
              {obj.compositions &&
                obj.compositions.map((item, index) => {
                  return (
                    <tr style={{ height: "0.4rem" }}>
                      <td>{index + 1}</td>
                      <td>{item.composition}</td>
                      {/* <td>2</td> */}
                    </tr>
                  );
                })}
            </table>
          </section>
          <section style={{ color: ThemeColor, display: "flex" }}>
            <div style={{ flex: 1 }}>
              <p className="sub">核心客户：</p>
              <div
                id="pie1"
                style={{
                  height: "3rem",
                  width: "100%",
                }}
              ></div>
            </div>
            <div style={{ flex: 1 }}>
              <p className="sub">核心供应商：</p>
              <div
                id="pie2"
                style={{
                  height: "3rem",
                  width: "100%",
                }}
              ></div>
            </div>
          </section>
          <div className="underline"></div>

          <section style={{ color: ThemeColor }}>
            <p className="sub">核心竞争力：</p>
            <p className="content">{obj.coreCompetitiveness}</p>
          </section>

          <section style={{ color: ThemeColor }} className="sub_table">
            <p className="sub">领军人物：</p>
            <table style={{ width: "100%" }}>
              <tr style={{ width: "100%", color: "white", height: "0.4rem" }}>
                <th style={{ width: "10%" }}>序号</th>
                <th style={{ width: "15%" }}>姓名</th>
                <th style={{ width: "15%" }}>职位</th>
                <th style={{ width: "60%" }}>描述</th>
              </tr>
              {obj.cpLeaders &&
                obj.cpLeaders.map((item, index) => {
                  return (
                    <tr style={{ height: "0.4rem" }}>
                      <td>{index + 1}</td>
                      <td>{item.leaderName}</td>
                      <td>{item.position}</td>
                      <td>{item.briefIntroduction}</td>
                    </tr>
                  );
                })}
            </table>
          </section>

          <section style={{ color: ThemeColor }} className="sub_table">
            <p className="sub">核心团队：</p>
            <table style={{ width: "100%" }}>
              <tr style={{ width: "100%", color: "white", height: "0.4rem" }}>
                <th style={{ width: "10%" }}>序号</th>
                <th style={{ width: "15%" }}>姓名</th>
                <th style={{ width: "15%" }}>职位</th>
                <th style={{ width: "60%" }}>描述</th>
              </tr>
              {obj.cpTeams &&
                obj.cpTeams.map((item, index) => {
                  return (
                    <tr style={{ height: "0.4rem" }}>
                      <td>{index + 1}</td>
                      <td>{item.memberName}</td>
                      <td>{item.position}</td>
                      <td>{item.briefIntroduction}</td>
                    </tr>
                  );
                })}
            </table>
          </section>

          <section style={{ color: ThemeColor }}>
            <p className="sub">核心技术：</p>
            <p className="content">{obj.coreTechnology}</p>
          </section>

          <section style={{ color: ThemeColor }}>
            <p className="sub">专利：</p>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "25%",
                  border: "1px solid green",
                  marginRight: "5%",
                }}
              ></div>
              <div style={{ flex: 1,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                <table style={{ width: "100%",marginBottom:"0.1rem" }}>
                  <tr
                    style={{ width: "100%", color: "white", height: "0.4rem" }}
                  >
                    <th style={{ width: "10%" }}>序号</th>
                    <th style={{ }}>专利名称</th>
                    <th>专利类型</th>
                    <th>专利状态</th>
                    <th style={{ }}>专利优势</th>
                  </tr>
                  {obj.cpPatents &&
                    obj.cpPatents.map((item, index) => {
                      return (
                        <tr style={{ height: "0.4rem" }}>
                          <td>{index + 1}</td>
                          <td>{item.patentName}</td>
                          <td>{item.patentType}</td>
                          <td>{item.patentStatus}</td>
                          <td>{item.abstracts}</td>
                        </tr>
                      );
                    })}
                </table>

                  <p style={{display:"flex",justifyContent:"flex-end"}}>
                  <Pagination
                  total={ obj.cpPatents.length}
                  size="small"
                  // showSizeChanger
                  showQuickJumper
                  // showTotal={(total) => `Total ${total} items`}
                />
                  </p>
              </div>
            </div>
            <div className="underline"></div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default withRouter(SearchResult);
