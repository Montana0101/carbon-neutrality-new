import { useState, useEffect, useReducer, useCallback } from "react";
import { withRouter, useHistory } from "react-router-dom";
import {
  putDeclareBalance,
  putDeclareProfit,
  putDeclareCash,
  getDeclareDetail,
} from "../../apis/index";
import { ThemeColor, CutLine } from "../../lib/const";
import {
  Tabs,
  Radio,
  Col,
  Row,
  Form,
  Input,
  Table,
  message,
  DatePicker,
  Popconfirm,
  InputNumber,
  Upload,
  Button,
} from "antd";
import "./declare.less";
import { ButtonCmt } from "../../component/button";
import AssetTable from "./component/assetTable";
import ProfitTable from "./component/profitTable";
import CashTable from "./component/cashTable";
import "moment/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";
import { UploadOutlined } from "@ant-design/icons";
import Others from "./others"; //其他模块
import moment from "moment";

const defaultColor = "rgba(0,0,0,0.3)";
var assetJson = require("./json/asset.json"); //资产负债json
var assetJson1 = require("./json/asset.json"); //资产负债json
var profitJson = require("./json/profit.json"); // 利润表json
var cashJson = require("./json/cash.json");

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

// 上传报表
const UpdateCmt = () => {
  const [fileList, setFileList] = useState([
    // {
    //   uid: "-1",
    //   name: "xxx.png",
    //   status: "done",
    //   url: "http://www.baidu.com/xxx.png",
    // },
  ]);

  const handleChange = (info) => {
    let newFileList = [...info.fileList]; // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = fileList.slice(-2); // 2. Read from response and show file link

    newFileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
        console.log("回传的", file);
      }

      return file;
    });
    setFileList(newFileList);
  };

  const props = {
    action: "https://api.stiacn-app.com/stiacn-app/oss/fileUpload",
    onChange: handleChange,
    multiple: true,
  };
  return (
    <Upload {...props} fileList={fileList}>
      <Button icon={<UploadOutlined />}></Button>
    </Upload>
  );
};

// 资产负债表reducer
const asset_reducer = (state, action) => {
  const { name } = action;
  return { ...state, ...name };
};

// 资产负债表reducer
const asset_reducer1 = (state, action) => {
  const { name } = action;
  return { ...state, ...name };
};

// 利润表reducer
const profit_reducer = (state, action) => {
  const { name } = action;
  return { ...state, ...name };
};

// 现金流量表reducer
const cash_reducer = (state, action) => {
  const { name } = action;
  return { ...state, ...name };
};

// 财务负债编辑状态
const AssetModuleEdit = (props) => {
  const { isSaveAsset, companyId } = props;
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
    // params.years = years;
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
const AssetModuleInit = (props) => {
  const { isSaveAsset, companyId } = props;
  const [asset_state1, asset_dispatch] = useReducer(asset_reducer1, assetJson1);
  const [assetEnter, setAssetEnter] = useState({ value: "", line: null });

  useEffect(() => {
    dispathTrigger("assetEnter22222222222 输入变化监听");
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
            : asset_state1[name].beginningBalance || 0,
          endingBalance: flag
            ? asset_state1[name].endingBalance || 0
            : assetEnter.value,
          // lineNo:asset_state1[name].lineNo
        },
      },
    });
  };

  // 保存资产负债表
  const saveDeclareBalance = async () => {
    let res;
    let params = JSON.parse(JSON.stringify(asset_state1));
    // params.years = years;
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
    <>{<AssetTable onInput={(e) => setAssetEnter(e)} data={asset_state1} />}</>
  );
};

