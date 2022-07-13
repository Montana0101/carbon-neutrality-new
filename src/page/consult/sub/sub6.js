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

import { useHistory } from "react-router-dom";

import "./default.less";
const { Step } = Steps;
const data = [
  {
    name: "“零外购电”工厂",
    txt:
      "是指生产企业有效利用生产工艺过程的余热余温及厂区内外的土地、厂房、矿山等区域，采用太阳能、风能、潮汐、地热、势能等资源进行发电，产生能满足企业生产及配套设施用电需求的绿电，实现企业年净外购电为零，甚至年净外购电为负的工厂。",
  },
  {
    name: "“零化石能源”工厂",
    txt:
      "是指生产企业尤其是窑炉企业，通过综合利用太阳能、风能、地热能及氢能等可再生绿色能源，开展工业、生活、农林等有热值废弃物协同处置，合理使用周边产业的余热余温等满足生产及配套设施需求，企业年化石燃料使用为零的工厂。",
  },
  {
    name: "“零一次资源”工厂",
    txt:
      "是指生产企业发挥建材行业资源综合利用优势，生产所需原、燃料全部使用工业副产品及废弃物、建筑废弃物及生活垃圾、矿山尾矿废渣等二次资源，企业一次不可再生自然资源使用为零的工厂。",
  },
  {
    name: "“零碳排放”工厂",
    txt:
      "是指企业生产采用非化石能源、低碳酸盐含量原料等低碳、无碳原燃料，生产工艺过程节能降碳，生产废气经降碳、捕碳、固碳处置，进而达到企业全生产过程二氧化碳排放为零的工厂。",
  },
  {
    name: "“零废弃物排放”工厂",
    txt:
      "是指生产企业通过工艺优化、技术装备提升和末端处理设施的改造升级或再造，在现有废弃物有效综合利用和超低排放基础上，进一步实现企业固体、液体、气体废弃物的近零或零排放的工厂。",
  },
  {
    name: "“零员工”工厂",
    txt:
      "是指综合应用数字化、自动化、网络化控制技术，实现从原料到产品全过程智能控制，生产一线无需配备人员的工厂。",
  },
];
const year = [2009, 2015, 2017, 2020];

