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

import SearchResult from "../page/result/index"; // 搜索结果页
import Declare from "../page/user/declare"; // 申报模块
import { putVcount } from "../apis/index";

import store from "../store/index";

const _putVcount = async (tag) => {
  const res = await putVcount(tag);
  if (res && res.code == 2000) {
    if (res.result) {
      localStorage.setItem("amount", res.result);
      store.dispatch({
        type: "Set_Amount",
        value: res.result,
      });
    }
  }
};

const Routers = () => {
  return (
    // <Router>
    <>
      <Switch>
        <Route
          path="/news"
          render={(routeProps) => {
            _putVcount(routeProps.location.pathname);
            return <News {...routeProps} />;
          }}
        />
        <Route
          path="/news/1"
          exact
          render={(routeProps) => {
            _putVcount("/news/1");
            return <News {...routeProps} />;
          }}
        />
        <Route
          path="/news/2"
          exact
          render={() => {
            _putVcount("/news/2");
            return <NewsDetail2 />;
          }}
        />
        <Route
          path="/news/3"
          exact
          render={() => {
            _putVcount("/news/3");
            return <NewsDetail3 />;
          }}
        />
        <Route
          path="/news/4"
          exact
          render={() => {
            _putVcount("/news/4");
            return <NewsDetail4 />;
          }}
        />

        <Route
          path="/information"
          render={() => {
            _putVcount("/information");
            return <SubIframe />;
          }}
        />

        <Route path="/login" exact render={Login} />
        <Route path="/register" exact render={Register} />
        <Route
          path="/admin"
          exact
          render={() => {
            _putVcount("/admin");
            return <Admin />;
          }}
        />
        <Route
          path="/common"
          exact
          render={() => {
            _putVcount("/common");
            return <CommonUser />;
          }}
        />

        <Route
          path="/contact"
          exact
          render={() => {
            _putVcount("/contact");
            return <ContactUs />;
          }}
        />

        <Route
          path="/about"
          exact
          render={() => {
            _putVcount("/about");
            return <AboutLeague />;
          }}
        />

        <Route
          path="/council"
          exact
          render={() => {
            _putVcount("/council");
            return <Council />;
          }}
        />

        <Route
          path="/dynamic"
          exact
          render={() => {
            _putVcount("/dynamic");
            return <Dynamic />;
          }}
        />
        <Route
          path="/scope"
          exact
          render={() => {
            _putVcount("/scope");
            return <Scope />;
          }}
        />

        <Route
          path="/consult"
          exact
          render={() => {
            _putVcount("/consult");
            return <Consult />;
          }}
        />

        <Route
          path="/result"
          exact
          render={(props) => {
            console.log("打印下的时候打算", props);
            let id = JSON.parse(props.location.state.value).id;
            _putVcount(`/result/${id}`);
            return <SearchResult />;
          }}
        />
        <Route
          path="/declare"
          exact
          render={() => {
            _putVcount("/declare");
            return <Declare />;
          }}
        />

        <Route
          path="/consult/1"
          exact
          render={() => {
            _putVcount("/consult/1");
            return <ConsultSub1 />;
          }}
        />
        <Route
          path="/consult/2"
          exact
          render={() => {
            _putVcount("/consult/2");
            return <ConsultSub2 />;
          }}
        />
        <Route
          path="/consult/3"
          exact
          render={() => {
            _putVcount("/consult/3");
            return <ConsultSub3 />;
          }}
        />
        <Route
          path="/consult/4"
          exact
          render={() => {
            _putVcount("/consult/4");
            return <ConsultSub4 />;
          }}
        />
        <Route
          path="/consult/5"
          exact
          render={() => {
            _putVcount("/consult/5");
            return <ConsultSub5 />;
          }}
        />
        <Route
          path="/consult/6"
          exact
          render={() => {
            _putVcount("/consult/6");
            return <ConsultSub6 />;
          }}
        />
        <Route
          path="/consult/7"
          exact
          render={() => {
            _putVcount("/consult/7");
            return <ConsultSub7 />;
          }}
        />

        <Route
          path="/"
          exact
          render={() => {
            _putVcount("/home");

            return <Home />;
          }}
        />
      </Switch>
    </>
    // </Router>
  );
};

export default Routers;
