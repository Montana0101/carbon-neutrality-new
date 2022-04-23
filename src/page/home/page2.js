import { AliOss } from "../../lib/const"
import { message } from "antd"
import { useState,useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
import { useSpring, animated,useTransition,useSpringRef,config} from "react-spring"
const bg2 = AliOss + '/img/bg2.png'
const bg1 = AliOss + '/img/bg1_am.png'
const icon1 = AliOss + "/icon/forest.png"
const icon2 = AliOss + "/icon/CO2.png"
const icon3 = AliOss + "/icon/energy.png"
const icon4 = AliOss + "/icon/oil.png"

const data = [
    {
        icon: icon1,
        text1: "森林覆盖率达到25%左右",
        text2: "森林蓄积量达到190亿立方米"
    },
    {
        icon: icon2,
        text1: "单位国内生产总值二氧化碳排放",
        text2: "比2005年下降65%以上"
    },
    {
        icon: icon3,
        text1: "风电、太阳能发电总装机容量",
        text2: "达到12亿千瓦以上"
    },
    {
        icon: icon4,
        text1: "非化石能源消费比重",
        text2: "达到25%左右"
    },
]

export default function Ptwo() {
    const animation = useSpring({
        config: {duration:700},
        from: { opacity: 0.3},
        to: { opacity: 1},
    })

    return <animated.div style={{...animation,width:"100%",height:"100%"}}>
        <div className="home_page_2 home_page" style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }} key="page2">
            <section>
                <article>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        boxSizing: "border-box"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start"
                        }}>
                            <span style={{
                                fontSize: "0.22rem",
                                fontWeight: "bold"
                            }}>上海碳中和技术创新联盟(STIACN)</span>
                            <span style={{
                                fontSize: "0.14rem",
                                fontWeight: "bold"
                            }}>Shanghai Technology Innovation Alliance for Carbon Neutrality</span>
                        </div>
                        <div style={{
                            fontSize: "0.16rem"
                        }} onClick={() => {
                            message.warn("功能未开放")
                        }}>
                            <span>了解更多 &gt;	</span>
                        </div>
                    </div>
                    <div style={{
                        fontSize: "0.12rem",
                        padding: "0.2rem 0 0.2rem",
                        boxSizing: "border-box"
                    }}>
                        <div className="col">联盟是由上海新能源科技成果转化与产业促进中心、上海社科院绿色数字化发展研究中心、上海市国资国企改革发展中心、上海市节能减排中心有限公司、上海航天技术研究院、中国科学院上海高等研究院、 中国科学院技术物理研究所、绿色技术银行、上海交通大学、同济大学、华东理工大学、华东师范大学、 上海大学、上海科技大学2060研究院、上海电力大学、宝武集团、申能集团、华能集团、华谊集团中央 研究院、上海电气集团、隧道股份、上海工业投资集团、长江三峡投资管理有限公司、上海北斗卫星导 航平台有限公司、北航天汇科技企业孵化器有限公司、上海市太阳能学会、国网上海电科院、上海电力 股份有限公司、深圳市创新投资集团有限公司等（排序不分先后）联合倡议发起，聚焦国家“碳达峰、 碳中和”目标，成立的非政府技术创新联合体。</div><br />
                        <div className="col">联盟以习近平新时代中国特色社会主义思想为指导，在上海市科技党委和上海市科学技术委员会的领导下，全面贯彻落实国家和上海地方“碳达峰、碳中和”战略部署，以“双碳”领域技术创新需求和成果转化需求为导向，加快推进核心技术 的突破与产业化，助推绿色低碳科研成果高效转化为现实生产力，推动相关产业爆发式增长，从而打造国内一流、国际领先的碳中和科技创新平台。</div><br />
                        <div className="col"> 通过开展全方位、多领域、高质量的专业活动，搭建产学研用金紧密结合、创新要素集聚的技术创新平台，推动碳中和的科技创新与成果转化，助力上海市高质量实现“碳达峰、碳中和”的目标，服务国家碳达峰、碳中和战略。</div>
                    </div>
                </article>
                <ul>
                    {
                        data.map((item, index) => {
                            return (
                                <li key={index} style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: '0.07rem 0rem 0.07rem 0.1rem'
                                }}>
                                    <section style={{
                                        flex: 2,
                                        display: "flex",
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    }}>
                                        <img src={item.icon} alt="" style={{
                                            height: "70%"
                                        }} />
                                    </section>
                                    <section style={{
                                        color: "white",
                                        display: "flex",
                                        flexDirection: "column",
                                        fontSize: "0.12rem",
                                        flex: 5
                                    }}>
                                        <p>到2030年</p>
                                        <p>{item.text1}</p>
                                        <p>{item.text2}</p>
                                    </section>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
            {/* <div className="left_area" >
        </div>
        <div className="right_area">
        </div> */}
        </div>
        {/* <img src={bg1} alt="" style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
            width: "100%",
            height: "100%"
        }} /> */}
    </animated.div >
}