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
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    store.subscribe(() => {
      setAmount(store.getState().amount);
    });
  }, []);
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
              在陡峭的碳排放量下降曲线背后，是规模化的经济结构转型。这意味着我国当前
              经济结构下相当规模的存量资产将失去原有功能。煤电资产搁浅的问题，表明了转型需经历阵痛。一方面，从能源结构和自身禀赋
              来看，我国的能源消耗以煤为主，煤电发电量在 2019 年占总发电量的
              65%，远 超发达国家；另一方面，我国煤电机组的平均服役年限仅 12
              年，而发达国家普 遍达到 40
              年以上。更快的碳排放量下降斜率，意味着将会有大量的未达到退役
              年限的煤电资产提前“搁浅”。根据牛津大学 2017
              年研究，在不同的情景假设下，我国煤电搁浅资产规模估算 可能高达
              30,860-72,010 亿元（合 4,490-10,470 亿美元），相当于中国 2015 年
              GDP 的
              4.1-9.5％。由于近年来我国仍在新建煤电机组，实际搁浅规模可能更大。
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

        <div
          className="col_t"
          style={{
            color: ThemeColor,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "0.5rem",
          }}
        >
          2. 六大碳减排路线：供给侧改革、能源革命与产业升级
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
            <p className="col2">
              我们从“能源碳”和“物质碳”两方面出发，构建了“碳中和”的实现路径。
            </p>
            <p className="col2" style={{ color: ThemeColor }}>
              一、能源碳
            </p>
            <p className="col2">
              1）能源供给侧：提高可再生能源比例，构建零碳电力为主、氢能为辅的能源结
              构，同时大力发展储能以保障电网平衡。
            </p>
            <p className="col2">
              2）能源需求侧：分行业看，主要是工业、交通、建筑三个部门；按实现路径划
              分，主要有终端电气化、源头减量、节能提效三种途径。
            </p>
            <p
              className="col2"
              style={{ color: ThemeColor, marginTop: "0.5rem" }}
            >
              二、物质碳物质碳与工业过程息息相关，因此涉及到大规模的工艺改变和原材料替换。
            </p>
            <p
              className="col2"
              style={{ color: ThemeColor, marginTop: "0.5rem" }}
            >
              2.1、 源头减量：碳减排驱动的供给侧改革
            </p>
            <p className="col">
              （1）2021 年 1 月 26
              日，国务院新闻发布会披露，工信部与国家发改委等相关
              部门正在研究制定新的产能置换办法和项目备案的指导意见，逐步建立以碳排放、
              污染物排放、能耗总量为依据的存量约束机制，确保 2021
              年全面实现钢铁产量 同比的下降。
            </p>
            <p className="col" style={{ color: ThemeColor }}>
              促进钢铁产量的压减主要从以下四个方面：
            </p>
            <p className="col" style={{ color: ThemeColor }}>
              ● 严禁新增钢铁产能
            </p>
            <p className="col">
              对确有必要建设的钢铁冶炼项目需要严格执行产能置换
              的政策，对违法违规新增的冶炼产能行为将加大查处力度，强化负面预警。同时
              不断地强化环保、能耗、安全、质量等要素约束，规范企业生产行为。
            </p>
            <p className="col" style={{ color: ThemeColor }}>
              ● 完善相关的政策措施
            </p>
            <p className="col">
              根据产业发展的新情况，工信部和国家发改委等相关
              部门正在研究制定新的产能置换办法和项目备案的指导意见，将进一步指导巩固
              钢铁去产能的工作成效。
            </p>
            <p className="col" style={{ color: ThemeColor }}>
              ● 推进钢铁行业的兼并重组
            </p>
            <p className="col">
              推动提高行业集中度，推动解决行业长期存在的
              同质化竞争严重，资源配置不合理，研发创新协同能力不强等问题，提高行业的
              创新能力和规模效益。
            </p>
            <p className="col" style={{ color: ThemeColor }}>
              ● 坚决压缩钢铁产量
            </p>
            <p className="col">
              结合当前行业发展的总体态势，着眼于实现碳达峰、碳
              中和阶段性目标，逐步建立以碳排放、污染物排放、能耗总量为依据的存量约束
              机制，研究制定相关工作方案，确保 2021
              年全面实现钢铁产量同比下降。回顾上一轮供给侧改革，以差别化电价、阶梯电价为代表的市场化政策，以及清
              查中频炉（地条钢）为代表的行政手段（包括后期的环保督查），有效促进了钢
              铁行业落后产能淘汰，也使钢铁价格飙升。
            </p>
            <p className="col" style={{ color: ThemeColor }}>
              目前，政策尚处于讨论中，我们需要进一步进行分析：
            </p>
            <p className="col">
              1）虽然碳减排是一场“马拉松”，但是指标的设定、路径的选择具有显著的政
              策因素，而目前在其他减排路径经济技术较为一般或时间成本较高的情况下，短
              期压减产能或许是一条行之有效的措施；{" "}
            </p>
            <p className="col">
              2）目前，生态环境部主管碳减排相关事宜，从环保督察手段来看，历史已证明
              其有效性；
            </p>
            <p className="col">
              3）各地、各行业都将制定自己的减排目标和减排路径，不可避免有排名、比较
              的因素。
              综上所述，我们对通过压减落后产能来降低能耗进而减少二氧化碳排放的政策手
              段持乐观态度。当然具体仍需要待政策最终落地，具体评估减排指标与减排路线。
            </p>
            <p className="col">
              （2） 2021 年 2 月 4
              日，内蒙发布《调整部分行业电价政策和电力市场交易政
              策》，对部分行业电价政策和电力市场交易政策进行调整。严格按照国家规定对
              电解铝、铁合金、电石、烧碱、水泥、钢铁、黄磷、锌冶炼 8
              个行业实行差别电
              价政策，继续对电解铝、水泥、钢铁行业执行阶梯电价政策。2021 年 2 月
              24 日，甘肃省发布《高耗能行业执行差别电价管理办法通知》， 要求
              2021 年 3 月 31 日前完成本地区首次执行差别电价企业确认工作。针对钢
              铁、铁合金、电解铝、锌冶炼、电石、烧碱、黄磷、水泥等八个高耗能企业，按
              照允许类、限制类、淘汰类，执行差别化电价。从近期政策来看，以碳排放、能耗总量、污染物排放为依据的存量约束机制正在
              收紧。电网企业因实施差别电价政策而增加的加价电费收入全额上缴省级国库，纳入省
              级财政预算，实行“收支两条线”管理，统筹用于支持经济结构调整和节能减排
              工作。对水泥行业、钢铁行业因实施差别电价政策增加的电费收入，10%留电网
              企业用于弥补执行差别电价增加的成本；90%上缴省级国库，纳入省级财政预算，
              统筹用于支持行业技术改造和转型升级，促进经济结构调整。
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            // marginTop: "0.2rem",
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
            <p className="col">
              在“碳达峰”、“碳中和”目标的倒逼之下，“能耗指标”将成为重要的抓手，
              2021
              年全球经济复苏，大宗商品价格上涨动力较强，叠加“碳中和”目标下的
              产能压降手段，高能耗产品供给侧约束后，价格有可能进一步提升。我们根据能耗指标，梳理了高耗能类型产品：电解铝、硅铁、电炉锰铁、石墨电
              极、烧碱、涤纶、铜等，都有可能成为限制对象。
            </p>
          </div>

          <img
            style={{ width: "3rem" }}
            src={AliOss + `/new_version_0518/information/details_5/table_6.png`}
            alt=""
          />
        </div>
        <div
          className="col2"
          style={{ color: ThemeColor, marginTop: "0.2rem" }}
        >
          2.2、 能源替代：
        </div>
        <p className="col">
          新能源长期发展的盛宴现有的能源系统中，煤、石油是主要力量。据统计年鉴数据，2019
          年我国能源 消费总量 48.7
          亿吨标煤，其中煤炭、石油、天然气、一次电力及其他能源占比 分别为
          57.7%、18.9%、8.1%、15.3%。从用途来看，石油主要用于终端消费（交通、工业），煤炭主要用于中间消费（火
          力发电），天然气主要用于终端消费（交通、工业、建筑部门）。回顾人类对能源利用的探索历程，实际上是从利用核外电子到利用核内电子的过
          程，但这恰是宇宙、物质、能源发展的逆过程。二次能源中，对电能的利用是一项伟大的革命，现已成为能源利用的枢纽，从历
          史上看，“电”也引发了多次生产技术革命。而氢能同作为二次能源，具有可存
          储的优势，但也因制备和使用效率稍逊而经济性较差，但从能量循环的角度看，
          可以有助于碳的减排。锂、氢能同作为可行且具有前景电子存储载体，其重要的原理特点在于，Li+与
          H2
          都是小粒子，有助于提升物质/能源转换便利性。碳中和的最重要目的就是减少含碳温室气体的排放，采用合适的技术固碳，最终
          达到平衡。为达到碳中和，我们预计到 2060
          年，清洁电力将成为能源系统的配置中枢。供
          给侧以光伏+风电为主，辅以核电、水电、生物质发电；需求侧全面电动化，并
          辅以氢能。
        </p>
        <p className="col2" style={{ color: ThemeColor }}>
          2.2.1、能源供给侧：可再生能源主导总量层面：
        </p>
        <p className="col" style={{ color: ThemeColor }}>
          核心假设：
        </p>
        <p className="col">
          （1）我们采用“自上而下”的测算方法，假设未来 GDP 增速和发电量增速从“十
          三五”末期的 5%逐步下降到 2.5%；而由于节能降耗的原因，未来单位 GDP 能
          耗逐步下降，电力消费弹性系数将小于 1。{" "}
        </p>
        <p className="col">
          （2）假设未来我国总发电量和 GDP 保持同步增长态势且增速一致，假设 GDP
          和总发电量增速分别为 2021-2030 年 4%、2031-2040 年 3%、2041-2060 年
          2.5%。
        </p>
        <img
          style={{ width: "3rem", margin: "0.2rem auto", display: "block" }}
          src={AliOss + `/new_version_0518/information/details_5/table_7.png`}
          alt=""
        />
        <p className="col">
          根据我们的上述假设，以2019年发电量7.22万亿千瓦时为基础，2030年发电量达到11.9万亿千瓦时（和部分机构的预测数据基本一致），2060年发电量进一步达到32.71万亿千瓦时。结构层面：在总发电量预测的基础上，我们将进一步对不同发电方式未来的发电量及相应的装机需求进行拆分。{" "}
        </p>
        <p className="col" style={{ color: ThemeColor }}>
          （1）火电：
        </p>
        <p className="col">
          装机量方面，在2030年碳达峰基础上，在经济发展的过程中2020-2030年仍需要有一定规模的火电装机支撑发电量增长，因此我们假设火电装机在2020-2030年间每年仍将维持增长态势，但增量逐步减少直至2030年无新增火电装机；2030-2060年，火电装机每年将逐步退出电力市场，直至2060年碳中和时存量火电装机清零。利用小时数方面，随着火电装机的逐步减少，未来火电将更多用于调峰平抑发电曲线，因此我们假设火电利用小时数从2020年的4080小时逐步降低至2030年的3080小时，后续则保持平稳。发电量方面，在装机量和利用小时数假设的基础上，火电的发电量占比将从2020年的68%逐步减少至2060年碳达峰时的0%。
        </p>
        <p className="col" style={{ color: ThemeColor }}>
          （2）水+核能+生物质：
        </p>
        <p className="col">
          假设未来水+核能+生物质整体的发电量情况保持稳定，2020-2060年，在1.7万亿千瓦时的基础上每年增长2%。{" "}
        </p>
        <p className="col" style={{ color: ThemeColor }}>
          （3）光伏+风电：
        </p>
        <p className="col">
          在火电发电量逐步减少，水+核能+生物质发电量保持相对稳健增长的背景下，光伏和风力发电将逐步成为未来最重要的发电方式。发电量占比方面，我们假设光伏+风电发电量中光伏发电的占比维持在40%；利用小时数方面，假设风电、光伏年利用小时数分别维持在2400h、1300h；装机量方面，在总发电量发展、其他发电方式发电量、光伏发电量占比、以及光伏和风电利用小时数等预测的基础上，我们测算得出2030年风电、光伏新增装机量分别为1.53、1.88亿千瓦，2060年风电、光伏新增装机量进一步达到为2.19、2.7亿千瓦。{" "}
        </p>
        <p className="col" style={{ color: ThemeColor }}>
          （4）储能：
        </p>
        <p className="col">
          由于光伏、风电的不稳定性，必须辅以必要的储能以平抑发电波动。假设储能容配比从2020年的10%逐步提升至2060年的100%，备电时长从2020年的2h逐步提升至2060年的4h，则储能每年的新增容量将从2020年的0.24亿千瓦时增长至2060年的19.55亿千瓦时。需要注意的是，我们对光伏、风电新增装机量的预测源自对部分关键变量的核心假设，如果其未来发生变化（如火电利用小时降低超预期、水+核能+生物质发电量降低、储能配套设施建设超预期等），则未来光伏、风电每年的新增装机量或将超预期增长。{" "}
        </p>
        <img
          style={{ width: "3rem", margin: "0.2rem auto", display: "block" }}
          src={AliOss + `/new_version_0518/information/details_5/table_8.png`}
          alt=""
        />
        <p className="col">
          投资层面：在每年光伏、风电新增装机量的测算基础上，我们将进一步测算可再生能源发电
          设施建设所需要的投资规模。
        </p>
        <p className="col">
          预测光伏、风电、储能的单位投资成本保持下降趋势，到 2030 年分别达 到
          0.371 元/瓦、5.63 元/瓦、1.03 元/瓦时，到 2060 年分别达到 1.35 元/瓦、
          4.5 元/瓦、0.5
          元/瓦时。结合我们对光伏、风电、储能新增装机预测，可以得到 2021-2060
          年每年在可
          再生能源发电端所需要的投资规模。我们预测“碳中和”将为可再生能源发电领
          域累计增加约 84 万亿元人民币的新增投资，其中光伏、风电装机建设投资规模
          约 60 万亿元，储能设施投资规模约 24
          万亿元。氢能在能源供给侧脱碳的过程中，氢能与电能同为重要的二次能源，扮演着重要作用，
          如重工业（高温-超高温环境）、道路交通（氢燃料汽车）、大规模储能、船运
          等。目前，电解水制氢的成本仍较高。根据能源转型委员会的预测，随着电解槽成本
          下降，未来电解水制氢将成为主流方法。要实现“零碳”排放，电解水所需的电
          力也必须来自于可再生能源，由此产生的氢气称为“绿氢”。
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            // marginTop: "0.2rem",
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
              海上风电制氢（直接在风机附近制氢）是海上风电未来发展的重要方向，主要有两个原因：{" "}
            </p>
            <p className="col">
              1）随着海上风电离岸越来越远，外送电缆投资成本也逐步攀升，而利用风机所
              发电力将水电解产生氢气后，通过比电缆便宜得
              多的管道将氢气送到岸上，甚至 有些海域有现成的天然气管道可供使用；
            </p>
            <p className="col">2）氢气可以储存，而电力难以储存。 </p>
          </div>

          <img
            style={{ width: "3rem" }}
            src={AliOss + `/new_version_0518/information/details_5/table_9.png`}
            alt=""
          />
        </div>

        <p className="col2" style={{ color: ThemeColor }}>
          2.2.2、能源需求侧：
        </p>
        <p className="col">
          终端电气化由于能源供给侧向绿色电力转变，所以需求侧的脱碳首先意味着终端电气化。根据国网能源研究院
          2019 年 12 月的研究成果，终端电气化率在 2050 年达到
          50%以上，其中工业、建筑、交通部门分别达到 52%、65%、35%。
        </p>
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
              flexDirection: "column",
              height: "100%",
              paddingRight: "0.3rem",
              justifyContent: "center",
            }}
          >
            <p className="col">
              工业部门电气化钢铁、电解铝、水泥等行业是能耗大户，也是碳排放大户。钢铁行业的电气化路径主要是从高炉转向电炉，电炉及其设备、耗材仍具有较好
              的投资机会。根据钢协数据，2019 年我国钢铁行业
              90%以上的产能采用高炉 （BOF）技术，而电炉技术（EAF）仅占生产总量的
              9%。特别是以废钢为原料 的短流程炼钢技术，碳排放量仅 0.4
              吨二氧化碳/吨钢，若使用绿色电力为电炉 供能，则碳排放量可降为
              0。水泥的生产过程中需要将水泥窑加热到 1600
              摄氏度以上，目前电炉的使用尚未
              商业化，投资成本较高。目前较为可行的方法是用沼气、生物质替代化石燃料。
              上市公司股东减持节税(核定征收2.5%-3.5%),股权转让节税(3.5%),享受政府优惠政策，方案成熟，有众多成功案例，综合税率低至5.5%-7%。自然人股东减持上市公司股票政府扶持高达38%。
            </p>
          </div>

          <img
            style={{ width: "3rem" }}
            src={
              AliOss + `/new_version_0518/information/details_5/table_10.png`
            }
            alt=""
          />
        </div>

        <p className="col">
          从建筑属性来看，可以分为公共建筑、城镇居民建筑和农村居民建筑。从用途来
          看，供热、制冷、烹饪是中国建筑部门的主要能源消费来源。建筑部门的电气化
          率仍较低，2017 年仅为 28%。目前，制冷、照明、家电已经实现了
          100%电气化，供暖和烹饪的电气化推进较
          为缓慢。我国北方城镇普遍实行集中供暖，主要热源为燃煤热电联产和燃煤锅炉。自
          2017 年以来，我国北方地区推行“煤改气”、“煤改电”，对建筑部门的电
          气化有一定的推动作用。炊事方面，根据清华大学建筑电气化接受程度调研，一方面，住宅炊事用能逐渐
          向公建转移，应关注公建餐厅电气化；另一方面，住宅炊事电气化最大难点在于
          改变用户习惯。总之，建筑部门电气化需综合考虑公共部门与居民住宅，也要考虑南北方气候差
          异。随着人民生活水平提高，家用电器的数量和使用强度呈上升趋势。未来采暖
          电气化应逐步替代燃煤锅炉，炊事电气化应重点关注餐厅电气化和住宅炊事习惯引导。
        </p>
        <div className="col" style={{ color: ThemeColor, margin: "0.1rem 0" }}>
          交通部门电气化交通部门的电气化具有三个方面的含义：
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "3rem" }}
            src={
              AliOss + `/new_version_0518/information/details_5/table_11.png`
            }
            alt=""
          />
          <div
            style={{
              flex: 4,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              paddingLeft: "0.3rem",
              justifyContent: "center",
            }}
          >
            <p className="col">
              1）道路交通（小型、轻型）：绿色电力为基础的电动车（电池），配套充电桩、换电站；
            </p>
            <p className="col">
              2）道路交通（重型）、铁路或海运：氢能（或氨气），配套加氢站；
            </p>
            <p className="col">
              3）航空：生物航空柴油为主要方向。我们预计，乘用车销量在 2040
              年见顶，电动车的渗透率在 2045 年达到 100%， 则电动车的销量将在
              2045 年达到 3600 万辆/年。假设单车售价保持下行趋势， 在 2060
              年达到 12 万元/辆左右。则电动车领域累计将带来 130 万亿人民币的累
              计新增投资。
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0.1rem 0",
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
            <p className="col">
              随着电动车保有量的提升，假设车桩比在 2030 年达到 1：1，则 2060
              年充电桩 总数将超过 5
              亿个。综合考虑充电桩的新建需求和更换需求，累计新增投资达到 18.15
              万亿元人民币。氢能燃料电池将主要用于重型道路交通（客车、货车）。假设轻型、中型、大型
              货车的年销量保持在 150、20、70 万辆，燃料电池渗透率在 2045 年达到
              40%、 60%、80%，而后保持该渗透率；轻型、中型、大型客车的年销量保持
              30、7、 7 万辆，燃料电池渗透率在 2045 年达到
              30%、50%、70%，而后保持该渗透率， 则累计新增投资达到 29
              万亿元人民币。{" "}
            </p>
          </div>

          <img
            style={{ width: "3rem" }}
            src={
              AliOss + `/new_version_0518/information/details_5/table_12.png`
            }
            alt=""
          />
        </div>
        <p className="col2" style={{ color: ThemeColor }}>
          2.2.2、回收利用：
        </p>
        <p className="col">
          绿色低碳的循环经济再生资源的回收利用可以有效减少初次生产过程中的碳排放。目前来看，市场潜力主要集中在三大领域：
        </p>
        <p className="col" style={{ color: ThemeColor }}>
          1）高耗能行业（钢铁、水泥、铝和塑料）的产品再生；
        </p>
        <p className="col" style={{ color: ThemeColor }}>
          2）废弃物（秸秆、林业废弃物、生活垃圾）的能源化利用；
        </p>
        <p className="col" style={{ color: ThemeColor }}>
          3）动力电池回收利用。
        </p>
        <p className="col"> 废钢利用：</p>
        <p className="col">
          据世界钢铁协会预测，从中长期来看，过去二十年中国钢材消费量的迅速增长，
          将带动中国国内的废钢资源快速增长。在未来数年里，中国国内的废钢供应量可满足中国的炼钢需求。钢铁行业的电气化趋势（电炉代替高炉）与废钢的利用属于同一路径。对比发达
          国家，我国的电炉钢产量占比处于较低水平。
        </p>
        <p className="col">再生铝：</p>
        <p className="col">
          电解铝的碳排放来源主要包括：电力消耗、碳阳极消耗、阳极效应导致全氟化碳
          排放。再生铝可以有效减少初次生产的能耗与碳排放，目前我国的再生铝产量占
          比同样处于较低水平。
        </p>
        <p className="col">塑料循环利用：</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.1rem",
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
            <p className="col">
              在化工行业的数千种产品中，仅氨、甲醇和
              HVC（高价值化学品，包括轻烯烃
              和芳烃）三大类基础化工产品的终端能耗总量就占到该行业的四分之三左右。据上海市再生资源回收利用行业协会披露，2019
              年我国产生废塑料 6300 万吨， 回收量 1890 万吨，回收率仅
              30%。根据能源转型委员会研究，2050 年，中国的塑料需求中
              52%可由回收再利用的
              二次塑料提供，初级塑料产量与国际能源署的照常发展情景中的回收率水平下的
              产量相比减少 45%，HVC 和甲醇的需求分别较照常发展情景大幅减少 40%和
              18%。
            </p>
          </div>

          <img
            style={{ width: "3rem" }}
            src={
              AliOss + `/new_version_0518/information/details_5/table_13.png`
            }
            alt=""
          />
        </div>
        <p className="col"> 动力电池回收：</p>
        <p className="col">
          磷酸铁锂电池回收后两大利用途径：梯次利用与拆解回收，这两个途径并不是排
          斥关系，而是互补关系。三元正极材料回收与再生的技术路线主要分以下两种形式:物理修复再生，对只是失去活性锂元素的三元正极材料，直接添加锂元素并通过
          高温烧结进行修复再生；对于严重容量衰减、表面晶体结构发生改变的正极材料，
          进行水热处理和短暂的高温烧结再生；冶金法回收，主要有火法、湿法、生物浸出法三种方式。其中火法耗能高，会产
          生有价成分损失，且产生有毒有害气体；生物浸出法处理效果差，周期较长，且
          菌群培养困难；相比之下，湿法具有效率高、运行可靠、能耗低、不产生有毒有
          害气体等有毒，因此应用更普遍。对于三元电池，我们预测：2019
          年预计可回收三元正极 0.13 万吨，随后逐年递 增至 2030 年的 29.25 万吨。
        </p>
        <p className="col">
          1）NCM333：随着 2014 年安装的 NCM333 三元电池于2019 年开始退役，2019
          到 2022 年 NCM333 回收量逐步增加，2022 年达峰值 1.28 万吨，随后由于
          NCM333 的退出而逐步减少，至 2026 年回收量归零；
        </p>
        <p className="col">
          {" "}
          2）NCM523：2016 年开始进入市场的 NCM523 于 2021 年开始报废回收，随后
          回收量于 23-28 年稳定在 4-6 万吨之间，预计 2030 年上涨至 10.78 万吨；
        </p>
        <p className="col">
          {" "}
          3）NCM622：2017 年进入市场的 NCM622 于 2022
          年开始报废回收，回收量小幅上涨，直到 28 年上涨幅度增加，预计 30
          年可回收 6.03 万吨；
        </p>
        <p className="col">
          {" "}
          4）NCM811：2018 年进入市场的 NCM811 于 2023 年开始报废回收，预计 30
          年可增长至 12.44 万吨。预计 30 年可回收锂 2.09 万吨，镍 11.47 万吨，钴
          2.80 万吨，锰 3.23 万吨。
        </p>
        <p className="col"> 对于磷酸铁锂电池，我们预测：</p>
        <p className="col"> 1）2030 年，报废铁锂电池将达到 31.33 万吨；</p>
        <p className="col">
          2）随着梯次利用逐年上升，预计 2030 年可梯次利用的铁锂电池达
          109.93GWh， 共 25.06 万吨；其余 6.27 万吨进行拆解回收，可回收锂元素
          0.28 万吨；3）2027 年梯次利用的磷酸铁锂电池将在 2030
          年达到报废标准，此时拆解回收 8.604 万吨，可回收锂元素 0.379
          万吨。二者总计可以回收锂元素 0.65
          万吨。市场空间方面，根据我们的测算：三元电池回收：在金属处于现价（
          ）时，2030 年三元电池锂/镍/钴/ 锰回收市场空间预计
          103.67/154.24/85.80/5.29
          亿元。磷酸铁锂电池回收：中性假设条件下（梯次利用残值率 30%），2030
          年梯次利用市场空间预计 180.93
          亿元。在锂金属处于现价（2021/1/22）时，2030 年磷酸铁锂电池锂元素回收
          市场空间预计 32.38 亿元。
        </p>
        <div
          className="col2"
          style={{ color: ThemeColor, marginTop: "0.3rem" }}
        >
          2.4、 节能提效：
        </div>
        <p className="col">
          低碳社会的护航者工业节能：2020年吨新型干法水泥熟料综合能耗已下降至85kg标煤，较2005年下降35%。吨钢综合能耗下降至
          552 克标煤，较 2005 年下降
          20%以上。中国钢铁行业还有一定的节能技术推广、能效提高的空间。如余热回收（TRT
          等技术）、高级干熄焦技术（CDQ）等。对于水泥行业来说，2020 年底已有
          80%的水泥窑利用余热发电，总装机 4850 兆瓦。同时，现有的商业模式（DBB
          模式、EPC 模式、BOT 模式）较为成熟， 将推动我国实现“2035
          年熟料生产完全不依赖外部电力”的目标。针对化工行业，由中国石油和化学工业联合会主办的石油和化工行业重点耗能产
          品能效“领跑者”标杆企业评选已持续多年，2018 年行业单位能耗持续下降，
          万元收入耗标煤同比下降 10%，电石、纯碱、烧碱、合成氨等重点产品单位综
          合能耗同比分别下降 2.18%、0.6%、0.51%和 0.69%。
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0.1rem 0",
          }}
        >
          <img
            style={{ width: "3rem" }}
            src={
              AliOss + `/new_version_0518/information/details_5/table_14.png`
            }
            alt=""
          />
          <div
            style={{
              flex: 4,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              paddingLeft: "0.3rem",
              justifyContent: "center",
            }}
          >
            <p className="col">
              建筑能效提升：根据国务院新闻办公室《新时代的中国能源发展白皮书》，截止
              2019 年底，我 国累计建成节能建筑面积 198
              亿平米，占城镇既有建筑面积比例超过 56%。推
              动既有居住建筑节能改造，提升公共建筑能效水平，是建筑领域节能的重要途径。在居民制冷、取暖领域，热泵技术可以有效利用空气热能，较现有的壁挂炉、电加热等方式更节能。节能设备功率半导体
              IGBT（绝缘栅双极型晶体管）的应用，可以有效提升能效水平，尤其是在家电（变频家电）和工业（工业控制和自动化）领域，两者占
              IGBT 下游 需求的 47%左右。根据产业在线统计，2013
              年变频空调标准颁布实施，空调的变频占有率提升超 过了 6
              个百分点；2016 年 10 月份冰箱新标准实施，2017 年冰箱的变频化率迅
              速提高了 10%；洗衣机新标准在 2018 年 10 月推出，2019
              年变频洗衣机的市 占率较推出前大幅增加了 8
              个百分点。未来随着能效要求的进一步提升，以 IGBT
              为核心的变频领域前景广阔。
            </p>
          </div>
        </div>

        <div
          className="col2"
          style={{ color: ThemeColor, marginTop: "0.3rem" }}
        >
          2.5、 工业过程脱碳与工艺变革：
        </div>
        <p className="col">
          {" "}
          工艺变革除了能源使用（主要是化石燃料燃烧及电力/热力使用），工业过程碳排放也是
          重要的二氧化碳来源，2017 年占比
          13%。工业过程碳排放与各个行业采用的生产工艺直接相关。
        </p>
        <p className="col">
          {" "}
          （1）如钢铁行业：含碳原料（电极、生铁、直接还原铁）和溶剂的分解和氧化；
        </p>
        <p className="col">
          {" "}
          （2）电解铝：碳阳极消耗、阳极效应导致全氟化碳排放；
        </p>
        <p className="col">
          {" "}
          （3）水泥：污水污泥等废弃物里所含有的非生物质碳的燃烧、原材料碳酸盐分
          解产生的二氧化碳排放、生料中非燃料碳煅烧。
        </p>
        <p className="col" style={{ color: ThemeColor }}>
          {" "}
          相比于“能源碳”，“过程碳”的去除更加困难。原因在于：
        </p>
        <p className="col">
          {" "}
          （1）生产工艺深度整合，对工艺过程的某一部分的改变都伴随着过程其他部分
          的改变；
        </p>
        <p className="col">
          {" "}
          （2）生产设施的使用寿命很长，通常超过 50 年（定期维护）。改变现有场地
          的工艺需要昂贵的重建或改造；
        </p>
        <p className="col">
          （3）大宗商品全球交易，水泥、钢铁、氨和乙烯是大宗商品，在采购决策中，
          成本是决定性因素。除水泥外，这些产品都在全球范围内进行交易。一般来说，
          在所有四个部门中，外部性都没有被考虑在内，而且还没有为可持续或脱碳产品
          支付更多费用的意愿。
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0.1rem 0",
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
            <p className="col">
              随着“碳中和”的推进，短流程钢的产量占比将逐步提升。对于剩余长流程钢来说，可以采用基于工艺改造的脱碳路线，如基于氢气的直接还原铁（DRI）、电
              解法炼钢、生物质炼钢、碳捕集与封存（CCS）。水泥生产过程中，由于石灰石分解产生的二氧化碳排放占到总量的
              60%，因此
              将不可避免用到碳捕集与封存（CCS）。其次，原料替代（粉煤灰、钢渣）等替
              代品已被广泛使用，其他如氧化镁、碱/地质聚合物粘合剂等同样具备潜力。
            </p>
          </div>

          <img
            style={{ width: "3rem" }}
            src={
              AliOss + `/new_version_0518/information/details_5/table_15.png`
            }
            alt=""
          />
        </div>
        <div
          className="col2"
          style={{ color: ThemeColor, marginTop: "0.3rem" }}
        >
          2.6、 CCUS：
        </div>
        <p className="col">
          零排放“兜底”技术由于工艺替代的困难，“物质碳”在一定程度上不可避免，特别是在水泥、钢铁、
          化工等重工业领域。也即如果不采用
          CCUS，这些行业几乎不可能实现净零排放。二氧化碳捕集、利用与封存（CCUS）是指将二氧化碳从排放源中分离后或直接
          加以利用或封存，以实现二氧化碳减排的工业过程。
        </p>
        <p className="col">碳捕集的主要应用领域包括：</p>
        <p className="col"> （1）煤气化制氢以及甲烷重整制氢过程；</p>
        <p className="col"> （2）工业部门的化石燃料燃烧过程；</p>
        <p className="col"> （3）化工原料相关碳排放和水泥生产的过程排放等；</p>
        <p className="col">
          （4）电力部门中的应对短期和季节性峰值的火力发电。2019 年中国共有 18
          个捕集项目在运行，二氧化碳捕集量约 170
          万吨；12个地质利用项目运行中，地质利用量约 100 万吨；化工利用量约 25
          万吨、生物利用 量约 6 万吨。在 CCUS
          捕集、输送、利用与封存环节中，捕集是能耗和成本最高的环节。二
          氧化碳排放源可以划分为两类：一类是高浓度源（如煤化工、炼化厂、天然气净化厂等），另一类是低浓度源（如
          燃煤电厂、钢铁厂、水泥厂等）。高浓度源的捕集成本大大低于低浓度源。捕集环节：典型项目（低浓度燃煤电厂）的成本约在
          300-500 元/吨；运输环节：罐车运输成本约为 0.9-1.4
          元/吨/公里，管道运输成本约为 0.9-1.4
          元/吨/公里；利用封存环节：驱油封存技术成本约在 120-800
          元/吨，同时可以提高石油采收 率。咸水层封存的成本约为 249 元/吨。
        </p>
        <div
          className="col_t"
          style={{
            color: ThemeColor,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "0.5rem",
          }}
        >
          3、 投资观点：快与慢、短与长
        </div>
        <p className="col">
          {" "}
          通过构建“碳中和”实现框架，我们跟随全社会碳足迹，总结出各个领域的不同
          的路径。当然，由于技术、成本、实施条件的差异，不同的路径之间成熟度差异
          较大。
        </p>
        <p className="col">
          目前比较成熟的路径有：工业领域的钢铁电炉、废钢利用、水泥协同处置、再生铝等，道路交通领域的电动车与充电桩，能源领域的清洁能源，建筑领域的电气
          化与空气热泵、装配式建筑等，以及消费侧的绿色出行、垃圾分类等；
        </p>
        <p className="col">
          {" "}
          处于起步阶段的路径有：工业领域的压减、转移产能，交通领域的燃料电池、氢能、电池回收等，能源领域的智慧电网、弃风弃光利用、火电产能压减等；
        </p>
        <p className="col">
          {" "}
          处于研究阶段的路径有：水泥清洁燃料、化工
          Power-to-X、钢铁氢还原，以及碳捕集在各个领域的推广应用。
        </p>
        <p
          className="col3"
          style={{ paddingBottom: "0", paddingTop: "0.2rem" }}
        >
          信息来源：殷中枢等光大证券3060
        </p>
        <p className="col3" style={{ paddingBottom: "0.1rem" }}>
          内容来源：上海陆家嘴并购联盟
        </p>
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

export default ConsultSub5;
