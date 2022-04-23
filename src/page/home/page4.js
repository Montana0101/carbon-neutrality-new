import { AliOss } from "../../lib/const"
import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import { useSpring, animated, useTransition, useSpringRef, config } from "react-spring"
import { useHistory, withRouter } from 'react-router-dom'
import bg from "../../static/imgs/brand.png"

const snec = AliOss + '/img/snec.png'

function Pfour() {
    const [data, setData] = useState([])
    const history = useHistory()
    useEffect(() => {
        let arr = []
        for (var i = 0; i < 29; i++) {
            arr.push(AliOss + `/img/companies/logo/${i + 1}.png`)
        }
        setData(arr)
        console.log("打印下logo集合", arr)
    }, [])

    useEffect(() => {
        document.getElementsByTagName("html")[0].style.overflowX = "hidden"
        document.getElementsByClassName("logo_area")[0].style.color = '#606060'
        // document.getElementById("logo").src = AliOss + '/img/logo2.png'
        // document.getElementById("logo").src = require("../../static/imgs/logo.png")

        for (var i = 0; i < document.getElementsByClassName("tabInit").length; i++) {
            document.getElementsByClassName("tabInit")[i].style.color = '#606060'
        }
        return (() => {
            for (var i = 0; i < document.getElementsByClassName("tabInit").length; i++) {
                document.getElementsByClassName("tabInit")[i].style.color = 'white'
            }
            document.getElementsByClassName("logo_area")[0].style.color = 'white'
            document.getElementById("logo").src = AliOss + '/img/logo.png'
        })

    }, [])

    const animation = useSpring({
        // config: { duration: 700 },
        // // height:"100%",
        // from: { opacity: 0.3, transform: 'translate3d(100%,0,0)' },
        // to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        // delay:2000,
    })

    return <animated.div style={{ ...animation, width: "100%", height: "100%" }}><div className="home_page home_page_4" key="page4" style={{
        background: "white"
    }}>
        <section style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <article style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                margin: "0 auto",
                marginTop: "0.07rem",
                padding: "0.6rem",
                alignItems: "center"
            }}>
                {/* <span style={{
                    color: "rgba(0,0,0,0.7)",
                    fontSize: "0.24rem", fontWeight: "bold"
                }}>发起单位</span>
                <p style={{
                    color: "rgba(0,0,0,0.5)",
                    fontSize: "0.12rem",
                }}>排列不分先后顺序</p>
           
                <ul className="logos" style={{ width: "100%" }}>
                    <li style={{ height: "0.66rem", display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
                        {data.slice(0, 5).map((item, index) => {
                            return (
                                <img src={item} key={index} style={{ height: "90%" }} />
                            )
                        })}
                    </li>
                    <li style={{ height: "0.66rem", display: "flex", justifyContent: "space-between", alignItems: 'center' }}>

                        {data.slice(5, 10).map((item, index) => {
                            return (
                                <img src={item} key={index} style={{ height: "90%" }} />
                            )
                        })}
                    </li>
                    <li style={{ height: "0.66rem", display: "flex", justifyContent: "space-between", alignItems: 'center' }}>

                        {data.slice(10, 18).map((item, index) => {
                            return (
                                <img src={item} key={index} style={{ height: "90%" }} />
                            )
                        })}
                    </li>
                    <li style={{ height: "0.66rem", display: "flex", justifyContent: "space-between", alignItems: 'center' }}>

                        {data.slice(18, 24).map((item, index) => {
                            return (
                                <img src={item} key={index} style={{ height: "90%" }} />
                            )
                        })}
                    </li>
                    <li style={{ height: "0.66rem", display: "flex", justifyContent: "space-between", alignItems: 'center' }}>

                        {data.slice(24, 29).map((item, index) => {
                            return (
                                <img src={item} key={index} style={{ height: "90%" }} />
                            )
                        })}
                    </li>
                </ul> */}
                <div style={{width:"100%" }}>
                    <img src={bg} style={{width:"65%"}}/>
                </div>
                <p style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "0.13rem",
                    justifyContent: "center"
                }}>
                    <span style={{ color: 'grey', fontSize: "0.12rem" }}>友情链接：</span>
                    <img src={snec} alt="" style={{ margin: "0 0.1rem", cursor: "pointer" }} onClick={() => {
                        window.open("http://www.snec.sh.cn/")
                    }} />
                    <a href="http://www.snec.sh.cn/" target="_blank" style={{
                        textDecoration: "underline",
                        color: "#606060",
                        fontSize: "0.12rem" 
                    }} >上海新能源科技成果转化与产业促进中心</a>
                </p>

            </article>
        </section>
    </div>
    </animated.div >
}

export default withRouter(Pfour)