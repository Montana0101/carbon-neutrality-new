import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from "react-router-dom";
import { AliOss } from "../lib/const"

import Home from "../page/home" // 首页 
import NewsDetail1 from '../page/news/detail1' // 新闻详情页
import NewsDetail2 from '../page/news/detail2' // 新闻详情页
import NewsDetail3 from '../page/news/detail3' // 新闻详情页

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
            // case 1:
            //     return "/eng";
            // case 2:
            //     return "/news";
            // case 3:
            //     return "/prod";
            // case 4:
            //     return "/sche";
            // case 5:
            //     return "/mem";
            // case 6:
            //     return "/about";
            default:
                return "/";
        }
    }

    return (
        <Router>
            <>
          
                <Switch>

                    <Route path="/news/1" exact component={NewsDetail1}>
                    </Route>
                    <Route path="/news/2" exact component={NewsDetail2}>
                    </Route>
                    <Route path="/news/3" exact component={NewsDetail3}>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </>
        </Router>
    )
}

export default Routers