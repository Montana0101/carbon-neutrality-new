import { AliOss } from "../../lib/const"
import { message } from "antd"
import { CSSTransition } from 'react-transition-group';
import { useSpring, animated, useTransition, useSpringRef, config } from "react-spring"
import {useHistory, withRouter} from 'react-router-dom'
import img1 from "../../static/imgs/new1.png"
import img2 from "../../static/imgs/new2.png"
import img3 from "../../static/imgs/new3.png"
const bg3 = AliOss + '/img/bg3.png'
const data = [
    {
        img: img1,
        text: "沪科〔2021〕497号 关于同意成立上海碳中和技术创新联盟的批复",
    },
    {
        img: img2,
        text: "上海碳中和技术创新联盟发起人会议在新能源中心召开",
    },
    {
        img: img3,
        text: "中共中央 国务院关于完整准确全面贯彻新发展理念做好碳达峰碳中和工作的意见（2021年9月22日）",
    },
]

function Pthree() {
    const animation = useSpring({
        config: {duration:700},
        from: { opacity: 0.3},
        to: { opacity: 1},
    })

    const history = useHistory()
    
    return <animated.div style={{ ...animation, width: "100%", height: "100%" }}>
        <div className="home_page_3 home_page" key="page3" style={{
            backgroundImage: `url(${bg3})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}>
            {/* <img src={bg2} alt="" /> */}
            <section>
                <article style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <span style={{
                            fontSize: "0.22rem",
                            fontWeight: "bold"
                        }}>新闻动态</span>

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
                        boxSizing: "border-box",
                        flex: 1,
                    }}>
                        <ul style={{
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                            {data.map((item, index) => {
                                return (
                                    <li key={index} style={{
                                        width: "28%",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column"
                                    }}>
                                        <div style={{
                                            flex:3,
                                            // background:'red'
                                        }}>
                                            <img src={item.img} alt="" style={{
                                            width: "100%",
                                            height:"100%",
                                            cursor:"pointer"
                                        }} onClick={()=>{
                                            history.push(`/news/${index+1}`)
                                        }}/>
                                        </div>
                                        <div style={{
                                            // flex: 1,
                                            height:"0.7rem",
                                            background: "rgba(0,0,0,0.6)",
                                            color: "white",
                                            marginTop: "0.1rem",
                                            textAlign: "left",
                                            display: "flex",
                                            alignItems: "center",
                                            padding: "0 0.1rem",
                                            fontWeight: "bold"
                                        }}>
                                            {item.text}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </article>

            </section>
        </div>
    </animated.div >
}

export default withRouter(Pthree)