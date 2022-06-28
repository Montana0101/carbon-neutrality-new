import React, { useState, useEffect } from 'react'
import { AliOss, ThemeColor, CutLine, barFontSize, barHeight } from "../../lib/const"
// import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmapgl';
import { EnvironmentFilled, PhoneFilled, MailFilled } from '@ant-design/icons';
import pos from '../../static/imgs/position.png'
import './index.less'

const data = [
    "孵化技术创新平台", "研究商业创新模式", "推动行业标准制订", "搭建资本合作平台", "联合产品市场推广"
]

const AboutLeague = () => {
    const [inx, setInx] = useState(0)

    useEffect(() => {
        // const dom = document.getElementsByClassName("app-header")[0]
        // dom.style.display='none'
        const main = document.getElementById('main_container')
        main.style.height = '100%'
    }, [])

    return <div className='about_page'>
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
                    <div className={`col ${inx == 0 && "col_active"}`} onClick={() => setInx(0)}>
                        {inx == 0 ? <>
                            <section className='content'>
                                <span>联盟</span>
                                <article>
                                    上海碳中和技术创新联盟（简称“联盟”）由上海新能源科技成果转化与产业促进中心牵头，本市相关高校、科研院所、企业共同发起成立，形成顶级专家领衔、技术转化高效、空间布局合理、资本运作深入的综合性创新平台，构建上下贯通、左右衔接的低碳产业技术创新生态圈。
                    </article>
                            </section>
                            <img src={AliOss + `/new_version_0518/about_us_banner_${inx + 1}.png`} />
                        </> :
                            <div>联盟</div>}
                    </div>
                    <div className={`col ${inx == 1 && "col_active"}`} onClick={() => setInx(1)}>
                        {inx == 1 ? <>
                            <section className='content'>
                                <span>研究院</span>
                                <article>
                                    上海碳中和技术创新联盟（简称“联盟”）由上海新能源科技成果转化与产业促进中心牵头，本市相关高校、科研院所、企业共同发起成立，形成顶级专家领衔、技术转化高效、空间布局合理、资本运作深入的综合性创新平台，构建上下贯通、左右衔接的低碳产业技术创新生态圈。
                    </article>
                            </section>
                            <img src={AliOss + `/new_version_0518/about_us_banner_${inx + 1}.png`} />
                        </> : <div>研究院</div>}
                    </div>
                    <div className={`col ${inx == 2 && "col_active"}`} onClick={() => setInx(2)}>
                        {inx == 2 ? <>
                            <section className='content'>
                                <span>平台公园</span>
                                <article>
                                    上海碳中和技术创新联盟（简称“联盟”）由上海新能源科技成果转化与产业促进中心牵头，本市相关高校、科研院所、企业共同发起成立，形成顶级专家领衔、技术转化高效、空间布局合理、资本运作深入的综合性创新平台，构建上下贯通、左右衔接的低碳产业技术创新生态圈。
                    </article>
                            </section>
                            <img src={AliOss + `/new_version_0518/about_us_banner_${inx + 1}.png`} />
                        </> : <div>平台公园</div>}
                    </div>
                    <div className={`col ${inx == 3 && "col_active"}`} onClick={() => setInx(3)}>
                        {inx == 3 ? <>
                            <section className='content'>
                                <span>产业园</span>
                                <article>
                                    上海碳中和技术创新联盟（简称“联盟”）由上海新能源科技成果转化与产业促进中心牵头，本市相关高校、科研院所、企业共同发起成立，形成顶级专家领衔、技术转化高效、空间布局合理、资本运作深入的综合性创新平台，构建上下贯通、左右衔接的低碳产业技术创新生态圈。
                    </article>
                            </section>
                            <img src={AliOss + `/new_version_0518/about_us_banner_${inx + 1}.png`} />
                        </> : <div>产业园</div>}
                    </div>
                    <div className={`col ${inx == 4 && "col_active"}`} onClick={() => setInx(4)}>
                        {inx == 4 ? <>
                            <section className='content'>
                                <span>基因</span>
                                <article>
                                    上海碳中和技术创新联盟（简称“联盟”）由上海新能源科技成果转化与产业促进中心牵头，本市相关高校、科研院所、企业共同发起成立，形成顶级专家领衔、技术转化高效、空间布局合理、资本运作深入的综合性创新平台，构建上下贯通、左右衔接的低碳产业技术创新生态圈。
                    </article>
                            </section>
                            <img src={AliOss + `/new_version_0518/about_us_banner_${inx + 1}.png`} />
                        </> : <div>基因</div>}
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
            <ul style={{ display: "flex",borderLeft:CutLine,borderRight:CutLine }}>
                {data.map((item, index) => {
                    return (
                        <li key={index} style={{ flex: 1, height: '1.4rem', 
                        display:"flex",
                        flexDirection:"column",alignItems:'center',
                        justifyContent:"space-evenly" }}>
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

                            <span style={{fontWeight:"bold",fontSize:"0.12rem",color:'rgba(0,0,0,0.5)'}}>{item}</span>
                        </li>
                    )
                })}
            </ul>
        </div>

        {/* 联盟宗旨 */}
        <div style={{  padding: '0 0.5rem'}}>
        <h3 style={{
                fontSize: barFontSize, fontWeight: "bold", display: "flex", margin: 0,
                padding: "0 0.3rem", color: ThemeColor, height: barHeight, lineHeight: barHeight,
                borderBottom: "none", borderLeft: CutLine, borderRight: CutLine
            }}>联盟宗旨</h3>
            <ul style={{ display: "flex",borderLeft:CutLine,borderRight:CutLine }}>
                {data.map((item, index) => {
                    return (
                        <li key={index} style={{ flex: 1, height: '2.7rem', 
                        display:"flex",
                        flexDirection:"column",alignItems:'center',
                        justifyContent:"space-evenly",
                        position:"relative",
                        backgroundImage:`url(${AliOss}/new_version_0518/about_us_purpose_${index + 1}.png)` }}>
                            <section style={{
                                position:"absolute",
                                height:"36%",
                                left:0,
                                right:0,
                                bottom:0,
                                background:"rgba(0,0,0,0.3)",
                                color:"white",
                                display:"flex",
                                justifyContent:'center',
                                alignItems:"center"
                            }} className="itemHover">
                            <span style={{fontSize:"0.14rem",color:'rgba(255,255,255,1)'}}>{item}</span>
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
        <div style={{borderTop:CutLine,height:"3rem",padding: '0 0.5rem',}}>
            <div style={{borderLeft:CutLine,borderRight:CutLine,height:"100%"}}>
                <img src={require('../../static/imgs/jiegou.svg')}/>
            </div>
        </div>
        <p style={{ height: "0.5rem", background: "red" }}></p>

    </div>
}

export default AboutLeague