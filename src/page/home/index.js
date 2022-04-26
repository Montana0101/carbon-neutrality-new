import { AliOss, ThemeColor, CutLine } from "../../lib/const"
import { useEffect, useState } from "react"
import { Carousel,Space } from 'antd';
import { NavigateButton } from "../../component/button"
import { createFromIconfontCN } from '@ant-design/icons';

import './index.scss'
import 'echarts-gl';


const contentStyle = {
  height: '5rem',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};



// 双碳资料
const carbonData = [
  {
    title: "什么是碳达峰和碳中和",
    content: '指排放不再增长，达到峰位后逐步由碳中和是指企业、团体或个人测算在一定时间内直接或间接产生的温室气...',
  },
  {
    title: "全球变暖的严重性",
    content: '全球已识别出了9 个气候变化临界点',
  }, {
    title: "各国相关政策",
    content: '为应对全球变暖问题，联合国多次召开气候变化大会',
  }, {
    title: "实现碳中和的方式",
    content: "预防大于治理 电力供给端：从发电源头实现传统能源替代，提升清洁能源占比",
  }
]

var industry = ['化工', '能源', '钢铁', '智慧城市', '产业金融', '交通', '智能汽车', '环境检测', '科研', '碳交易']
var timer

// 首页首屏
export default function Home(props) {
  const [industryInx, setInx] = useState(1)

  useEffect(() => {
    timer = setInterval(() => {
      var inx = industryInx + 1
      if (inx > 6) {
        inx = 1
      }
      setInx(inx)
    }, 1000)
    return (() => {
      clearInterval(timer)
    })
  }, [industryInx])



  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }} className='home_page_1'>
      <section >
        <Carousel autoplay effect="fade">
          <div className='banner_area'>
            <h3 style={contentStyle}>
              <img src={AliOss + `/new_version/img/index_banner_1.png`} alt="" />
              <section className='banner_explain'>
                <p style={{ fontSize: "0.22rem", fontWeight: "bold" }}>
                  关于我们
                  </p>
                <div style={{ fontSize: "0.16rem" }}>
                  <p>联盟全称为上海碳中和技术创新联盟</p>
                  <p style={{ fontSize: "0.12rem" }}>
                    Shanghai Technology Innovation Alliance for Carbon Neutrality
                    </p>
                  <p style={{ fontSize: "0.16rem" }}>英文缩写为STIACN</p>
                </div>
                <p style={{ width: "1rem", height: "0.33rem", alignSelf: "flex-end" }}>
                  <NavigateButton content={"更多信息"} path={"/"} />
                </p>
              </section>
            </h3>
          </div>

          {/* 第二个 */}
          <div className='banner_area'>
            <h3 style={contentStyle}>
              <img src={AliOss + `/new_version/img/index_banner_2.png`} alt="" />
              <section className='banner_explain'>
                <p style={{ fontSize: "0.22rem", fontWeight: "bold" }}>
                  联盟宗旨
                  </p>
                <div style={{ fontSize: "0.16rem" }}>
                  <p style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>打造碳中和万亿新市场</span>
                    <span>建设碳中和行业新生态</span>
                  </p>
                  <p style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>树立碳中和企业新标杆</span>
                    <span>构筑碳中和商业新范式</span>
                  </p>
                  <p style={{ fontSize: "0.16rem" }}>开创碳中和产业新未来</p>
                </div>
                <p style={{ width: "1rem", height: "0.33rem", alignSelf: "flex-end" }}>
                  <NavigateButton content={"更多信息"} path={"/eng"} />
                </p>
              </section>
            </h3>
          </div>

          {/* 第三个 */}
          <div className='banner_area'>
            <h3 style={contentStyle}>
              <img src={AliOss + `/new_version/img/index_banner_3.png`} alt="" />
              <section className='banner_explain'>
                <p style={{ fontSize: "0.22rem", fontWeight: "bold" }}>
                  联盟任务
                  </p>
                <div style={{ fontSize: "0.16rem" }}>
                  <p style={{ display: "flex", justifyContent: "flex-start" }}>
                    <span style={{ marginRight: "0.5rem" }}>孵化技术创新产品</span>
                    <span>研究商业创新模式</span>
                  </p>
                  <p style={{ display: "flex", justifyContent: "flex-start" }}>
                    <span style={{ marginRight: "0.5rem" }}>推动行业标准制订</span>
                    <span>搭建资本合作平台</span>
                  </p>
                  <p style={{ fontSize: "0.16rem" }}>联合产品市场推广</p>
                </div>
                <p style={{ width: "1rem", height: "0.33rem", alignSelf: "flex-end" }}>
                  <NavigateButton content={"更多信息"} path={"/eng"} />
                </p>
              </section>
            </h3>
          </div>

          {/* 第四个 */}
          <div className='banner_area'>
            <h3 style={contentStyle}>
              <img src={AliOss + `/new_version/img/index_banner_4.png`} alt="" />
              <section className='banner_explain'>
                <p style={{ fontSize: "0.22rem", fontWeight: "bold" }}>
                  联盟目标
                  </p>
                <div style={{ fontSize: "0.16rem" }}>
                  <p style={{ display: "flex", justifyContent: "flex-start" }}>
                    技术与产业融通、政策与资本汇集
                  </p>
                  <p style={{ display: "flex", justifyContent: "flex-start" }}>
                    建成有中国特色的德国弗劳恩霍夫 (fraunhofer)组织
                  </p>
                  <p style={{ fontSize: "0.16rem" }}>联合产品市场推广</p>
                </div>
                <p style={{ width: "1rem", height: "0.33rem", alignSelf: "flex-end" }}>
                  <NavigateButton content={"更多信息"} path={"/eng"} />
                </p>
              </section>
            </h3>
          </div>

          {/* 第五个 */}
          <div className='banner_area'>
            <h3 style={contentStyle}>
              <img src={AliOss + `/new_version/img/index_banner_4.png`} alt="" />
              <section className='banner_explain'>
                <p style={{ fontSize: "0.22rem", fontWeight: "bold", marginBottom: "0.1rem" }}>
                  联盟布局
                  </p>
                <div style={{ fontSize: "0.16rem" }}>
                  <p style={{ display: "flex", justifyContent: "flex-start", }}>
                    以产业优化、技术创新、平台建设、宣传推广、项
                  </p>
                  <p style={{ display: "flex", justifyContent: "flex-start" }}>
                    目示范为抓手，通过开展全方位、多领域、高质量
                  </p>
                  <p style={{ display: "flex", justifyContent: "flex-start" }}>
                    的专业活动，形成顶级专家领衔、技术转化高效、
                  </p>
                  <p style={{ display: "flex", justifyContent: "flex-start" }}>
                    空间布局合理、资本运作深入的综合性技术创新与
                  </p>
                  <p style={{ display: "flex", justifyContent: "flex-start" }}>
                    产业孵化体。
                  </p>
                </div>
                <p style={{ width: "1rem", height: "0.33rem", alignSelf: "flex-end", marginTop: "-0.05rem" }}>
                  <NavigateButton content={"更多信息"} path={"/eng"} />
                </p>
              </section>
            </h3>
          </div>
        </Carousel>
      </section>

      {/* 分割区域 */}
      <div style={{ borderLeft: CutLine, borderRight: CutLine, height: "0.6rem", margin: '0 0.5rem' }}></div>
      {/* 新闻动态 */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", padding: '0 0.5rem' }} className='news_area'>
        <h3 style={{
          fontSize: "0.22rem", fontWeight: "bold", display: "flex", margin: 0,
          padding: "0 0.2rem", color: ThemeColor, height: "0.6rem", lineHeight: "0.6rem",
          borderLeft: CutLine, borderRight: CutLine
        }}>新闻动态</h3>
        <ul style={{ display: "flex" }}>
          {
            new Array(4).fill('').map((item, index) => {
              return (
                <li style={{
                  flex: 1, height: "2.2rem", border: CutLine, padding: "0.2rem 0.3rem", display: "flex",
                  flexDirection: 'column', boxSizing: "border-box",
                  justifyContent: "space-between", borderRight: `${index == 3 ? CutLine : 'none'}`
                }}>
                  <div style={{ color: 'rgba(0,0,0,0.6)', fontSize: "0.12rem", display: "flex" }}>
                    <span>2022 年</span>
                    <span>04 月</span>
                    <span>01 日</span>
                  </div>
                  <div style={{
                    color: ThemeColor, fontSize: "0.16rem", fontWeight: "bold", display: "flex",
                    justifyContent: "flex-start", textAlign: "left"
                  }}>
                    聚焦绿色低碳在沪外企——上海市外商投资协会召开“碳中和博览会”线上推介会
                  </div>
                  <p style={{ width: "1.2rem", height: "0.4rem", alignSelf: "flex-end", marginTop: "0.05rem" }}>
                    <NavigateButton content={"更多信息"} path={"/news"} color={ThemeColor} />
                  </p>
                </li>
              )
            })
          }
        </ul>
      </div>


      {/* 双碳资料 */}
      <div style={{ borderLeft: CutLine, borderRight: CutLine, height: "0.6rem", margin: '0 0.5rem' }}>
        <h3 style={{
          fontSize: "0.22rem", fontWeight: "bold", display: "flex", margin: 0,
          padding: "0 0.2rem", color: ThemeColor, height: "0.6rem", lineHeight: "0.6rem",
        }}>双碳资料</h3>
      </div>
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", padding: '0 0.5rem' }} className='news_area'>
        <ul style={{ display: "flex", boxSizing: "border-box" }}>
          {
            carbonData.map((item, index) => {
              return (
                <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                  <img src={AliOss + `/new_version/img/index_doc_${index + 1}.png`} alt=""
                    style={{ height: "3rem", width: "100%" }} />
                  <li style={{
                    flex: 1, height: "2rem", padding: "0.2rem 0.3rem", display: "flex",
                    flexDirection: 'column', boxSizing: "border-box", borderTop: "none",
                    justifyContent: "space-between", borderRight: `${index != 3 ? '1px solid white' : 'none'}`,
                    background: `${(index == 2 || index == 1) ? '#9DD2E0' : ThemeColor}`
                  }}>

                    <div style={{ color: 'white', fontSize: "0.14rem", display: "flex", fontWeight: "bold", }}>
                      {item.title}
                    </div>
                    <div style={{
                      color: 'white', fontSize: "0.12rem", display: "flex",
                      justifyContent: "flex-start", textAlign: "left", height: "1rem", margin: "0.1rem 0"
                    }}>
                      {item.content}
                    </div>
                    <p style={{ width: "1.2rem", height: "0.4rem", alignSelf: "flex-start" }}>
                      <NavigateButton content={"更多信息"} path={"/eng"} color={'white'} />
                    </p>
                  </li>
                </div>
              )
            })
          }
        </ul>
      </div>

      {/* 分割区域 */}
      <div style={{ borderLeft: CutLine, borderRight: CutLine, height: "0.6rem", margin: '0 0.5rem' }}></div>
      {/* 聚焦行业 */}
      <div style={{ borderTop: CutLine, padding: '0 0.5rem' }} className='news_area'>
        <h3 style={{
          fontSize: "0.22rem", fontWeight: "bold", display: "flex", margin: 0,
          color: ThemeColor, height: "1.6rem", lineHeight: "1.6rem", boxSizing: "border-box",
          borderLeft: CutLine, borderRight: CutLine, borderBottom: CutLine,
        }}>
          <span style={{
            width: "25%", display: "inline-flex", boxSizing: "border-box",
            justifyContent: "flex-start", paddingLeft: "0.3rem",
          }}>聚焦行业</span>
          <section style={{ width: "75%", borderLeft: CutLine }}>
            {new Array(5).fill('').map((item, index) => {
              return (
                <div style={{
                  display: "inline-flex", width: "20%", height: "100%",
                  justifyContent: "center", alignItems: "center",
                  borderLeft: CutLine, borderRight: CutLine
                }}>
                  <div style={{
                    height: "50%", width: "84%", borderRadius: "0.1rem", position: "relative",
                     display: "flex", overflow: "hidden"
                  }}>
                    <img src={AliOss + `/new_version/img/index_industry_${index + industryInx}.png`} alt=""
                      style={{ height: "100%", width: "100%" }} />
                    <section style={{
                      position: "absolute", bottom: 0, height: '0.25rem',
                      background: "rgba(0,0,0,0.3)", width: "100%", display: "flex",
                      justifyContent: "center", alignItems: "center", color: "white",
                      fontSize: "0.12rem"
                    }}>
                      {industry[index + industryInx - 1]}
                    </section>
                  </div>
                </div>
              )
            })
            }
          </section>
        </h3>
      </div>

      {/* 碳中和技术创新联盟 */}
      <div style={{ borderBottom: CutLine, padding: '0 0.5rem' }}>
        <h3 style={{
          fontSize: "0.22rem", fontWeight: "bold", display: "flex", margin: 0,
          padding: "0 0.3rem", color: ThemeColor, height: "0.6rem", lineHeight: "0.6rem",
          borderLeft: CutLine, borderRight: CutLine
        }}>      碳中和技术创新联盟
        </h3>
      </div>
      {/* 聚焦行业 */}
      <div style={{ padding: '0 0.5rem', display: "flex" }}>
        <div style={{
          flex: 7, border: CutLine, padding: "0.1rem 0", borderTop: 'none', borderRight: "none"
        }}>
          <img src={AliOss + `/new_version/img/index_companies.png`} alt=""
            style={{ width: "100%" }} />
        </div>
        <div style={{
          flex: 4, borderBottom: CutLine, padding: "0.25rem 0", paddingRight: "0.5rem",
          borderRight: CutLine
        }}>
          <h3 style={{
            display: "flex", justifyContent: "space-between", color: "#15499D", fontSize: "0.16rem",
            fontWeight: "bold", padding: "0 0.8rem"
          }}>
            <span>平台资源雄厚</span>
            <span>合作伙伴强大</span>
          </h3>
          <section style={{
            fontSize: "0.12rem", textAlign: "left", textIndent: "0.26rem", color: "rgba(0,0,0,0.6)",
            borderTop: CutLine, borderBottom: CutLine, padding: "0.1rem 0"
          }}>
            联盟是由上海新能源科技成果转化与产业促进中心、上海社科院绿色数字化发展研究中心、上海市国资国企改革发展中心、上海市节能减排中心有限公司、上海航天技术研究院、中国科学院上海高等研究院、 中国科学院技术物理研究所、绿色技术银行、上海交通大学、同济大学、华东理工大学、华东师范大学、 上海大学、上海科技大学2060研究院、上海电力大学、宝武集团、申能集团、华能集团、华谊集团中央 研究院、上海电气集团、隧道股份、上海工业投资集团、长江三峡投资管理有限公司、上海北斗卫星导 航平台有限公司、北航天汇科技企业孵化器有限公司、上海市太阳能学会、国网上海电科院、上海电力 股份有限公司、深圳市创新投资集团有限公司等（排序不分先后）联合倡议发起，聚焦国家“碳达峰、 碳中和”目标，成立的非政府技术创新联合体。
            </section>
        </div>
      </div>

    
    </div>
  )
}
