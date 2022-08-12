import { useState, useEffect, useReducer } from "react";
import {
  InputNumber,
} from "antd";
import "moment/locale/zh-cn";
import { ButtonCmt } from "../../../component/button";

const assetJson = require("../json/asset.json"); //资产负债json
const assetJsonT = require("../json/asset_t.json"); //资产负债展示文案json
const profitJson = require("../json/profit.json"); // 利润表json
const profitJsonT = require("../json/profit_t.json");

const InputCmt = (props) => {
  return (
    <InputNumber
      bordered={false}
      controls={false}
      onChange={(e) => {
        e != undefined && props.event({ value: e, line: props.line });
      }}
    />
  );
};

const ProfitTable = (props) => {
  let { onInput } = props;
  return (
    <table className="table_2" rules="all">
    <thead>
      <tr>
        <th>项目</th>
        <th>行次</th>
        <th>本年累计金额</th>
        <th>本期金额</th>
      </tr>
    </thead>
    <tbody>
      {profitJsonT.map((item) => {
        return (
          <tr>
            <td>
              <span className={item.sub != undefined && "sub_t"}>
                {item.name}
              </span>
            </td>
            <td>{item.lineNo}</td>
            <td>1</td>
            <td>1</td>
          </tr>
        );
      })}
    </tbody>
  </table>

  );
};
export default ProfitTable;
