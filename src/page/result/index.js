import { useState, useEffect, useRef } from "react"
import { screen_scale } from "../../util/rem"
import { withRouter, useHistory } from 'react-router-dom';
import {
    LeftOutlined, createFromIconfontCN
} from '@ant-design/icons'
import { AliOss, ThemeColor, CutLine } from "../../lib/const"
import {Input,Button} from 'antd'

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
                    padding: "0 0.3rem", height: "0.7rem", 
                    alignItems: "center", justifyContent: "center",
                    borderLeft: CutLine, borderRight: CutLine,
                    
                }}>
                    <Input placeholder="请输入公司名进行查询"/>
                    <Button type="primary">搜索</Button>
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
        </div>
    )
}

export default withRouter(SearchResult)