import { useState, useEffect, useReducer } from "react";
import { putDeclareProfit } from "../../../apis/index";
import { message } from "antd";
// import "./declare.less";
import ProfitTable from "./profitTable";

var profitJson = require("../json/profit.json"); //资产负债json
var profitJson1 = require("../json/profit.json"); //资产负债json

// 资产负债表reducer
const profit_reducer = (state, action) => {
  const { name } = action;
  return { ...state, ...name };
};

// 利润表编辑时
export const ProfitModuleEdit = (props) => {
  const { isSaveProfit, companyId, year, profitJson } = props;
  const [profit_state, profit_dispatch] = useReducer(
    profit_reducer,
    profitJson
  );
  const [profitEnter, setProfitEnter] = useState({ value: "", line: null });

  useEffect(() => {
    dispathTrigger();
    // console.log("检测是否触发了assetEnter")
  }, [profitEnter]);

  useEffect(() => {
    if (isSaveProfit) {
      saveDeclareBalance();
    }
  }, [isSaveProfit]);

  // 根据行进行事件订阅
  const dispathTrigger = (str, json) => {
    let line = profitEnter.line || "";
    let no = line.length == 3 ? line.substr(0, 1) : line.substr(0, 2);

    Object.values(profitJson).map((item) => {
      if (item.lineNo == no) {
        profitDispatch(line, item.name);
      }
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
          currentAmount: flag
            ? profitEnter.value
            : profit_state[name].currentAmount || 0,
          accumulatedAmount: flag
            ? profit_state[name].accumulatedAmount || 0
            : profitEnter.value,
        },
      },
    });
  };

  // 保存资产负债表
  const saveDeclareBalance = async () => {
    let res;
    let params = JSON.parse(JSON.stringify(profit_state));
    params.years = year;
    params.companyId = companyId;
    res = await putDeclareProfit(params);

    if (res && res.code == 2000) {
      if (res.result) {
        // setCompanyId(res.result);
        message.success("操作成功！");
        // localStorage.setItem("companyId", res.result);
      }
    } else {
      message.error("操作失败！");
    }
  };

  return (
    <>
      {<ProfitTable onInput={(e) => setProfitEnter(e)} data={profit_state} />}
    </>
  );
};

// 利润表新增时
export const ProfitModuleInit = (props) => {
  const { isSaveProfit, companyId, year } = props;
  const [profit_state, profit_dispatch] = useReducer(
    profit_reducer,
    profitJson1
  );
  const [profitEnter, setProfitEnter] = useState({ value: "", line: null });

  useEffect(() => {
    dispathTrigger();
    // console.log("检测是否触发了assetEnter")
  }, [profitEnter]);

  useEffect(() => {
    // 确实是否保存利润表
    if (isSaveProfit) {
      saveDeclareBalance();
    }
  }, [isSaveProfit]);

  // 根据行进行事件订阅
  const dispathTrigger = (str, json) => {
    let line = profitEnter.line || "";
    let no = line.length == 3 ? line.substr(0, 1) : line.substr(0, 2);

    Object.values(profitJson).map((item) => {
      if (item.lineNo == no) {
        profitDispatch(line, item.name);
      }
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
          currentAmount: flag
            ? profitEnter.value
            : profit_state[name].currentAmount || 0,
          accumulatedAmount: flag
            ? profit_state[name].accumulatedAmount || 0
            : profitEnter.value,
        },
      },
    });
  };

  // 保存资产负债表
  const saveDeclareBalance = async () => {
    let res;
    let params = JSON.parse(JSON.stringify(profit_state));
    params.years = year;
    params.companyId = companyId;
    res = await putDeclareProfit(params);

    if (res && res.code == 2000) {
      if (res.result) {
        // setCompanyId(res.result);
        message.success("操作成功！");
        // localStorage.setItem("companyId", res.result);
      }
    } else {
      message.error("操作失败！");
    }
  };

  return (
    <>
      {<ProfitTable onInput={(e) => setProfitEnter(e)} data={profit_state} />}
    </>
  );
};
