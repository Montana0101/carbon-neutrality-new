import React, { useState, useEffect } from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import { register } from '../../apis/index'
import { message } from 'antd'
import bg from './bg.png'
import './index.less'

const Register = () => {
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [name, setName] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [flag, setFlag] = useState(false)

    const history = useHistory()

    const verify = () => {
        if (email && company && name && password1 && password2) {
            const reg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
            const bool = reg.test(email)
            if (!bool) {
                setFlag(false)
                message.error('邮箱格式有误')
                return
            }

            if (password1.length > 5 && password2.length > 5) {
                if (password1 != password2) {
                    setFlag(false)
                    message.error("密码输入不一致")
                    return
                } else {
                    setFlag(true)
                }
            } else {
                message.error('请核对密码')
                setFlag(false)
                return
            }

        } else {
            setFlag(false)
            message.error('请输入必填项')
        }

    }

    const submit = async () => {
        await verify()
    }

    useEffect(() => {
        (
            async function fn() {
                if (flag) {
                    let params = {
                        email, companyName: company, name, password: password2
                    }
                    const res = await register(params)
                    if (res && (res.code === 2000)) {
                        message.success("操作成功，我们会将审核结果发送至你的邮箱")
                        history.push("/")
                        const dom = document.getElementsByClassName("header-layout")[0]
                        dom.style.display = 'flex'
                    } else {
                        message.error(res.msg)
                    }
                }
            }
        )()

    }, [flag])


    return (
        <div style={{
            width: "100%", height: "100%", position: "relative", backgroundImage: `url(${bg})`,
            backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center"
        }}>
            <section className="register">
                <h3 style={{ color: "white", fontSize: "0.34rem", fontWeight: "bold", margin: 0 }}>STIACN</h3>
                <h2 style={{ color: "white", fontSize: "0.22rem", margin: 0 }}>上海碳中和技术创新联盟</h2>
                <input placeholder='请输入邮箱' maxlength="40"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }} value={email} />
                <input placeholder='请输入公司名称' maxlength="40"
                    onChange={(e) => { setCompany(e.target.value) }} />
                <input placeholder='请输入姓名' maxlength="10"
                    onChange={(e) => { setName(e.target.value) }} />
                <input placeholder='6 - 16位密码，区分大小写' type="password"
                    onChange={(e) => { setPassword1(e.target.value) }} maxlength="16" />
                <input placeholder='请确认密码' type="password"
                    onChange={(e) => { setPassword2(e.target.value) }} maxlength="16" />

                <button style={{ background: "#52AA53" }}
                    onClick={submit}>注册</button>
                <div>
                    <a href='/login'>使用已有账户登录</a>
                </div>
            </section>
        </div>
    )
}

export default withRouter(Register)