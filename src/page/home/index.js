import { AliOss, ThemeColor, CutLine } from "../../lib/const"
import React, { useEffect, useState, useRef } from "react"
import { Carousel, Modal, Form, Input, Popconfirm, Button, Col, Row, message } from 'antd';
import { NavigateButton } from "../../component/button"
import { FormOutlined } from '@ant-design/icons';
import { consult } from '../../apis/index'

import './index.scss'
import 'echarts-gl';


import stiacn_png from '../../static/imgs/stiacn.png'
import task_png from "../../static/imgs/taskBg.png"

const contentStyle = {
  height: '5rem',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  // background: '#364d79',
};

const barFontSize = '0.24rem' // 标题字体大小
const paddingSize = '0.3rem' // 内边距大小

// 双碳资讯
const tastArr = [
  '孵化技术创新平台', '研究商业创新模式', '推动行业标准制定', '搭建资本合作平台', '联合产品市场推广'
]

const news = [
  {
    year: '2022',
    month: '04',
    day: "01",
    title: " 聚焦绿色低碳在沪外企——上海市外商投资协会召开“碳中和博览会”线上推介会"
  }, {
    year: '2021',
    month: '12',
    day: "17",
    title: " 沪科〔2021〕497号关于同意成立上海碳中和技术创新联盟的批复"
  }, {
    year: '2021',
    month: '12',
    day: "13",
    title: " 上海碳中和技术创新联盟发起人会议在新能源中心召开"
  }, {
    year: '2021',
    month: '12',
    day: "13",
    title: " 中共中央 国务院关于完整准确全面贯彻新发展理念做好碳达峰碳中和工作的意见(2021年9月22日)"
  }
]

var industry = ['化工', '能源', '钢铁', '智慧城市', '产业金融', '交通', '智能汽车', '环境检测', '科研', '碳交易']
const bannerArr1 = ['打造碳中和万亿新市场', '建设碳中和行业新生态', '树立碳中和企业新标杆', '构筑碳中和商业新范式', '开创碳中和产业新未来']
const bannerArr2 = ['工业节能', '建筑节能', '交通节能']
var timer

