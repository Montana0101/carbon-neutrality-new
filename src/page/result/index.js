import { useState, useEffect, useRef } from "react";
import { screen_scale } from "../../util/rem";
import { withRouter, useHistory } from "react-router-dom";
import { LeftOutlined, createFromIconfontCN } from "@ant-design/icons";
import { AliOss, ThemeColor, CutLine } from "../../lib/const";
import { Input, Button } from "antd";
import RadarChart from "./radar"
import "./index.less";

const defaultImg = AliOss + "/new_version_0518/company_default.png";

const CompanyCard = (props) => {
  let { data } = props;

  useEffect(() => {
    console.log("获取到查询道德参数", data);
  }, [data]);

  return (
    <div className="card">
      <section className="left">
        <img src={defaultImg} alt="" />
      </section>
      <section className="middle">
        <div style={{display:"flex",alignItems:"center",marginBottom:"0.1rem"}}>
          <span style={{fontSize:"0.2rem",fontWeight:"bold",color:"rgba(0,0,0,0.8)"}}>{data.companyName}</span>
          <span style={{marginLeft:"0.1rem"}}>(简称：{data.enterpriseAbbreviation})</span>
        </div>
        <ul>
          <li>
            <p><span>行业：</span><span>{data.industryName}</span></p>
            <p><span>电话：</span><span>{data.contactNumber}</span></p>
            <p><span>邮箱：</span><span>{data.email}</span></p>
            <p><span>统一社会信用代码：</span><span>{data.industryName}</span></p>
          </li>
          <li>
            <p><span>法定代表人：</span><span>{data.legalPersonName}</span></p>
            <p><span>注册地：</span><span>{data.cityName}</span></p>
            <p><span>注册资金：</span><span>{data.regCapital}万元</span></p>
            <p><span>企业注册时间：</span><span>{data.regTime}</span></p>
          </li>
          <li>
            <p><span>网址：</span><span>{data.website}</span></p>
            <p><span>融资阶段：</span><span>{data.stageName}</span></p>
            <p><span>融资金额：</span><span>{data.financingScale}万元</span></p>
            <p><span>投前估值：</span><span>{data.enterpriseValuation}万元</span></p>
          </li>
        </ul>
      </section>
      <section className="right">
        <RadarChart data={data}/>
      </section>
    </div>
  );
};

function SearchResult(props) {
  const [obj, setObj] = useState({});

  useEffect(() => {
    document.getElementsByTagName("html")[0].style.overflowX = "hidden";
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
    // chrome
    document.body.scrollTop = 0;
    // firefox
    document.documentElement.scrollTop = 0;
    // safari
    window.pageYOffset = 0;
    let { state } = props.location;
    if (state && state.value) {
      setObj(JSON.parse(state.value));
    } else {
      setObj(JSON.parse(localStorage.getItem("search")));
    }
    // if(location.){
    //     console
    // }
  }, []);

  return (
    <div className="result_page">
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
            fontSize: "0.12rem",
            fontWeight: "400",
            display: "flex",
            margin: 0,
            padding: "0 0.3rem",
            height: "0.7rem",
            lineHeight: "0.7rem",
            borderLeft: CutLine,
            borderRight: CutLine,
          }}
        >
          <span
            className="homeBtn"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            首页
          </span>
          <span style={{ margin: "0 0.1rem" }}>/</span>
          <span
            className="dynamicBtn"
            onClick={() => {
              window.location.href = "/dynamic";
            }}
          >
            企业搜索
          </span>
        </h3>
      </div>

      <div
        style={{
          border: CutLine,
          padding: "0 0.5rem",
          borderRight: "none",
          borderLeft: "none",
          borderTop: "none",
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
            alignItems: "center",
            justifyContent: "center",
            borderLeft: CutLine,
            borderRight: CutLine,
          }}
        >
          <Input placeholder="请输入公司名进行查询" />
          <Button type="primary">搜索</Button>
        </section>
      </div>

      <div
        style={{
          boxSizing: "border-box",
          color: "white",
          marginBottom: "-0.5rem",
          border: CutLine,
          borderTop: "none",
          borderBottom: "none",
          margin: "0 0.5rem 0 0.5rem",
          padding: "0.3rem 0",
        }}
      >
        <CompanyCard data={obj} />
      </div>
    </div>
  );
}

export default withRouter(SearchResult);
