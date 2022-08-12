import { useState, useEffect, useReducer } from "react";
import { withRouter, useHistory } from "react-router-dom";
import {
  cancelAttention,
  myAttention,
  readMessage,
  attentionList,
  attentionInfo,
  getDeclareBalance,
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
  InputNumber,
} from "antd";
import "moment/locale/zh-cn";
import "./declare.less";

const defaultColor = "rgba(0,0,0,0.3)";
const assetJson = require("./json/asset.json"); //资产负债json
const assetJsonT = require("./json/asset_t.json"); //资产负债展示文案json
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

// const subs = ;
const asset_reducer = (state, action) => {
  const { name } = action;
  // switch (action.type) {
  // case "assetLine1_0":
  //   return { ...state, ...name };
  // case "assetLine1_1":
  //   return { ...state, ...name };
  //   default:
  //     return state;
  switch (1) {
    case 1:
      return { ...state, ...name };
    default:
      return state;
  }
};

const InputCmt = (props) => {
  return (
    <Input
      bordered={false}
      controls={false}
      onChange={(e) => {
        props.event({ value: e.target.value, line: props.line });
      }}
    />
  );
};

function Declare(props) {
  const [tabInx, setTabInx] = useState(0);
  const [inx, setInx] = useState(0);
  const [cutEnter, setCutEnter] = useState({ value: "", line: null }); //当前input值
  const [asset_state, asset_dispatch] = useReducer(asset_reducer, assetJson); // 资产负债
  const history = useHistory();

  // 表格展示所用数据
  let tArr = [];
  Object.values(assetJson).map((item, index) => {
    if (index + 1 == item.lineNo) {
      tArr.push(item);
    }
  });

  useEffect(() => {
    document.getElementsByTagName("html")[0].style.overflowX = "hidden";
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
  }, []);

  // 监听输入变化
  useEffect(() => {
    console.log("监听输入变化", asset_state);
  }, [asset_state]);

  // 订阅子组件事件
  const getCutEnter = (e) => {
    setCutEnter(e);
  };

  // 封装订阅
  const assetDispatch = (no, name) => {
    // 判断是期末还是年初，true为年初，false为期末
    let flag = no.substr(no.length - 1, 1) == 0 ? true : false;
    return asset_dispatch({
      type: "assetLine" + no,
      name: {
        [name]: {
          beginningBalance: flag
            ? cutEnter.value
            : asset_state[name].beginningBalance || 0,
          endingBalance: flag
            ? asset_state[name].endingBalance || 0
            : cutEnter.value,
        },
      },
    });
  };

  // 根据行进行事件订阅
  const dispathTrigger = () => {
    let line = cutEnter.line || "";
    let arr = [];
    let no;
    no = line.length == 3 ? line.substr(0, 1) : line.substr(0, 2);
    Object.values(assetJson).map((item, index) => {
      arr.push(item);
      if (item.lineNo == no) {
        assetDispatch(line, item.name);
      }
    });
    console.log("当前Line", no);
    // assetDispatch()
  };

  useEffect(() => {
    dispathTrigger();
  }, [cutEnter]);

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
                  {/* <tr>
                    <td className="sub_t">流动资产：</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="sub_t">流动负债：</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr> */}
                  {new Array(Math.ceil(assetJsonT.length / 2))
                    .fill("")
                    .map((v, i) => {
                      let l_inx = i * 2;
                      let r_inx = i * 2 + 1;
                      return (
                        <tr>
                          <td
                            className={assetJsonT[l_inx].sub == true && "sub_t"}
                          >
                            <span>{assetJsonT[l_inx].name}</span>
                          </td>
                          <td>
                            {assetJsonT[l_inx].lineNo != null &&
                              assetJsonT[l_inx].lineNo}
                          </td>
                          {assetJsonT[l_inx].lineNo != null ? (
                            <td>
                              <InputCmt
                                event={getCutEnter}
                                line={assetJsonT[l_inx].lineNo + "_1"}
                              />
                            </td>
                          ) : (
                            <td></td>
                          )}
                          {assetJsonT[l_inx].lineNo != null ? (
                            <td>
                              <InputCmt
                                event={getCutEnter}
                                line={
                                  assetJsonT[l_inx].lineNo + "_0"
                                }
                              />
                            </td>
                          ) : (
                            <td></td>
                          )}

                          <td
                            className={assetJsonT[r_inx].sub == true && "sub_t"}
                          >
                            <span>{assetJsonT[r_inx].name}</span>
                          </td>
                          <td>
                            {assetJsonT[r_inx].lineNo != null &&
                              assetJsonT[r_inx].lineNo}
                          </td>
                          <td>
                            <InputCmt
                              event={getCutEnter}
                              line={
                                assetJsonT[r_inx].lineNo != null &&
                                assetJsonT[r_inx].lineNo + "_1"
                              }
                            />
                          </td>
                          <td>
                            <InputCmt
                              event={getCutEnter}
                              line={
                                assetJsonT[r_inx].lineNo != null &&
                                assetJsonT[r_inx].lineNo + "_0"
                              }
                            />
                          </td>
                        </tr>
                      );
                    })}
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
