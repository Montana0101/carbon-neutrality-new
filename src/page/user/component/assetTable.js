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

const AssetTable = (props) => {
  let { onInput } = props;
  return (
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
        {new Array(Math.ceil(assetJsonT.length / 2)).fill("").map((v, i) => {
          let l_inx = i * 2;
          let r_inx = i * 2 + 1;
          return (
            <tr>
              <td className={assetJsonT[l_inx].sub == true && "sub_t"}>
                <span>{assetJsonT[l_inx].name}</span>
              </td>
              <td>
                {assetJsonT[l_inx].lineNo != null && assetJsonT[l_inx].lineNo}
              </td>
              {assetJsonT[l_inx].lineNo != null ? (
                <td>
                  <InputCmt
                    event={onInput}
                    line={assetJsonT[l_inx].lineNo + "_1"}
                  />
                </td>
              ) : (
                <td></td>
              )}
              {assetJsonT[l_inx].lineNo != null ? (
                <td>
                  <InputCmt
                    event={onInput}
                    line={assetJsonT[l_inx].lineNo + "_0"}
                  />
                </td>
              ) : (
                <td></td>
              )}

              <td className={assetJsonT[r_inx].sub == true && "sub_t"}>
                <span>{assetJsonT[r_inx].name}</span>
              </td>
              <td>
                {assetJsonT[r_inx].lineNo != null && assetJsonT[r_inx].lineNo}
              </td>
              {assetJsonT[r_inx].lineNo != null ? (
                <td>
                  <InputCmt
                    event={onInput}
                    line={assetJsonT[r_inx].lineNo + "_1"}
                  />
                </td>
              ) : (
                <td></td>
              )}

              {assetJsonT[r_inx].lineNo != null ? (
                <td>
                  <InputCmt
                    event={onInput}
                    line={assetJsonT[r_inx].lineNo + "_0"}
                  />
                </td>
              ) : (
                <td></td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default AssetTable;
