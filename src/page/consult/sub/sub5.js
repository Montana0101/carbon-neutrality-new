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

const ConsultSub5 = () => {
  const history = useHistory();

  return (
    <div
      className="page_sub5"
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
            碳中和与大重构，供给侧改革、能源革命与产业升级|碳中和深度报告
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
        <p
          className="col_t"
          style={{
            color: ThemeColor,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          导语
        </p>
        <p className="col">
          “排碳限制”的本质，是一种发展权的限制；而“碳关税”的本质，是应对贸易
          劣势的一种手段，而这种劣势，可能一部分是由实施碳减排后成本增加而造成的。站在我国的角度：“碳关税”既是贸易壁垒“压力”，也是产业结构升级的“动力”。{" "}
        </p>
        <div
          style={{
            color: "white",
            backgroundImage: `url(${AliOss}/new_version_0518/information/details_5/banner.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "3.2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "0.3rem",
            margin: "0.2rem 0",
          }}
        ></div>

        <p
          className="col_t"
          style={{
            color: ThemeColor,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          碳中和与大重构：供给侧改革、能源革命与产业升级
        </p>
        <p className="col">
          “碳中和”是我国能源安全和经济转型的内在需求，也是世界各国利益对立和统一。其中对立体现在“碳排放权”背后发展权的博弈，统一体现在全球应对气候变化政策的一致。相比发达国家，我国实现“碳中和”的年限更短，碳排放下降的斜率更大。基于碳排放来源的燃烧、非燃烧过程，我们构建了“碳中和”的实现路径：1）供给侧提高可再生能源比例，构建零碳电力为主、氢能为辅的能源结构，同时大力发展储能以保障电网平衡；2）需求侧从工业、交通、建筑三个部门着手，全面推广终端电气化、源头减量、节能提效；3）改良工业过程，针对工业原料的氧化还原、分解采取针对性的原料替换。{" "}
        </p>

        <p
          className="col_t"
          style={{
            color: ThemeColor,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          六大路线：源头减量、能源替代、节能提效、回收利用、工艺改造、碳捕集
        </p>
        <p className="col2">
          1）<span style={{ color: ThemeColor }}>源头减量</span>
          ：短期减排压力下，政府可能通过“能耗”等措施进行供给侧改革，需要关注是否发生阶段性冲刺，引发大宗商品价格进一步上涨。吨产品能耗大户：电解铝、硅铁（钢铁）、石墨电极、水泥、铜加工、烧碱、涤纶、黄磷、锌等；
        </p>
        <p className="col2">
          2）<span style={{ color: ThemeColor }}>能源替代</span>
          ：以风光、储能、氢能、新能源汽车为代表的的新能源行业，包括供应链上下游、制造端、运营端在内的全产业链都将受益于碳中和对投资的拉动；
        </p>
        <p className="col2">
          3）<span style={{ color: ThemeColor }}>节能提效</span>
          ：工业节能、建筑节能及节能设备将受益；
        </p>
        <p className="col2">
          4）<span style={{ color: ThemeColor }}>回收利用</span>
          ：再生资源的回收利用可以有效减少初次生产过程中的碳排放，如废钢、电池回收、垃圾分类及固废处理；
        </p>
        <p className="col2">
          5）<span style={{ color: ThemeColor }}>工艺改造</span>
          ：主要集中在电池技术升级、智慧电网、分布式电源、特高压、能源互联网、装配式等方面；
        </p>
        <p className="col2">
          6）<span style={{ color: ThemeColor }}>碳捕集</span>
          ：部分路径碳减排的难度较大，二氧化碳捕集、利用与封存可能作为“兜底”技术存在。目前来看成本处于高位，不同路线成本在700-1500元/吨风险分析：政策不及预期，技术路线发展不及预期，能源系统出现超预期事件。
        </p>

        <div
          className="col_t"
          style={{
            color: ThemeColor,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "0.2rem",
          }}
        >
          1. 碳中和：大重构
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            marginTop: "0.5rem",
          }}
        >
          <div
            style={{
              flex: 4,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              paddingRight: "0.3rem",
              justifyContent: "center",
            }}
          >
            <p className="col2" style={{ color: ThemeColor }}>
              1.1.发展的权利：
            </p>
            <p className="col2">
              大国博弈与利益统一站在全球视角，我们认为中国加快“碳达峰、碳中和”主要基于以下三方面推动：
            </p>
            <p className="col" style={{ color: ThemeColor }}>
              （1）“碳中和”是中国经济的内在需求——能源保障、产业转型在能源保障方面：
            </p>
            <p className="col">
              2020 年底，我国原油进口依赖度达 73%，天然气进口依赖度 也在
              40%以上；基于能源保障考虑，发展新能源具有必要性。与此同时，我国
              已在新能源领域建立起全球优势。根据麦肯锡测算，我国在太阳能电池板领域的
              国家表现远超美国，在所有行业对比中位列第一。
            </p>
            <p className="col">
              在产业转型方面：虽然“新冠疫情”对全球经济的负面影响正在逐步消除，但是
              仍有流动性泛滥、债务问题等未来潜在的风险点；中国经济已经取得了长足的进
              度，然而面对比如贸易摩擦、技术封锁等复杂的国际形势，做好自己显得尤为重
              要，科技创新和产业升级将是未来重要的发展方向，加快新产业的战略布局，产
              业结构调整的力度前所未有，步伐明显加快，在能源与资源领域、网络信息领域、
              先进材料与制造领域、农业领域、人口健康领域等出现科技革命的可能性较大。“碳减排”作为重要的抓手，通过“碳成本”这一要素的流动，推动我国产业结
              构性改革。
            </p>
          </div>

          <img
            style={{ width: "3.7rem" }}
            src={AliOss + `/new_version_0518/information/details_5/table_1.png`}
            alt=""
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            marginTop: "0.2rem",
          }}
        >
          <div
            style={{
              flex: 4,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              paddingRight: "0.3rem",
              justifyContent: "center",
            }}
          >
            <p className="col" style={{ color: ThemeColor }}>
              （2）“碳中和”的对立性——大国博弈、贸易摩擦：
            </p>
            <p className="col">
              部分发达国家其实此前已多次讨论过包括对中国在内的不实施碳减排限额国家
              的进口产品征收“碳关税”，但因经济与贸易依赖性、碳市场不成熟等原因而搁
              浅。根据 OECD 数据，2015 年我国对外出口约 6 亿吨 CO2，其中对美出口
              2.26 亿 吨，占比约 35%。假设国际对我国按 40
              美元/吨征收碳税，增加开支约 260 亿 美元；按 100 美元/吨，增加 650
              亿美元。假设我国碳排放成本全部内部化，2019 年我国碳排放 98.26
              亿吨，按碳价 100 美元/吨测算，需 9826 亿美元。
            </p>
            <p className="col">
              “排碳限制”的本质，是一种发展权的限制；而“碳关税”的本质，是应对贸易
              劣势的一种手段，而这种劣势，可能一部分是由实施碳减排后成本增加而造成的。站在我国的角度：“碳关税”既是贸易壁垒“压力”，也是产业结构升级的“动力”。
            </p>
          </div>

          <img
            style={{ width: "3.7rem" }}
            src={AliOss + `/new_version_0518/information/details_5/table_2.png`}
            alt=""
          />
        </div>

        <p className="col">
          为什么“新冠疫情”后，我国推动“碳中和”更加迅速？——增加国际声誉和话
          语权。2019 年我国碳排放量达 98.26 亿吨位列全球第一（人均碳排放和碳排放
          量/GDP 均相对较低），自 2005 年以来为全球碳排放总量最高的国家（加入世
          贸组织后，全球产业链分工变化所致）。近年来我国碳排放增速已有所放缓，但
          较为庞大的人口基数使得我国碳排放全球占比仍在持续提升，2019 年达
          28.76%。而针对“新冠疫情”源头问题，经常有部分西方国家和人员因政治原因公开抹黑
          中国。而加速推动“碳中和”将助力我国树立负责任的大国形象，在国际气候法
          律秩序构建中争取获得“话语权”，并掌握未来全球“游戏规则”的主动权和制
          定权。目前，全人类气候目标竞赛已经开启，根据 EnergyClimate
          机构推出的净零排 放竞赛计分卡，目前我国已处于第四梯队，位列全球第 28
          位。
        </p>

        <p className="col" style={{ color: ThemeColor }}>
          （3）“碳中和”的统一性：
        </p>
        <p className="col">
          全球难得的政策与利益一致点从全球来看，多数国家已更新
          NDC（国家自主贡献）目标。“碳中和”已成为
          全球大趋势。拜登上台后，美国重新加入《巴黎协定》，应对气候变化是拜登此次总统竞选的
          核心承诺之一，未来美国将在全球气候变化、新能源发展方面采取更多的措施。虽然前期中美在贸易和技术层面有着种种的不愉快，但是在应对全球气候变化方
          面，无论是中美还是全球，在碳中和方面，具有相同的利益和方向。
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            marginTop: "0.2rem",
            height: "3rem",
          }}
        >
          <div
            style={{
              flex: 4,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              paddingRight: "0.5rem",
              justifyContent: "center",
            }}
          >
            <p className="col2" style={{ color: ThemeColor }}>
              1.2.我国的碳减排将是一段艰苦的历程：
            </p>

            <p className="col">
              尽管全球越来越多的政府正在将碳中和目标纳入国家战略，但就具体目标而言，
              仍有区别。如欧盟在 2020 年 3
              月提交《气候中性法》，旨在从法律层面确保欧洲到2050
              年成为首个“气候中性”大陆。美国加州和中国分别制定了 2045 年 和 2060
              年“碳中和”目标。加州的目标包括削减所有温室气体排放，包括二氧
              化碳、甲烷等，并抵消其无法削减的排放量，而中国的目标仅针对二氧化碳。我国碳排放下降斜率更大。由于发展阶段的不同，发达国家已普遍经历“碳达峰”，为达到
              2050 年“碳中和”，更大程度上只是延续以往的减排斜率。而我国碳排
              放总量仍在增加，需要经历 2030 年前“碳达峰”，然后走向 2060
              年前“碳中
              和”。从实现“碳中和”的年限来看，比发达国家时间更紧迫，碳排放下降的斜率更大。
            </p>
          </div>

          <img
            style={{ height: "2.5rem" }}
            src={AliOss + `/new_version_0518/information/details_5/table_3.png`}
            alt=""
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            height: "3rem",
          }}
        >
          <img
            style={{ height: "2.5rem" }}
            src={AliOss + `/new_version_0518/information/details_5/table_4.png`}
            alt=""
          />
          <div
            style={{
              flex: 4,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              paddingLeft: "0.5rem",
              justifyContent: "center",
              verticalAlign: "middle",
            }}
          >
            <p
              className="col"
              style={{ height: "100%", display: "flex", alignItems: "center" }}
            >
              尽管全球越来越多的政府正在将碳中和目标纳入国家战略，但就具体目标而言，
              仍有区别。如欧盟在 2020 年 3
              月提交《气候中性法》，旨在从法律层面确保欧洲到2050
              年成为首个“气候中性”大陆。美国加州和中国分别制定了 2045 年 和 2060
              年“碳中和”目标。加州的目标包括削减所有温室气体排放，包括二氧
              化碳、甲烷等，并抵消其无法削减的排放量，而中国的目标仅针对二氧化碳。我国碳排放下降斜率更大。由于发展阶段的不同，发达国家已普遍经历“碳达峰”，为达到
              2050 年“碳中和”，更大程度上只是延续以往的减排斜率。而我国碳排
              放总量仍在增加，需要经历 2030 年前“碳达峰”，然后走向 2060
              年前“碳中
              和”。从实现“碳中和”的年限来看，比发达国家时间更紧迫，碳排放下降的斜率更大。
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            marginTop: "0.2rem",
            height: "3rem",
          }}
        >
          <div
            style={{
              flex: 4,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              paddingRight: "0.5rem",
              justifyContent: "center",
            }}
          >
            <p className="col2" style={{ color: ThemeColor }}>
              1.3.“碳中和”对我国意味着什么？
            </p>

            <p className="col">
              在碳排放量结构方面，目前发电已成为占比最高的部门。2019
              年我国碳排放量 115 亿吨，其中发电碳排放量 45.69 亿吨 CO2，占比
              40%；工业燃烧碳排放量 33.12 亿吨 CO2，占比
              29%。各大碳排放重点国家中，除美国外，碳排放占比最高的均为发电部门（美国为交通，占比
              45%）。因此，要实现“碳中和”，能源转型首当其冲。广义的能源板块包括能源的产生、转换、消费过程，用途包括驱动、产热等，是
              大多数温室气体排放的根源。除此之外，交通、工业过程和农业也是温室气体排
              放的主要来源。
            </p>
          </div>

          <img
            style={{ height: "2.5rem" }}
            src={AliOss + `/new_version_0518/information/details_5/table_5.png`}
            alt=""
          />
        </div>

        <p className="col2" style={{ color: ThemeColor }}>
          从微观角度看，工业企业碳核算边界内主要包含三个方面：
        </p>
        <p className="col2">1）燃料在氧化燃烧过程中产生的温室气体排放；</p>
        <p className="col2">
          2）在生产、废弃物处理处置过程中除燃料燃烧之外的物理或化学变化造成的温
          室气体排放；
        </p>
        <p className="col2">
          3）企业输入/出的电力、热力所对应的电力、热力生产环节产生的二氧化碳排放。这意味着我们需要从燃料燃烧/非燃烧过程着手，向可再生能源转变；或通过节
          能降耗的措施减少二氧化碳的排放。
        </p>
      </div>
    </div>
  );
};

export default ConsultSub5;
