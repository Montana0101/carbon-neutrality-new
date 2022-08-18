import { useState, useEffect, useReducer } from "react";
import { InputNumber } from "antd";
import "moment/locale/zh-cn";
import { ButtonCmt } from "../../../component/button";

const assetJson = require("../json/asset.json"); //资产负债json
const assetJsonT = require("../json/asset_t.json"); //资产负债展示文案json
const profitJson = require("../json/profit.json"); // 利润表json
const profitJsonT = require("../json/profit_t.json");

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
          // amount = item.endingBalance;
          setAmount(item.accumulatedAmount);
          return item.accumulatedAmount;
        }
      });
    } else {
      // 后一个
      Object.values(data).map((item) => {
        if (item.lineNo + "_0" == line) {
          // amount = item.beginningBalance;
          setAmount(item.currentAmount);
          return item.currentAmount;
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

    {(amount == 0 || amount == null) && (
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

const ProfitTable = (props) => {
  let { onInput ,data} = props;

  useEffect(()=>{
    // console.log('监听第二张表数据变化',data)
  },[data])

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
              <td>
                <InputCmt
                  event={onInput}
                  line={item.lineNo + "_0"}
                  data={data}
                />
              </td>
              <td>
                <InputCmt
                  event={onInput}
                  line={item.lineNo + "_1"}
                  data={data}
                />
              </td>
          
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default ProfitTable;
