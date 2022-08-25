//  联盟动态
import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import {
  AliOss,
  ThemeColor,
  CutLine,
  barFontSize,
  barHeight,
  IframeUrl,
} from "../../lib/const";
import { getNewsList } from "../../apis/index";
import scopeBg from "../../static/imgs/scope_bg.png";
import "./index.less";
import store from "../../store/index";

const data = ["战略咨询服务", "绿色金融服务", "课题研究服务", "人才培养任务"];
const arr = [
  {
    content:
      "通过调研、投资分析、市场研究、技术孵化及成果转化、参与标准制定、专家委员会支撑、对接政府项目、产业推广、专利合作与运营，组织开展培训指导、论坛路演会展，协助地方政府、园区、企业提供降低碳排放达到碳中和咨询服务，制定“双清单”实施路径和行动方案，协助申请地方政府相关资金扶持等。",
  },
  {
    content:
      "建立碳中和技术金融服务平台，设立碳中和产业基金，综合运用碳中和信贷、债券、基金投资、保险、风险补偿等方式支持碳中和技术转移转化，为区域、园区、企业推动开展碳中和金融国际合作。",
  },
  {
    content:
      "聚焦当地资源环境特点，开展碳减排技术、碳中和路径等相关课题研究，引导地方政府或园区对重点领域和高耗能企业进行结构调整和优化升级，推动双碳目标实现。",
  },
  {
    content:
      "通过共建科技企业孵化器，完善联盟的支撑服务体系，聚焦高等院校、科研机构的技术创新人才，建设碳中和技术转移转化专业人才培养基地，全方位培养培养具有实干精神、创新能力的农业物联网技术、管理人才，培养复合型碳中和技术转移转化人才。",
  },
];

const list = [
  {
    sub: "技术合作",
    text: "开展技术合作，形成重要的产业技术标准",
  },
  {
    sub: "技术转化",
    text: "实现技术转移，提升产业整体竞争力",
  },
  {
    sub: "技术服务",
    text: "建立公共技术服务平台，实现知识产权共享",
  },
];

const Scope = () => {
  const [inx, setInx] = useState(0);
  const [amount,setAmount] = useState(0)

  useEffect(() => {
    store.subscribe(() => {
      setAmount(store.getState().amount);
    });
  }, []);

  
  return (
    <div className="scope_page">
      <section
        style={{
          height: "100%",
          borderTop: CutLine,
          padding: "0 0.5rem 0 0.5rem",
        }}
      >
        <div
          style={{
            border: CutLine,
            borderBottom: "none",
          }}
        >
          <section
            style={{
              backgroundImage: `url(${scopeBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "3.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ul className="upperUl">
              {list.map((item, index) => {
                return (
                  <li key={index}>
                    <img
                      src={`${AliOss}/new_version_0518/business/business_bg_icon_${
                        index + 1
                      }.png`}
                    />
                    <span style={{ fontSize: "0.14rem", fontWeight: "bold",
                    margin:'0.1rem 0 0.05rem 0' }}>
                      {item.sub}
                    </span>
                    <span style={{ fontSize: "0.12rem", fontWeight: "bold" }} className="last_span">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
          <main>
            <ul>
              {data.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setInx(index);
                    }}
                  >
                    <span
                      style={{
                        borderBottom:
                          inx == index ? `2px solid ${ThemeColor}` : "none",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
            {arr.map((item, index) => {
              return (
                <div
                  className="content"
                  style={{
                    display: index == inx ? "flex" : "none",
                  }}
                >
                  <article>
                    <span>{item.content}</span>
                  </article>
                  <img
                    src={`${AliOss}/new_version_0518/business/business_tab_${
                      inx + 1
                    }.png`}
                  />
                </div>
              );
            })}
          </main>
        </div>
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

export default Scope;
