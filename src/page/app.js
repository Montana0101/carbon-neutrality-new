import './app.scss';
import { Input } from 'antd'
import Routers from "../route/index"
import {
  SearchOutlined
} from '@ant-design/icons';
import { AliOss, ThemeColor, CutLine } from "../lib/const"
import { useEffect, useState } from "react"
import { createFromIconfontCN, UserOutlined } from '@ant-design/icons';
// import {useHistory} from 'react-router-dom'
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const logo = AliOss + '/img/logo.png'


const titles = ["首页", '新闻中心', '科学研究', '双碳资讯', '关于我们', '加入我们']

function App() {
  const [flag, setFlag] = useState(false)
  const [show, setShow] = useState(true)
  const [logined, checkLogin] = useState(false)

  useEffect(() => {
    const href = window.location.href
    console.log('截取下',href)
    var flag 
    if (href.indexOf('login') != -1 || href.indexOf('register') != -1){
      flag = true 
    }else{
      flag = false 
    }
    // var flag = href.indexOf('login') != -1 || href.indexOf('register') != -1
    setShow(!flag)

    const check = localStorage.getItem('user')
    if (check) {
      checkLogin(true)
    } else {
      checkLogin(false)
    }
  }, [])

  return (
    <div className="app">
      <header className="app-header" style={{ display: show ? 'flex' : 'none' }}>
        <section className='header-left'>
          <img src={logo} alt="" style={{ height: '80%', marginRight: "0.1rem" }} />
          <div style={{
            height: "70%", display: "flex", flexDirection: "column", justifyContent: 'center',
            alignItems: 'flex-start', boxSizing: "border-box",
          }}>
            <span style={{
              fontSize: "0.2rem",
              fontWeight: "bold",
              color: "black",
              marginBottom: "-0.05rem"
            }}>STIACN</span>
            <span style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.14rem" }}>上海碳中和技术创新联盟</span>
          </div>
        </section>
        <section className='header-right'>
          <div style={{
            height: "50%", display: "flex", justifyContent: 'flex-end',
            alignItems: "center", padding: '0.07rem 0.3rem 0.07rem 0', boxSizing: "border-box"
          }}>
            <Input placeholder="请输入企业名称" style={{
              width: "2rem", padding: "border-box", display: `${flag ? 'inline-block' : " none"
                }`
            }} />
            <SearchOutlined style={{ color: "#51AA52", width: "0.5rem" }} onClick={() => {
              setFlag(!flag)
            }} />
            {!logined ? <div style={{ color: "#51AA52", fontSize: "0.12rem", width: "0.5rem", cursor: "pointer" }} onClick={() => {
              window.location.href = '/login'
            }}>
              登录
            </div> : <UserOutlined style={{ color: "#51AA52", fontSize: "0.14rem", width: "0.5rem", cursor: "pointer" }} />}
            {!logined ? <div style={{ color: "#51AA52", fontSize: "0.12rem", width: "0.5rem", cursor: "pointer" }} onClick={() => {
              window.location.href = '/register'
            }}>
              注册
           </div> : <div style={{ color: "#51AA52", fontSize: "0.12rem", width: "0.5rem", cursor: "pointer" }}
                onClick={() => {
                  localStorage.removeItem("user")
                  checkLogin(false)
                }}>
                退出
           </div>}
          </div>
          <ul style={{
            height: "50%", width: "100%", display: "flex",
            justifyContent: 'space-between', margin: '0 -0.1rem', zIndex: 1
          }}>
            {titles.map((item) => {
              return (
                <li style={{
                  color: "white", fontWeight: "bold", height: "100%", background: "#51AA52", display: "flex", flex: 1,
                  alignItems: 'center', justifyContent: "center", fontSize: "0.14rem", cursor: "pointer"
                }} onClick={() => {
                  if (item == '首页') {
                    // history.push('/')
                    window.location.href = '/'
                  }
                }}>
                  {item}
                </li>
              )
            })}
          </ul>
        </section>
      </header>
      <main style={{ height: !show && '100%' }}>
        <Routers />
      </main>

      <footer style={{ margin: "0 0.3rem", display: show ? 'flex' : 'none' }}>
        {/* 快速链接 */}
        <div style={{
          borderBottom: CutLine, padding: '0 0.5rem', borderTop: CutLine, background: ThemeColor,
        }}>
          <h3 style={{
            fontSize: "0.22rem", fontWeight: "bold", display: "flex", margin: 0,
            padding: "0 0.3rem", color: 'white', height: "0.8rem", alignItems: "center",
            borderLeft: CutLine, borderRight: CutLine
          }}>      快速链接
            <IconFont type="icon-tuichu" style={{ color: "white", margin: "0 0.2rem 0 1.05rem", fontSize: "0.12rem" }} />
            <a href="http://www.snec.sh.cn/" target="_blank" style={{ fontSize: "0.12rem", textDecoration: "line", color: "white", fontWeight: "400" }}>上海新能源科技成果转化与产业促进中心</a>
          </h3>
        </div>

        <div style={{
          borderBottom: CutLine, padding: '0 0.5rem', borderTop: CutLine,
        }}>
          <div style={{
            fontSize: "0.12rem", fontWeight: "400", display: "flex", margin: 0,
            padding: "0 0.3rem", color: ThemeColor, height: "0.8rem",
            borderLeft: CutLine, borderRight: CutLine, alignItems: "center",
            justifyContent: "space-between"
          }}>
            <span style={{ color: "rgba(0,0,0,0.6)" }}>© 2012-2022</span>
            <span>首页</span>
            <span>新闻中心</span>
            <span>科学研究</span>
            <span>双碳资讯</span>
            <span>关于我们</span>
            <span>加入我们</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
