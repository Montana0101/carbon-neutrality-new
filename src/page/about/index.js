import React, { useState, useEffect } from "react";
import {
  AliOss,
  ThemeColor,
  CutLine,
  barFontSize,
  barHeight,
  IframeUrl,
} from "../../lib/const";
import { CloseOutlined } from "@ant-design/icons";
import IframeStruct from "./iframe.js";
import "./index.less";
import lszp from "../../static/imgs/lishiz.png";
import flszp from "../../static/imgs/fulishiz.png";
import Logo1 from "../../static/logo/logo墙-01.jpg";
import { message } from "antd";
import store from "../../store/index";

const data = [
  "孵化技术创新平台",
  "研究商业创新模式",
  "推动行业标准制订",
  "搭建资本合作平台",
  "联合产品市场推广",
];

const arr = [
  "理事会",
  "专家咨询委员会",
  "专业技术委员会",
  "秘书处",
  "联盟单位",
];
const AboutLeague = () => {
  const [inx, setInx] = useState(0);
  const [flag, setFlag] = useState(true);
  const [mask_flag, setMaskFlag] = useState(false);
  const [mask_inx, setMaskInx] = useState(-1);
  const [amount, setAmount] = useState(null);
  const [tab, setTab] = useState(0);
  useEffect(() => {
    const main = document.getElementById("main_container");
    main.style.height = "100%";

    window.onresize = function () {
      setFlag(false);
    };

    window.addEventListener("message", function (eve) {
      // if (eve.data == "1") {
      //   setMaskFlag(true);
      //   setMaskInx(1);
      // } else if (eve.data == "2") {
      //   setMaskFlag(true);
      //   setMaskInx(2);
      // }
      // message.info("信息未公开")
    });

    store.subscribe(() => {
      setAmount(store.getState().amount);
    });
  }, []);

  useEffect(() => {
    if (!flag) {
      setFlag(true);
    }
  }, [flag]);

  return (
    <div className="about_page">
      {/* 遮罩 */}
      <div
        id="about_mask"
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          background: "rgba(0,0,0,0.6)",
          display: mask_flag ? "block" : "none",
          zIndex: 888888,
        }}
      >
        {mask_inx == 1 ? (
          <section style={{ height: "3rem" }}>
            <p>
              <span></span>
              <span style={{ fontSize: "0.14rem", fontWeight: "bold" }}>
                理事长
              </span>
              <CloseOutlined
                onClick={() => {
                  setMaskFlag(false);
                }}
              />
            </p>
            <div style={{ margin: "0.2rem 0" }}>
              <img src={lszp} style={{ width: "100%", height: "auto" }} />
            </div>
          </section>
        ) : (
          <section style={{ height: "3.3rem" }}>
            <p>
              <span></span>
              <span style={{ fontSize: "0.14rem", fontWeight: "bold" }}>
                副理事长
              </span>
              <CloseOutlined
                onClick={() => {
                  setMaskFlag(false);
                }}
              />
            </p>
            <div style={{ margin: "0.2rem 0" }}>
              <img src={flszp} style={{ width: "100%", height: "auto" }} />
            </div>
          </section>
        )}
      </div>
      <div style={{ borderTop: CutLine, padding: "0 0.5rem" }}>
        <h3
          style={{
            fontSize: barFontSize,
            fontWeight: "bold",
            display: "flex",
            margin: 0,
            padding: "0 0.3rem",
            color: ThemeColor,
            height: barHeight,
            lineHeight: barHeight,
            border: CutLine,
            borderTop: "none",
          }}
        >
          联盟介绍
        </h3>
      </div>
      <div style={{ padding: "0 0.5rem" }}>
        <div
          style={{ border: CutLine, borderTop: "none", padding: "0.2rem 0" }}
        >
          <section
            style={{
              padding: "0 0.3rem",
              textAlign: "left",
              lineHeight: "0.4rem",
              fontSize: "0.14rem",
              color: "rgba(0,0,0,0.7)",
            }}
          >
            以“双碳”领域技术创新需求和成果转化需求为导向，加快推进核心技术的突破与产业化，助推绿色低碳科研成果高效转化为现实生产力，推动相关产业爆发式增长，从而打造国内一流、国际领先的碳中和科技创新平台，助力上海市高质量实现
            <span style={{ fontWeight: "bold", color: ThemeColor }}>
              “碳达峰、碳中和”
            </span>
            的目标，更好服务国家碳达峰、碳中和战略全局，围绕落实上海市碳中和目标及崇明区世界生态岛建设，计划打造
            <span style={{ fontWeight: "bold", color: ThemeColor }}>
              “一平台，一研究院，一基地，一基金”
            </span>
            ，即形成顶级专家领衔、技术转化高效、空间布局合理、资本运作深入的综合性技术创新与产业孵化体。
          </section>
          <section className="introduce_card">
            <div
              className={`col_base_long col_init_0`}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${AliOss}/new_version_0518/about_us_banner_1.png)`,
              }}
              onClick={() => {
                setInx(0);
              }}
            >
              <section className="content">
                {inx == 0 && <span>联盟</span>}
                {inx != 0 && (
                  <div className="col_short">
                    <span>联盟</span>
                  </div>
                )}
                <article>
                  <span>
                    上海碳中和技术创新联盟（简称“联盟”）由上海新能源科技成果转化与产业促进中心牵头，本市相关高校、科研院所、企业共同发起成立，形成顶级专家领衔、技术转化高效、空间布局合理、资本运作深入的综合性创新平台，构建上下贯通、左右衔接的低碳产业技术创新生态圈。
                  </span>
                  <div></div>
                </article>
              </section>
            </div>

            <div
              className={`col_base_long col_init_1 ${inx >= 1 && "move_in"}`}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${AliOss}/new_version_0518/about_us_banner_2.png)`,
              }}
              onClick={() => {
                setInx(1);
              }}
            >
              <section className="content">
                {inx == 1 && <span>研究院</span>}
                {inx != 1 && (
                  <div className="col_short">
                    <span>研究院</span>
                  </div>
                )}
                <article>
                  <span>
                    {" "}
                    研究院是联盟的核心平台，是服务政府、企业、产业、社会的公益性、枢纽型碳中和产业协同创新功能型平台。有新型电力、生物质高效清洁利用、清洁能源高端装备制造、太阳能、风能、工业节能、储能、空间技术、综合能源管理等领域的技术开发。
                  </span>
                  <div></div>
                </article>
              </section>
            </div>

            <div
              className={`col_base_long col_init_2 ${inx >= 2 && "move_in"}`}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${AliOss}/new_version_0518/about_us_banner_3.png)`,
              }}
              onClick={() => {
                setInx(2);
              }}
            >
              <section className="content">
                {inx == 2 && <span>平台公司</span>}
                {inx != 2 && (
                  <div className="col_short">
                    <span>平台公司</span>
                  </div>
                )}
                <article>
                  <span>
                    上海碳中和技术创新平台有限公司以上海碳中和技术创新联盟总部为物理载体，以上海长兴碳中和创新产业园为实验基地，引入碳中和创新链、产业链、企业研发中心、企业总部、销售中心、展示中心落地，集合企业孵化、挂牌上市、企业管理、资源整合、重组并购、股权融资、债券融资、法务咨询等一系列企业综合服务，通过开展创业培训、辅导、咨询，提供研发、试制、经营的场地和共享设施，以及政策、法律、财务、投融资、企业管理、人力资源、市场推广和加速成长等方面的服务，以降低创业风险和创业成本，提高企业的成活率和成长性，培养成功的科技企业和企业家，致力于打造碳中和技术创新高地、产业集群。
                  </span>
                  <div></div>
                </article>
              </section>
            </div>

            <div
              className={`col_base_long col_init_3 ${inx >= 3 && "move_in"}`}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${AliOss}/new_version_0518/about_us_banner_4.png)`,
              }}
              onClick={() => {
                setInx(3);
              }}
            >
              <section className="content">
                {inx == 3 && <span>产业园</span>}
                {inx != 3 && (
                  <div className="col_short">
                    <span>产业园</span>
                  </div>
                )}
                <article>
                  <span>
                    物理空间承载了联盟及所属单位、研究院、基金等内部机构的经营活动，也承载了相关成员企业入驻并且围绕联盟建立沟通、交流、路演、论坛等活动的办公场所。打造园区“三网融合”试点
                    ，引进一批碳中和技术领域的重点项目，培育一批碳中和技术战略新兴产业集群，全面夯实产业园区经济布局。
                  </span>
                  <div></div>
                </article>
              </section>
            </div>

            <div
              className={`col_base_long col_init_4  ${inx == 4 && "move_in"}`}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${AliOss}/new_version_0518/about_us_banner_5.png)`,
              }}
              onClick={() => {
                setInx(4);
              }}
            >
              <section className="content">
                {inx == 4 && <span>基金</span>}
                {inx != 4 && (
                  <div className="col_short">
                    <span>基金</span>
                  </div>
                )}
                <article>
                  <span>
                    联盟拟与机构投资人合作，结合联盟在技术创新、产业应用、资源汇集等优势与机构投资人在综合金融服务领域的优势，上海市崇明区政府资源及区位优势，长三角母基金强大的产业背景，联盟行业的专业度及资源整合能力，发挥基石出资人的引导作用，吸引和撬动其他社会资本。
                  </span>
                  <div></div>
                </article>
              </section>
            </div>
          </section>
        </div>
      </div>

      <div style={{ height: barHeight, margin: "0 0.5rem" }}>
        <h3
          style={{
            fontSize: barFontSize,
            fontWeight: "bold",
            display: "flex",
            margin: 0,
            padding: "0 0.3rem",
            color: ThemeColor,
            height: barHeight,
            lineHeight: barHeight,
            borderBottom: "none",
            borderLeft: CutLine,
            borderRight: CutLine,
          }}
        >
          联盟任务
        </h3>
      </div>

      <div
        style={{
          borderTop: CutLine,
          padding: "0 0.5rem",
          borderBottom: CutLine,
        }}
      >
        <ul
          style={{
            display: "flex",
            borderLeft: CutLine,
            borderRight: CutLine,
            margin: 0,
          }}
        >
          {data.map((item, index) => {
            return (
              <li
                key={index}
                style={{
                  flex: 1,
                  height: "1.4rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <div
                  style={{
                    height: "0.4rem",
                    width: "0.4rem",
                    borderRadius: "0.2rem",
                    overflow: "hidden",
                    background: ThemeColor,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={
                      AliOss +
                      `/new_version_0518/index_mission_icon_${index + 1}.png`
                    }
                    alt=""
                    style={{
                      width: "0.24rem",
                      height: "0.24rem",
                    }}
                  />
                </div>

                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "0.12rem",
                    color: "rgba(0,0,0,0.5)",
                  }}
                >
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 联盟宗旨 */}
      <div style={{ padding: "0 0.5rem" }}>
        <h3
          style={{
            fontSize: barFontSize,
            fontWeight: "bold",
            display: "flex",
            margin: 0,
            padding: "0 0.3rem",
            color: ThemeColor,
            height: barHeight,
            lineHeight: barHeight,
            borderBottom: "none",
            borderLeft: CutLine,
            borderRight: CutLine,
          }}
        >
          联盟宗旨
        </h3>
        <ul
          style={{
            display: "flex",
            borderLeft: CutLine,
            borderRight: CutLine,
            margin: 0,
          }}
        >
          {data.map((item, index) => {
            return (
              <li
                key={index}
                style={{
                  flex: 1,
                  height: "2.7rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  position: "relative",
                  backgroundImage: `url(${AliOss}/new_version_0518/about_us_purpose_${
                    index + 1
                  }.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <section
                  style={{
                    position: "absolute",
                    height: "36%",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0,0,0,0.3)",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="itemHover"
                >
                  <span
                    style={{
                      fontSize: "0.14rem",
                      color: "rgba(255,255,255,1)",
                    }}
                  >
                    {item}
                  </span>
                </section>
              </li>
            );
          })}
        </ul>
        <h3
          style={{
            fontSize: barFontSize,
            fontWeight: "bold",
            display: "flex",
            margin: 0,
            padding: "0 0.3rem",
            color: ThemeColor,
            height: barHeight,
            lineHeight: barHeight,
            borderBottom: "none",
            borderLeft: CutLine,
            borderRight: CutLine,
          }}
        >
          联盟架构
        </h3>
      </div>

      {/* 联盟架构 */}
      <div style={{ borderTop: CutLine, padding: "0 0.5rem", height: "auto" }}>
        <div
          style={{
            borderLeft: CutLine,
            borderRight: CutLine,
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 0.5rem",
          }}
        >
          {/* {flag && <IframeStruct />} */}
          <img
            style={{
              margin: "0.5rem 0",
              width: "60%",
            }}
            src={AliOss + "/new_version_0518/about_us_jiaGou.svg"}
          />
          <section
            style={{
              border: `0.5px solid ${ThemeColor}`,
              width: "100%",
              height: "3rem",
              padding: "0.2rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                display: "flex",
                height: "0.3rem",
                borderBottom: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              {arr.map((item, index) => {
                return (
                  <div
                    style={{
                      padding: "0 0.15rem",
                      margin: "0 0.15rem",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "0.13rem",
                      color: index == tab ? ThemeColor : "black",
                      borderBottom:
                        index == tab ? `3px solid ${ThemeColor}` : "none",
                    }}
                    onClick={() => {
                      setTab(index);
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </p>
            {tab == 0 && (
              <article
                style={{
                  flex: 1,
                  // border: "1px solid red",
                  display: "flex",
                }}
                className="article"
              >
                <div style={{ width: "1rem" }}>
                  <p className="jiagou_item_col">
                    <span className="title">理事长</span>
                    <span className="hide">内容</span>
                  </p>
                  <p className="jiagou_item_col">
                    <span className="title">副理事长</span>
                    <span className="hide">内容</span>
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <p className="jiagou_item_right_out">
                    <p className="jiagou_item_col_right">
                      <span className="title">
                        黄&nbsp;&nbsp;&nbsp;&nbsp;震
                      </span>
                      <span className="value">
                        上海市政协副主席、中国工程院院士
                      </span>
                    </p>
                    <p className="jiagou_item_col_right jiagou_item_col_right_hide">
                      <span className="title">副理事长</span>
                      <span className="value">内容</span>
                    </p>
                    <p className="jiagou_item_col_right jiagou_item_col_right_hide">
                      <span className="title">副理事长</span>
                      <span className="value">内容</span>
                    </p>
                  </p>
                  <p className="jiagou_item_right_out">
                    <p className="jiagou_item_col_right">
                      <span className="title">董绍明</span>
                      <span className="value">
                        中国工程院院士，中国科学院上海硅酸盐研究所研究员
                      </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="title">谭瑞琮</span>
                      <span className="value">
                        上海长三角技术创新研究院党委书记
                      </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="title">刘金生</span>
                      <span className="value">华能集团华东分公司副总经理</span>
                    </p>
                  </p>
                  <p className="jiagou_item_right_out">
                    <p className="jiagou_item_col_right">
                      <span className="title">李少先</span>
                      <span className="value">
                        中国铁建华东区域总部副总经理
                      </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="title">
                        张&nbsp;&nbsp;&nbsp;&nbsp;忠
                      </span>
                      <span className="value">
                        上海长兴企业集团党委书记、董事长
                      </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="title">
                        王&nbsp;&nbsp;&nbsp;&nbsp;路
                      </span>
                      <span className="value">上海市计量协会会长</span>
                    </p>
                  </p>
                  <p className="jiagou_item_right_out">
                    <p className="jiagou_item_col_right">
                      <span className="title">尹邦奇</span>
                      <span className="value">
                        上海科技交流中心原主任、教授级高工
                      </span>
                    </p>
                    <p className="jiagou_item_col_right jiagou_item_col_right_hide">
                      <span className="title">副理事长</span>
                      <span className="value">内容</span>
                    </p>
                    <p className="jiagou_item_col_right jiagou_item_col_right_hide">
                      <span className="title">副理事长</span>
                      <span className="value">内容</span>
                    </p>
                  </p>
                </div>
              </article>
            )}

            {(tab == 1 || tab == 2) && (
              <aside
                style={{
                  height: "100%",
                  width: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "0.13rem",
                }}
              >
                暂无信息
              </aside>
            )}
            {tab == 3 && (
              <article
                style={{
                  flex: 1,
                  // border: "1px solid red",
                  display: "flex",
                }}
                className="article"
              >
                <div
                  style={{
                    width: "1rem",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p className="jiagou_item_col">
                    <span className="title">秘书长</span>
                    <span className="hide">内容</span>
                  </p>
                  <p className="jiagou_item_col">
                    <span className="title">执行秘书长</span>
                    <span className="hide">内容</span>
                  </p>
                  <p className="jiagou_item_col">
                    <span className="title">副秘书长</span>
                    <span className="hide">内容</span>
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <p className="jiagou_item_right_out">
                    <p className="jiagou_item_col_right">
                      <span className="title">
                        黄&nbsp;&nbsp;&nbsp;&nbsp;瓒
                      </span>
                      <span className="value">
                        上海新能源科技成果转化与产业促进中心主任
                      </span>
                    </p>
                    <p className="jiagou_item_col_right jiagou_item_col_right_hide">
                      <span className="title">副理事长</span>
                      <span className="value">内容</span>
                    </p>
                    <p className="jiagou_item_col_right jiagou_item_col_right_hide">
                      <span className="title">副理事长</span>
                      <span className="value">内容</span>
                    </p>
                  </p>
                  <p className="jiagou_item_right_out">
                    <p className="jiagou_item_col_right">
                      <span className="title">
                        陈&nbsp;&nbsp;&nbsp;&nbsp;成
                      </span>
                      <span className="value">
                        上海北斗卫星导航平台有限公司总经理
                      </span>
                    </p>
                    <p className="jiagou_item_col_right jiagou_item_col_right_hide">
                      <span className="title">副理事长</span>
                      <span className="value">内容</span>
                    </p>
                    <p className="jiagou_item_col_right jiagou_item_col_right_hide">
                      <span className="title">副理事长</span>
                      <span className="value">内容</span>
                    </p>
                  </p>
                  <p className="jiagou_item_right_out">
                    <p className="jiagou_item_col_right">
                      <span className="title">
                        陈&nbsp;&nbsp;&nbsp;&nbsp;娇
                      </span>
                      <span className="value">
                        上海锦邑创业孵化器有限公司总经理
                      </span>
                    </p>
                    <p className="jiagou_item_col_right jiagou_item_col_right_hide">
                      <span className="title">副理事长</span>
                      <span className="value">内容</span>
                    </p>
                    <p className="jiagou_item_col_right jiagou_item_col_right_hide">
                      <span className="title">副理事长</span>
                      <span className="value">内容</span>
                    </p>
                  </p>
                </div>
              </article>
            )}

            {tab == 4 && (
              <article
                style={{
                  flex: 1,
                  // border: "1px solid red",
                  display: "flex",
                }}
                className="article"
              >
                <div style={{ width: "1rem" }}>
                  <p className="jiagou_item_col">
                    <span className="title">理事单位</span>
                    <span className="hide">内容</span>
                  </p>
                  {/* <p className="jiagou_item_col">
                    <span className="title">副理事长</span>
                    <span className="hide">内容</span>
                  </p> */}
                </div>
                <div style={{ flex: 1 }}>
                  <p className="jiagou_item_right_out jiagou_item_right_out_last">
                    <p className="jiagou_item_col_right">
                      <span className="value">中国科学院上海硅酸盐研究所</span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">上海长三角技术创新研究院</span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">上海市计量协会</span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">上海市国资国企改革发展中心</span>
                    </p>
                  </p>
                  <p className="jiagou_item_right_out jiagou_item_right_out_last">
                    <p className="jiagou_item_col_right">
                      <span className="value">中科院上海高等研究院 </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">
                        中国科学院上海技术物理研究所
                      </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">
                        上海社会科学院绿色数字化发展研究中心{" "}
                      </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">上海科学院新能源技术研究所</span>
                    </p>
                  </p>
                  <p className="jiagou_item_right_out jiagou_item_right_out_last">
                    <p className="jiagou_item_col_right">
                      <span className="value">上海院士中心 </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">上海航天技术研究院 </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">
                        上海新能源科技成果转化与产业促进中心{" "}
                      </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value"> 上海市能效中心</span>
                    </p>
                  </p>

                  <p className="jiagou_item_right_out jiagou_item_right_out_last">
                    <p className="jiagou_item_col_right">
                      <span className="value">上海植物园 </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">上海市城市更新研究会 </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">上海市太阳能学会 </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value"></span>
                    </p>
                  </p>

                  <p className="jiagou_item_right_out jiagou_item_right_out_last"></p>

                  <p className="jiagou_item_right_out jiagou_item_right_out_last">
                    <p className="jiagou_item_col_right">
                      <span className="value">中国华能集团有限公司 </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">
                        中国铁建股份有限公司华东总部{" "}
                      </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">长兴企业集团有限公司 </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value"> 宝武清洁能源有限公司</span>
                    </p>
                  </p>
                  <p className="jiagou_item_right_out jiagou_item_right_out_last">
                    <p className="jiagou_item_col_right">
                      <span className="value">上海电气集团股份有限公司 </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">
                      申能（集团）有限公司 {" "}
                      </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">上海隧道工程股份有限公司   </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value"> 上海华谊集团技术研究院</span>
                    </p>
                  </p>
                  <p className="jiagou_item_right_out jiagou_item_right_out_last">
                    <p className="jiagou_item_col_right">
                      <span className="value">中国商用飞机有限责任公司   </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">
                      上海电力股份有限公司 {" "}
                      </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">上海工业投资（集团）有限公司     </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value"> 上海市节能减排中心</span>
                    </p>
                  </p>
             
                  <p className="jiagou_item_right_out jiagou_item_right_out_last">
                    <p className="jiagou_item_col_right">
                      <span className="value">上海能源建设集团有限公司   </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">
                      上海亚通股份有限公司    {" "}
                      </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">中化创新（北京）科技研究院有限公司      </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value"> 深圳创新投资集团有限公司</span>
                    </p>
                  </p>
             
             
                  <p className="jiagou_item_right_out jiagou_item_right_out_last">
                    <p className="jiagou_item_col_right">
                      <span className="value">长江三峡投资管理有限公司    </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">
                      阿里云计算有限公司             {" "}
                      </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">绿技行（上海）科技发展有限公司      </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value"> 华为技术有限公司</span>
                    </p>
                  </p>

                   
                  <p className="jiagou_item_right_out jiagou_item_right_out_last">
                    <p className="jiagou_item_col_right">
                      <span className="value">上海北斗卫星导航平台有限公司    </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">
                      上海德衡数据科技有限公司                    {" "}
                      </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value">中国合伙人（上海）股权投资基金管理有限公司          </span>
                    </p>
                    <p className="jiagou_item_col_right">
                      <span className="value"> </span>
                    </p>
                  </p>

                  <p className="jiagou_item_right_out jiagou_item_right_out_last"></p>
                  <p className="jiagou_item_right_out" style={{
                    display:"flex",
                    justifyContent:"space-between",
                    fontSize:"0.12rem",
                    color:'rgba(0,0,0,0.6)'
                  }}>
                  <span className="value"> 上海交通大学</span>
                  <span className="value"> 同济大学</span>
                  <span className="value"> 华东理工大学</span>
                  <span className="value"> 华东师范大学</span>
                  <span className="value"> 上海大学</span>
                  <span className="value"> 上海科技大学</span>
                  <span className="value"> 上海电力大学</span>
                  <span className="value"> 上海理工大学</span>
                  </p>

                  <p className="jiagou_item_right_out jiagou_item_right_out_last"></p>
                </div>
              </article>
            )}
          </section>
        </div>
      </div>

      {/* 联盟发起单位 */}
      <div
        style={{
          padding: "0 0.5rem",
          borderTop: CutLine,
          position: "relative",
        }}
        className="logo_area"
      >
        <h3
          style={{
            fontSize: barFontSize,
            fontWeight: "bold",
            display: "flex",
            margin: 0,
            padding: "0 0.3rem",
            color: ThemeColor,
            height: barHeight,
            lineHeight: barHeight,
            borderBottom: "none",
            zIndex: 777,
            position: "absolute",
          }}
        >
          理事单位
        </h3>

        <section
          style={{
            position: "absolute",
            height: "7rem",
            left: "0.5rem",
            right: "0.5rem",
            bottom: 0,
            top: 0,
            borderLeft: CutLine,
            borderRight: CutLine,
          }}
        >
          <div
            style={{
              width: "90%",
              height: "100%",
              position: "relative",
              display: "flex",
              margin: "0 auto",
              justifyContent: "center",
              alignItems: "center",
              // background: "grey",
              // backgroundImage: `url(${AliOss}/new_version_0518/about_us_companies.png)`,
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "100% 100%",
            }}
          >
            <img
              alt=""
              style={{
                height: "100%",
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                margin: "0 auto",
              }}
              src={`${AliOss}/new_version_0518/company.svg`}
            />

            {/* <section
              style={{
                background: "rgba(0,0,0,0.2)",
                // border:"1px sold black",
                width: "100%",
                height: "80%",
                zIndex: 8888,
              }}
            >
              <div className="col">
                <div className="trapezoid">
                  <img src={Logo1}/>
                </div>
              </div>
              <div className="col">
                <span className="trapezoid"></span>
              </div>
              <div className="col">
                <span className="trapezoid"></span>
              </div>
              <div className="col">
                <span className="trapezoid"></span>
              </div>
              <div className="col">
                <span className="trapezoid"></span>
              </div>
              <div className="col">
                <span className="trapezoid"></span>
              </div>
              <div className="col">
                <span className="trapezoid"></span>
              </div>
            </section> */}
          </div>
          <p
            style={{
              height: "0.5rem",
              fontSize: "0.12rem",
              color: "rgba(0,0,0,0.6)",
              display: "flex",
              justifyContent: "right",
              // padding: "0 0.5rem",
              alignItems: "center",
            }}
          >
            <span>访问量：</span>
            <span>{amount}</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutLeague;
