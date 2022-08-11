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

const subs = [
  { name: "流动资产", lineNo: 0 },
  {
    name: "流动负债",
    lineNo: 0,
  },
  { name: "货币资金", lineNo: 1 },
  { name: "短期借款", lineNo: 32 },
  { name: "以公允价值计量且其变动计入当期损益的金融资产", lineNo: 2 },
  { name: "以公允价值计量且其变动计入当期损益的金融负债", lineNo: 33 },
  { name: "应收票据", lineNo: 3 },
  { name: "应付票据", lineNo: 34 },
  { name: "应收账款", lineNo: 4 },
  { name: "应付账款", lineNo: 35 },
  { name: "预付账款", lineNo: 5 },
  { name: "预收款项", lineNo: 35 },
  { name: "应收利息", lineNo: 6 },
  { name: "应付职工薪酬", lineNo: 37 },
  { name: "应收股利", lineNo: 7 },
  { name: "应交税费", lineNo: 38 },
];
const asset_reducer = (state, action) => {
  const { name } = action;
  switch (action.type) {
    case "assetLine1_0":
      return { ...state, ...name };
    case "assetLine1_1":
      return { ...state, ...name };
    case "assetLine2_0":
      return { ...state, ...name };
    case "assetLine2_1":
      return { ...state, ...name };
    case "assetLine32_0":
      return { ...state, ...name };
    case "assetLine32_1":
      return { ...state, ...name };

    default:
      return state;
  }
};

const asset_init = {
  financialAssets: {}, // 1
  currentProfitLoss: { lineNo: 2 }, //以公允价值计量且其变动计入当期损益的金融负债
  shortTermBorrowings: {}, //32
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

  const [asset_state, asset_dispatch] = useReducer(asset_reducer, asset_init); // 资产
  const history = useHistory();

  useEffect(() => {
    document.getElementsByTagName("html")[0].style.overflowX = "hidden";
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
  }, []);

  // 调用接口
  useEffect(() => {
    console.log("打印下当前的state", asset_state);
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

  useEffect(() => {
    switch (cutEnter.line) {
      // 货币资金
      case "1_0":
        assetDispatch("1_0", "financialAssets");
        break;
      case "1_1":
        assetDispatch("1_1", "financialAssets");
        break;

      // 短期借款
      case "32_0":
        assetDispatch("32_0", "shortTermBorrowings");
        break;
      case "32_1":
        assetDispatch("32_1", "shortTermBorrowings");
        break;

      // 以公允价值计量且其变动计入当期损益的金融资产
      case "2_0":
        assetDispatch("2_0", "financialAssets");
        break;
      case "2_1":
        assetDispatch("2_1", "financialAssets");
        break;

      // 以公允价值计量且其变动计入当期损益的金融负债
      case "33_0":
        assetDispatch("33_0", "currentProfitLoss");
        break;
      case "33_1":
        assetDispatch("33_1", "currentProfitLoss");
        break;

      default:
        return;
    }
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
                  {new Array(Math.ceil(subs.length / 2))
                    .fill("")
                    .map((v, i) => {
                      return (
                        <tr>
                          <td className={subs[i*2].lineNo == 0 && "sub_t"}>
                            <span>{subs[i*2].name}</span>
                          </td>
                          <td>{subs[i*2].lineNo != 0 && subs[i*2].lineNo}</td>
                          <td>
                            <InputCmt event={getCutEnter} line={"1_1"} />
                          </td>
                          <td>
                            <InputCmt event={getCutEnter} line={"1_0"} />
                          </td>

                          <td className={subs[i*2 + 1].lineNo == 0 && "sub_t"}>
                            <span>{subs[i*2 + 1].name}</span>
                          </td>
                          <td>
                            {subs[i*2 + 1].lineNo != 0 && subs[i*2 + 1].lineNo}
                          </td>
                          <td>
                            <InputCmt event={getCutEnter} line={"32_1"} />
                          </td>
                          <td>
                            <InputCmt event={getCutEnter} line={"32_0"} />
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
