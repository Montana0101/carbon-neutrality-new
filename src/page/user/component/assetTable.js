import { useState, useEffect, useReducer } from "react";
import { InputNumber } from "antd";
import "moment/locale/zh-cn";
import { ButtonCmt } from "../../../component/button";

const assetJsonT = require("../json/asset_t.json"); //资产负债展示文案json

const InputCmt = (props) => {
  let { data, line } = props;
  const [amount, setAmount] = useState(0);
  // var amount;
  useEffect(() => {
    getCacheData();
  }, [line]);

  //缓存数据
  const getCacheData = () => {
    if (line.substr(line.length - 1, 1) == 1) {
      // 前一个
      Object.values(data).map((item) => {
        if (item.lineNo + "_1" == line) {
          setAmount(item.endingBalance);
          return item.endingBalance;
        }
      });
    } else {
      // 后一个
      Object.values(data).map((item) => {
        if (item.lineNo + "_0" == line) {
          setAmount(item.beginningBalance);
          return item.beginningBalance;
        }
      });
    }
  };

  return (
    <>
      {amount > 0 && (
        <InputNumber
          bordered={false}
          controls={false}
          defaultValue={amount}
          onChange={(e) => {
            e != undefined && props.event({ value: e, line: line });
          }}
        />
      )}

      {(amount == 0 || amount==null) && (
        <InputNumber
          bordered={false}
          controls={false}
          onChange={(e) => {
            e != undefined && props.event({ value: e, line: line });
          }}
        />
      )}
    </>
  );
};

const AssetTable = (props) => {
  let { onInput, data } = props;
  // let [amount,setAmount] = useState(0);

  useEffect(() => {
    console.log("子组件接收到的数据", data);
  }, [data]);

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
                    data={data}
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
                    data={data}
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
                    data={data}
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
                    data={data}
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
