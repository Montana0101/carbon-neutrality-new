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
const ConsultSub2 = () => {
  const [inx, setInx] = useState(0);
  const [flag, setFlag] = useState(false);
  const [plus, setPlus] = useState(false);
  const [overInx, setOverInx] = useState(0);

  const history = useHistory();

  return (
    <div
      className="page_sub2"
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
              history.push("/consult");
            }}
          >
            双碳资讯
          </span>
          <span style={{ margin: "0 0.1rem" }}>/</span>
          <span>各国相关政策</span>
        </h3>
      </div>

      <div
        style={{
          color: "black",
          margin: "0 0.5rem 0 0.5rem",
          padding: "0.2rem 0.3rem",
          border: CutLine,
          borderTop: "none",
          textAlign: "left",
        }}
      >
        <div
          style={{
            color: "white",
            backgroundImage: `url(${AliOss}/new_version_0518/information/details_2/banner.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "2.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "0.3rem",
          }}
        >
          各国相关政策
        </div>

        <h2
          style={{
            color: ThemeColor,
            fontSize: "0.22rem",
            fontWeight: "bold",
            margin: "0.3rem 0 0.2rem 0",
          }}
        >
          为应对全球变暖问题，联合国多次召开气候变化大会
        </h2>
        <p className="col">
          1. 全球变暖问题需要各国联合一同面对。自 1995
          年起，联合国气候变化大会每年在世界不同地区轮换举行。
        </p>
        <p className="col">
          2. 2015 年的《巴黎协定》中，对 2020
          年后全球应对气候变化的行动作出了相应的安排，明确了将升温控制在
          2℃乃至努力控制在1.5℃的目标。
        </p>
        <p className="col">
          3. 近 200 个缔约方共同签署了该项协定。目前，第 26
          届联合国气候变化大会已定于 2021 年 11 月 1-12 日在英国格拉斯哥举行。
        </p>
        <img
          style={{ width: "100%", marginTop: "0.3rem" }}
          src={AliOss + `/new_version_0518/information/details_2/table_1.png`}
          alt=""
        />

        <h2
          style={{
            color: ThemeColor,
            fontSize: "0.22rem",
            fontWeight: "bold",
            margin: "0.3rem 0",
          }}
        >
          2018年各国一次能源需求结构对比
        </h2>

        <article className="article_1">
          <img
            src={AliOss + `/new_version_0518/information/details_2/table_2.png`}
            alt=""
          />
              <ul>
                  <li>
                  目前我国的能源结构中，为碳排放主要来 源的化石能源（煤、石油、天然气）仍占多数。根 据 IEA数据显示， 2018 年我国能源供应结构中，原煤占比 61.9%，原油占比 19.1%，天然气占比 7.2%，而可实现碳零排放的清洁能源，如水能、核能、太阳能、风能等，占比仅为 11.8%。
                  </li>
                  <li>
                  低碳能源包括核电、水电、可再生能源，中国的低碳能源以水电为主，水电份额（为8%）高于美、日、欧的水平（分别为3%、4%、5%）；但中国的核能份额仅为2%，大幅低于美国、欧盟（分别为8%、11%），日本在福岛核事故后核电份额大幅下降，目前也仅为2%；可再生能源方面，欧盟和日本的份额较高（分别为9%、6%），美国为5%，中国和全球平均水平一致（均为4%）。
                  </li>
              </ul>
        </article>

        <h2
          style={{
            color: ThemeColor,
            fontSize: "0.22rem",
            fontWeight: "bold",
            margin: "0.3rem 0 0.1rem 0",
          }}
        >
          距离目标差距
        </h2>
        <article className="article_2">
            <div>如果全球按照 1.5℃的温升目标制定政策，根据国际能源署此前的估算，预计全球碳排放将在2020-2030 年间达到峰值，石油需求将在 2020-2030 年间达到峰值，煤炭需求在 2020 年前就达到峰值天然气将在 2025-2040 年间达到峰值。</div>
            <img
            style={{width:"100%",marginTop:"0.1rem",marginBottom:"0.1rem"}}
            src={AliOss + `/new_version_0518/information/details_2/table_3.png`}
            alt=""
          />
        </article>
      </div>
    </div>
  );
};

export default ConsultSub2;
