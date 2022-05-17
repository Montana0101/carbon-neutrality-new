
import { useState, useEffect, useRef } from "react"
import { withRouter, useHistory } from 'react-router-dom';
import {
    LeftOutlined
} from '@ant-design/icons'
// import img1 from './imgs/1.png'
import { AliOss, ThemeColor, CutLine } from "../../lib/const"
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});


function Admin(props) {
    useEffect(() => {
        document.getElementsByTagName("html")[0].style.overflowX = "hidden"
        document.getElementsByTagName("html")[0].style.overflowY = "scroll"
    }, [])
    const history = useHistory()

    return (
        <div className="screen_1" style={{
            height: "auto",
            width: "100%",
            background: 'white',
            padding: "0 0.3rem"
        }}>
            {/* 碳中和技术创新联盟 */}
            <div style={{ border: CutLine, padding: '0 0.5rem', borderRight: "none", borderLeft: "none" }}>
                <h3 style={{
                    fontSize: "0.12rem", fontWeight: "400", display: "flex", margin: 0,
                    padding: "0 0.3rem", height: "0.7rem", lineHeight: "0.7rem",
                    borderLeft: CutLine, borderRight: CutLine
                }}>
                    <span style={{ color: "rgba(0,0,0,0.6)" }}>首页</span>
                    <span style={{ margin: "0 0.1rem" }}>/</span><span>个人中心</span>
                </h3>
            </div>

            <div style={{
                border: CutLine, padding: '0 0.5rem', borderRight: "none", borderLeft: "none",
                borderTop: "none", boxSizing: "border-box"
            }}>
                <section style={{
                    fontSize: "0.12rem", fontWeight: "400", display: "flex", margin: 0,
                    padding: "0 0.3rem", height: "2.8rem", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    borderLeft: CutLine, borderRight: CutLine, boxSizing: "border-box"
                }}>

                    <div style={{
                        background: "#EEF7EE", width: "100%", height: "100%", margin: "0.2rem 0", padding: '0.2rem',
                        display: "flex", justifyContent: "space-between", boxSizing: "border-box"
                    }}>
                        <div style={{
                            background: "white",
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            padding: "0.2rem 0.15rem",
                            boxSizing: "content-box",
                            alignItems: 'center',
                            justifyContent: "space-between",
                            fontSize: "0.12rem",
                            color: "rgba(0,0,0,0.6)"
                        }}>
                            <img style={{ height: "0.8rem" }}
                                src="https://axure-file.lanhuapp.com/31b63b61-b591-4fa5-badd-980d384a1046__4687b4d118d33d65d4888f8ef69fc693.png" />
                            <span style={{
                                fontSize: "0.16rem", fontWeight: "bold", color: "black"
                                , marginTop: "0.05rem"
                            }}>admin</span>
                            <span>shichen@shbeidou.com</span>
                            <span>上海北斗卫星导航平台有限公司</span>
                        </div>
                        <div style={{
                            border: "2px solid yellow",
                            flex:3,
                            margin: "0 0.2rem"
                        }}>
                            折线图
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: 'column',
                            flex:1,
                        }}>
                            <section style={{ background: "white", marginBottom: "0.05rem", flex: 1 }}>上下</section>
                            <section style={{ background: "white", marginTop: "0.05rem", flex: 1 }}>上下</section>
                        </div>
                    </div>
                </section>
            </div>

            <div style={{
                boxSizing: "border-box",
                color: 'white',
                marginBottom: "-0.5rem",
                border: CutLine,
                borderTop: 'none',
                borderBottom: 'none',
                margin: '0 0.5rem 0 0.5rem'
            }}>
                <p style={{
                    fontSize: "0.18rem",
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: 'space-between'
                }}>
                    <span style={{
                        cursor: "pointer"
                    }} onClick={() => {
                        window.history.back()
                    }}>
                        <LeftOutlined />
                        返回
                    </span>
                    <span>
                        沪科〔2021〕497号 关于同意成立上海碳中和技术创新联盟的批复
                    </span>
                    <span />
                </p>

                <p style={{
                    fontSize: "0.14rem"
                }}>发布时间：2021.12.17</p>

                <article style={{
                    margin: "0 0"
                }}>
                    {/* <img src={img1} /> */}
                </article>

                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.14rem",
                    cursor: "pointer"
                }} onClick={() => {
                    history.push("/news/2")
                }}>
                    <span />
                    <span>下一篇&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 上海碳中和技术创新联盟发起人会议在新能源中心召开</span>
                </div>
            </div>

            <div style={{
                border: CutLine, padding: '0 0.5rem', borderRight: "none", borderLeft: "none",
                // borderTop: "none"
            }}>
                <section style={{
                    fontSize: "0.12rem", fontWeight: "400", display: "flex", margin: 0,
                    padding: "0 0.3rem", height: "0.9rem", flexDirection: "column",
                    alignItems: "flex-start", justifyContent: "center",
                    borderLeft: CutLine, borderRight: CutLine,
                }}>
                    <div onClick={() => { history.push("/news/2") }}>
                        <IconFont type="icon-tuichu" style={{ color: ThemeColor, margin: "0 0.1rem 0 0", fontSize: "0.12rem" }} />
                        <a href="#" style={{ fontSize: "0.12rem", textDecoration: "underline", color: ThemeColor, fontWeight: "400" }}>
                            上海碳中和技术创新联盟发起人会议在新能源中心召开</a>
                    </div>
                    <div onClick={() => { history.push("/news/3") }}>
                        <IconFont type="icon-tuichu" style={{ color: ThemeColor, margin: "0 0.1rem 0 0", fontSize: "0.12rem" }} />
                        <a href="#" style={{ fontSize: "0.12rem", textDecoration: "underline", color: ThemeColor, fontWeight: "400" }}>
                            中共中央 国务院关于完整准确全面贯彻新发展理念做好碳达峰碳中和工作的意见 (2021年9月22日)

</a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default withRouter(Admin)