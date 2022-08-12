import { useState, useEffect, useReducer } from "react";
import { InputNumber } from "antd";
import "moment/locale/zh-cn";
const cashJsonT = require("../json/cash_t.json");

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

const CashTable = (props) => {
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
        {cashJsonT.map((item) => {
          return (
            <tr>
              <td>
                <span className={item.sub != undefined && "sub_t"}>
                  {item.name}
                </span>
              </td>
              <td>{item.lineNo}</td>
              {item.empty ? (
                <td></td>
              ) : (
                <td>
                  <InputCmt event={onInput} line={item.lineNo + "_1"} />
                </td>
              )}
              {item.empty ? <td></td> : <td>
                <InputCmt event={onInput} line={item.lineNo + "_0"} />
              </td>}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default CashTable;
