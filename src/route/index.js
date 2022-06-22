import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from "react-router-dom";
import { AliOss } from "../lib/const"

import Home from "../page/home" // 首页 
import News from '../page/news' // 新闻详情页
import Login from '../page/auth/login'
import Register from '../page/auth/register'
import Admin from '../page/user/admin'
import CommonUser from '../page/user/common'
import ContactUs from '../page/contact/index'

import NewsDetail2 from "../page/news/detail2"

import NewsDetail3 from "../page/news/detail3"


const logo = AliOss + '/img/logo.png'
// import logo from "../static/imgs/logo.png"
const tabs = ["首页", "新闻中心", "关于我们", "加入我们", "双碳资料"]
const subs = [
    [], [], [], [], []
]

const Routers = (props) => {
    const [tabInx, setTabInx] = useState(-1)
    const [flag, cgFlag] = useState(false) // 头部区域样式

    const navigateTo = (inx) => {
        switch (inx) {
            case 0:
                // window.location.reload();
                return;
            default:
                return "/";
        }
    }

    return (
        <Router>
            <>

                <Switch>

                    <Route path="/news" exact component={News}>
                    </Route>

                    <Route path="/news/2" exact component={NewsDetail2}>
                    </Route>
                    <Route path="/news/3" exact component={NewsDetail3}>
                    </Route>

                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/register" exact component={Register}></Route>
                    <Route path="/admin" exact component={Admin}></Route>
                    <Route path="/common" exact component={CommonUser}></Route>
                    <Route path="/contact" exact component={ContactUs}></Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </>
        </Router>
    )
}

export default Routers