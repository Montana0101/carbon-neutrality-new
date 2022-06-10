import React, { useState,useEffect} from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import { AliOss, ThemeColor, CutLine } from "../../lib/const"
import { login } from '../../apis/index'

import bg from './bg.png'
import { message } from 'antd'
import './index.less'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const history = useHistory()

    useEffect(()=>{
        const dom = document.getElementsByClassName("app-header")[0]
        dom.style.display='none'

        const main = document.getElementById('main_container')
        main.style.height='100%'
    },[])

    const submit = async () => {
        if (email && password) {
            let params = {
                email,
                password
            }
            const res = await login(params)
            if (res.success) {
                // 登录成功
                message.success(res.msg)
                localStorage.setItem(
                    'user', JSON.stringify(res.result)
                )
                window.location.replace('/')
            } else {
                message.error(res.msg)
                return
            }
        } else {
            message.error('不能为空')
            return
        }
    }

    return (
        <div style={{
            width: "100%", height: "100%", position: "relative", backgroundImage: `url(${bg})`,
            backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center"
        }}>
            <section className="login">
                <h3 style={{ color: "white", fontSize: "0.34rem", fontWeight: "bold", margin: 0 }}>STIACN</h3>
                <h2 style={{ color: "white", fontSize: "0.22rem", margin: 0 }}>上海碳中和技术创新联盟</h2>
                <input placeholder='请输入邮箱'  maxlength="40"
                    onChange={e => setEmail(e.target.value)} />
                <input placeholder='6 - 16位密码，区分大小写' type="password"
                    onChange={e => setPassword(e.target.value)}  maxlength="16"/>
                <button style={{ background: "#52AA53",cursor:"pointer"}} onClick={submit}>登录</button>
                <div>
                    <span>还没账户？</span>
                    <a onClick={() => {
                        history.push('/register')
                    }}>立即注册</a>
                </div>
            </section>
        </div>
    )
}

export default withRouter(Login)