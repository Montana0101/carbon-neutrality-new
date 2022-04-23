
import { useState, useEffect,useRef } from "react"
import { screen_scale } from "../../util/rem"
import { AliOss } from "../../lib/const"
import { withRouter ,useHistory} from 'react-router-dom';
import {
    LeftOutlined
  } from '@ant-design/icons'
import img1 from './imgs/1.png'

const IframeUrl = "http://58.33.170.254:8867"
const data = [
    IframeUrl + "/news_detail_1.html",
    IframeUrl + "/news_detail_2.html",
    IframeUrl + "/news_detail_3.html",
]

function NewsDetail1(props) {
    useEffect(() => {
        document.getElementsByTagName("html")[0].style.overflowX = "hidden"
        document.getElementsByTagName("html")[0].style.overflowY = "scroll"
    }, [])
    const history = useHistory()

    return (
        <div className="screen_1" style={{
            height: "auto",
            width:"100%",
            background:"linear-gradient(#A6DEF1,#5F83D7)",
            padding:"1.2rem 0.65rem 1rem 0.65rem"
        }}>
            <div style={{
                boxSizing:"border-box",
                color:'white',
                marginBottom:"-0.5rem"
            }}>
                <p style={{
                    fontSize:"0.18rem",
                    fontWeight:"bold",
                    display:"flex",
                    justifyContent:'space-between'
                }}>
                    <span style={{
                        cursor:"pointer"
                    }} onClick={()=>{
                        window.history.back()
                    }}>
                        <LeftOutlined/>
                        返回
                    </span>
                    <span>
                    沪科〔2021〕497号 关于同意成立上海碳中和技术创新联盟的批复
                    </span>
                    <span/>
                </p>

                <p style={{
                  fontSize:"0.14rem"
                }}>发布时间：2021.12.17</p>

                <article style={{
                    margin:"0.5rem 0"
                }}>
                    <img src={img1}/>
                </article>

                <div style={{
                    display:"flex",
                    justifyContent:"space-between",
                    fontSize:"0.14rem",
                    cursor:"pointer"
                }} onClick={()=>{
                    history.push("/news/2")
                }}>
                    <span/>
                    <span>下一篇&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 上海碳中和技术创新联盟发起人会议在新能源中心召开</span>
                </div>
            </div>
        </div>
    )
}

export default withRouter(NewsDetail1)