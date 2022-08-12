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
import { ButtonCmt } from "../../component/button";
import AssetTable from './component/assetTable';
import ProfitTable from './component/profitTable';

const defaultColor = "rgba(0,0,0,0.3)";
const assetJson = require("./json/asset.json"); //资产负债json
const assetJsonT = require("./json/asset_t.json"); //资产负债展示文案json
const profitJson = require("./json/profit.json"); // 利润表json
const profitJsonT = require("./json/profit_t.json");

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

// 资产负债表reducer
const asset_reducer = (state, action) => {
  const { name } = action;
  return { ...state, ...name };
};

// 利润表reducer
const profit_reducer = (state, action) => {
  const { name } = action;
  return { ...state, ...name };
};


function Declare(props) {
  const [tabInx, setTabInx] = useState(0);
  const [inx, setInx] = useState(0);
  const [assetEnter, setAssetEnter] = useState({ value: "", line: null });
  const [asset_state, asset_dispatch] = useReducer(asset_reducer, assetJson); // 资产负债表订阅
  const [profitEnter, setProfitEnter] = useState({ value: "", line: null });
  const [profit_state, profit_dispatch] = useReducer(
    profit_reducer,
    profitJson
  ); // 利润表订阅

  const [companyId, setCompanyId] = useState(null); //公司id
  const [years, setYears] = useState(null); // 当前年份
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
    setAssetEnter(e);
  };

  // 资产负债表封装订阅
  const assetDispatch = (no, name) => {
    // 判断是期末还是年初，true为年初，false为期末
    let flag = no.substr(no.length - 1, 1) == 0 ? true : false;
    return asset_dispatch({
      type: "assetLine" + no,
      name: {
        [name]: {
          beginningBalance: flag
            ? assetEnter.value
            : asset_state[name].beginningBalance || 0,
          endingBalance: flag
            ? asset_state[name].endingBalance || 0
            : assetEnter.value,
        },
      },
    });
  };

  // 利润表封装订阅
  const profitDispatch = (no, name) => {
    // 判断是累计还是当前，true为累计，false为当前
    let flag = no.substr(no.length - 1, 1) == 0 ? true : false;
    return profit_dispatch({
      type: "profitLine" + no,
      name: {
        [name]: {
          accumulatedAmount: flag
            ? profitEnter.value
            : profit_state[name].accumulatedAmount || 0,
          currentAmount: flag
            ? profit_state[name].currentAmount || 0
            : profitEnter.value,
        },
      },
    });
  };

  // 根据行进行事件订阅
  const dispathTrigger = () => {
    let line = assetEnter.line || "";
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
  }, [assetEnter]);

  // 保存资产负债表
  const saveDeclareBalance = async () => {
    // 资产负债表
    if (tabInx == 0) {
      let params = JSON.parse(JSON.stringify(asset_state));
      params.years = 2022;
      params.companyId = companyId;
      const res = await getDeclareBalance(params);
      if (res && res.code == 2000) {
        setCompanyId(res.result);
        message.success("操作成功！");
      } else {
        message.error("操作失败！");
      }
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
              {/* 资产负债表 */}
              {tabInx == 0 && <AssetTable onInput={getCutEnter} />}

              {/* 利润表 */}
              {tabInx == 1 && <ProfitTable onInput={getCutEnter} />}
              <p
                style={{
                  height: "1.4rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ marginRight: "0.3rem" }}
                  onClick={() => {
                    if (tabInx < 2) {
                      setTabInx(tabInx + 1);
                    }
                  }}
                >
                  <ButtonCmt
                    bg={ThemeColor}
                    w="0.8rem"
                    color="white"
                    t="下一步"
                    h="0.4rem"
                  />
                </div>
                <div
                  onClick={() => {
                    saveDeclareBalance();
                  }}
                >
                  <ButtonCmt
                    bg="#51AA95"
                    w="0.8rem"
                    color="white"
                    t="保存"
                    h="0.4rem"
                  />
                </div>
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default withRouter(Declare);
