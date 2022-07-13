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

const ConsultSub4 = () => {
  const [inx, setInx] = useState(0);
  const [flag, setFlag] = useState(false);
  const [plus, setPlus] = useState(false);
  const [overInx, setOverInx] = useState(0);

  const history = useHistory();

  return (
    <div
      className="page_sub4"
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
          <span>
            {" "}
            建材行业“六零”示范工厂诠释 |
            “双碳”之下，“六零”示范工厂引领行业新未来
          </span>
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
            backgroundImage: `url(${AliOss}/new_version_0518/information/details_4/banner.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "2.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "0.3rem",
          }}
        ></div>

        <p className="col">
          2021年12月29日，中国建筑材料联合会六届理事会二次会议召开，党委书记、会长阎晓峰代表联合会明确提出“要着重组织打造零外购电、零化石能源、零一次资源、零碳排放、零废弃物排放、零员工的建材行业绿色节能、能源安全、资源综合利用、低碳、清洁、智能的‘六零’示范工厂，并作为行业企业长远发展导向”。{" "}
        </p>
        <p className="col">
          “六零”示范工厂概念一经提出，获得了业内的高度重视,也引发了社会的广泛关注。“六零”示范工厂有怎样的现实意义和发展前景？其具体内涵又包含哪些内容？近日，中国建筑材料联合会对建材行业“六零”示范工厂概念进行诠释，以促进建材行业企业对“六零”示范工厂有更清晰、更全面的认识，推动全行业凝心聚力，以“双碳”工作为统领，加大技术创新力度，加快改造升级步伐，尽快建成一批“六零”示范工厂（车间、企业、园区），为践行“宜业尚品、造福人类”行业发展目标，推进绿色低碳安全高质量发展，提供先进经验和示范标杆。{" "}
        </p>
        <p className="col" style={{ color: ThemeColor, fontWeight: "bold" }}>
          建材行业“六零”示范工厂是指：零外购电工厂、零化石能源工厂、零一次资源工厂、零碳排放工厂、零废弃物排放工厂、零员工工厂。
        </p>
        <p className="col">
          “六零”示范工厂概念，是建材行业深入贯彻新发展理念，在习近平生态文明思想指引下，在“碳达峰、碳中和”历史进程中，积极应对行业能源资源承载型和污染排放较高的现状，充分发挥建材行业资源综合利用、协同处置及作为为光伏、风电等新能源技术装备制造所需材料的生产行业的优势，从绿色节能、能源安全、资源综合利用、低碳、清洁、智能六个维度，创新性提出的建材行业企业转型升级的长远发展导向，是“宜业尚品、造福人类”行业发展目标中“宜业”的具体实践。
        </p>

        <div
          className="col"
          style={{
            color: ThemeColor,
            fontWeight: "bold",
            marginTop: "0.3rem",
            textAlign: "center",
          }}
        >
          建材行业“六零”示范工厂
        </div>
        <p className="col">
          “六零”示范工厂是建材行业企业转型发展的重要目标导向，每个“零”都代表一个独立的发展方向，六个方向各有侧重又相互关联、相互促进，生产企业可从“一零”但不限于“一零”起步，不断向“六零”示范工厂迈进，从而推动行业整体实现绿色低碳、安全高质量发展。
        </p>

        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "0.3rem 0 0.1rem 0",
            justifyContent:"space-between"
          }}
        >
          {data.map((item, index) => {
            return (
              <li
                style={{
                  width: "49%",
                  display: "flex",
                  marginBottom:"0.3rem"
                }}
              >
                <div
                  style={{
                    background: "#E6EDE6",
                    borderRadius: "0.05rem",
                    color: ThemeColor,
                    fontWeight: "bold",
                    fontSize: "0.13rem",
                    // width: "5rem",
                    height: "0.8rem",
                    flex: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 0 0.05rem rgba(0, 0, 0, .2)"
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    textAlign: "left",
                    marginLeft: "0.2rem",
                    flex: 5,
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="col2"
                >
                  {item.txt}
                </div>
              </li>
            );
          })}
        </ul>
        <p className="col3">
        编辑：《中国建材》杂志
        </p>
        <p className="col3" style={{paddingBottom:"0.1rem"}}>
        内容来源：中国建筑材料联合会
        </p>
      </div>
    </div>
  );
};

export default ConsultSub4;
