import { useState, useEffect, useRef } from "react"
import { screen_scale } from "../../util/rem"
import { withRouter, useHistory } from 'react-router-dom';
import {
    LeftOutlined, createFromIconfontCN
} from '@ant-design/icons'
import { AliOss, ThemeColor, CutLine } from "../../lib/const"
import './default.less'
import news4 from '../../static/imgs/new4.png'


const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});


function NewsDetail3(props) {
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
                        联盟动态
                    </span>
                    <span style={{ margin: '0 0.1rem' }}>/</span>
                    <span>上海碳中和技术创新联盟“云签约”活动成功举办</span>
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
                    <div className='newsTitle'>上海碳中和技术创新联盟“云签约”活动成功举办
                    </div>
                    <div style={{ color: "rgba(0,0,0,0.6)" }}>发布时间: 2022.06.15</div>
                </section>
            </div>

            <div style={{
                boxSizing: "border-box",
                color: 'black',
                marginBottom: "-0.5rem",
                border: CutLine,
                borderTop: 'none',
                borderBottom: 'none',
                margin: '0 0.5rem 0 0.5rem',
                padding:'0.3rem 0'
            }}>
           
                <div>
                    <img src={news4} style={{
                        width:"5.5rem",
                        marginBottom:"0.3rem"
                    }}/>
                </div>
            
                <article style={{
                    margin: "0 0.5rem 0 0.5rem",
                    fontSize: "0.12rem !important",
                    // textIndent: "50px",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: 'column',
                    color: "black"
                }}>
                <div id="u43_text" class="text ">
          <p><span>&nbsp;&nbsp; &nbsp; &nbsp; 为深入贯彻落实习近平生态文明思想，践行碳达峰碳中和重大决策部署，紧紧围绕上海加快建设具有全球影响力的科技创新中心发展战略，助力崇明世界级生态岛“碳中和示范区”建设，在上海市科技党委和上海市科学技术委员会的指导下，2022年6月15日下午，上海市科学技术委员会与上海市崇明区人民政府碳中和战略合作签约仪式暨上海碳中和科技创新联盟、上海长兴碳中和创新产业园揭牌仪式以云签约的方式成功举办！</span></p><p><span><br/></span></p><p><span>&nbsp;&nbsp; &nbsp; &nbsp; 市政协副主席、中国工程院院士黄震，市科技工作党委书记徐枫，崇明区委副书记、区长缪京，市长兴岛管委会党组副书记、执行副主任、区委常委吴召忠，市发展改革委副主任周强，市经信委副主任阮力，市生态环境局副局长吴启洲，市科委副主任谢文澜，崇明区副区长徐慧泉等领导出席活动。</span></p><p><span><br/></span></p><p><span>&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; 活动中，谢文澜同志、徐慧泉同志代表双方签署碳中和合作框架协议；长兴企业集团党委书记、董事长张忠，上海新能源中心主任黄瓒，上海北斗卫星导航平台有限公司总经理陈成代表三方签订碳中和产业发展合作协议。</span></p><p><span><br/></span></p><p><span>&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; 根据碳中和产业发展合作协议，上海碳中和技术创新联盟计划打造“研究院”、“产业平台公司”、“科创基金”等三大实体，即形成顶级专家领衔、技术转化高效、空间布局合理、资本运作深入的综合性技术创新与产业孵化体，通过开展全方位、多领域、高质量的专业活动，搭建产学研用金等紧密结合、创新要素集聚的技术创新平台，以“双碳”领域技术创新需求和成果转化需求为导向，加快推进核心技术的突破与产业化，助推绿色低碳科研成果高效转化为现实生产力，推动相关产业爆发式增长，助力上海市高质量实现“碳达峰、碳中和”的目标，更好地服务国家碳达峰、碳中和战略全局。</span></p><p><span><br/></span></p>
        </div>
                 </article>

              
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
                    <div onClick={() => { window.open("https://mp.weixin.qq.com/s/02SNGgy2hPyIGckaF6oz3g","_blank")}}>
                        <IconFont type="icon-tuichu" style={{ color: ThemeColor, margin: "0 0.1rem 0 0", fontSize: "0.12rem" }} />
                        <a href="#" style={{ fontSize: "0.12rem", textDecoration: "underline", color: ThemeColor, fontWeight: "400" }}>
                            聚绿色低碳在沪外企——上海市外商投资协会召开“碳中和博览会”线上推介会</a>
                    </div>
                    <div onClick={() => { history.push("/news/1") }}>
                        <IconFont type="icon-tuichu" style={{ color: ThemeColor, margin: "0 0.1rem 0 0", fontSize: "0.12rem" }} />
                        <a href="#" style={{ fontSize: "0.12rem", textDecoration: "underline", color: ThemeColor, fontWeight: "400" }}>
                            沪科〔2021〕497号 关于同意成立上海碳中和技术创新联盟的批复
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default withRouter(NewsDetail3)