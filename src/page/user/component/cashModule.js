import { useState, useEffect, useReducer } from "react";
import {
  putDeclareCash,
} from "../../../apis/index";
import {
  message,
} from "antd";
// import "./declare.less";
import CashTable from "./cashTable";
var cashJson = require("../json/cash.json"); //资产负债json
var cashJson1 = require("../json/cash.json"); //资产负债json

// 资产负债表reducer
const cash_reducer = (state, action) => {
  const { name } = action;
  return { ...state, ...name };
};

// 财务负债编辑状态
export const CashModuleEdit = (props) => {
  const { isSaveCash, companyId, year,cashJson } = props;
  const [cash_state, cash_dispatch] = useReducer(cash_reducer, cashJson);
  const [cashEnter, setCashEnter] = useState({ value: "", line: null });

  useEffect(() => {
    dispathTrigger();
    // console.log("检测是否触发了cashEnter")
  }, [cashEnter]);

  useEffect(() => {
    if (isSaveCash) {
      saveDeclareBalance();
    }
  }, [isSaveCash]);

  // 根据行进行事件订阅
  const dispathTrigger = (str, json) => {
    let line = cashEnter.line || "";
    let no = line.length == 3 ? line.substr(0, 1) : line.substr(0, 2);

    Object.values(cashJson).map((item) => {
      if (item.lineNo == no) {
       cashDispatch(line, item.name);
      }
    });
  };

 // 现金流量表封装订阅
 const cashDispatch = (no, name) => {
    // 判断是累计还是当前，true为累计，false为当前
    let flag = no.substr(no.length - 1, 1) == 0 ? true : false;
    return cash_dispatch({
      type: "cashLine" + no,
      name: {
        [name]: {
          currentAmount: flag
            ? cashEnter.value
            : cash_state[name].currentAmount || 0,
          accumulatedAmount: flag
            ? cash_state[name].accumulatedAmount || 0
            : cashEnter.value,
        },
      },
    });
  };
  
  // 保存资产负债表
  const saveDeclareBalance = async () => {
    let res;
    let params = JSON.parse(JSON.stringify(cash_state));
    params.years = year;
    params.companyId = companyId;
    res = await putDeclareCash(params);

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
    <>{<CashTable onInput={(e) => setCashEnter(e)} data={cash_state} />}</>
  );
};

// 现金流量初始化状态
export const CashModuleInit = (props) => {
  const { isSaveCash, companyId, year ,updateId} = props;
  const [cash_state, cash_dispatch] = useReducer(cash_reducer, cashJson1);
  const [cashEnter, setCashEnter] = useState({ value: "", line: null });

  useEffect(() => {
    dispathTrigger();
    // console.log("检测是否触发了cashEnter")
  }, [cashEnter]);

  useEffect(() => {
    if (isSaveCash) {
      saveDeclareBalance();
    }
  }, [isSaveCash]);

  useEffect(() => {
    console.log("新增财务报表初始化", cashJson1);
  }, []);

  // 根据行进行事件订阅
  const dispathTrigger = (str, json) => {
    let line = cashEnter.line || "";
    let no = line.length == 3 ? line.substr(0, 1) : line.substr(0, 2);

    Object.values(cashJson).map((item) => {
      if (item.lineNo == no) {
       cashDispatch(line, item.name);
      }
    });
  };

 // 现金流量表封装订阅
 const cashDispatch = (no, name) => {
    // 判断是累计还是当前，true为累计，false为当前
    let flag = no.substr(no.length - 1, 1) == 0 ? true : false;
    return cash_dispatch({
      type: "cashLine" + no,
      name: {
        [name]: {
          currentAmount: flag
            ? cashEnter.value
            : cash_state[name].currentAmount || 0,
          accumulatedAmount: flag
            ? cash_state[name].accumulatedAmount || 0
            : cashEnter.value,
        },
      },
    });
  };
  
  // 保存资产负债表
  const saveDeclareBalance = async () => {
    let res;
    let params = JSON.parse(JSON.stringify(cash_state));
    params.years = year;
    params.companyId = companyId;
    res = await putDeclareCash(params);

    if (res && res.code == 2000) {
      if (res.result) {
        // setCompanyId(res.result);
        message.success("操作成功！");
        localStorage.setItem("companyId", res.result);
        updateId(res.result)
      }
    } else {
      message.error("操作失败！");
    }
  };

  return (
    <>{<CashTable onInput={(e) => setCashEnter(e)} data={cash_state} />}</>
  );
};


