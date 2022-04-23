import Ptwo from "./page2"
import { AliOss } from "../../lib/const"
import { useEffect, useState } from "react"
import { CSSTransition } from 'react-transition-group';
import { useSpring, animated, useTransition, useSpringRef, config } from "react-spring"
import * as echarts from 'echarts';
import 'echarts-gl';

const bg1 = AliOss + '/img/bg1.png'
const bg2 = AliOss + '/img/bg2.png'
const bg3 = AliOss + '/img/bg3.png'
const bg4 = AliOss + '/img/company.png'
const gif = "https://shbd.oss-cn-beijing.aliyuncs.com/%E5%AE%98%E7%BD%91/gif/Mouse-wheel-55.gif"

var ROOT_PATH =
  'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';


var option;

// 首页首屏
export default function Pone(props) {

  

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }} className='home_page_1'>
        {/* <section style={{background:"red",height:"0.7rem"}} className='title_bar'>
            <div></div>
            <div>123</div>
        </section> */}
    </div>
  )
}
