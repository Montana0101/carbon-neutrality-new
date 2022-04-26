import { useState } from "react"
import './app.scss';
import { Input, Button } from 'antd'
import Routers from "../route/index"
import { AliOss } from "../lib/const"
import {
  SearchOutlined
} from '@ant-design/icons';

const logo = AliOss + '/img/logo.png'
const wx = AliOss + '/icon/微信.png'
const ks = AliOss + '/icon/快手.png'
const dy = AliOss + '/icon/抖音.png'
const wb = AliOss + '/icon/微博.png'
const bz = AliOss + '/icon/b站.png'
const dyQR = AliOss + '/qr/抖音.png'
const wbQR = AliOss + '/qr/微博.png'
const bzQR = AliOss + '/qr/B站.png'
const ksQR = AliOss + '/qr/快手.png'
const wxQR = AliOss + '/qr/微信.jpg'

const imgs = [
  {
    icon: wx,
    qr: wxQR
  }, {
    icon: bz,
    qr: bzQR
  },
  {
    icon: ks,
    qr: ksQR
  },
  {
    icon: dy,
    qr: dyQR
  },
  {
    icon: wb,
    qr: wbQR
  }
]

const titles=["首页",'科学研究','新闻中心','关于我们','加入我们','双碳资料','大事件']

function App() {
  const [inx, setInx] = useState(-1)
  const [flag,setFlag] = useState(false)
  return (
    <div className="app">
      <header className="app-header">
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
            alignItems: "center",padding:'0.07rem 0.3rem 0.07rem 0',boxSizing:"border-box"
          }}>
            <Input placeholder="请输入企业名称" style={{width:"2rem",padding:"border-box",display:`${
              flag ? 'inline-block' :" none"
            }`}}/>
            <SearchOutlined style={{ color: "#51AA52" ,width:"0.5rem"}} onClick={()=>{
              setFlag(!flag)
            }}/>
            <div style={{ color: "#51AA52", fontSize: "0.12rem",width:"0.5rem" }}>
              登录
            </div>
            <div style={{ color: "#51AA52", fontSize: "0.12rem",width:"0.5rem" }}>
              注册
           </div>
          </div>
          <ul style={{ height: "50%", background: "#51AA52",width:"100%",display:"flex",
          justifyContent:'space-between'}}>
            {titles.map((item)=>{
              return (
                <li style={{color:"white",fontWeight:"bold",height:"100%",display:"flex",flex:1,
                 alignItems:'center',justifyContent:"center",fontSize:"0.12rem"}}>
                  {item}
                </li>
              )
            })}
          </ul>
        </section>
      </header>
      <main>
        <Routers />
      </main>

      {/* <footer>
        <div>
          <ul onMouseLeave={() => {
            setInx(-1)
          }}>
            {
              imgs.map((item, index) => {
                return <li key={index}>
                  <img src={item.icon} alt="" className="icon" onMouseOver={
                    () => {
                      setInx(index)
                    }
                  } />
                  <img src={item.qr} alt="" className={`${index === inx && 'qrOn'} qr`} />
                </li>
              })
            }
          </ul>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
