import React from 'react'
import "./index.scss"
import { useState, useEffect, useRef } from 'react'
import Pone from "./page1"
import Ptwo from "./page2"
import Pthree from "./page3"
import Pfour from './page4'


import {AliOss} from "../../lib/const"

// import defaultImg from "../../static/img/poster.png"

const defaultImg = AliOss+'/img/poster.png'

// 首页根组件
export default function Home() {
    const [isDown, setDirection] = useState(null)
    const [pageNo, setPageNo] = useState(1)  //页面索引
    const [isExpand, setExpand] = useState(false)
    const [real, setReal] = useState(false) // 二帧进一帧动画

    const prevPageNo = useRef();

    let timer

    const bindHandleScroll = (e) => {
        timer = setTimeout(() => {
            if (e.deltaY < 0) {
                setDirection(false)
                if (pageNo > 1) {
                    setPageNo(pageNo - 1)
                }
            }
            else {
                setDirection(true)
                if (pageNo < 4) {
                    setPageNo(pageNo + 1)
                }
            }
        }, 500)
    }

    useEffect(() => {
        if (prevPage === 2 && pageNo === 1) {
            setReal(true)
        }
        return () => {
            clearTimeout(timer)
        }
    }, [pageNo])

    useEffect(() => {
        prevPageNo.current = pageNo;
    });

    // 一屏
    useEffect(()=>{
        document.getElementsByTagName("html")[0].style.overflow="hidden"
    },[])

    const prevPage = prevPageNo.current;

    const page = () => {
        switch (pageNo) {
            case 1:
                return <Pone real={real} />;
            case 2:
                return <Ptwo />;
            case 3:
                return <Pthree />;
            case 4:
                return <Pfour />;
            default:
                return <img src={defaultImg} alt="" style={{ width: "100%", height: "100%" }} />
        }
    }

    const arr = [
        "联盟目标", "联盟介绍", "新闻动态", "发起单位"
    ]

    return (
        <div style={{ backgroundImage: defaultImg }}
            className="home_page"
            onWheel={e => {
                // bindHandleScroll(e) // 滚轮翻页事件
            }}>
            {page()}
            <ul className="indicate" onMouseOver={() => {
                setExpand(true)
            }} onMouseLeave={() => {
                setExpand(false)
            }}>
                {arr.map((item, index) => {
                    return (
                        <li key={index} style={{color:pageNo==4?'rgba(111, 111, 111, 1)':'white'}} onClick={() => {
                            setPageNo(index + 1)
                        }}
                            className={`${index + 1 === pageNo && "li_active"} 
                            ${isExpand && 'li_expand'}`}>
                            <i style={{background:pageNo==4?'rgba(111, 111, 111, 1)':'white'}}></i>
                            <span style={{color:pageNo==4?'rgba(111, 111, 111, 1)':'white'}} >{item}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

