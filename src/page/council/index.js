// 专业委员会
import React, { useState, useEffect } from "react";
import {
  AliOss,
  ThemeColor,
  CutLine,
  barFontSize,
  barHeight,
  IframeUrl,
} from "../../lib/const";
import store from "../../store/index";

const data = [
  {
    title: "电力行业碳中和技术专委会",
    des1:
      "为助推全国电力行业，推动电力技术发展，专委会以战略研究、能力建设、技术交流、标准制定、产学研合作、创投融资、国际合作为目标各相关企业院校搭建开放的交流平台。",
    des2:
      "专委会工作包括：针对中央和地方政府的碳达峰、碳中和政策进行政策研究，并提出战略建议、加强国内外企业交流、学术交流和调研考察，推动相关产业研发和技术进步、制定并发布相关标准、规范，促进其贯彻实施、积极推动产学研合作，搭建创投融资平台，加速技术创新成果转化和落地、开展电力碳中和相关领域的培训等。",
  },
  {
    title: "材料和制造碳中和技术专委会",
    des1:
      "为更好地深入研究碳中和技术、新材料制造与应用，开发更加适应地域和区域特点、符合生产实际需求的解决方案，专委会联合相关专业组织、碳中和技术与材料、制造相关技术生产企业等单位搭建学术交流平台，充分发挥专委会的方向引领作用，形成合力进行跨专业、跨部门、跨行业合作。",
    des2:
      "专委会工作包括：服务战略性新兴产业发展；建立集成技术研发、项目攻关、人才培养、决策咨询等多种功能服务，集聚一批博士人才，转化一批科技成果，解决一批技术难题，培养一批技术人才。集智攻关、协同创新，为材料和制造碳中和技术的创新发展和人才队伍建设奠定基础。共同推动碳中和技术与新材料的应用发展。",
  },
  {
    title: "绿色建筑碳中和技术专委会",
    des1:
      "为全面落实党中央“双碳”战略目标，将太阳能、风能、氢能等可再生清洁能源与建筑一体化结合，推动建筑业实现碳中和，绿色建筑碳中和技术专委会将充分发挥平台的桥梁和纽带作用，切实以开展相关政策研究、技术创新、标准编制。",
    des2:
      "专委会工作包括：发展绿色建材助力节能降耗、清洁生产，在绿色建筑全寿命期内，节约资源、保护环境、减少污染，为人们提供健康、适用、高效的使用空间，最大限度地实现人与自然和谐共生的高质量建筑，并且在已有的可再生能源技术支撑下，建筑及由建筑组成的城市社区，可由单纯的能源消耗者转变为可再生能源的提供者，围绕可再生能源与建筑领域碳中和技术，助力城市与建筑碳中和目标早日实现。",
  },
  {
    title: "碳中和装备优化设计与制造专委会",
    des1:
      "为落实好国务院正式印发的我国实施制造强国战略第一个十年的行动纲领——《中国制造2025》，专委会在为会员提供服务的前提下，整合政府、行业协会、专业院校和相关工厂公司资源，助推装备优化设计与制造技术发展。",
    des2:
      "专委会工作包括：突破一批关键共性技术、推动信息技术与制造技术深度融合、加快发展一批智能装备和产品、加快实施一批重大工程，打造在碳中和装备优化设计与制造方面有影响力的服务平台。",
  },
  {
    title: "通信与ICT低碳技术专委会",
    des1:
      " 为促进各个行业的节能减排，积极推动资源节约、环境友好的低碳社会建设。专委会发挥桥梁纽带作用，积极探索行业需求，促进业务合作发展。",
    des2:
      "专委会工作包括：将通过信息和通信技术(ICT)的大量应用将实现智慧技术高度集成、智慧产业高端发展、智慧服务高效便民、以人为本持续创新，为企业提供温室气体排放核查、产品碳足迹核算、碳达峰碳中和行动路线图等咨询服务，围绕碳达峰碳中和愿景目标，促进ICT产业绿色低碳循环发展，推广绿色ICT综合解决方案。在我国数字化转型和绿色化转型背景下，信息通信产业自身绿色低碳发展以及助力其他行业碳减排具有重要意义。",
  },
  {
    title: "新能源技术专委会",
    des1:
      " 为更好地加强行业交流，充分发挥联盟在政府和协会企业的桥梁作用和行业企业之间的协调作用，专委会将与多所高等院校和各大企业单位共同参与新能源工作。",
    des2:
      " 专委会工作包括：前沿技术追踪、技术标准制定、技术交流研究、技术成果转化、政府政策支撑、活动组织与推广以及人才发展培训等。推动行业优秀企业为中国节能减排实业贡献更多力量，在新能源系统技术领域形成新突破。",
  },
  {
    title: "新能源汽车专委会",
    des1:
      "为贯彻落实国家“2025计划”及国务院“中发[2018]17号”文件关于推进清洁能源在汽车领域推广应用的指导精神，专委会结合前期广泛的行业调研，搭建平台，加强行业内交流和资源共享，以促进上海市新能源汽车产业发展。",
    des2:
      "专委会工作包括：政策宣贯工作、积极开展新能源汽车开发研究及推广宣传工作、做好新能源汽车理念的普及工作等。为中国汽车市场开启新篇章，助力中国制造早日走向中国“智造”。",
  },
  {
    title: "零碳工业流程再造技术专委会",
    des1:
      "为更好地促进“零碳”理念普及，共同推动“零碳”导向的技术发展、产业发展和投融资行动，专委会致力于推动可再生能源领域的技术进步和先进技术的推广应用，积极促进零碳工业流程再造技术的研究发展。",
    des2:
      "专委会工作包括：以提升学术研究水平、扩大政策影响力、强化产学研的沟通、提升零碳工业流程再造技术的社会认可度为目标，开展相关课题研究及传播活动，旨在促进可再生能源产业良性健康发展，为我国及全球的绿色发展做出新的、更大的贡献。",
  },
  {
    title: "生态碳汇技术专委会",
    des1:
      "为落实好碳达峰碳中和工作部署，加快推进生态碳汇建设，专委会搭建了行业领域专家资源、技术资源、人才资源共享的交流平台。",
    des2:
      "专委会工作包括：生态碳汇技术的研究、双碳技术培训交流和业务咨询、建立碳汇与生态产业相关技术标准体系、联合开展该领域的跨界科研业务及服务合作及科普宣传。进一步提升生态碳汇发展重大决策科学化水平，加快推动生态碳汇技术高质量发展。",
  },
  {
    title: "碳捕集、利用与封存技术专委会",
    des1:
      "为更好地整合上海市各方力量和开展合作交流，助力上海市在碳捕集、利用与封存技术领域的科技创新、科技示范、技术交流、成果转化和科技服务，服务上海市碳中和及经济社会绿色发展。专委会汇聚了众多国内二氧化碳捕集利用与封存、低碳和零碳等领域的学术研究力量。",
    des2:
      "专委会工作包括：CCUS关键技术应用与示范、创新升级商业模式、学术交流与项目推介、科技咨询服务、科技成果转化对接、提升公共意识等。旨在推动二氧化碳捕集利用与封存领域、低碳和零碳领域的科技经济融合，服务国家双碳战略，为经济高质量发展注入科技动能。",
  },
  {
    title: "生物炼制负碳技术专委会",
    des1:
      "为加强生物炼制负碳领域的理论知识普及与实践，专委会贯彻“双碳”目标下的产业方针政策，承担企业作为桥梁和核心作用的使命，联合各大企业及高校共同推动产业安全与功能评价规范发展，建立全面、系统、开放的合作交流发展平台。集合行业资源，重点在生物炼制领域开展深入研究、促进产业创新交流合作，推动创新技术落地。",
    des2:
      "专委会工作包括：建立生物炼制负碳产业相关技术标准体系、组织开展对本领域产业发展战略研究、联合开展该领域的跨界科研、业务、服务合作等。顺应碳中和发展要求，助力生态文明建设和发展。",
  },
  {
    title: "空间技术专业委员会",
    des1:
      "为推动国内空间技术的进步与发展，加强空间技术与相关学科的相互促进与共同提高，专委会将集各方力量致力于搭建空间技术全产业链平台，大力推动上下游企业的交流与合作，整合各方优势，支持行业标准的完善，助力空间技术的发展。",
    des2:
      "专委会工作包括：开展空间技术应用、标准研究、专业交流、业务培训、国际合作、行业认证等。旨在为推动空间技术行业进步贡献力量。",
  },
  {
    title: "双碳政策管理与社会治理专委会",
    des1:
      " 为加快完善“双碳”政策制度体系，确保如期实现“双碳”目标，专委会凝聚国内双碳领域的研究力量，充分发挥社会工作专业优势，锚定“3060”目标，加强顶层设计、统筹谋划。",
    des2:
      "专委会工作包括：创新双碳宣传教育方式、开展双碳社会工作机构孵化和人才培训、搭建全国双碳社会工作协同平台、完善双碳社会工作标准评估体系等。全面推动双碳政策管理工作社会治理系统化、专业化、规范化发展。",
  },
  {
    title: "数字化赋能专委会",
    des1:
      "为更好地助推数字技术与能源电力、工业、交通、建筑等重点碳排放领域深度融合，有效提升能源与资源的使用效率，实现生产效率与碳效率的双提升，数字化赋能专委会打造中小企业创新创业赋能综合服务平台。",
    des2:
      "专委会工作包括：对金融、教育培训、产学研，大数据、区块链、人工智能技术等领域的资源和外部创新要素进行整合；为中小企业在管理运营、信用评估、投融资、成果转化、数据共享、品牌建设等方面提供综合服务。走绿色低碳发展之路，形成全生态赋能链，助力中小企业发展。",
  },
  {
    title: "轻工专委会",
    des1:
      "为落实好国家和上海的轻工行业发展规划以及相关的法律、法规要求，按照协会的工作部署，专委会立足为本市的轻工企业服务，并联动苏、浙、皖地区轻工企业，促进长三角地区轻工行业的优势互补、资源共享。",
    des2:
      "专委会工作包括：组织专业人员对轻工行业的情况开展调查研究，向政府和有关部门提出意见和建议；加强行业内以及跨界的交流合作，推广轻工领域的新产品、新工艺、新材料；开展与轻工领域相关的业务培训和咨询活动等。改善行业环境，优化产业结构，积极适应市场需求，完善知识产权服务，强化各行业沟通交流，加强各行业监督管理。多点协同，集中发力。",
  },
];
const Council = () => {
  const [inx, setInx] = useState(0);
  const [flag, setFlag] = useState(false);
  const [plus, setPlus] = useState(false);
  const [overInx, setOverInx] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    store.subscribe(() => {
      setAmount(store.getState().amount);
    });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        padding: "0 0.3rem",
      }}
    >
      <section style={{ borderTop: CutLine, padding: "0 0.5rem" }}>
        <ul
          style={{
            display: "flex",
            padding: "0.3rem 0 0.2rem 0",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            border: CutLine,
            borderTop: "none",
          }}
        >
          {data.map((item, index) => {
            return (
              <li
                key={index}
                style={{
                  width: "30%",
                  height: "2.7rem",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  marginBottom: "0.6rem",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
                onClick={() => {
                  setInx(index);
                }}
                onMouseOver={() => {
                  setOverInx(index);
                  setPlus(!plus);
                }}
              >
                {/* 文案 */}
                {
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: "rgba(0,0,0,0.65)",
                      color: "white",
                      zIndex: 7777,
                      fontSize: "0.12rem",
                      textAlign: "justify",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: "0 0.08rem",
                      alignItems: "center",
                      textJustify: "inter-ideograph",

                      transform:
                        inx == index && flag
                          ? "translateY(0%)"
                          : "translateY(100%)",
                      transition: "all 1s",
                    }}
                    onClick={() => {
                      setFlag(false);
                    }}
                  >
                    <p style={{ textIndent: "0.24rem", lineHeight: "0.2rem" }}>
                      {" "}
                      {item.des1}
                    </p>
                    <p style={{ textIndent: "0.24rem", lineHeight: "0.2rem" }}>
                      {" "}
                      {item.des2}
                    </p>
                  </div>
                }
                <img
                  src={`${AliOss}/new_version_0518/committee/committee_${
                    index + 1
                  }.png`}
                  style={{
                    height: "2rem",
                    width: "100%",
                    transform:
                      overInx == index && plus ? "scale(1.2)" : "scale(1)",
                    transition: "all 1s",
                  }}
                  alt=""
                  onClick={() => {
                    setFlag(true);
                  }}
                />
                <section
                  style={{
                    flex: 1,
                    background: "#F9F9F9",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 777,
                  }}
                  onClick={() => {
                    setFlag(true);
                  }}
                >
                  <span style={{ fontSize: "0.14rem", color: "rgba(0,0,0,1)" }}>
                    {item.title}
                  </span>
                </section>
              </li>
            );
          })}
        </ul>
      </section>
      <p
        style={{
          height: "0.5rem",
          fontSize: "0.12rem",
          color: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "right",
          padding: "0 0.5rem",
          alignItems: "center",
        }}
      >
        <span>访问量：</span>
        <span>{amount}</span>
      </p>
    </div>
  );
};

export default Council;
