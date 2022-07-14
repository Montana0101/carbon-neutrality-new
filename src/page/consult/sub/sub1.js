// 双碳咨讯
import React, { useState, useEffect } from "react";
import {
  AliOss,
  ThemeColor,
  CutLine,
  barFontSize,
  barHeight,
  IframeUrl,
} from "../../../lib/const";
import { useHistory } from "react-router-dom";

import "./default.less";

const data = [
  {
    title: "碳达峰",
    en: "Carbon up to the peak",

    content:
      "指排放不再增长，达到峰位后逐步由碳中和是指企业、团体或个人测算在一定时间内直接或间接产生的温室气体排放总量，然后通过植物造树造林、节能减排等形式，抵消自身产生的二氧化碳排放量，实现二氧化碳”零排放",
  },
  {
    title: "碳中和",
    en: "Carbon neutrality",
    content:
      "指企业、团体或个人测算在一定时间内,直接或间接产生的温室气体排放总量, 通过植树造林、节能减排等形式，抵消自身产生的二氧化碳排放量，实现二氧化碳“零排放”。",
  },
  {
    title: "碳中和主要概念",
    en: "Carbon neutrality concept",
    content:
      "全球变暖是人类的行为造成地球气候变化的后果。“碳”就是石油、煤炭、木材等由碳元素构成的自然资源。“碳”耗用得多，导致地球暖化的元凶“二氧化碳”也制造得多。随着人类的活动，全球变暖也在改变着人们的生活方式，带来越来越多的问题。在国际上，气候中性和净零 CO2 排放量的定义与碳中和一致。要达到碳中和，一般有两种方法：一是通过特殊的方式去除温室气体。二是使用可再生能源，减少碳排放。",
  },
];
const ConsultSub1 = () => {
  const [inx, setInx] = useState(0);
  const [flag, setFlag] = useState(false);
  const [plus, setPlus] = useState(false);
  const [overInx, setOverInx] = useState(0);

  const history = useHistory();

  return (
    <div
      className="page_sub1"
      style={{
        height: "auto",
        width: "100%",
        background: "white",
        padding: "0 0.3rem",
      }}
    >
      {/* 碳中和技术创新联盟 */}
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
            //   window.location.href = "/dynamic";
            history.push('/consult')
            }}
          >
            双碳资讯
          </span>
          <span style={{ margin: "0 0.1rem" }}>/</span>
          <span>什么是碳达峰和碳中和</span>
        </h3>
      </div>

      <div
        style={{
          //   boxSizing: "border-box",
          color: "white",

          //   borderBottom: "none",
          margin: "0 0.5rem 0 0.5rem",
          padding: "0.2rem 0.3rem",
          //   background:"green"
          border: CutLine,
          borderTop: "none",
        }}
      >
        <img
          style={{ width: "100%", marginBottom: "0.2rem" }}
          src={AliOss + `/new_version_0518/information/details_1/banner.png`}
          alt=""
        />
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {data.map((item, index) => {
            return (
              <li
                key={index}
                style={{
                  width: "32%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    background: ThemeColor,
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "0.13rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.12rem 0",
                    boxShadow: "0px 5px 5px -5px grey",
                  }}
                >
                  <span style={{   fontWeight: "bold"}}>{item.title}</span>
                  <span style={{   fontWeight: "bold"}}>{item.en}</span>
                </p>
                <div
                  style={{
                    fontSize: "0.12rem",
                    padding: "0.2rem 0.15rem",
                    textAlign: "left",
                    lineHeight: index != 2 ? "0.3rem" : "0.22rem",
                    border: `1px dotted ${ThemeColor}`,
                    borderTop: "none",
                    height: "2.2rem",
                    overflow: "hidden",
                  }}
                  className="col_act"
                >
                  {item.content}
                </div>
              </li>
            );
          })}
        </ul>

        <div
          style={{
            marginTop: "0.2rem",
            color: "red",
            backgroundImage: `url(${AliOss}/new_version_0518/information/details_1/global_warming.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "3.3rem",
            padding: "0 0.4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom:"0.3rem"
          }}
        >
          <div
            style={{
              height: "55%",
              width: "100%",
              background: "rgba(0,0,0,0.6)",
              margin: "0 auto",
              color: "white",
              fontSize: "0.12rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "0.14rem",
                width: "33%",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              全球变暖的严重性
            </span>
            <section
              style={{
                flex: 1,
                padding: "0.2rem 0",
                textAlign: "left",
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between"
              }}
            >
              <p>全球已识别出了9 个气候变化临界点</p>
              <div
                style={{
                  display: "flex",
                }}
              >
                <div style={{lineHeight:"0.22rem"}}>
                  <p>A. 亚马孙热带雨林经常性干旱；</p>
                  <p>B. 北极海冰面积减少；</p>
                  <p>C. 大西洋环流自 1950 年以来放缓；</p>
                  <p>D. 北美的北方森林火灾和虫害；</p>
                  <p>E. 全球珊瑚礁大规模死亡；</p>
                </div>
                <div style={{
                    marginLeft:"0.5rem",lineHeight:"0.22rem"
                }}>
                  <p>F. 格陵兰冰盖加速消融、失冰；</p>
                  <p>G. 永久冻土层解冻；</p>
                  <p>H. 南极西部冰盖加速消融、失冰；</p>
                  <p>I. 南极洲东部正在加速消融。</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultSub1;
