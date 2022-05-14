
import { useState, useEffect, useRef } from "react"
import { withRouter, useHistory } from 'react-router-dom';
import {
    LeftOutlined
} from '@ant-design/icons'
import img1 from './imgs/1.png'
import { AliOss, ThemeColor, CutLine } from "../../lib/const"
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });
  

function News(props) {
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
                    <span style={{ margin: "0 0.1rem" }}>/</span><span>新闻详情</span>
                </h3>
            </div>

            <div style={{
                border: CutLine, padding: '0 0.5rem', borderRight: "none", borderLeft: "none",
                borderTop: "none"
            }}>
                <section style={{
                    fontSize: "0.12rem", fontWeight: "400", display: "flex", margin: 0,
                    padding: "0 0.3rem", height: "0.7rem", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    borderLeft: CutLine, borderRight: CutLine
                }}>
                    <div style={{
                        fontSize: "0.18rem", fontWeight: "bold", color: '#2D2D2D'
                    }}>沪科〔2021〕497号 关于同意成立上海碳中和技术创新联盟的批复</div>
                    <div style={{ color: "rgba(0,0,0,0.6)" }}>发布时间: 2021.12.17</div>
                </section>
            </div>

            <div style={{
                boxSizing: "border-box",
                color: 'white',
                marginBottom: "-0.5rem",
                border:CutLine,
                borderTop:'none',
                borderBottom:'none',
                margin:'0 0.5rem 0 0.5rem'
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
                    <img src={img1} />
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
                    <div onClick={()=>{ history.push("/news/2")}}>
                    <IconFont type="icon-tuichu" style={{ color:ThemeColor, margin: "0 0.1rem 0 0", fontSize: "0.12rem" }} />
                    <a href="#" style={{ fontSize: "0.12rem", textDecoration: "underline", color:ThemeColor, fontWeight: "400" }}>
                    上海碳中和技术创新联盟发起人会议在新能源中心召开</a>
                    </div>
                    <div onClick={()=>{history.push("/news/3")}}>
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

export default withRouter(News)