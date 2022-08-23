import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../page/home"; // 首页
import News from "../page/news"; // 新闻详情页
import Login from "../page/auth/login";
import Register from "../page/auth/register";
import Admin from "../page/user/admin";
import CommonUser from "../page/user/common";
import ContactUs from "../page/contact/index";
import AboutLeague from "../page/about/index"; // 关于联盟
import Council from "../page/council/index"; // 专业委员会
import Dynamic from "../page/dynamic/index"; // 联盟动态
import Scope from "../page/scope/index"; // 业务范围
import Consult from "../page/consult/index"; // 双碳咨询
import SubIframe from "../page/consult/iframe"; // 双碳子页面
import ConsultSub1 from "../page/consult/sub/sub1"; //双碳子页面
import ConsultSub2 from "../page/consult/sub/sub2";
import ConsultSub3 from "../page/consult/sub/sub3";
import ConsultSub4 from "../page/consult/sub/sub4";
import ConsultSub5 from "../page/consult/sub/sub5";
import ConsultSub6 from "../page/consult/sub/sub6";
import ConsultSub7 from "../page/consult/sub/sub7";

import NewsDetail2 from "../page/news/detail2";
import NewsDetail3 from "../page/news/detail3";
import NewsDetail4 from "../page/news/detail4";

import SearchResult from '../page/result/index'; // 搜索结果页
import Declare from '../page/user/declare'; // 申报模块

const Routers = () => {
  return (
    // <Router>
    <>
      <Switch>
        <Route path="/news/1" exact component={News} />
        <Route path="/news/2" exact component={NewsDetail2} />
        <Route path="/news/3" exact component={NewsDetail3} />
        <Route path="/news/4" exact component={NewsDetail4} />
        <Route path="/information" component={SubIframe} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/common" exact component={CommonUser} />
        <Route path="/contact" exact component={ContactUs} />
        <Route path="/about" exact component={AboutLeague} />  
        <Route path="/council" exact component={Council} />
        <Route path="/dynamic" exact component={Dynamic} />
        <Route path="/scope" exact component={Scope} />
        <Route path="/consult" exact component={Consult} />
        <Route path="/result" exact component={SearchResult} />
        <Route path="/declare" exact component={Declare}/>

        <Route path="/consult/1" exact component={ConsultSub1} />
        <Route path="/consult/2" exact component={ConsultSub2} />
        <Route path="/consult/3" exact component={ConsultSub3} />
        <Route path="/consult/4" exact component={ConsultSub4} />
        <Route path="/consult/5" exact component={ConsultSub5} />
        <Route path="/consult/6" exact component={ConsultSub6} />
        <Route path="/consult/7" exact component={ConsultSub7} />

        <Route path="/" exact component={Home} />
      </Switch>
    </>
    // </Router>
  );
};

export default Routers;
