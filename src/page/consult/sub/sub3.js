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
import { Popover, Steps } from "antd";
import store from "../../../store/index";
import { useHistory } from "react-router-dom";

import "./default.less";
const { Step } = Steps;
const data = [
  "将在2020年实现单位国内生产总值二氧化碳排放比2005年下降40%-45%,非化石能源 占一次能源消费比重达到15%左右，森林蓄积量比2005年増加13亿立方米。",
  "二氧化碳排放在2030年左右达到峰值并尽早达峰、非化石能源占一次能源消费比重达到20%左右，森林蓄积量比2005年增加45亿立方米左右。",
  "到2050年，能源消费总量基本稳定，非化石能源占卜超过50%、能源清洁化率达到50%、终端电气化率达到50%",
  "提高国家自主贡献力度，采取更加有力的政策和措施，二氧化碳排放力争于2030年前达到峰值，努力争取2060 年前实现碳中和。",
];
const year = [2009, 2015, 2017, 2020];

const ConsultSub3 = () => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    store.subscribe(() => {
      setAmount(store.getState().amount);
    });
  }, []);

  const history = useHistory();

  return (
    <div
      className="page_sub3"
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
          <span>实现碳中和的方式</span>
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
            backgroundImage: `url(${AliOss}/new_version_0518/information/details_3/banner.png)`,
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
          实现碳中和的方式
        </div>

        <h2
          style={{
            color: ThemeColor,
            fontSize: "0.22rem",
            fontWeight: "bold",
            margin: "0.3rem 0 0.2rem 0",
          }}
        >
          预防大于治理
        </h2>
        <p className="col">
          我国政府节能减排的决心大，目标完成度高从我国 2009
          年提出第一个碳减排目标开始，到 2015
          年的巴黎协定自主行动目标，再到新提出的 2060
          年碳中和新目标，可以看出，政策对节能减排的支持力度在不断强化。一直以来，我国均能超额完成碳减排目标。
        </p>

        <img
          style={{ width: "100%", marginTop: "0.3rem" }}
          src={AliOss + `/new_version_0518/information/details_3/progress.png`}
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
              <li key={index} style={{ width: "22%", paddingRight: "0.03rem" }}>
                <div
                  className="col"
                  style={{
                    margin: "0.2rem 0",
                    height: "1rem",
                  }}
                >
                  {item}
                </div>
                <img
                  style={{ width: "100%" }}
                  src={
                    AliOss +
                    `/new_version_0518/information/details_3/${year[index]}.png`
                  }
                />
              </li>
            );
          })}
        </ul>
        <h2
          style={{
            color: ThemeColor,
            fontSize: "0.22rem",
            fontWeight: "bold",
            margin: "0.4rem 0 0.1rem 0",
          }}
        >
          电力供给端：从发电源头实现传统能源替代，提升清洁能源占比
        </h2>

        <p className="col">
          2060 年碳中和目标下，光伏/风电新增装机量尚有 20%的提升空间。
        </p>
        <p className="col">
          目前，我国发电能源结构中，非化石能源占比仅为
          35%，而根据清华大学气候变化与可持续发展研究院的研究，为实现 2060
          年碳中和目标，2050 年，非化石能源发电占比需提升至 90%以上，
        </p>
        <p className="col">
          提升空间巨大。对于我国而言，随着光伏和风电平价上网的实现，清洁能源发电已攻克了大部分技术难关，占比的持续提升是必然趋势。
        </p>
        <p className="col">
          为实现 2060 年碳中和目标，我们预测，相比于此前的
          2030年自主行动目标，我国光伏/风电新增装机量在2020-2025 年尚有
          20%的提升空间，在2025-2030 年有 40%的提升空间。
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0.3rem 0",
          }}
        >
          <img
            style={{ height: "2.9rem" }}
            src={AliOss + `/new_version_0518/information/details_3/table_1.png`}
            alt=""
          />
          <img
            style={{ height: "2.9rem" }}
            src={AliOss + `/new_version_0518/information/details_3/table_2.png`}
            alt=""
          />
        </div>

        {/* <article className="article_1">
          <img
            src={AliOss + `/new_version_0518/information/details_2/table_2.png`}
            alt=""
          />
          <ul>
            <li>
              目前我国的能源结构中，为碳排放主要来
              源的化石能源（煤、石油、天然气）仍占多数。根 据 IEA数据显示， 2018
              年我国能源供应结构中，原煤占比 61.9%，原油占比 19.1%，天然气占比
              7.2%，而可实现碳零排放的清洁能源，如水能、核能、太阳能、风能等，占比仅为
              11.8%。
            </li>
            <li>
              低碳能源包括核电、水电、可再生能源，中国的低碳能源以水电为主，水电份额（为8%）高于美、日、欧的水平（分别为3%、4%、5%）；但中国的核能份额仅为2%，大幅低于美国、欧盟（分别为8%、11%），日本在福岛核事故后核电份额大幅下降，目前也仅为2%；可再生能源方面，欧盟和日本的份额较高（分别为9%、6%），美国为5%，中国和全球平均水平一致（均为4%）。
            </li>
          </ul>
        </article> */}

        <h2
          style={{
            color: ThemeColor,
            fontSize: "0.22rem",
            fontWeight: "bold",
            margin: "0.3rem 0 0.1rem 0",
          }}
        >
          储能板块：清洁能源占比提升还将大幅拉动对电化学储能技术的需求
        </h2>
        <p className="col">
          风光发电随机性强、不稳定性强，装机占比越高，对电力稳定性的挑战就越大。
        </p>
        <p className="col">
          目前，我国部分风光发电量较大的地区出现较高的弃光、弃光现象，未来风/光电若要大规模应用，解决高弃光/风率问题，仍需配合储能平滑发电波动，进行消纳。
        </p>
        <p className="col">
          截至 2020年 7 月底，全国已有大约有 11
          个省份出台了可再生能源发电项目储能配臵的相关政策，相关可再生能源项目的配臵储能容量要求从5%-20%不等。
        </p>

        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0.2rem 0 0.4rem 0",
          }}
        >
          {new Array(3).fill("").map((item, index) => {
            return (
              <li
                style={{
                  width: "30%",
                }}
              >
                <img
                  style={{ width: "100%" }}
                  src={
                    AliOss +
                    `/new_version_0518/information/details_3/needs_${
                      index + 1
                    }.png`
                  }
                  alt=""
                />
              </li>
            );
          })}
        </ul>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              paddingRight: "0.5rem",
            }}
          >
            <h2
              style={{
                color: ThemeColor,
                fontSize: "0.22rem",
                fontWeight: "bold",
              }}
            >
              生物质能：生物质能受关注度也在不断提升
            </h2>
            <p className="col">
              风光发电随机性强、不稳定性强，装机占比越高，对电力稳定性的挑战就越大。
            </p>
            <p className="col">
              目前，我国部分风光发电量较大的地区出现较高的弃光、弃光现象，未来风/光电若要大规模应用，解决高弃光/风率问题，仍需配合储能平滑发电波动，进行消纳。
            </p>
            <p className="col">
              截至 2020年 7 月底，全国已有大约有 11
              个省份出台了可再生能源发电项目储能配臵的相关政策，相关可再生能源项目的配臵储能容量要求从5%-20%不等。
            </p>
          </div>
          <img
            style={{ height: "1.6rem" }}
            src={AliOss + `/new_version_0518/information/details_3/target.png`}
            alt=""
          />
        </div>

        <h2
          style={{
            color: ThemeColor,
            fontSize: "0.22rem",
            fontWeight: "bold",
            margin: "0.4rem 0 0.1rem 0",
          }}
        >
          节能减排是可持续发展的必然道路
        </h2>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0.3rem 0 0.4rem 0",
          }}
        >
          {new Array(3).fill("").map((item, index) => {
            return (
              <li
                style={{
                  width: "24%",
                }}
              >
                <img
                  style={{ width: "100%" }}
                  src={
                    AliOss +
                    `/new_version_0518/information/details_3/road_${
                      index + 1
                    }.png`
                  }
                  alt=""
                />
              </li>
            );
          })}
        </ul>
      </div>
      <p
        style={{
          height: "0.5rem",
          fontSize: "0.12rem",
          color: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "right",
          padding: "0 0.5rem",
          alignItems: "center",
          zIndex: 10000,
        }}
      >
        <span>访问量：</span>
        <span>{amount}</span>
      </p>
    </div>
  );
};

export default ConsultSub3;
