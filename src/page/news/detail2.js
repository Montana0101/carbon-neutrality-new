import { useState, useEffect, useRef } from "react"
import { screen_scale } from "../../util/rem"
import { withRouter, useHistory } from 'react-router-dom';
import {
    LeftOutlined, createFromIconfontCN
} from '@ant-design/icons'
import img1 from './imgs/1.png'
import { AliOss, ThemeColor, CutLine } from "../../lib/const"
import img2 from './imgs/2.png'
import img3 from './imgs/3.png'
import img4 from './imgs/4.png'
const IframeUrl = "http://58.33.170.254:8867"
const data = [
    IframeUrl + "/news_detail_1.html",
    IframeUrl + "/news_detail_2.html",
    IframeUrl + "/news_detail_3.html",
]



const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});


function NewsDetail2(props) {
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
                    }}>上海碳中和技术创新联盟发起人会议在新能源中心成功召开</div>
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
                margin: '0 0.5rem 0 0.5rem'
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
                    margin: "0 0.5rem 0.5rem 0.5rem",
                    fontSize: "0.12rem",
                    textIndent: "0.27rem",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: 'column',
                    color:"black"
                }}>
                    <p>近日，上海碳中和技术创新联盟发起人会议在新能源中心召开，来自沪上各大高校、科研院所、以及企业界的三十余位代表参加本次会议。市科委副主任谢文澜、市科委二级巡视员郑广宏、基地处副处长杨建群出席会议，会议由新能源中心主任黄瓒主持。</p>
                    <p>本次发起人会议通报了各单位“双碳”工作情况，表决通过了《上海碳中和技术创新联盟章程》以及《上海碳中和技术创新联盟发起人协议》，并初步推举了联盟理事长人选。</p>
                    <img style={{ margin: "0.2rem auto", width: "40%" }} src={img2} />                  <p>
                        市科委副主任谢文澜在讲话中指出，实现碳达峰、碳中和是一场广泛而深刻的经济社会系统性变革，科技创新是实现碳达峰、碳中和目标的必由之路和重要战略支撑。上海碳中和技术创新联盟要凝聚相关高校、研究院所、产业集团的智慧和力量，形成人才、信息、技术、金融等的融合性服务平台，为上海、长三角乃至全国的绿色低碳转型提供思路与技术解决方案，推动碳中和技术实现突破并高效转化为现实引领性产业。联盟未来要按照相关规定和要求，不断提高专业化水平，完善组织架构，发挥联盟集聚优势资源、产生耦合效应的功能，不断提升技术创新的能级，加速上海“双碳”目标实现。
                    </p>
                    <p style={{ fontWeight: "bold" }}>谢文澜指出，就目前而言，要达到碳中和的目标，要深入研究路径有哪些，过程中怎么去实现，按照这样的逻辑，一步步的推进和规划，才有可能真正实现碳达峰碳中和的战略目标。谢文澜要求，要达到碳中和，技术创新任务更重，时间更紧, 要认真研究如何更好发挥科技在整个碳达峰碳中和中的战略支撑作用，加快构建科技创新支撑体系，大力推进人才培养，同时更需要我们的科学家充分发扬不怕牺牲的精神和做底层创新技术的情怀，为上海实现碳达峰、碳中和目标提供科技支撑的同时，努力为国家碳达峰、碳中和战略作出贡献。</p>
                    <p style={{ fontWeight: "bold" }}> 郑广宏强调，一是推进经济社会发展全面绿色转型，强化绿色低碳发展规划引领，优化绿色低碳发展区域布局，加快形成绿色生产生活方式，进一步构建绿色技术创新体系；二是不断探索和研究碳交易市场对新能源行业及具体业务的影响。碳交易市场作为我国应对气候变化，控制温室气体排放的重要政策工具，是利用市场机制控制和减少温室气体排放、推进绿色低碳发展的制度创新，与生态环境、产业经济、贸易、金融等领域相关工作都有密切的联系，当前要积极发挥碳市场对于实现“双碳”目标的支撑作用，不断探索和研究绿色、低碳、循环经济的发展模式。三是要立足技术创新，着力技术突破，以强大的“技术流”形成示范效应，为“双碳”相关产业高质量发展作出贡献。</p>
                    <p style={{ fontWeight: "bold" }}> 杨建群表示，大家在了解联盟创办历史的前提下，要思考如何更有效的推进联盟的建设，要以科技部相关文件为指导，达到我们最终的目标导向，希望大家对联盟的核心单位、组织架构、理事长、理事会的决策，以及成员单位的分工等相关内容进行再细化。</p>
                    <img style={{ margin: "0.2rem auto", width: "40%" }} src={img3} />                  <p style={{ }}>新能源中心黄瓒主任代表发起人单位表态，未来联盟将牢记领导的嘱托，全面贯彻落实国家和上海地方“碳达峰、碳中和”战略部署，以“双碳”领域技术创新需求和成果转化需求为导向，集中大力攻关，加快推进核心技术的突破与产业化，推动相关产业爆发式增长，打造国内一流、国际领先的碳中和科技创新平台，催生新的业态并引领发展。</p>
                    <p style={{  }}>未来新能源中心将与各位发起人一道，凝聚各方力量，高质量建设联盟，不断赋能，建立高效机制，通过联盟这一综合性平台，全力以赴，扎实推动上海“双碳”科技事业蓬勃发展。</p>
                    <img style={{ margin: "0.2rem auto", width: "40%", marginBottom: "0" }} src={img4} />
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
                    <div onClick={() => { history.push("/news") }}>
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

export default withRouter(NewsDetail2)