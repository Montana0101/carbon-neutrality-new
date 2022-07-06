import { useState, useEffect, useRef } from "react"
import { screen_scale } from "../../util/rem"
import { withRouter, useHistory } from 'react-router-dom';
import {
    LeftOutlined, createFromIconfontCN
} from '@ant-design/icons'
import img1 from './imgs/1.png'
import { AliOss, ThemeColor, CutLine } from "../../lib/const"
import './default.less'

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
                    <span>中共中央 国务院关于完整准确全面贯彻新发展理念做好碳达峰碳中和工作的意见</span>
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
                    }}>中共中央 国务院关于完整准确全面贯彻新发展理念做好碳达峰碳中和工作的意见

                    </div>
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
                    margin: "0 0.5rem 0 0.5rem",
                    fontSize: "0.12rem !important",
                    // textIndent: "50px",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: 'column',
                    color: "black"
                }}>
                    <div id="u20_text" className="text ">
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            &nbsp;&nbsp; </span><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300, fontSize: '0.12rem' }}>实现碳达峰、碳中和，是以习近平同志为核心的党中央统筹国内国际两个大局作出的重大战略决策，是着力解决资源环境约束突出问题、实现中华民族永续发展的必然选择，是构建人类命运共同体的庄严承诺。为完整、准确、全面贯彻新发展理念，做好碳达峰、碳中和工作，现提出如下意见。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            &nbsp;&nbsp; </span><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}>一、总体要求</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
          </span><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300, fontSize: '0.12rem' }}>（一）指导思想</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
                        &nbsp;
            以习近平新时代中国特色社会主义思想为指导，全面贯彻党的十九大和十九届二中、三中、四中、五中全会精神，深入贯彻习近平生态文明思想，立足新发展阶段，贯彻新发展理念，构建新发展格局，坚持系统观念，处理好发展和减排、整体和局部、短期和中长期的关系，把碳达峰、碳中和纳入经济社会发展全局，以经济社会发展全面绿色转型为引领，以能源绿色低碳发展为关键，加快形成节约资源和保护环境的产业结构、生产方式、生活方式、空间格局，坚定不移走生态优先、绿色低碳的高质量发展道路，确保如期实现碳达峰、碳中和。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            （二）工作原则</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            &nbsp; 实现碳达峰、碳中和目标，要坚持“全国统筹、节约优先、双轮驱动、内外畅通、防范风险”原则。</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            &nbsp; ——全国统筹。全国一盘棋，强化顶层设计，发挥制度优势，实行党政同责，压实各方责任。根据各地实际分类施策，鼓励主动作为、率先达峰。</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            &nbsp; ——节约优先。把节约能源资源放在首位，实行全面节约战略，持续降低单位产出能源资源消耗和碳排放，提高投入产出效率，倡导简约适度、绿色低碳生活方式，从源头和入口形成有效的碳排放控制阀门。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            &nbsp; ——双轮驱动。政府和市场两手发力，构建新型举国体制，强化科技和制度创新，加快绿色低碳科技革命。深化能源和相关领域改革，发挥市场机制作用，形成有效激励约束机制。</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            &nbsp; ——内外畅通。立足国情实际，统筹国内国际能源资源，推广先进绿色低碳技术和经验。统筹做好应对气候变化对外斗争与合作，不断增强国际影响力和话语权，坚决维护我国发展权益。</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            &nbsp; ——防范风险。处理好减污降碳和能源安全、产业链供应链安全、粮食安全、群众正常生活的关系，有效应对绿色低碳转型可能伴随的经济、金融、社会风险，防止过度反应，确保安全降碳。</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}>&nbsp;&nbsp; &nbsp;
            &nbsp;&nbsp; 二、主要目标</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
          </span><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}>&nbsp;&nbsp;
            到2025年，绿色低碳循环发展的经济体系初步形成，重点行业能源利用效率大幅提升。单位国内生产总值能耗比2020年下降13.5%；单位国内生产总值二氧化碳排放比2020年下降18%；非化石能源消费比重达到20%左右；森林覆盖率达到24.1%，森林蓄积量达到180亿立方米，为实现碳达峰、碳中和奠定坚实基础。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}>&nbsp;&nbsp; &nbsp;
                        &nbsp;&nbsp;
            到2030年，经济社会发展全面绿色转型取得显著成效，重点耗能行业能源利用效率达到国际先进水平。单位国内生产总值能耗大幅下降；单位国内生产总值二氧化碳排放比2005年下降65%以上；非化石能源消费比重达到25%左右，风电、太阳能发电总装机容量达到12亿千瓦以上；森林覆盖率达到25%左右，森林蓄积量达到190亿立方米，二氧化碳排放量达到峰值并实现稳中有降。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}>&nbsp;&nbsp; &nbsp; &nbsp;
                        &nbsp;
            到2060年，绿色低碳循环发展的经济体系和清洁低碳安全高效的能源体系全面建立，能源利用效率达到国际先进水平，非化石能源消费比重达到80%以上，碳中和目标顺利实现，生态文明建设取得丰硕成果，开创人与自然和谐共生新境界。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}>&nbsp;&nbsp; &nbsp; &nbsp;
            &nbsp; 三、推进经济社会发展全面绿色转型</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;</span><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300, fontSize: '0.12rem' }}>&nbsp;
                        &nbsp; &nbsp;
            （三）强化绿色低碳发展规划引领。将碳达峰、碳中和目标要求全面融入经济社会发展中长期规划，强化国家发展规划、国土空间规划、专项规划、区域规划和地方各级规划的支撑保障。加强各级各类规划间衔接协调，确保各地区各领域落实碳达峰、碳中和的主要目标、发展方向、重大政策、重大工程等协调一致。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
                        &nbsp;
            （四）优化绿色低碳发展区域布局。持续优化重大基础设施、重大生产力和公共资源布局，构建有利于碳达峰、碳中和的国土空间开发保护新格局。在京津冀协同发展、长江经济带发展、粤港澳大湾区建设、长三角一体化发展、黄河流域生态保护和高质量发展等区域重大战略实施中，强化绿色低碳发展导向和任务要求。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
                        &nbsp;
            （五）加快形成绿色生产生活方式。大力推动节能减排，全面推进清洁生产，加快发展循环经济，加强资源综合利用，不断提升绿色低碳发展水平。扩大绿色低碳产品供给和消费，倡导绿色低碳生活方式。把绿色低碳发展纳入国民教育体系。开展绿色低碳社会行动示范创建。凝聚全社会共识，加快形成全民参与的良好格局。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}>&nbsp;&nbsp; &nbsp; &nbsp;
            &nbsp; 四、深度调整产业结构</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
                        &nbsp;
            （六）推动产业结构优化升级。加快推进农业绿色发展，促进农业固碳增效。制定能源、钢铁、有色金属、石化化工、建材、交通、建筑等行业和领域碳达峰实施方案。以节能降碳为导向，修订产业结构调整指导目录。开展钢铁、煤炭去产能“回头看”，巩固去产能成果。加快推进工业领域低碳工艺革新和数字化转型。开展碳达峰试点园区建设。加快商贸流通、信息服务等绿色转型，提升服务业低碳发展水平。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
                        &nbsp;
            （七）坚决遏制高耗能高排放项目盲目发展。新建、扩建钢铁、水泥、平板玻璃、电解铝等高耗能高排放项目严格落实产能等量或减量置换，出台煤电、石化、煤化工等产能控制政策。未纳入国家有关领域产业规划的，一律不得新建改扩建炼油和新建乙烯、对二甲苯、煤制烯烃项目。合理控制煤制油气产能规模。提升高耗能高排放项目能耗准入标准。加强产能过剩分析预警和窗口指导。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;&nbsp;
            （八）大力发展绿色低碳产业。加快发展新一代信息技术、生物技术、新能源、新材料、高端装备、新能源汽车、绿色环保以及航空航天、海洋装备等战略性新兴产业。建设绿色制造体系。推动互联网、大数据、人工智能、第五代移动通信（5G）等新兴技术与绿色低碳产业深度融合。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}>&nbsp;&nbsp; &nbsp;
            &nbsp;&nbsp; 五、加快构建清洁低碳安全高效能源体系</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;&nbsp;
          </span><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300, fontSize: '0.12rem' }}>（九）强化能源消费强度和总量双控。坚持节能优先的能源发展战略，严格控制能耗和二氧化碳排放强度，合理控制能源消费总量，统筹建立二氧化碳排放总量控制制度。做好产业布局、结构调整、节能审查与能耗双控的衔接，对能耗强度下降目标完成形势严峻的地区实行项目缓批限批、能耗等量或减量替代。强化节能监察和执法，加强能耗及二氧化碳排放控制目标分析预警，严格责任落实和评价考核。加强甲烷等非二氧化碳温室气体管控。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;&nbsp;
            （十）大幅提升能源利用效率。把节能贯穿于经济社会发展全过程和各领域，持续深化工业、建筑、交通运输、公共机构等重点领域节能，提升数据中心、新型通信等信息化基础设施能效水平。健全能源管理体系，强化重点用能单位节能管理和目标责任。瞄准国际先进水平，加快实施节能降碳改造升级，打造能效“领跑者”。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;&nbsp;
            （十一）严格控制化石能源消费。加快煤炭减量步伐，“十四五”时期严控煤炭消费增长，“十五五”时期逐步减少。石油消费“十五五”时期进入峰值平台期。统筹煤电发展和保供调峰，严控煤电装机规模，加快现役煤电机组节能升级和灵活性改造。逐步减少直至禁止煤炭散烧。加快推进页岩气、煤层气、致密油气等非常规油气资源规模化开发。强化风险管控，确保能源安全稳定供应和平稳过渡。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;&nbsp;
            （十二）积极发展非化石能源。实施可再生能源替代行动，大力发展风能、太阳能、生物质能、海洋能、地热能等，不断提高非化石能源消费比重。坚持集中式与分布式并举，优先推动风能、太阳能就地就近开发利用。因地制宜开发水能。积极安全有序发展核电。合理利用生物质能。加快推进抽水蓄能和新型储能规模化应用。统筹推进氢能“制储输用”全链条发展。构建以新能源为主体的新型电力系统，提高电网对高比例可再生能源的消纳和调控能力。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;&nbsp;
            （十三）深化能源体制机制改革。全面推进电力市场化改革，加快培育发展配售电环节独立市场主体，完善中长期市场、现货市场和辅助服务市场衔接机制，扩大市场化交易规模。推进电网体制改革，明确以消纳可再生能源为主的增量配电网、微电网和分布式电源的市场主体地位。加快形成以储能和调峰能力为基础支撑的新增电力装机发展机制。完善电力等能源品种价格市场化形成机制。从有利于节能的角度深化电价改革，理顺输配电价结构，全面放开竞争性环节电价。推进煤炭、油气等市场化改革，加快完善能源统一市场。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}>&nbsp;&nbsp; &nbsp;
            &nbsp;&nbsp; 六、加快推进低碳交通运输体系建设</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;&nbsp;
            （十四）优化交通运输结构。加快建设综合立体交通网，大力发展多式联运，提高铁路、水路在综合运输中的承运比重，持续降低运输能耗和二氧化碳排放强度。优化客运组织，引导客运企业规模化、集约化经营。加快发展绿色物流，整合运输资源，提高利用效率。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;&nbsp;
            （十五）推广节能低碳型交通工具。加快发展新能源和清洁能源车船，推广智能交通，推进铁路电气化改造，推动加氢站建设，促进船舶靠港使用岸电常态化。加快构建便利高效、适度超前的充换电网络体系。提高燃油车船能效标准，健全交通运输装备能效标识制度，加快淘汰高耗能高排放老旧车船。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;&nbsp;
            （十六）积极引导低碳出行。加快城市轨道交通、公交专用道、快速公交系统等大容量公共交通基础设施建设，加强自行车专用道和行人步道等城市慢行系统建设。综合运用法律、经济、技术、行政等多种手段，加大城市交通拥堵治理力度。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}>&nbsp;&nbsp; &nbsp; &nbsp;
            七、提升城乡建设绿色低碳发展质量</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            （十七）推进城乡建设和管理模式低碳转型。在城乡规划建设管理各环节全面落实绿色低碳要求。推动城市组团式发展，建设城市生态和通风廊道，提升城市绿化水平。合理规划城镇建筑面积发展目标，严格管控高能耗公共建筑建设。实施工程建设全过程绿色建造，健全建筑拆除管理制度，杜绝大拆大建。加快推进绿色社区建设。结合实施乡村建设行动，推进县城和农村绿色低碳发展。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp;&nbsp;
            （十八）大力发展节能低碳建筑。持续提高新建建筑节能标准，加快推进超低能耗、近零能耗、低碳建筑规模化发展。大力推进城镇既有建筑和市政基础设施节能改造，提升建筑节能低碳水平。逐步开展建筑能耗限额管理，推行建筑能效测评标识，开展建筑领域低碳发展绩效评估。全面推广绿色低碳建材，推动建筑材料循环利用。发展绿色农房。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp;&nbsp;
            （十九）加快优化建筑用能结构。深化可再生能源建筑应用，加快推动建筑用能电气化和低碳化。开展建筑屋顶光伏行动，大幅提高建筑采暖、生活热水、炊事等电气化普及率。在北方城镇加快推进热电联产集中供暖，加快工业余热供暖规模化发展，积极稳妥推进核电余热供暖，因地制宜推进热泵、燃气、生物质能、地热能等清洁低碳供暖。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp; </span><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}>&nbsp; &nbsp;&nbsp;
            八、加强绿色低碳重大科技攻关和推广应用</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;&nbsp;
            （二十）强化基础研究和前沿技术布局。制定科技支撑碳达峰、碳中和行动方案，编制碳中和技术发展路线图。采用“揭榜挂帅”机制，开展低碳零碳负碳和储能新材料、新技术、新装备攻关。加强气候变化成因及影响、生态系统碳汇等基础理论和方法研究。推进高效率太阳能电池、可再生能源制氢、可控核聚变、零碳工业流程再造等低碳前沿技术攻关。培育一批节能降碳和新能源技术产品研发国家重点实验室、国家技术创新中心、重大科技创新平台。建设碳达峰、碳中和人才体系，鼓励高等学校增设碳达峰、碳中和相关学科专业。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;&nbsp;
            （二十一）加快先进适用技术研发和推广。深入研究支撑风电、太阳能发电大规模友好并网的智能电网技术。加强电化学、压缩空气等新型储能技术攻关、示范和产业化应用。加强氢能生产、储存、应用关键技术研发、示范和规模化应用。推广园区能源梯级利用等节能低碳技术。推动气凝胶等新型材料研发应用。推进规模化碳捕集利用与封存技术研发、示范和产业化应用。建立完善绿色低碳技术评估、交易体系和科技创新服务平台。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}>&nbsp;&nbsp; &nbsp; &nbsp;
            九、持续巩固提升碳汇能力</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;&nbsp;
            （二十二）巩固生态系统碳汇能力。强化国土空间规划和用途管控，严守生态保护红线，严控生态空间占用，稳定现有森林、草原、湿地、海洋、土壤、冻土、岩溶等固碳作用。严格控制新增建设用地规模，推动城乡存量建设用地盘活利用。严格执行土地使用标准，加强节约集约用地评价，推广节地技术和节地模式。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;&nbsp;
            （二十三）提升生态系统碳汇增量。实施生态保护修复重大工程，开展山水林田湖草沙一体化保护和修复。深入推进大规模国土绿化行动，巩固退耕还林还草成果，实施森林质量精准提升工程，持续增加森林面积和蓄积量。加强草原生态保护修复。强化湿地保护。整体推进海洋生态系统保护和修复，提升红树林、海草床、盐沼等固碳能力。开展耕地质量提升行动，实施国家黑土地保护工程，提升生态农业碳汇。积极推动岩溶碳汇开发利用。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}>&nbsp;&nbsp; &nbsp; &nbsp;
            十、提高对外开放绿色低碳发展水平</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            （二十四）加快建立绿色贸易体系。持续优化贸易结构，大力发展高质量、高技术、高附加值绿色产品贸易。完善出口政策，严格管理高耗能高排放产品出口。积极扩大绿色低碳产品、节能环保服务、环境服务等进口。</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            （二十五）推进绿色“一带一路”建设。加快“一带一路”投资合作绿色转型。支持共建“一带一路”国家开展清洁能源开发利用。大力推动南南合作，帮助发展中国家提高应对气候变化能力。深化与各国在绿色技术、绿色装备、绿色服务、绿色基础设施建设等方面的交流与合作，积极推动我国新能源等绿色低碳技术和产品走出去，让绿色成为共建“一带一路”的底色。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            （二十六）加强国际交流与合作。积极参与应对气候变化国际谈判，坚持我国发展中国家定位，坚持共同但有区别的责任原则、公平原则和各自能力原则，维护我国发展权益。履行《联合国气候变化框架公约》及其《巴黎协定》，发布我国长期温室气体低排放发展战略，积极参与国际规则和标准制定，推动建立公平合理、合作共赢的全球气候治理体系。加强应对气候变化国际交流合作，统筹国内外工作，主动参与全球气候和环境治理。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}>&nbsp;&nbsp; &nbsp; &nbsp;
            十一、健全法律法规标准和统计监测体系</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
          </span><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300, fontSize: '0.12rem' }}>（二十七）健全法律法规。全面清理现行法律法规中与碳达峰、碳中和工作不相适应的内容，加强法律法规间的衔接协调。研究制定碳中和专项法律，抓紧修订节约能源法、电力法、煤炭法、可再生能源法、循环经济促进法等，增强相关法律法规的针对性和有效性。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            （二十八）完善标准计量体系。建立健全碳达峰、碳中和标准计量体系。加快节能标准更新升级，抓紧修订一批能耗限额、产品设备能效强制性国家标准和工程建设标准，提升重点产品能耗限额要求，扩大能耗限额标准覆盖范围，完善能源核算、检测认证、评估、审计等配套标准。加快完善地区、行业、企业、产品等碳排放核查核算报告标准，建立统一规范的碳核算体系。制定重点行业和产品温室气体排放标准，完善低碳产品标准标识制度。积极参与相关国际标准制定，加强标准国际衔接。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            （二十九）提升统计监测能力。健全电力、钢铁、建筑等行业领域能耗统计监测和计量体系，加强重点用能单位能耗在线监测系统建设。加强二氧化碳排放统计核算能力建设，提升信息化实测水平。依托和拓展自然资源调查监测体系，建立生态系统碳汇监测核算体系，开展森林、草原、湿地、海洋、土壤、冻土、岩溶等碳汇本底调查和碳储量评估，实施生态保护修复碳汇成效监测评估。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}>&nbsp;&nbsp; &nbsp;&nbsp;
            十二、完善政策机制</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            （三十）完善投资政策。充分发挥政府投资引导作用，构建与碳达峰、碳中和相适应的投融资体系，严控煤电、钢铁、电解铝、水泥、石化等高碳项目投资，加大对节能环保、新能源、低碳交通运输装备和组织方式、碳捕集利用与封存等项目的支持力度。完善支持社会资本参与政策，激发市场主体绿色低碳投资活力。国有企业要加大绿色低碳投资，积极开展低碳零碳负碳技术研发应用。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            （三十一）积极发展绿色金融。有序推进绿色低碳金融产品和服务开发，设立碳减排货币政策工具，将绿色信贷纳入宏观审慎评估框架，引导银行等金融机构为绿色低碳项目提供长期限、低成本资金。鼓励开发性政策性金融机构按照市场化法治化原则为实现碳达峰、碳中和提供长期稳定融资支持。支持符合条件的企业上市融资和再融资用于绿色低碳项目建设运营，扩大绿色债券规模。研究设立国家低碳转型基金。鼓励社会资本设立绿色低碳产业投资基金。建立健全绿色金融标准体系。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            （三十二）完善财税价格政策。各级财政要加大对绿色低碳产业发展、技术研发等的支持力度。完善政府绿色采购标准，加大绿色低碳产品采购力度。落实环境保护、节能节水、新能源和清洁能源车船税收优惠。研究碳减排相关税收政策。建立健全促进可再生能源规模化发展的价格机制。完善差别化电价、分时电价和居民阶梯电价政策。严禁对高耗能、高排放、资源型行业实施电价优惠。加快推进供热计量改革和按供热量收费。加快形成具有合理约束力的碳价机制。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            （三十三）推进市场化机制建设。依托公共资源交易平台，加快建设完善全国碳排放权交易市场，逐步扩大市场覆盖范围，丰富交易品种和交易方式，完善配额分配管理。将碳汇交易纳入全国碳排放权交易市场，建立健全能够体现碳汇价值的生态保护补偿机制。健全企业、金融机构等碳排放报告和信息披露制度。完善用能权有偿使用和交易制度，加快建设全国用能权交易市场。加强电力交易、用能权交易和碳排放权交易的统筹衔接。发展市场化节能方式，推行合同能源管理，推广节能综合服务。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}>&nbsp;&nbsp; &nbsp; &nbsp;
            十三、切实加强组织实施</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Bold", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 700 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
            （三十四）加强组织领导。加强党中央对碳达峰、碳中和工作的集中统一领导，碳达峰碳中和工作领导小组指导和统筹做好碳达峰、碳中和工作。支持有条件的地方和重点行业、重点企业率先实现碳达峰，组织开展碳达峰、碳中和先行示范，探索有效模式和有益经验。将碳达峰、碳中和作为干部教育培训体系重要内容，增强各级领导干部推动绿色低碳发展的本领。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;&nbsp;
            （三十五）强化统筹协调。国家发展改革委要加强统筹，组织落实2030年前碳达峰行动方案，加强碳中和工作谋划，定期调度各地区各有关部门落实碳达峰、碳中和目标任务进展情况，加强跟踪评估和督促检查，协调解决实施中遇到的重大问题。各有关部门要加强协调配合，形成工作合力，确保政策取向一致、步骤力度衔接。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;&nbsp;
            （三十六）压实地方责任。落实领导干部生态文明建设责任制，地方各级党委和政府要坚决扛起碳达峰、碳中和责任，明确目标任务，制定落实举措，自觉为实现碳达峰、碳中和作出贡献。</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;&nbsp;
            （三十七）严格监督考核。各地区要将碳达峰、碳中和相关指标纳入经济社会发展综合评价体系，增加考核权重，加强指标约束。强化碳达峰、碳中和目标任务落实情况考核，对工作突出的地区、单位和个人按规定给予表彰奖励，对未完成目标任务的地区、部门依规依法实行通报批评和约谈问责，有关落实情况纳入中央生态环境保护督察。各地区各有关部门贯彻落实情况每年向党中央、国务院报告。</span>
                        </p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}>&nbsp;&nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 来源：新华社</span></p>
                        <p style={{ fontSize: '0.12rem' }}><span style={{ fontFamily: '"思源宋体 CN Light", "思源宋体 CN Regular", "思源宋体 CN"', fontWeight: 300 }}><br /></span></p>
                    </div>
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
                    <div onClick={() => { history.push("/news/2") }}>
                        <IconFont type="icon-tuichu" style={{ color: ThemeColor, margin: "0 0.1rem 0 0", fontSize: "0.12rem" }} />
                        <a href="#" style={{ fontSize: "0.12rem", textDecoration: "underline", color: ThemeColor, fontWeight: "400" }}>
                            上海碳中和技术创新联盟发起人会议在新能源中心成功召开
</a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default withRouter(NewsDetail3)