// 首页首屏
export default function Home(props) {
  const [industryInx, setInx] = useState(3)
  const [isModalVisible, setModalVisible] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [content, setContent] = useState("")

  var formRef = useRef()

  useEffect(() => {
    // timer = setInterval(() => {
    //   var inx = industryInx + 1
    //   if (inx > 4) {
    //     inx = 1
    //   }
    //   setInx(inx)
    // }, 1000)
    // return (() => {
    //   clearInterval(timer)
    // })
  }, [industryInx])

  const layout = {
    // labelCol: { span: 8 },
    // wrapperCol: { span: 14 },
  };
  const onFinish = (values) => {
    console.log(values);
  };

  const onSubmit = async () => {
    setModalVisible(true)
    if (name && phone && content) {
      const params = {
        'consultCompany': name,
        'phone': phone,
        'consultContent': content
      }
      const res = await consult(params)
      if (res.success) {
        message.success('感谢您的咨询，请耐心等待我们的回复。')
        setModalVisible(false)
      } else {
        message.error(res.msg)
      }
    } else {
      message.warn("请填写完整后再提交")
    }
  }

  const onCancel = () => {
    setModalVisible(false)
    formRef.current.setFieldsValue({
      name: '',
      phone: '',
      content: ''
    })
  }

  useEffect(() => {
    if (!isModalVisible) {
      setName('')
      setPhone('')
      setContent("")
    }
  }, [isModalVisible])

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }} className='home_page_1'>
      {/* 客服框 */}
      <section className="consult" onClick={() => { setModalVisible(true) }}>
        <FormOutlined style={{ fontSize: "0.3rem" }} />
        <span>业务咨询</span>
      </section>


      <Modal title="编辑信息" visible={isModalVisible} 
        onCancel={onCancel} okText={
          <Popconfirm
          title="确认提交您的咨询内容吗？"
          onConfirm={()=>{onSubmit()}}
          onCancel={()=>{  onCancel()}}
          okText="确定"
          cancelText="取消"
        >
          <a href="#">确认</a>
        </Popconfirm>
        } cancelText='取消'>
        <Form {...layout} name="nest-messages" onFinish={onFinish} ref={formRef}>
          <Row>
            <Col span={11}>
              <Form.Item label="企业名称" name='name'>
                <Input onChange={e => setName(e.target.value)} />
              </Form.Item>
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <Form.Item label="联系方式" name='phone'>
                <Input type='number' onChange={e => setPhone(e.target.value)} />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Form.Item label="咨询内容" span={24} name='content'>
                <Input.TextArea placeholder='请输入咨询内容，最多300个字' style={{ width: "100%" }} onChange={
                  e => setContent(e.target.value)
                } maxLength={300}/>
              </Form.Item>
            </Col>
          </Row>
          <Row style={{ color: 'rgba(0,0,0,0.5)', fontSize: "0.14rem" }}>
            您也可以选择以下方式直接进行咨询：
          </Row>
          <Row style={{ color: 'rgba(0,0,0,0.5)', fontSize: "0.14rem" }}>
            电话：021-66858866   邮箱：hr@stiacn.com
           </Row>
        </Form>
      </Modal>

      <section >
        <Carousel autoplay={false} effect="fade" autoplaySpeed={4000}>
          <div className='banner_area'>
            <h3 style={contentStyle}>
              <img src={AliOss + `/new_version_0518/index_banner_1.png`} alt="" />
              <section style={{
                position: "absolute", left: 0, right: 0, bottom: 0, top: 0,
                display: "flex", flexDirection: "column",
                justifyContent: "space-between", padding: "1rem", color: 'white',

              }}>
                <div style={{ height: "0.8rem" }}>
                  <div style={{
                    height: "0.22rem", fontSize: "0.3rem", fontWeight: "bold",
                    color: "white"
                  }}></div>
                  <div style={{
                    height: "0.5rem", fontSize: "0.3rem",  fontWeight: "bold",
                    color: "white"
                  }}>助力上海市高质量实现“碳达峰、碳中和”的目标</div>
                </div>

                <ul style={{
                  height: "1.1rem", display: "flex",
                  justifyContent: "space-around",
                }}>
                  {bannerArr1.map((item, index) => {
                    return (
                      <li style={{
                        display: "flex", flexDirection: 'column', alignItems: "center", height: "100%",
                        justifyContent: 'center', position: "relative", width: "2rem",
                        boxSizing: "border-box"
                      }}>
                        <img src={AliOss + `/new_version_0518/index_banner_1_icon_${index + 1}.png`} alt=""
                          style={{ width: "0.4rem", height: "0.4rem" }} />
                        <section style={{
                          fontSize: "0.12rem", fontWeight: "bold",
                          width: "100%", height: "0.4rem", display: "flex", justifyContent: 'center', alignItems: "center"
                        }}>
                          {item}
                        </section>
                      </li>
                    )
                  })}
                </ul>
              </section>

            </h3>
          </div>

          {/* 第二个 */}
          <div className='banner_area'>
            <h3 style={contentStyle}>
              <img src={AliOss + `/new_version_0518/index_banner_2.png`} alt="" />
              <section style={{
                position: "absolute", left: 0, right: 0, bottom: 0, top: 0,
                display: "flex", flexDirection: "column",
                justifyContent: "space-between", padding: "1rem", color: 'white',

              }}>
                <div style={{ height: "0.8rem" }}>
                  <div style={{
                    height: "0.5rem", fontSize: "0.3rem", fontWeight: "bold",
                    color: "white"
                  }}>实现碳中和的方式</div>
                  <div style={{
                    height: "0.3rem", fontSize: "0.22rem", fontWeight: "bold",
                    color: "white"
                  }}>节能减排是可持续发展的必然道路</div>
                </div>

                <ul style={{
                  height: "1.1rem", display: "flex",
                  justifyContent: "space-around",
                }}>
                  {bannerArr2.map((item, index) => {
                    return (
                      <li style={{
                        display: "flex", flexDirection: 'column', alignItems: "center", height: "100%",
                        justifyContent: 'center', position: "relative", width: "2rem",
                        boxSizing: "border-box"
                      }}>
                        <img src={AliOss + `/new_version_0518/index_banner_2_icon_${index + 1}.png`} alt=""
                          style={{ width: "0.4rem", height: "0.4rem" }} />
                        <section style={{
                          fontSize: "0.12rem", fontWeight: "bold",
                          width: "100%", height: "0.4rem", display: "flex", justifyContent: 'center', alignItems: "center"
                        }}>
                          {item}
                        </section>
                      </li>
                    )
                  })}
                </ul>
              </section>
            </h3>
          </div>

          {/* 第三个 */}
          <div className='banner_area'>
            <h3 style={contentStyle}>
              <img src={AliOss + `/new_version_0518/index_banner_3.png`} alt="" />
              <section style={{
                position: "absolute", left: 0, right: 0, bottom: 0, top: 0,
                display: "flex", flexDirection: "column",
                justifyContent: "space-between", padding: "1rem", color: 'white',

              }}>
                <div style={{
                  fontSize: "0.3rem", fontWeight: "bold",
                  width: "100%", position: "absolute", bottom: '1.9rem', left: 0, right: 0,
                  color: "white",
                }}>广泛的业务范围</div>
                <div style={{
                  fontSize: "0.22rem", fontWeight: "bold", position: "absolute",
                  width: "100%", bottom: '1.4rem', left: 0, right: 0,
                  color: "white"
                }}>技术合作、技术转化、技术服务、金融服务、人才培训</div>
                {/* <div style={{
                   width: "100%", background: "red",
                  display: "flex",
                  flexDirection: "column", justifyContent: "space-between",
                 alignItems: "center", flexWrap: "no-wrap", position: "relative"
                }}>
                  <div style={{
                    fontSize: "0.3rem", fontWeight: "bold", margin: "0 auto",
                    width: "100%",
                    color: "white"
                  }}>广泛的业务范围</div>
                  <div style={{
                    fontSize: "0.22rem", fontWeight: "bold",
                    width: "100%",
                    color: "white"
                  }}>技术合作、技术转化、技术服务、金融服务、人才培训</div>
                </div> */}

              </section>

            </h3>
          </div>
        </Carousel>
      </section>

      {/* 分割区域 */}
      <div style={{ borderLeft: CutLine, borderRight: CutLine, height: "0.6rem", margin: '0 0.5rem' }}></div>
      {/* 新闻动态 */}
      <div style={{ borderTop: CutLine, padding: '0 0.5rem' }} className='news_area'>
        <h3 style={{
          fontSize: barFontSize, fontWeight: "bold", display: "flex", margin: 0,
          padding: "0 0.3rem", color: ThemeColor, height: "0.6rem", lineHeight: "0.6rem",
          borderLeft: CutLine, borderRight: CutLine
        }}>关于联盟</h3>
        <section style={{ border: CutLine, padding: '0.3rem' }}>
          <div style={{ display: "flex" }}>
            <div style={{
              width: "60%", display: "flex", flexDirection: "column",
              justifyContent: "space-between",
              fontSize: "0.12rem", paddingRight: "0.3rem", color: "rgba(0,0,0,0.77)"
            }}>

              <div style={{ textAlign: "left",lineHeight:"0.25rem"}}>联盟全称为上海碳中和技术创新联盟（以下称“联盟”），

              英文名称为Shanghai Technology Innovation Alliance for Carbon Neutrality，

              英文缩写为STIACN。
          </div>
              <div style={{ textAlign: "left" ,lineHeight:"0.25rem" }}>
                上海碳中和技术创新联盟是以习近平新时代中国特色社会主义思想为指导，在上海市科技党委和上海市科学技术委员会的领导下，全面贯彻落实国家和上海地方“碳达峰、碳中和”战略部署，在上海市科技党委和上海市科学技术委员会的领导下，携手48家在沪中央企业、科研院（所）、高校、企事业单位、社会团体共同发起成立，通过开展全方位、多领域、高质量的专业活动，搭建产学研用金等紧密结合、创新要素集聚的技术创新平台...
          </div>
              <p style={{ width: "1.2rem", height: "0.4rem", alignSelf: "flex-start", marginTop: "0.05rem" }}
                onClick={() => {

                }}>
                <NavigateButton content={"更多信息"} color={ThemeColor} path={``} />
              </p>


            </div>
            <div style={{
              flex: 1
            }}>
              <img src={stiacn_png} style={{ width: "100%" }} />
            </div>
          </div>

          <div style={{ marginTop: "0.45rem", position: "relative" }}>
            <img src={task_png} style={{ width: "100%" }} />
            <section style={{
              position: "absolute", left: 0, right: 0, bottom: 0, top: 0,
              display: "flex", flexDirection: "column",
              justifyContent: "space-between", padding: "0.4rem 1rem", color: 'white'
            }}>
              <p style={{
                height: "0.6rem", fontSize: barFontSize, fontWeight: "bold",
                color: "white"
              }}>联盟任务</p>
              <ul style={{
                height: "1.1rem", display: "flex",
                justifyContent: "space-around"
              }}>
                {tastArr.map((item, index) => {
                  return (
                    <li style={{
                      display: "flex", flexDirection: 'column', alignItems: "center",
                      justifyContent: 'space-between'
                    }}>
                      <img src={AliOss + `/new_version_0518/index_mission_icon_${index + 1}.png`} alt=""
                        style={{ width: "0.5rem" }} />
                      <span style={{ fontSize: "0.12rem", fontWeight: "bold" }}>{item}</span>
                    </li>
                  )
                })}
              </ul>
            </section>

          </div>
        </section>
      </div>


      {/* 分割区域 */}
      <div style={{ borderLeft: CutLine, borderBottom: "none", borderRight: CutLine, height: "0.6rem", margin: '0 0.5rem' }}>
        <h3 style={{
          fontSize: barFontSize, fontWeight: "bold", display: "flex", margin: 0,
          padding: "0 0.3rem", color: ThemeColor, height: "0.6rem", lineHeight: "0.6rem",
          borderBottom: "none"
        }}>联盟动态</h3>
      </div>
      {/* 新闻动态 */}
      <div style={{ borderTop: CutLine, padding: '0 0.5rem' }} className='news_area'>

        <ul style={{ display: "flex" }}>
          {
            news.map((item, index) => {
              return (
                <li style={{
                  flex: 1, height: "2.2rem", border: CutLine, borderTop: "none", padding: "0.3rem 0.3rem", display: "flex",
                  flexDirection: 'column', boxSizing: "border-box", borderBottom: "none",
                  position: "relative",
                  justifyContent: "space-between", borderRight: `${index == 3 ? CutLine : 'none'}`
                }}>
                  <div style={{ color: 'rgba(0,0,0,0.6)', fontSize: "0.12rem", display: "flex" }}>
                    <span>{item.year} 年</span>
                    <span>{item.month} 月</span>
                    <span>{item.day} 日</span>
                  </div>
                  <div style={{
                    color: ThemeColor, fontSize: "0.16rem", fontWeight: "bold", display: "flex",
                    justifyContent: "flex-start", textAlign: "left", flex: 1,
                    padding: '0.12rem 0 0 0'
                  }}>
                    {item.title}
                  </div>
                  <p style={{
                    width: "1.2rem", height: "0.4rem", alignSelf: "flex-end",
                    marginTop: "0.05rem", position: "absolute", right: '0.3rem', bottom: '0.2rem'
                  }}
                    onClick={() => {
                      if (index == 0) {
                        window.open('https://mp.weixin.qq.com/s/02SNGgy2hPyIGckaF6oz3g')
                      }

                    }}>
                    <NavigateButton content={"更多信息"} color={ThemeColor} path={`${index != 0 && (index == 1 ? '/news' : `/news/${index}`)}`} />
                  </p>
                </li>
              )
            })
          }
        </ul>
      </div>


      {/* 分割区域 */}

      {/* 聚焦行业 */}
      <div style={{ borderTop: CutLine, padding: '0 0.5rem' }} className='news_area'>
        <h3 style={{
          fontSize: barFontSize, fontWeight: "bold", display: "flex", margin: 0,
          padding: "0 0.3rem", color: ThemeColor, height: "0.6rem", lineHeight: "0.6rem",
          border: CutLine, borderTop: "none"
        }}>业务范围</h3>
        <h3 style={{
          fontSize: barFontSize, fontWeight: "bold", display: "flex", margin: 0,
          color: ThemeColor, height: "1.6rem", lineHeight: "1.6rem", boxSizing: "border-box",
          borderLeft: CutLine, borderRight: CutLine, borderBottom: CutLine,
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", background: "white", zIndex: 7777, right: "0", width: '0.3rem',
            top: 0, bottom: 0
          }}>
          </div>
          <div style={{
            position: "absolute", background: "white", zIndex: 7777, left: "0", width: '0.3rem',
            top: 0, bottom: 0
          }}></div>
          <section style={{
            width: "150%", borderLeft: CutLine, position: "absolute",
            left: "0.3rem", top: 0, bottom: 0,
            display: "flex", flexWrap: "nowrap", overflow: "hidden",
          }} className='animate'>
            {industry.map((item, index) => {
              return (
                <div style={{
                  display: "inline-flex", width: "20%", height: "100%",
                  justifyContent: "center", alignItems: "center",
                  borderLeft: CutLine, borderRight: CutLine, zIndex: 999,

                }}>
                  <div style={{
                    height: "50%", width: "84%", borderRadius: "0.1rem", position: "relative",
                    display: "flex", overflow: "hidden"
                  }}>
                    <img src={AliOss + `/new_version/img/index_industry_${index + 1}.png`} alt=""
                      style={{ height: "100%", width: "100%" }} />
                    <section style={{
                      position: "absolute", bottom: 0, height: '0.25rem',
                      background: "rgba(0,0,0,0.3)", width: "100%", display: "flex",
                      justifyContent: "center", alignItems: "center", color: "white",
                      fontSize: "0.12rem"
                    }}>
                      {item}
                    </section>
                  </div>
                </div>
              )
            })
            }
          </section>


        </h3>
      </div>
    </div>
  )
}
