import React, { useState, useEffect } from 'react'
import { AliOss, ThemeColor, CutLine, barFontSize, barHeight } from "../../lib/const"
// import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmapgl';
import { EnvironmentFilled, PhoneFilled, MailFilled } from '@ant-design/icons';
import OrgChart from 'react-orgchart';
import 'react-orgchart/index.css';
import './index.less'

import jiegouPg from '../../static/imgs/jiagou.png'

const data = [
    "孵化技术创新平台", "研究商业创新模式", "推动行业标准制订", "搭建资本合作平台", "联合产品市场推广"
]

var lsz //理事长

const initechOrg = {
    name: "理事会",
    actor: "Gary Cole",
    children: [
        //   {
        //     name: "Peter Gibbons",
        //     actor: "Ron Livingston",
        //     children: [
        //       {
        //         name: "And More!!",
        //         actor: "This is just to show how to build a complex tree with multiple levels of children. Enjoy!"
        //       }
        //     ]
        //   },
        {
            name: "理事长",
            actor: "lishizhang",
            key: '1-1',
            children: [
                {
                    name: "秘书处",
                    id: "1-1-1",
                    children: [
                        {
                            name: "秘书处",
                            id: "1-1-1-1",
                        },
                        {
                            name: "执行秘书长",
                        },
                        {
                            name: "副秘书长",
                        }
                    ]
                },
                {
                    name: "专家咨询委员会",
                    children: [
                        {
                            name: "院士",
                        },
                        {
                            name: "高级专家",
                        },
                    ]
                },
                {
                    name: "专家技术委员会",
                    children: [
                        {
                            name: "新能源技术委员会",
                        },
                        {
                            name: "设计与制造委员会 碳中和装备优化",
                        },
                        {
                            name: "零碳工业流程再造技术委员会"
                        },
                        {
                            name: "电力行业碳中和 技术委员会"
                        },
                        { name: "..." }
                    ]
                }
            ]
        },
    ]
};

// const MyNodeComponent = ({ node }) => {
//     return (
//         <div className="initechNode" onClick={() => {
//         }} onMouseOver={() => {
//             if (node.actor == 'lishizhang') {
//                 let dom = document.getElementById('lishizhang')
//                 if (dom) {
//                     dom.setAttribute('id', 'lishizhang_on')
//                     // 理事长
//                     dom.addEventListener("click", () => {
//                         alert(1)
//                     })
//                 }
//                 // alert("点击了理事长")
//             }
//         }} onMouseLeave={() => {
//             // if(node.actor=='lishizhang'){
//             //     let dom = document.getElementById('lishizhang_on')
//             //     if(dom){
//             //         dom.setAttribute('id','lishizhang')
//             //     }
//             // }
//         }}>{node.name}</div>
//     );
// };

