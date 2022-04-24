import Ptwo from "./page2"
import { AliOss } from "../../lib/const"
import { useEffect, useState } from "react"
import * as echarts from 'echarts';
import { Carousel } from 'antd';
import { NavigateButton } from "../../component/button"

import 'echarts-gl';

const contentStyle = {
  height: '5rem',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const arr = [
  {
    title:'关于我们',
    h1:"联盟全称为上海碳中和技术创新联盟",
    h2:"Shanghai Technology Innovation Alliance for Carbon Neutrality",
    h3:"英文缩写为STIACN"
  },{
    title:'联盟宗旨',
    h1:"打造碳中和万亿新市场         建设碳中和行业新生态",
    h2:"树立碳中和企业新标杆         构筑碳中和商业新范式",
    h3:"开创碳中和产业新未来"
  },{
    title:"联盟任务",
    h1:"孵化技术创新产品       研究商业创新模式",
    h2:"推动行业标准制订       搭建资本合作平台",
    h3:"联合产品市场推广"
  },{
    title:"联盟目标",
    h1:"技术与产业融通、政策与资本汇集",
    h2:"建成有中国特色的德国弗劳恩霍夫 (fraunhofer)组织",
    h3:""
  },
  {title:'联盟布局',
   h1:"以产业优化、技术创新、平台建设、宣传推广、项目示范为抓手，通过开展全方位、多领域、高质量的专业活动，形成顶级专家领衔、技术转化高效、空间布局合理、资本运作深入的综合性技术创新与产业孵化体。"
},
]

// 首页首屏
export default function Pone(props) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }} className='home_page_1'>
        <section style={{height:"5rem"}} >
        <Carousel autoplay effect="fade">

        <div className='banner_area'>
                <h3 style={contentStyle}>
                <img src={AliOss + `/new_version/img/index_banner_1.png`} alt=""/>
                <section className='banner_explain'>
                  <p style={{fontSize:"0.22rem",fontWeight:"bold"}}>
                    关于我们
                  </p>
                  <div style={{fontSize:"0.16rem"}}>
                    <p>联盟全称为上海碳中和技术创新联盟</p>
                    <p style={{fontSize:"0.12rem"}}>
                      Shanghai Technology Innovation Alliance for Carbon Neutrality
                    </p>
                    <p style={{fontSize:"0.16rem"}}>英文缩写为STIACN</p>
                  </div>
                  <p style={{width:"1rem",height:"0.3rem",alignSelf:"flex-end"}}>
                  <NavigateButton  content={"更多信息"} path={"/eng"}/>
                  </p>
                </section>
              </h3>
            </div>

{/* 第二个 */}
            <div className='banner_area'>
                <h3 style={contentStyle}>
                <img src={AliOss + `/new_version/img/index_banner_2.png`} alt=""/>
                <section className='banner_explain'>
                  <p style={{fontSize:"0.22rem",fontWeight:"bold"}}>
                    联盟宗旨
                  </p>
                  <div style={{fontSize:"0.16rem"}}>
                    <p style={{display:"flex",justifyContent:"space-between"}}>
                      <span>打造碳中和万亿新市场</span> 
                      <span>建设碳中和行业新生态</span>
                    </p>
                    <p style={{display:"flex",justifyContent:"space-between"}}>
                      <span>树立碳中和企业新标杆</span> 
                      <span>构筑碳中和商业新范式</span>
                    </p>
                    <p style={{fontSize:"0.16rem"}}>开创碳中和产业新未来</p>
                  </div>
                  <p style={{width:"1rem",height:"0.3rem",alignSelf:"flex-end"}}>
                  <NavigateButton  content={"更多信息"} path={"/eng"}/>
                  </p>
                </section>
              </h3>
            </div>
      </Carousel>
        </section>
    </div>
  )
}
