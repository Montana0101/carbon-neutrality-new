import './app.less';
import { Input, Button, message } from 'antd'
import Routers from "../route/index"
import { AliOss, ThemeColor, CutLine } from "../lib/const"
import { useEffect, useState } from "react"
import { UserOutlined } from '@ant-design/icons';
import IconSearch from "../static/imgs/search.svg"
import { messageTips } from '../apis/index'

const logo = AliOss + '/img/logo.png'

const titles = ["首页", '关于联盟', '联盟动态',
  '业务范围', '专业委员会', '双碳资讯', '联系我们']

function App() {
  const [flag, setFlag] = useState(false)
  const [inx, setInx] = useState(0)
  const [logined, checkLogin] = useState(false)
  const [dialog, setDialog] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [tips, setTips] = useState(0)

  useEffect(() => {
    console.log(window.location.href)
    let href = window.location.href
    if (href.indexOf('about') != -1) {
      setInx(1)
    } else if (href.indexOf('contact') != -1) {
      setInx(6)
    } else if (href.indexOf('council') != -1) {
      setInx(4)
    }else if (href.indexOf('/') == -1) {
      setInx(0)
    }
  }, [])

  useEffect(() => {
    const check = localStorage.getItem('user')
    if (JSON.parse(check)) {
      checkLogin(true)
      setUserInfo(JSON.parse(check))
      // _messageTips()
    } else {
      checkLogin(false)
    }
  }, [])

  const _messageTips = async () => {
    const res = await messageTips()
    if (res.code === 2000) {
      setTips(res.result)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <section className='header-left'>
          <img src={logo} alt="" style={{ height: '0.82rem', marginRight: "0.1rem", width: "0.82rem" }} />
          <div style={{
            height: "70%", display: "flex", flexDirection: "column", justifyContent: 'space-between',
            alignItems: 'flex-start', boxSizing: "border-box",
          }}>
            <span style={{
              fontSize: "0.2rem",
              fontWeight: "bold",
              color: "black",
              marginTop: "0.05rem"
            }}>STIACN</span>
            <span style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.14rem" }}>上海碳中和技术创新联盟</span>
          </div>
        </section>
        <section className='header-right'>
          <div style={{
            height: "50%", display: "flex", justifyContent: 'flex-end',
            alignItems: "center", padding: '0.04rem 0.19rem 0.04rem 0'
          }}>
            <Input placeholder="请输入企业名称" style={{
              width: "2rem", padding: "border-box", display: "none"

            }} />
            {/* <SearchOutlined style={{fontWeight:"bold", color: "#7B7B7B", width: "0.5rem" }} onClick={() => {
              setFlag(!flag)
            }} /> */}
            {/* <img alt="" src={IconSearch} style={{ width: "0.15rem", margin: "0 0.15rem 0 0.3rem" }} onClick={() => {
              if (logined) {
                setFlag(!flag)
              } else {
                message.warn({
                  content: "请登录",
                  style: { zIndex: 88888888888 }
                })
              }
            }} /> */}
            {!logined ? <div style={{
              color: "#7B7B7B", fontSize: "0.12rem", fontWeight: "bold",
              width: "0.5rem", cursor: "pointer",
            }} onClick={() => {
              window.location.href = '/login'
              // message.warn("功能未开放")
            }}>
              登录
            </div> : <div style={{
                color: "#7B7B7B", fontSize: "0.14rem", width: "0.5rem", cursor: "pointer",
                position: "relative", clear: "both", height: "100%", display: "flex",
                alignItems: "center", justifyContent: 'center'
              }}
                onMouseLeave={() => {
                  setDialog(false)
                }}
                onMouseOver={() => {
                  setDialog(true)
                }}
              >
                <div style={{
                  border: "1px solid grey", width: "0.2rem", height: "0.2rem",
                  position: "relative",
                  display: "flex", justifyContent: "center", alignItems: "center", borderRadius: '0.1rem'
                }}>
                  <UserOutlined style={{ fontSize: "0.14rem" }}
                  />
                  {tips > 0 && <span style={{
                    position: "absolute", height: '0.08rem', width: "0.08rem", background: "red",
                    borderRadius: "50%",
                    right: "-0.05rem", top: 0
                  }}></span>}
                </div>
                {dialog && <section style={{
                  position: "absolute",
                  top: '0.2rem',
                  left: '0.25rem',
                  border: "1px solid #51AA52",
                  width: "0.9rem",
                  zIndex: 77777777,
                  background: "white",
                  borderRadius: "0.02rem",
                  height: "0.3rem",
                }}>
                  <div style={{
                    fontSize: "0.12rem", height: "0.3rem", display: "flex", color: "rgba(0,0,0,0.5)",
                    justifyContent: "center", alignItems: "center", color: "#51AA52"
                  }}
                    onClick={() => {
                      if (userInfo) {
                        if (userInfo.role * 1 === 1) {
                          window.location.href = '/admin'
                        } else {
                          window.location.href = '/common'
                        }
                      }

                    }}>{userInfo && userInfo.name}</div>
                </section>}
              </div>
            }

            {!logined ? <div style={{ color: "#7B7B7B", fontWeight: "bold", fontSize: "0.12rem", width: "0.5rem", cursor: "pointer" }} onClick={() => {
              window.location.href = '/register'
              // message.warn("功能未开放")
            }}>
              注册
           </div> : <div style={{ color: "#7B7B7B", fontWeight: "bold", fontSize: "0.12rem", width: "0.5rem", cursor: "pointer" }}
                onClick={() => {
                  localStorage.removeItem("user")
                  checkLogin(false)
                  window.location.href = "/"
                }}>
                退出
           </div>}
          </div>
          <ul style={{
            height: "50%", width: "100%", display: "flex",
            alignItems: "center",
            justifyContent: 'space-between', margin: '0 -0.1rem', zIndex: 0
          }}>
            {titles.map((item, index) => {
              return (
                <li style={{
                  color: index == inx ? "white" : "#51AA52", fontWeight: "bold", height: "0.3rem", display: "flex", flex: 1,
                  alignItems: 'center', justifyContent: "center", fontSize: "0.14rem", cursor: "pointer",
                  background: index == inx ? '#51AA52' : 'white', borderRadius: "0.2rem"
                }} onClick={() => {

                  if (item == titles[0]) {
                    setInx(0)
                    // history.push('/')
                    window.location.href = '/'
                  } else if (item == titles[6]) {
                    window.location.href = '/contact'
                    setInx(6)
                  } else if (item == titles[1]) {
                    window.location.href = '/about'
                    setInx(1)
                  } else if (item == titles[4]) {
                    window.location.href = '/council'
                    setInx(4)
                  }
                }}>
                  {item}
                </li>
              )
            })}
          </ul>
        </section>
      </header>
      <main style={{ position: "relative" }} id='main_container'>
        <Routers />
      </main>
    </div>
  );
}

export default App;
