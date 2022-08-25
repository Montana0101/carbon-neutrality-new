// 双碳咨讯
import React, { useState, useEffect } from "react";
import { AliOss, ThemeColor, CutLine } from "../../lib/const";
import { useHistory } from "react-router-dom";
import store from "../../store/index";

const data = [
  {
    title: "什么是碳达峰和碳中和",
    content:
      "碳达峰指指排放不再增长，达到峰位后逐步由碳中和是指企业、团体或个人测算在一定时间内直接或间接产生的温室气体排放总量,然后通过植物造树造林、节能...",
  },
  {
    title: "各国相关政策",
    content:
      "全球变暖问题需要各国联合一同面对。自 1995 年起，联合国气候变化大会每年在世界不同地区轮换举行...",
  },
  {
    title: "实现碳中和的方式",
    content:
      "我国政府节能减排的决心大，目标完成度高从我国 2009 年提出第一个碳减排目标开始，到 2015 年的巴黎协定自主行动目标，再到新提出的 2060 年碳中和新目标...",
  },
  {
    title: "建材行业“六零”示范工厂诠释 | “双碳”之下，“六零”示范工厂引领行业",
    content:
      "2021年12月29日，中国建筑材料联合会六届理事会二次会议召开，党委书记、会长阎晓峰代表联合会明确提出“要着重组织打造零外购电、零化石能源、零一次...",
  },
  {
    title: "碳中和与大重构，供给侧改革、能源革命与产业升级|碳中和深度报告",
    content:
      "“排碳限制”的本质，是一种发展权的限制；而“碳关税”的本质，是应对贸易 劣势的一种手段，而这种劣势，可能一部分是由实施碳减排后成本增加而造成的...",
  },
  {
    title: "“碳中和”背景下的CCUS",
    content:
      "2022年3月21日，中国海油“十四五”重大科研项目CCUS专项启动会在京召开。3月24日，作为“碳达峰碳中和”的重大科技示范项目以及集团公司2021年度十大...",
  },
  {
    title: "《关于做好2022年企业温室气体排放报告管理相关重点工作的通知》解读",
    content:
      "近日，生态环境部印发《关于做好2022年企业温室气体排放报告管理相关重点工作的通知》，并以通知附件的形式更新了《企业温室气体排放核算方法与报告指南...",
  },
];
const Consult = () => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    store.subscribe(() => {
      setAmount(store.getState().amount);
    });
  }, []);

  const history = useHistory();

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
            padding: "0 0 0.2rem 0",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            border: CutLine,
            borderTop: "none",
          }}
        >
          {data.map((item, index) => {
            if (index % 2 == 0) {
              return (
                <li
                  style={{
                    height: "2rem",

                    padding: "0.3rem 0.9rem 0 0.9rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      boxShadow: "0px 15px 10px -12px rgba(0,0,0,0.3)",
                      justifyContent: "space-between",
                      padding: "0 0.1rem",
                    }}
                  >
                    <img
                      style={{ height: "100%" }}
                      src={
                        AliOss +
                        `/new_version_0518/information/information_${
                          index + 1
                        }.png`
                      }
                      alt=""
                    />
                    <section
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "0.2rem 0 0.2rem 0.3rem",
                        alignItems: "flex-start",
                        textAlign: "left",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.14rem",
                          fontWeight: "bold",
                          color: ThemeColor,
                        }}
                      >
                        {item.title}
                      </p>
                      <div
                        style={{
                          fontSize: "0.12rem",
                          color: "rgba(0,0,0,0.6)",
                        }}
                      >
                        {item.content}
                      </div>
                      <a
                        style={{
                          color: ThemeColor,
                          fontSize: "0.12rem",
                          textDecoration: "underline",
                        }}
                        onClick={() => {
                          window.scroll(0, 0);
                          history.push(`/consult/${index + 1}`);
                          // window.location.href=`/information/${index+1}`
                        }}
                      >
                        了解更多
                      </a>
                    </section>
                  </div>
                </li>
              );
            } else {
              return (
                <li
                  style={{
                    height: "2rem",

                    padding: "0.3rem 0.9rem 0 0.9rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      boxShadow: "0px 15px 10px -12px rgba(0,0,0,0.3)",
                      justifyContent: "space-between",
                      padding: "0 0.1rem",
                    }}
                  >
                    <section
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "0.2rem 0.3rem 0.2rem 0",
                        alignItems: "flex-start",
                        textAlign: "left",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.14rem",
                          fontWeight: "bold",
                          color: ThemeColor,
                        }}
                      >
                        {item.title}
                      </p>
                      <div
                        style={{
                          fontSize: "0.12rem",
                          color: "rgba(0,0,0,0.6)",
                        }}
                      >
                        {item.content}
                      </div>
                      <a
                        style={{
                          color: ThemeColor,
                          fontSize: "0.12rem",
                          textDecoration: "underline",
                        }}
                        onClick={() => {
                          window.scroll(0, 0);
                          history.push(`/consult/${index + 1}`);
                          // window.location.href=`/information/${index+1}`
                        }}
                      >
                        了解更多
                      </a>
                    </section>
                    <img
                      style={{ height: "100%" }}
                      src={
                        AliOss +
                        `/new_version_0518/information/information_${
                          index + 1
                        }.png`
                      }
                      alt=""
                    />
                  </div>
                </li>
              );
            }
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

export default Consult;