const AboutLeague = () => {
    const [inx, setInx] = useState(0)

    useEffect(() => {
        const main = document.getElementById('main_container')
        main.style.height = '100%'

        // 结构节点添加span
        // const doms =  document.querySelector(".reactOrgChart")
        // const rot = document.getElementsByClassName("reactOrgChart")[0]
        // const doms = rot.getElementsByClassName("orgNodeChildGroup")
        // const arr = Array.from(doms)
        // arr && arr.map((item, ix) => {
        //     let d = item.querySelector("td[colspan='0']")
        //     let sonDom = d.getElementsByClassName("initechNode")
        //     const arr2 = Array.from(sonDom)
        //     for (var i = 0; i < arr2.length; i++) {
        //         var sp = document.createElement("span");
        //         sp.innerHTML = arr2[i].innerText;
        //         arr2[i].appendChild(sp)
        //         arr2[i].removeChild(arr2[i].childNodes[0])

        //         break;
        //     }

            // 理事长
            // lsz = item.querySelector("td[colspan='6']")
            // let lsz_msc_dom = lsz_msc.getElementsByClassName("initechNode")
            // let lsz_msc_arr = Array.from(lsz_msc_dom)
            // if (lsz) {
            //     if (ix == 0) {
            //         // 理事会
            //         lsz.setAttribute('id', "lishizhang")
            //     }
            // }

            // 理事长下面一行
            // if(lsz){
            //     if(ix == 1){
            //         console.log()
            //     }
            // }
        // })

    }, [])

    return <div className='about_page'>
        {/* 遮罩 */}
        {/* <div className='mask'>
            
        </div> */}
        <div style={{ borderTop: CutLine, padding: '0 0.5rem' }}>
            <h3 style={{
                fontSize: barFontSize, fontWeight: "bold", display: "flex", margin: 0,
                padding: "0 0.3rem", color: ThemeColor, height: barHeight, lineHeight: "0.6rem",
                border: CutLine, borderTop: "none"
            }}>联盟介绍</h3>
        </div>
        <div style={{ padding: '0 0.5rem' }}>
            <div style={{ border: CutLine, borderTop: "none", padding: "0.2rem 0" }}>
                <section style={{
                    padding: "0 0.3rem", textAlign: "left",
                    lineHeight: "0.4rem", fontSize: "0.14rem", color: "rgba(0,0,0,0.7)"
                }}>
                    以“双碳”领域技术创新需求和成果转化需求为导向，加快推进核心技术的突破与产业化，助推绿色低碳科研成果高效转化为现实生产力，推动相关产业爆发式增长，从而打造国内一流、国际领先的碳中和科技创新平台，助力上海市高质量实现
                <span style={{ fontWeight: "bold", color: ThemeColor }}>“碳达峰、碳中和”</span>
                的目标，更好服务国家碳达峰、碳中和战略全局，围绕落实上海市碳中和目标及崇明区世界生态岛建设，计划打造
                <span style={{ fontWeight: "bold", color: ThemeColor }}>“一平台，一研究院，一基地，一基金”</span>
                ，即形成顶级专家领衔、技术转化高效、空间布局合理、资本运作深入的综合性技术创新与产业孵化体。
                   </section>
                <section className="introduce_card">
                    <div className={`col_base_long col_init_0`} style={{
                        backgroundImage: `url(${AliOss}/new_version_0518/about_us_banner_1.png)`
                    }} onClick={() => { setInx(0) }}>
                        <section className='content'>
                            {inx == 0 && <span>联盟</span>}
                            {inx != 0 && <div className='col_short'>
                                <span>联盟</span>
                            </div>}
                            <article>
                                <span>上海碳中和技术创新联盟（简称“联盟”）由上海新能源科技成果转化与产业促进中心牵头，本市相关高校、科研院所、企业共同发起成立，形成顶级专家领衔、技术转化高效、空间布局合理、资本运作深入的综合性创新平台，构建上下贯通、左右衔接的低碳产业技术创新生态圈。
                                </span> </article>
                        </section>
                    </div>

                    <div className={`col_base_long col_init_1 ${inx >= 1 && 'move_in'}`} style={{
                        backgroundImage: `url(${AliOss}/new_version_0518/about_us_banner_2.png)`
                    }} onClick={() => { setInx(1) }}>
                        <section className='content'>
                            {inx == 1 && <span>研究院</span>}
                            {inx != 1 && <div className='col_short'>
                                <span>研究院</span>
                            </div>}
                            <article>
                                <span> 研究院是联盟的核心平台，是服务政府、企业、产业、社会的公益性、枢纽型碳中和产业协同创新功能型平台。有新型电力、生物质高效清洁利用、清洁能源高端装备制造、太阳能、风能、工业节能、储能、空间技术、综合能源管理等领域的技术开发。
                               </span></article>
                        </section>

                    </div>

                    <div className={`col_base_long col_init_2 ${inx >= 2 && 'move_in'}`} style={{
                        backgroundImage: `url(${AliOss}/new_version_0518/about_us_banner_3.png)`
                    }} onClick={() => { setInx(2) }}>
                        <section className='content'>
                            {inx == 2 && <span>平台公司</span>}
                            {inx != 2 && <div className='col_short'>
                                <span>平台公司</span>
                            </div>}
                            <article>
                                <span>上海碳中和技术创新平台有限公司以上海碳中和技术创新联盟总部为物理载体，以上海长兴碳中和创新产业园为实验基地，引入碳中和创新链、产业链、企业研发中心、企业总部、销售中心、展示中心落地，集合企业孵化、挂牌上市、企业管理、资源整合、重组并购、股权融资、债券融资、法务咨询等一系列企业综合服务，通过开展创业培训、辅导、咨询，提供研发、试制、经营的场地和共享设施，以及政策、法律、财务、投融资、企业管理、人力资源、市场推广和加速成长等方面的服务，以降低创业风险和创业成本，提高企业的成活率和成长性，培养成功的科技企业和企业家，致力于打造碳中和技术创新高地、产业集群。
                                </span></article>
                        </section>
                    </div>

                    <div className={`col_base_long col_init_3 ${inx >= 3 && 'move_in'}`} style={{
                        backgroundImage: `url(${AliOss}/new_version_0518/about_us_banner_4.png)`
                    }} onClick={() => { setInx(3) }}>
                        <section className='content'>
                            {inx == 3 && <span>产业园</span>}
                            {inx != 3 && <div className='col_short'>
                                <span>产业园</span>
                            </div>}
                            <article>
                                <span>物理空间承载了联盟及所属单位、研究院、基金等内部机构的经营活动，也承载了相关成员企业入驻并且围绕联盟建立沟通、交流、路演、论坛等活动的办公场所。打造园区“三网融合”试点 ，引进一批碳中和技术领域的重点项目，培育一批碳中和技术战略新兴产业集群，全面夯实产业园区经济布局。
                                </span></article>
                        </section>
                    </div>

                    <div className={`col_base_long col_init_4  ${inx == 4 && 'move_in'}`} style={{
                        backgroundImage: `url(${AliOss}/new_version_0518/about_us_banner_5.png)`
                    }} onClick={() => { setInx(4) }}>
                        <section className='content'>
                            {inx == 4 && <span>基因</span>}
                            {inx != 4 && <div className='col_short'>
                                <span>基因</span>
                            </div>}
                            <article>
                                <span>
                                    联盟拟与机构投资人合作，结合联盟在技术创新、产业应用、资源汇集等优势与机构投资人在综合金融服务领域的优势，上海市崇明区政府资源及区位优势，长三角母基金强大的产业背景，联盟行业的专业度及资源整合能力，发挥基石出资人的引导作用，吸引和撬动其他社会资本。
                                </span></article>
                        </section>
                    </div>
                </section>

            </div>
        </div>

        <div style={{ height: barHeight, margin: '0 0.5rem' }}>
            <h3 style={{
                fontSize: barFontSize, fontWeight: "bold", display: "flex", margin: 0,
                padding: "0 0.3rem", color: ThemeColor, height: barHeight, lineHeight: barHeight,
                borderBottom: "none", borderLeft: CutLine, borderRight: CutLine
            }}>联盟任务</h3>
        </div>

        <div style={{ borderTop: CutLine, padding: '0 0.5rem', borderBottom: CutLine }}>
            <ul style={{ display: "flex", borderLeft: CutLine, borderRight: CutLine }}>
                {data.map((item, index) => {
                    return (
                        <li key={index} style={{
                            flex: 1, height: '1.4rem',
                            display: "flex",
                            flexDirection: "column", alignItems: 'center',
                            justifyContent: "space-evenly"
                        }}>
                            <div style={{
                                height: "0.4rem",
                                width: "0.4rem",
                                borderRadius: "0.2rem",
                                overflow: "hidden",
                                background: ThemeColor,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: "center"
                            }}>
                                <img src={AliOss + `/new_version_0518/index_mission_icon_${index + 1}.png`} alt="" style={{
                                    width: "0.24rem", height: "0.24rem"
                                }} />
                            </div>

                            <span style={{ fontWeight: "bold", fontSize: "0.12rem", color: 'rgba(0,0,0,0.5)' }}>{item}</span>
                        </li>
                    )
                })}
            </ul>
        </div>

        {/* 联盟宗旨 */}
        <div style={{ padding: '0 0.5rem' }}>
            <h3 style={{
                fontSize: barFontSize, fontWeight: "bold", display: "flex", margin: 0,
                padding: "0 0.3rem", color: ThemeColor, height: barHeight, lineHeight: barHeight,
                borderBottom: "none", borderLeft: CutLine, borderRight: CutLine
            }}>联盟宗旨</h3>
            <ul style={{ display: "flex", borderLeft: CutLine, borderRight: CutLine }}>
                {data.map((item, index) => {
                    return (
                        <li key={index} style={{
                            flex: 1, height: '2.7rem',
                            display: "flex",
                            flexDirection: "column", alignItems: 'center',
                            justifyContent: "space-evenly",
                            position: "relative",
                            backgroundImage: `url(${AliOss}/new_version_0518/about_us_purpose_${index + 1}.png)`
                        }}>
                            <section style={{
                                position: "absolute",
                                height: "36%",
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: "rgba(0,0,0,0.3)",
                                color: "white",
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: "center"
                            }} className="itemHover">
                                <span style={{ fontSize: "0.14rem", color: 'rgba(255,255,255,1)' }}>{item}</span>
                            </section>
                        </li>
                    )
                })}
            </ul>
            <h3 style={{
                fontSize: barFontSize, fontWeight: "bold", display: "flex", margin: 0,
                padding: "0 0.3rem", color: ThemeColor, height: barHeight, lineHeight: barHeight,
                borderBottom: "none", borderLeft: CutLine, borderRight: CutLine
            }}>联盟架构</h3>
        </div>

        {/* 联盟架构 */}
        <div style={{ borderTop: CutLine, height: "6rem", padding: '0 0.5rem', }}>
            <div style={{
                borderLeft: CutLine, borderRight: CutLine, height: "100%",
                display: "flex", alignItems: "center", justifyContent: "center"
            }}>
                {/* <img src={jiegouPg} style={{ height: "90%" }} /> */}
                {/* <OrgChart tree={initechOrg} NodeComponent={MyNodeComponent} /> */}
                {/* <section style={{
                    border:"1px solid pink",
                    width:"70%",
                    height:"90%",
                    margin:"auto"
                }}></section> */}
                <section className='strut_area'>
                    <p className='col'>
                        <button className="col_btn">理事会</button>
                    </p>
                    <p className='col_'>
                        <div className='col_line'></div>
                    </p>
                </section>
            </div>
        </div>


        {/* 联盟发起单位 */}
        <div style={{ padding: '0 0.5rem', borderTop: CutLine, position: "relative" }}>
            <h3 style={{
                fontSize: barFontSize, fontWeight: "bold", display: "flex", margin: 0,
                padding: "0 0.3rem", color: ThemeColor, height: barHeight, lineHeight: barHeight,
                borderBottom: "none", zIndex: 777,
                position: 'absolute'
            }}>联盟发起单位</h3>
            <section style={{
                position: "absolute", height: '5.5rem',
                left: "0.5rem", right: "0.5rem", bottom: 0, top: 0,
                borderLeft: CutLine, borderRight: CutLine,
            }}>
                <img src={AliOss + '/new_version_0518/about_us_companies.png'} style={{
                    height: "100%"
                }} alt="" />
            </section>
        </div>

    </div>
}

export default AboutLeague