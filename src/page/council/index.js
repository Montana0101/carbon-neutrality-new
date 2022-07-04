// 专业委员会
import React, { useState, useEffect } from 'react'
import { AliOss, ThemeColor, CutLine, barFontSize, barHeight, IframeUrl } from "../../lib/const"
import './index.less'


const data = [{
    title: '电力行业碳中和技术专委会',
    description1: '为助推全国电力行业，推动电力技术发展，专委会以战略研究、能力建设、技术交流、标准制定、产学研合作、创投融资、国际合作为目标各相关企业院校搭建开放的交流平台。',
    description2:   '专委会工作包括：针对中央和地方政府的碳达峰、碳中和政策进行政策研究，并提出战略建议、加强国内外企业交流、学术交流和调研考察，推动相关产业研发和技术进步、制定并发布相关标准、规范，促进其贯彻实施、积极推动产学研合作，搭建创投融资平台，加速技术创新成果转化和落地、开展电力碳中和相关领域的培训等。'
}, 2, 3, 4, 5, 6]
const Council = () => {
    return (
        <div className="council_page">
            <section style={{ borderTop: CutLine, padding: '0 0.5rem' }}>
                <ul style={{
                    display: "flex", padding: '0.3rem 0',
                    flexWrap: "wrap", justifyContent: "space-evenly", border: CutLine,

                }}>
                    {data.map((item, index) => {
                        return (
                            <li key={index} style={{
                                width: "30%",
                                height: '2.7rem',
                                display: "flex",
                                flexDirection: "column",
                                position: "relative",
                                marginBottom: "0.6rem"
                            }}>
                                {/* 文案 */}
                                <div style={{
                                    position: "absolute",
                                    top: 0, bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: "rgba(0,0,0,0.65)",
                                    color: 'white',
                                    zIndex: 7777,
                                    fontSize:"0.12rem",
                                    textAlign:"justify",
                                    display:"flex",
                                    flexDirection:"column",
                                    justifyContent:"center",
                                    padding:'0 0.08rem',
                                    alignItems:"center",
                                    textJustify:"inter-ideograph"
                                }}>
                                   <p style={{textIndent:'0.24rem',lineHeight:"0.22rem"}}> {item.description1}</p>
                                   <p style={{textIndent:'0.24rem',lineHeight:"0.22rem"}}> {item.description2}</p>
                                </div>
                                <img src={`${AliOss}/new_version_0518/committee/committee_${index + 1}.png`} style={{
                                    height: "2rem",
                                    width: "100%"
                                }} alt="" />
                                <section style={{
                                    flex: 1,
                                    background: "#F9F9F9",
                                    color: "white",
                                    display: "flex",
                                    justifyContent: 'center',
                                    alignItems: "center",
                                    zIndex: 777,
                                }} >
                                    <span style={{ fontSize: "0.14rem", color: 'rgba(0,0,0,1)' }}>{item.title}</span>
                                </section>

                            </li>
                        )
                    })}
                </ul>
            </section>

        </div>
    )
}

export default Council