function Declare(props) {
  const [tabInx, setTabInx] = useState(0);
  const [inx, setInx] = useState(0);
  const [assetEnter, setAssetEnter] = useState({ value: "", line: null });
  // const [asset_state, asset_dispatch] = useReducer(asset_reducer, assetJson); // 资产负债表订阅
  const [profitEnter, setProfitEnter] = useState({ value: "", line: null });
  const [profit_state, profit_dispatch] = useReducer(
    profit_reducer,
    profitJson
  ); // 利润表订阅
  const [cashEnter, setCashEnter] = useState({ value: "", line: null });
  const [cash_state, cash_dispatch] = useReducer(cash_reducer, cashJson); // 现金流量表订阅
  const [companyId, setCompanyId] = useState(null); //公司id
  const [years, setYears] = useState(null); // 当前年份
  const history = useHistory();

  const [capitalModels, setCapitalModels] = useState({}); //资产负债表
  // const [flag, setFlag] = useState(false);
  const [action, setAction] = useState(-1);

  const [obj, setObj] = useState({}); // 编辑所有数据
  const [key, setKey] = useState(null);
  const [burn, setBurn] = useState(false); //卸载组件

  const [flag, setFlag] = useState(false);

  const [flagAssetEdit, setFlagAssetEdit] = useState(false); // 财务报表编辑渲染判断
  const [flagAssetNew, setFlagAssetNew] = useState(false); // 财务报表新增渲染判断
  const [isSaveAsset, setIsSaveAsset] = useState(false); // 保存财务报表


  var date = new Date();
  var y = date.getFullYear();
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
    // setKey(Math.random())
    let { state } = props.location;
    if (state && state.action == 1) {
      setAction(1);
      setCompanyId(state.id);
      localStorage.setItem("companyId", props.location.state.id);
    } else if (state && state.action == 0) {
      // 新增数据
      // alert(0)
      setAction(0);
      localStorage.removeItem("companyId");
    }
  }, []);

  // 编辑时-获取数据详情
  const _getDeclareDetail = async (id) => {
    const res = await getDeclareDetail(id);

    if (res && res.code == 2000) {
      let capitalModels = res.result.balanceSheet; // 资产负债表
      let profitModels = res.result.profitStatement; // 利润表
      let cashModels = res.result.cashFlowStatement; // 现金流量表
      // setCapitalModels(capitalModels);
      capitalModels.years && setYears(capitalModels.years);
      delete capitalModels.companyId;
      delete capitalModels.years;
      assetJson = capitalModels;

      delete profitModels.companyId;
      delete profitModels.years;
      profitJson = profitModels;

      delete cashModels.companyId;
      delete cashModels.years;
      cashJson = cashModels;
      // dispathTrigger("请求响应成功后的事件订阅");

      setFlagAssetEdit(true);
      setObj(res.result);
    }
  };

  useEffect(() => {
    if (companyId && props.location.state && props.location.state.action == 1) {
      // 编辑状态
      _getDeclareDetail(companyId);
    }
  }, [companyId]);

  useEffect(() => {
    setFlag(true);
    if (props.location.state && props.location.state.action == 1) {
      // 编辑状态
      _getDeclareDetail(companyId);
    } else {
      // 新增财务报表按钮
      setFlagAssetNew(true);
    }
  }, []);

  useEffect(() => {
    console.log("打印下flagAssetEdit正负极", flagAssetEdit);
  }, [flagAssetEdit]);

  // 监听输入变化
  // useEffect(() => {
  //   console.log("asset_state输入变化111", asset_state);
  // }, [asset_state]);

  useEffect(() => {
    // console.log("profit_state输入变化", profit_state);
  }, [profit_state]);

  useEffect(() => {
    // console.log("cash_state输入变化", cash_state);
  }, [cash_state]);

  // 触发事件
  useEffect(() => {
    dispathTrigger("assetEnter 11111111输入变化监听");
    // console.log("检测是否触发了assetEnter")
  }, [assetEnter, profitEnter, cashEnter]);

  // 保存资产负债表
  const saveDeclareBalance = async () => {
    if (!years) {
      // message.warn("请选择年份！");
      setYears(y);
    }
    let res;
    // 资产负债表
    if (tabInx == 0) {
      // let params = JSON.parse(JSON.stringify(asset_state));
      // params.years = years;
      // params.companyId = companyId;
      // res = await putDeclareBalance(params);
    } else if (tabInx == 1) {
      let params = JSON.parse(JSON.stringify(profit_state));
      params.years = years;
      params.companyId = companyId;
      res = await putDeclareProfit(params);
    } else if (tabInx == 2) {
      let params = JSON.parse(JSON.stringify(cash_state));
      params.years = years;
      params.companyId = companyId;
      res = await putDeclareCash(params);
    }

    if (res && res.code == 2000) {
      if (res.result) {
        setCompanyId(res.result);
        message.success("操作成功！");
        localStorage.setItem("companyId", res.result);
      }
    } else {
      message.error("操作失败！");
    }
  };

  // 资产负债表封装订阅
  const assetDispatch = (no, name) => {
    // 判断是期末还是年初，true为年初，false为期末
    // let flag = no.substr(no.length - 1, 1) == 0 ? true : false;
    // console.log("Bdhas ",no,name)
    // return asset_dispatch({
    //   type: "assetLine" + no,
    //   name: {
    //     [name]: {
    //       beginningBalance: flag
    //         ? assetEnter.value
    //         : asset_state[name].beginningBalance || 0,
    //       endingBalance: flag
    //         ? asset_state[name].endingBalance || 0
    //         : assetEnter.value,
    //       // lineNo:asset_state[name].lineNo
    //     },
    //   },
    // });
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

  // 根据行进行事件订阅
  const dispathTrigger = (str, json) => {
    let line;
    let no;
    if (tabInx == 0) {
      line = assetEnter.line || "";
    } else if (tabInx == 1) {
      line = profitEnter.line || "";
    } else if (tabInx == 2) {
      line = cashEnter.line || "";
    }

    no = line.length == 3 ? line.substr(0, 1) : line.substr(0, 2);

    if (tabInx == 0) {
      // console.log(str, assetJson);
      // setFlag(true);
      // Object.values(assetJson).map((item) => {
      //   if (item.lineNo == no) {
      //     assetDispatch(line, item.name);
      //   }
      // });
    } else if (tabInx == 1) {
      Object.values(profitJson).map((item) => {
        if (item.lineNo == no) {
          profitDispatch(line, item.name);
        }
      });
    } else if (tabInx == 2) {
      Object.values(cashJson).map((item) => {
        if (item.lineNo == no) {
          cashDispatch(line, item.name);
        }
      });
    }
    setFlag(false);
  };

  return (
    <>
      {!flag && (
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
                  // window.location.reload();
                  // setTimeout(()=>{
                  //   history.push('/common');

                  // },500)
                  // history.replace("/common");
                  setTimeout(() => {
                    // window.location.reload();
                    history.replace("/common");
                  }, 100);
                  // window.location.reload();

                  // window.location.pathname = '/common'
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
                            inx == index
                              ? "none"
                              : `0.01rem solid ${defaultColor}`,
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
                      {["资产负债表", "利润表", "现金流量表"].map(
                        (item, index) => {
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
                        }
                      )}
                    </div>
                    <div className="_right">
                      <div>
                        <span style={{ fontWeight: "bold" }}>选择年份：</span>

                        <DatePicker
                          onChange={(moment, str) => {
                            setYears(str);
                          }}
                          defaultValue={
                            years ? moment(years) : moment(y.toString())
                          }
                          // showTime={{ defaultValue: 2022}}
                          picker="year"
                          locale={locale}
                        />
                      </div>

                      <div
                        style={{
                          border: "0px solid red",
                          marginLeft: "0.5rem",
                          fontWeight: "bold",
                        }}
                      >
                        <span>上传报表：</span>
                        <UpdateCmt />{" "}
                      </div>
                    </div>
                  </section>
                  {/* 资产负债表 */}
                  {tabInx == 0 && flagAssetEdit && (
                    <AssetModuleEdit
                      companyId={companyId}
                      // assetJson1={assetJson1}
                      isSaveAsset={isSaveAsset}
                    />
                  )}

                  {tabInx == 0 && flagAssetNew && (
                    <AssetModuleInit
                      companyId={companyId}
                      // assetJson1={assetJson1}
                      isSaveAsset={isSaveAsset}
                    />
                  )}

                  {/* 利润表 */}
                  {tabInx == 1 && (
                    <ProfitTable
                      onInput={(e) => setProfitEnter(e)}
                      data={profit_state}
                    />
                  )}

                  {/* 现金流量表 */}
                  {tabInx == 2 && (
                    <CashTable
                      onInput={(e) => setCashEnter(e)}
                      data={cash_state}
                    />
                  )}
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
                        } else {
                          setInx(1);
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
                        // saveDeclareBalance();
                        if (tabInx == 0) {
                          setIsSaveAsset(true);
                        }
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

              {/* 其他模块 */}
              {inx != 0 && (
                <Others
                  setInx={(e) => {
                    setInx(e);
                  }}
                  inx={inx}
                  companyId={companyId}
                  obj={obj}
                />
              )}
            </section>
          </div>
        </div>
      )}{" "}
    </>
  );
}

export default withRouter(Declare);
