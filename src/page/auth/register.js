import React from 'react'
import { withRouter } from 'react-router-dom'
import { AliOss, ThemeColor, CutLine } from "../../lib/const"
import bg from './bg.png'
import './index.scss'

const Register = () => {
    return (
        <div style={{ width: "100%", height: "100%", position: "relative",backgroundImage:`url(${bg})`,
        backgroundSize:"cover",backgroundRepeat:"no-repeat",display:"flex",justifyContent:"center"}}>
            <section className="register">
                <h3 style={{color:"white",fontSize:"0.34rem",fontWeight:"bold",margin:0}}>STIACN</h3>
                <h2 style={{color:"white",fontSize:"0.22rem",margin:0}}>上海碳中和技术创新联盟</h2>
                <input placeholder='请输入邮箱'
                    />
                    <input placeholder='请输入公司名称'
                    />
                    <input placeholder='请输入姓名'
                    />
                <input placeholder='6 - 16位密码，区分大小写'/>
                <input placeholder='请确认密码'
                    />
                <button style={{background:"#52AA53"}}>注册</button>
                <div>
                    <a>使用已有账户登录</a>
                </div>
            </section>
        </div>
    )
}

export default withRouter(Register)