import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "../page/home" // 首页 
import News from '../page/news' // 新闻详情页
import Login from '../page/auth/login'
import Register from '../page/auth/register'
import Admin from '../page/user/admin'
import CommonUser from '../page/user/common'
import ContactUs from '../page/contact/index'
import AboutLeague from "../page/about/index" // 关于联盟
import Council from '../page/council/index' // 专业委员会
import Dynamic from '../page/dynamic/index' // 联盟动态
import NewsDetail2 from "../page/news/detail2"
import NewsDetail3 from "../page/news/detail3"
import NewsDetail4 from "../page/news/detail4"

const Routers = () => {
    return (
        <Router>
            <>
                <Switch>
                    <Route path="/news/1" exact component={News}/>
                    <Route path="/news/2" exact component={NewsDetail2}/>
                    <Route path="/news/3" exact component={NewsDetail3}/>
                          <Route path="/news/4" exact component={NewsDetail4}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/admin" exact component={Admin}/>
                    <Route path="/common" exact component={CommonUser}/>
                    <Route path="/contact" exact component={ContactUs}/>
                    <Route path="/about" exact component={AboutLeague}/>
                    <Route path="/council" exact component={Council}/>
                    <Route path="/dynamic" exact component={Dynamic}/>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </>
        </Router>
    )
}

export default Routers