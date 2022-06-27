import React, { useEffect } from 'react'
import { AliOss, ThemeColor, CutLine, barFontSize, barHeight } from "../../lib/const"
// import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmapgl';
import { EnvironmentFilled, PhoneFilled, MailFilled } from '@ant-design/icons';
import pos from '../../static/imgs/position.png'
import './index.less'

const AboutLeague = () => {
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
                borderBottom: CutLine
            }}>联盟介绍</h3>
        </div>
        <div style={{ padding: '0.2rem 0.5rem' }}>
            <section style={{
                border: "1px solid red", padding: "0 0.3rem", textAlign: "left",
                lineHeight: "0.4rem", fontSize: "0.14rem", color: "rgba(0,0,0,0.7)"
            }}>
                以“双碳”领域技术创新需求和成果转化需求为导向，加快推进核心技术的突破与产业化，助推绿色低碳科研成果高效转化为现实生产力，推动相关产业爆发式增长，从而打造国内一流、国际领先的碳中和科技创新平台，助力上海市高质量实现
                <span style={{ fontWeight: "bold", color: ThemeColor }}>“碳达峰、碳中和”</span>
                的目标，更好服务国家碳达峰、碳中和战略全局，围绕落实上海市碳中和目标及崇明区世界生态岛建设，计划打造
                <span style={{ fontWeight: "bold", color: ThemeColor }}>“一平台，一研究院，一基地，一基金”</span>
                ，即形成顶级专家领衔、技术转化高效、空间布局合理、资本运作深入的综合性技术创新与产业孵化体。
          </section>
            <section className="introduce_card">

            </section>
        </div>

        <div style={{ borderLeft: CutLine, borderBottom: CutLine, borderRight: CutLine, height: barHeight, margin: '0 0.5rem' }}>
            <h3 style={{
                fontSize: barFontSize, fontWeight: "bold", display: "flex", margin: 0,
                padding: "0 0.3rem", color: ThemeColor, height: barHeight, lineHeight: barHeight,
                borderBottom: "none"
            }}>联盟任务</h3>
        </div>
        {/* <div style={{
            position: "absolute",
            left: "0.5rem", right: '0.5rem', bottom: 0, top: 0,
            display: "flex",
            alignItems: 'center'
        }}>
            <img src={AliOss + `/new_version_0518/contact_us.png`}
                style={{ width: "100%", height: "100%" }} alt="" />
            <section style={{
                height: "70%", background: "rgba(0,0,0,0.3)", width: "100%", zIndex: 8888,
                padding: "0.5rem 0", display: "flex", justifyContent: "center", position: "absolute",
                color: "white"
            }}>
                <div style={{
                     height: '100%', paddingRight: "0.3rem",
                    width: "50%", display: 'flex', justifyContent: "flex-end", alignItems: "center"
                }}>
                    <section style={{
                        height: "90%",
                        width: "70%",
                    }}>
                        <img src={pos} style={{ width: "100%", height: "100%" }} alt="" />
                    </section>
                </div>
                <div style={{
                     height: '100%', paddingLeft: "0.3rem",
                    width: "50%", display: "flex"
                }}>
                    <section style={{
                        height: "50%", width: "60%",
                        alignSelf: 'center',
                        display: "flex", justifyContent: "space-between", flexDirection: "column",
                        textAlign: "left", fontSize: "0.12rem",
                    }}>
                        <p style={{
                            fontWeight: "bold", fontSize: "0.16rem",
                            width: "100%"
                        }}>上海碳中和技术创新联盟</p>
                        <p style={{ height: "0.01rem", background: "white", width: '100%' }}></p>
                        <p>
                            <EnvironmentFilled style={{marginRight:"0.08rem",fontSize:"0.12rem"}}/>

                            <span>地址</span>
                            <span style={{ margin: '0 0.06rem 0 0.03rem' }}>:</span>
                            <span>上海市崇明区长兴江南大道1333号3号楼</span>
                        </p>
                        <p>
                            <PhoneFilled style={{marginRight:"0.08rem",fontSize:"0.12rem"}}/>
                            <span>电话</span>
                            <span style={{ margin: '0 0.06rem 0 0.03rem' }}>:</span>
                            <span>021-66858866</span>
                        </p>
                        <p>
                            <MailFilled style={{marginRight:"0.08rem",fontSize:"0.12rem"}}/>
                            <span>邮箱</span>
                            <span style={{ margin: '0 0.06rem 0 0.03rem' }}>:</span>
                            <span>huyu@stiacn.com</span>
                        </p>
                    </section>
                </div>
            </section>
        </div> */}
    </div>
}

export default AboutLeague