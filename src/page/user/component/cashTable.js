import { useState, useEffect, useReducer } from "react";
import { InputNumber } from "antd";
import "moment/locale/zh-cn";
const cashJsonT = require("../json/cash_t.json");

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
        // console.log("前一个item",item,line)
        if (item.lineNo + "_1" == line) {
          setAmount(item.accumulatedAmount);
          return item.accumulatedAmount;
        }
      });
    } else {
      // 后一个
      Object.values(data).map((item) => {
        if (item.lineNo + "_0" == line) {
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




const CashTable = (props) => {
  let { onInput,data } = props;
  return (
    <table className="table_2" rules="all">
      <thead>
        <tr>
          <th>项目</th>
          <th>行次</th>
          <th>本年累计金额(万)</th>
          <th>本期金额(万)</th>
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
                  <InputCmt event={onInput} line={item.lineNo + "_0"} data={data}/>
                </td>
              )}
              {item.empty ? <td></td> : <td>
                <InputCmt event={onInput} line={item.lineNo + "_1"} data={data}/>
              </td>}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default CashTable;
