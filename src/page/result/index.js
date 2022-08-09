import { useState, useEffect, useRef } from "react"
import { screen_scale } from "../../util/rem"
import { withRouter, useHistory } from 'react-router-dom';
import {
    LeftOutlined, createFromIconfontCN
} from '@ant-design/icons'
import { AliOss, ThemeColor, CutLine } from "../../lib/const"

// import './default.less'

const IframeUrl = "http://58.33.170.254:8867"
const data = [
    IframeUrl + "/news_detail_1.html",
    IframeUrl + "/news_detail_2.html",
    IframeUrl + "/news_detail_3.html",
]



const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});


function SearchResult(props) {
    useEffect(() => {
        document.getElementsByTagName("html")[0].style.overflowX = "hidden"
        document.getElementsByTagName("html")[0].style.overflowY = "scroll"
        // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0

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
                       <span className='homeBtn' onClick={
                        () => {
                            window.location.href = '/'
                        }
                    }>首页</span>
                    <span style={{ margin: '0 0.1rem' }}>/</span>
                    <span className='dynamicBtn' onClick={
                        () => {
                            window.location.href = '/dynamic'
                        }
                    }>
                        企业搜索
                    </span>
                
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
                    <div className='newsTitle'>上海碳中和技术创新联盟发起人会议在新能源中心成功召开</div>
                    <div style={{ color: "rgba(0,0,0,0.6)" }}>发布时间: 2021.12.13</div>
                </section>
            </div>

            <div style={{
                boxSizing: "border-box",
                color: 'white',
                marginBottom: "-0.5rem",
                border: CutLine,
                borderTop: 'none',
                borderBottom: 'none',
                margin: '0 0.5rem 0 0.5rem',
                       padding:'0.3rem 0'
            }}>

            
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
                    <div onClick={() => { history.push("/news/1") }}>
                        <IconFont type="icon-tuichu" style={{ color: ThemeColor, margin: "0 0.1rem 0 0", fontSize: "0.12rem" }} />
                        <a href="#" style={{ fontSize: "0.12rem", textDecoration: "underline", color: ThemeColor, fontWeight: "400" }}>
                        沪科〔2021〕497号 关于同意成立上海碳中和技术创新联盟的批复</a>
                    </div>
                    <div onClick={()=>{history.push("/news/3")}}>
                        <IconFont type="icon-tuichu" style={{ color: ThemeColor, margin: "0 0.1rem 0 0", fontSize: "0.12rem" }} />
                        <a href="#" style={{ fontSize: "0.12rem", textDecoration: "underline", color: ThemeColor, fontWeight: "400" }}>
                            中共中央 国务院关于完整准确全面贯彻新发展理念做好碳达峰碳中和工作的意见

</a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default withRouter(SearchResult)