const ConsultSub6 = () => {
  const [inx, setInx] = useState(0);
  const [flag, setFlag] = useState(false);
  const [plus, setPlus] = useState(false);
  const [overInx, setOverInx] = useState(0);

  const history = useHistory();

  return (
    <div
      className="page_sub6"
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
          <span>“碳中和”背景下的CCUS</span>
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
          className="col"
          style={{
            color: ThemeColor,
            fontWeight: "bold",
          }}
        >
          背景
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              flex: 4,
              display: "flex",
              alignItems: "center",
            }}
          >
            <p className="col">
              2022年3月21日，中国海油“十四五”重大科研项目CCUS专项启动会在京召开。3月24日，作为“碳达峰碳中和”的重大科技示范项目以及集团公司2021年度十大科技攻关项目——国家能源集团主导的国内最大煤电CCUS示范工程开始现场打桩。2022年4月7日，经济日报指出，CCUS技术是基于基本国情、基本能情实现我国大规模深度减排的必然选择，是我国减少二氧化碳排放的重要战略储备技术。诚然、“碳中和”有两大实现路径：一，通过提升清洁能源占比、提高能源效率等方式降低实际碳排放量；二，针对一些较难降低碳排放的领域，提升碳去除水平。过去，我们的工作重心更多放在“降低碳排放”上。长远看，要实现整体深度脱碳，必须更加重视碳去除技术。考虑到中国国情、能情，能源结构以煤炭为主，油气对外依存度极高，要降低碳排放，大规模提升油气消费占比、抛弃自身煤炭资源优势不仅非常不利于保障能源安全；还会对国内庞大的需求煤基能源的能源、钢铁、水泥等产业造成伤害。在支撑经济合理增长、应对气候变化与保障能源安全的多重目标下，CCUS技术将会是将来的最优解之一。{" "}
            </p>
          </div>
          <div
            style={{
              flex: 3,
              paddingLeft: "0.2rem",
            }}
          >
            <img
              style={{ width: "100%" }}
              src={
                AliOss + `/new_version_0518/information/details_6/table_1.png`
              }
              alt=""
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "0.5rem",
            height: "2.7rem",
          }}
        >
          <div
            style={{
              //   flex: 3,
              paddingRight: "0.2rem",
            }}
          >
            <img
              style={{ height: "2.7rem" }}
              src={
                AliOss + `/new_version_0518/information/details_6/table_2.png`
              }
              alt=""
            />
          </div>
          <div
            style={{
              flex: 4,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              //   alignItems: "center",
              paddingLeft: "0.2rem",
            }}
          >
            <div
              className="col"
              style={{
                color: ThemeColor,
                fontWeight: "bold",
              }}
            >
              什么是CCUS？
            </div>
            <p className="col">
              CCUS——是英文Carbon Caputure，Utilization and
              Storage的缩写，全称二氧化碳捕集利用与封存技术。是指将CO2从工业排放源中分离后或直接加以利用或封存，以实现CO2减排的工业过程。CCUS可以捕集发电和工业过程中使用化石燃料所产生的多达90%的CO2，脱碳水平较高。据IEA的研究结果显示，要达到巴黎协议2℃的气候目标，到2060年，累计减排量的14%将来自于CCUS，且任何额外减排量的37%
              也来自于CCUS。IPCC 等国际机构也证实没有
              CCUS就无法实现国际气候变化目标。作为实现碳达峰、碳中和的重要途径。CCUS按照流程可分为捕集、输送、利用与封存几大环节。{" "}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "0.5rem",
            height: "2.3rem",
          }}
        >
          <div
            style={{
              flex: 4,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              //   alignItems: "center",
              paddingRight: "1rem",
              justifyContent: "center",
            }}
          >
            <div
              className="col"
              style={{
                color: ThemeColor,
                fontWeight: "bold",
              }}
            >
              CO2捕集
            </div>
            <p className="col">
              是指将电力、钢铁、水泥等行业利用化石能源过程中产生的CO2进行分离和富集、得到大量的纯度达到99%以上的CO2的工业过程。目前最广泛应用的技术是溶剂捕获CO2——收集处理柱内的工业烟气后添加溶剂将CO2与其他成分分离，回收完CO2后将其液化、储存，或直接以气态的形式输送走。{" "}
            </p>
          </div>

          <img
            style={{ height: "100%" }}
            src={AliOss + `/new_version_0518/information/details_6/table_3.png`}
            alt=""
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "0.4rem",
            height: "4.5rem",
            overflow: "hidden",
          }}
        >
          <img
            style={{ height: "100%" }}
            src={AliOss + `/new_version_0518/information/details_6/table_4.png`}
            alt=""
          />
          <img
            style={{ height: "100%" }}
            src={AliOss + `/new_version_0518/information/details_6/table_5.png`}
            alt=""
          />
          <img
            style={{ height: "100%" }}
            src={AliOss + `/new_version_0518/information/details_6/table_6.png`}
            alt=""
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "0.5rem",
            height: "2.6rem",
          }}
        >
          <div
            style={{
              flex: 4,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              //   alignItems: "center",
              //   paddingRight: "1rem",
              justifyContent: "space-between",
            }}
          >
            <div
              className="col"
              style={{
                color: ThemeColor,
                fontWeight: "bold",
              }}
            >
              CO2运输
            </div>
            <p className="col" style={{ lineHeight: "0.3rem !important" }}>
              是指将捕集的CO2运送到利用或封存地的过程，根据运输方式的不同，主要分为管道、船舶、公路槽车和铁路槽车运输四种。{" "}
            </p>
            <section>
              <img
                style={{ width: "50%" }}
                src={
                  AliOss + `/new_version_0518/information/details_6/table_7.png`
                }
                alt=""
              />
              <img
                style={{ width: "50%" }}
                src={
                  AliOss + `/new_version_0518/information/details_6/table_7.png`
                }
                alt=""
              />
            </section>
          </div>

          <img
            style={{ height: "100%" }}
            src={AliOss + `/new_version_0518/information/details_6/table_9.png`}
            alt=""
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "0.5rem",
            height: "2.7rem",
          }}
        >
          <div
            style={{
              //   flex: 3,
              paddingRight: "0.2rem",
            }}
          >
            <img
              style={{ height: "2.7rem" }}
              src={
                AliOss + `/new_version_0518/information/details_6/table_10.png`
              }
              alt=""
            />
          </div>
          <div
            style={{
              flex: 4,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              //   alignItems: "center",
              paddingLeft: "0.2rem",
              justifyContent: "center",
            }}
          >
            <div
              className="col"
              style={{
                color: ThemeColor,
                fontWeight: "bold",
              }}
            >
              CO2利用
            </div>
            <p className="col">
              是指利用CO2的物理、化学或生物作用，在减少CO2排放的同时实现能源增产增效、矿产资源增采、化学品转化合成、生物农产品增产利用和消费品生产利用等，是具有附带经济效益的减排途径，作为CCUS的最终阶段之一同时也是CCUS重要的环节之一，是CCUS技术是否能从现阶段的以政府引导为主转向政府引导+市场引导的关键因素之一。{" "}
            </p>
          </div>
        </div>

       
      
      </div>
    </div>
  );
};

export default ConsultSub6;
