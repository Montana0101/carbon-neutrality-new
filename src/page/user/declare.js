import { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { getDeclareDetail } from "../../apis/index";
import { ThemeColor, CutLine } from "../../lib/const";
import { DatePicker, Upload, Button } from "antd";
import "./declare.less";
import { ButtonCmt } from "../../component/button";
import "moment/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";
import { UploadOutlined } from "@ant-design/icons";
import Others from "./others"; //其他模块
import moment from "moment";
import { AssetModuleInit, AssetModuleEdit } from "./component/assetModule";
import { ProfitModuleEdit, ProfitModuleInit } from "./component/profitModule";
import { CashModuleEdit, CashModuleInit } from "./component/cashModule";

const defaultColor = "rgba(0,0,0,0.3)";
var assetJson = require("./json/asset.json"); //资产负债json
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

// 财务负债编辑状态

function Declare(props) {
  const [tabInx, setTabInx] = useState(0);
  const [inx, setInx] = useState(0);

  const [companyId, setCompanyId] = useState(null); //公司id
  const [years, setYears] = useState(null); // 当前年份
  const history = useHistory();
  const [obj, setObj] = useState({}); // 编辑所有数据

  const [flagAssetEdit, setFlagAssetEdit] = useState(false); // 财务报表编辑渲染判断
  const [flagAssetNew, setFlagAssetNew] = useState(false); // 财务报表新增渲染判断
  const [isSaveAsset, setIsSaveAsset] = useState(false); // 保存财务报表

  const [flagProfitEdit, setFlagProfitEdit] = useState(false); // 利润表编辑渲染判断
  const [flagProfitNew, setFlagProfitNew] = useState(false); // 利润表新增渲染判断
  const [isSaveProfit, setIsSaveProfit] = useState(false); // 保存利润表

  const [flagCashEdit, setFlagCashEdit] = useState(false); // 现金表编辑渲染判断
  const [flagCashNew, setFlagCashNew] = useState(false); // 现金表新增渲染判断
  const [isSaveCash, setIsSaveCash] = useState(false); // 保存现金表

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

    let { state } = props.location;

    if (state && state.action == 1) {
      setCompanyId(state.id);
      localStorage.setItem("companyId", props.location.state.id);
    } else if (state && state.action == 0) {
      // 新增数据
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

      setFlagAssetEdit(true);
      setFlagProfitEdit(true);
      setFlagCashEdit(true);
      setObj(res.result);
    }
  };

  // 更新companyId
  const updateCompanyId = (e) => {
    setCompanyId(e)
  }

  // 重置保存按钮
  const resetSaveButton = () => {
    if(tabInx==0){
      setIsSaveAsset(false)
    }else if(tabInx==1){
      setIsSaveProfit(false)
    }else if(tabInx==2){
      setIsSaveCash(false)
    }
  }

  useEffect(() => {
    if (companyId && props.location.state && props.location.state.action == 1) {
      // 编辑状态
      _getDeclareDetail(companyId);
    }
  }, [companyId]);

  useEffect(() => {
    if (props.location.state && props.location.state.action == 1) {
      // 编辑状态
      _getDeclareDetail(companyId);
    } else {
      // 新增财务报表按钮
      setFlagAssetNew(true);
      setFlagProfitNew(true);
      setFlagCashNew(true);
    }
  }, []);

  return (
    <>
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
                    isSaveAsset={isSaveAsset}
                    year={years}
                    assetJson={assetJson}
                    resetSaveButton={resetSaveButton}
                  />
                )}

                {tabInx == 0 && flagAssetNew && (
                  <AssetModuleInit
                    companyId={companyId}
                    isSaveAsset={isSaveAsset}
                    year={years}
                    updateId = {updateCompanyId}
                    resetSaveButton={resetSaveButton}
                  />
                )}

                {/* 利润表 */}
                {tabInx == 1 && flagProfitEdit && (
                  <ProfitModuleEdit
                    companyId={companyId}
                    isSaveProfit={isSaveProfit}
                    year={years}
                    profitJson={profitJson}
                    resetSaveButton = {resetSaveButton}
                  />
                )}

                {tabInx == 1 && flagProfitNew && (
                  <ProfitModuleInit
                    companyId={companyId}
                    isSaveProfit={isSaveProfit}
                    year={years}
                    updateId = {updateCompanyId}
                    resetSaveButton = {resetSaveButton}
                  />
                )}

                {tabInx == 2 && flagCashEdit && (
                  <CashModuleEdit
                    companyId={companyId}
                    isSaveCash={isSaveCash}
                    year={years}
                    cashJson={cashJson}
                    resetSaveButton={resetSaveButton}
                  />
                )}

                {tabInx == 2 && flagCashNew && (
                  <CashModuleInit
                    companyId={companyId}
                    isSaveCash={isSaveCash}
                    year={years}
                    updateId = {updateCompanyId}
                    resetSaveButton={resetSaveButton}
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
                      } else if (tabInx == 1) {
                        setIsSaveProfit(true);
                      } else if (tabInx == 2) {
                        setIsSaveCash(true);
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
    </>
  );
}

export default withRouter(Declare);
