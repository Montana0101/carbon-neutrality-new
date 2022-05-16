import React, { useState } from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import { AliOss, ThemeColor, CutLine } from "../../lib/const"
import { login } from '../../apis/index'

import bg from './bg.png'
import { message } from 'antd'
import './index.scss'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const history = useHistory()

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
                    'email', email
                )
                history.push('/')
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
                <input placeholder='请输入邮箱'
                    onChange={e => setEmail(e.target.value)} />
                <input placeholder='6 - 16位密码，区分大小写' type="password"
                    onChange={e => setPassword(e.target.value)} />
                <button style={{ background: "#52AA53" }} onClick={submit}>登录</button>
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