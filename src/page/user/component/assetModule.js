import { useState, useEffect, useReducer } from "react";
import {
  putDeclareBalance,
} from "../../../apis/index";
import {
  message,
} from "antd";
// import "./declare.less";
import AssetTable from "./assetTable";
var assetJson = require("../json/asset.json"); //资产负债json
var assetJson1 = require("../json/asset.json"); //资产负债json

// 资产负债表reducer
const asset_reducer = (state, action) => {
  const { name } = action;
  return { ...state, ...name };
};

// 财务负债编辑状态
export const AssetModuleEdit = (props) => {
  const { isSaveAsset, companyId, year,assetJson } = props;
  const [asset_state, asset_dispatch] = useReducer(asset_reducer, assetJson);
  const [assetEnter, setAssetEnter] = useState({ value: "", line: null });

  useEffect(() => {
    dispathTrigger();
    // console.log("检测是否触发了assetEnter")
  }, [assetEnter]);

  useEffect(() => {
    if (isSaveAsset) {
      saveDeclareBalance();
    }
  }, [isSaveAsset]);

  // 根据行进行事件订阅
  const dispathTrigger = (str, json) => {
    let line = assetEnter.line || "";
    let no = line.length == 3 ? line.substr(0, 1) : line.substr(0, 2);

    Object.values(assetJson).map((item) => {
      if (item.lineNo == no) {
        assetDispatch(line, item.name);
      }
    });
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
          // lineNo:asset_state[name].lineNo
        },
      },
    });
  };

  // 保存资产负债表
  const saveDeclareBalance = async () => {
    let res;
    let params = JSON.parse(JSON.stringify(asset_state));
    params.years = year;
    params.companyId = companyId;
    res = await putDeclareBalance(params);

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
    <>{<AssetTable onInput={(e) => setAssetEnter(e)} data={asset_state} />}</>
  );
};

// 财务负债初始化状态
export const AssetModuleInit = (props) => {
  const { isSaveAsset, companyId, year,updateId } = props;
  const [asset_state, asset_dispatch] = useReducer(asset_reducer, assetJson1);
  const [assetEnter, setAssetEnter] = useState({ value: "", line: null });

  useEffect(() => {
    dispathTrigger();
    // console.log("检测是否触发了assetEnter")
  }, [assetEnter]);

  useEffect(() => {
    if (isSaveAsset) {
      saveDeclareBalance();
    }
  }, [isSaveAsset]);

  useEffect(() => {
    console.log("新增财务报表初始化", assetJson1);
  }, []);

  // 根据行进行事件订阅
  const dispathTrigger = (str, json) => {
    let line = assetEnter.line || "";
    let no = line.length == 3 ? line.substr(0, 1) : line.substr(0, 2);

    Object.values(assetJson).map((item) => {
      if (item.lineNo == no) {
        assetDispatch(line, item.name);
      }
    });
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
          // lineNo:asset_state[name].lineNo
        },
      },
    });
  };

  // 保存资产负债表
  const saveDeclareBalance = async () => {
    let res;
    let params = JSON.parse(JSON.stringify(asset_state));
    params.years = year;
    params.companyId = companyId;
    res = await putDeclareBalance(params);

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
    <>{<AssetTable onInput={(e) => setAssetEnter(e)} data={asset_state} />}</>
  );
};


