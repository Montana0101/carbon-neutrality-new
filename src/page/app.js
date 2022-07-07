import "./app.less";
import { Input, Button, message } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  useHistory,
  useNavigate,
} from "react-router-dom";
import Routers from "../route/index";
import { AliOss, ThemeColor, CutLine } from "../lib/const";
import { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import IconSearch from "../static/imgs/search.svg";
import { messageTips } from "../apis/index";

const logo = AliOss + "/img/logo.png";

const titles = [
  "首页",
  "关于联盟",
  "联盟动态",
  "业务范围",
  "专业委员会",
  "双碳资讯",
  "联系我们",
];

var titleArr = [
  { inx: 0, path: "/" },
  { inx: 1, path: "/about" },
  // { inx: 2, path: "/" },
  { inx: 2, path: "/dynamic" },
  { inx: 3, path: "/scope" },
  // { inx: 3, path: "/" },
  { inx: 4, path: "/council" },
  { inx: 5, path: "/" },
  { inx: 6, path: "/contact" },
];

let HeaderCmt = () => {
  const [flag, setFlag] = useState(false); //隐藏title
  const [inx, setInx] = useState(0);
  const [logined, checkLogin] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [tips, setTips] = useState(0);

  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen((href) => {
      href = href.pathname;
      if (href.indexOf("register") != -1 || href.indexOf("login") != -1) {
        setFlag(true);
      } else {
        setFlag(false);
      }
    });
    return () => {
      unlisten();
    };
  }, [history]);

  useEffect(() => {
    let href = window.location.href;

    if (href.indexOf("about") != -1) {
      setInx(1);
    } else if (href.indexOf("contact") != -1) {
      setInx(6);
    } else if (href.indexOf("council") != -1) {
      setInx(4);
    } else if (href.indexOf("dynamic") != -1) {
      setInx(2);
    } else if (href.indexOf("news") != -1) {
      setInx(2);
    } else if (href.indexOf("scope") != -1) {
      setInx(3);
    } else if (href.indexOf("/") == -1) {
      setInx(0);
    }
    // titleArr.map(item => {
    //   if (href.indexOf(item.path) != -1) {
    //     setInx(item.inx)
    //   } else if (href.indexOf('/') == -1) {
    //     setInx(0)
    //   }
    // })
  }, []);

  useEffect(() => {
    const check = localStorage.getItem("user");
    if (JSON.parse(check)) {
      checkLogin(true);
      setUserInfo(JSON.parse(check));
      _messageTips();
    } else {
      checkLogin(false);
    }
  }, []);

  const _messageTips = async () => {
    const res = await messageTips();
    if (res.code === 2000) {
      setTips(res.result);
    }
  };

  return (
    <header
      className="app-header"
      style={{
        height: "0.98rem !important",
        display: flag ? "none" : " block",
      }}
    >
      <section className="header-left">
        <img
          src={logo}
          alt=""
          style={{
            height: "0.82rem",
            marginRight: "0.1rem",
            width: "0.82rem",
          }}
        />
        <div
          style={{
            height: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              fontSize: "0.2rem",
              fontWeight: "bold",
              color: "black",
              marginTop: "0.05rem",
            }}
          >
            STIACN
          </span>
          <span style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.14rem" }}>
            上海碳中和技术创新联盟
          </span>
        </div>
      </section>
      <section className="header-right">
        <div
          style={{
            height: "50%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "0.04rem 0.19rem 0.04rem 0",
          }}
        >
          <Input
            placeholder="请输入企业名称"
            style={{
              width: "2rem",
              padding: "border-box",
              display: "none",
            }}
          />
          {/* <SearchOutlined style={{fontWeight:"bold", color: "#7B7B7B", width: "0.5rem" }} onClick={() => {
              setFlag(!flag)
            }} /> */}
          {/* <img alt="" src={IconSearch} style={{ width: "0.15rem", margin: "0 0.15rem 0 0.3rem" }} onClick={() => {
              if (logined) {
                setFlag(!flag)
              } else {
                message.warn({
                  content: "请登录",
                  style: { zIndex: 88888888888 }
                })
              }
            }} /> */}
          {!logined ? (
            <div
              style={{
                color: "#7B7B7B",
                fontSize: "0.12rem",
                fontWeight: "bold",
                width: "0.5rem",
                cursor: "pointer",
              }}
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              登录
            </div>
          ) : (
            <div
              style={{
                color: "#7B7B7B",
                fontSize: "0.14rem",
                width: "0.5rem",
                cursor: "pointer",
                position: "relative",
                clear: "both",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseLeave={() => {
                setDialog(false);
              }}
              onMouseOver={() => {
                setDialog(true);
              }}
            >
              <div
                style={{
                  border: "1px solid grey",
                  width: "0.2rem",
                  height: "0.2rem",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "0.1rem",
                }}
              >
                <UserOutlined style={{ fontSize: "0.14rem" }} />
                {tips > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      height: "0.08rem",
                      width: "0.08rem",
                      background: "red",
                      borderRadius: "50%",
                      right: "-0.05rem",
                      top: 0,
                    }}
                  ></span>
                )}
              </div>
              {dialog && (
                <section
                  style={{
                    position: "absolute",
                    top: "0.2rem",
                    left: "0.25rem",
                    border: "1px solid #51AA52",
                    width: "0.9rem",
                    zIndex: 77777777,
                    background: "white",
                    borderRadius: "0.02rem",
                    height: "0.3rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.12rem",
                      height: "0.3rem",
                      display: "flex",
                      color: "rgba(0,0,0,0.5)",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#51AA52",
                    }}
                    onClick={() => {
                      if (userInfo) {
                        if (userInfo.role * 1 === 1) {
                          window.location.href = "/admin";
                        } else {
                          window.location.href = "/common";
                        }
                      }
                    }}
                  >
                    {userInfo && userInfo.name}
                  </div>
                </section>
              )}
            </div>
          )}

          {!logined ? (
            <div
              style={{
                color: "#7B7B7B",
                fontWeight: "bold",
                fontSize: "0.12rem",
                width: "0.5rem",
                cursor: "pointer",
              }}
              onClick={() => {
                // window.location.href = "/register";
                history.push("/register");
                // console.log("DNsjkandjksa对你撒娇看第三节卡",location1)
                // message.warn("功能未开放")
              }}
            >
              注册
            </div>
          ) : (
            <div
              style={{
                color: "#7B7B7B",
                fontWeight: "bold",
                fontSize: "0.12rem",
                width: "0.5rem",
                cursor: "pointer",
              }}
              onClick={() => {
                localStorage.removeItem("user");
                checkLogin(false);
                window.location.href = "/";
              }}
            >
              退出
            </div>
          )}
        </div>
        <ul
          style={{
            height: "50%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0 -0.1rem",
            zIndex: 0,
          }}
        >
          {titles.map((item, index) => {
            return (
              <li
                style={{
                  color: index == inx ? "white" : "#51AA52",
                  fontWeight: "bold",
                  height: "0.3rem",
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.14rem",
                  cursor: "pointer",
                  background: index == inx ? "#51AA52" : "white",
                  borderRadius: "0.2rem",
                }}
                onClick={() => {
                  titleArr.map((obj) => {
                    if (item == titles[obj.inx]) {
                      if ( obj.inx == 5) {
                        setInx(0);
                      } else {
                        setInx(obj.inx);
                      }
                      history.push(obj.path);
                    }
                  });
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </section>
    </header>
  );
};

HeaderCmt = withRouter(HeaderCmt);

function App() {
  const [flag, setFlag] = useState(false); //隐藏title

  useEffect(() => {
    console.log(window.location.href);
    let href = window.location.href;
    if (href.indexOf("register") != -1 || href.indexOf("login") != -1) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, []);

  return (
    <Router>
      <div className="app">
        {!flag && <HeaderCmt />}
        <main style={{ position: "relative" }} id="main_container">
          <Routers />
        </main>
      </div>
    </Router>
  );
}

export default App;
