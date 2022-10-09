import { useState, useEffect, useRef } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import img1 from "./imgs/1.png";
import { AliOss, ThemeColor, CutLine } from "../../lib/const";
import { createFromIconfontCN } from "@ant-design/icons";
import "./default.less";
import store from "../../store/index";
import { getNewsInfo } from "../../apis/index";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

function News(props) {
  const [amount, setAmount] = useState(0);
  const [id, setId] = useState(null);
  const [obj, setObj] = useState({});

  useEffect(() => {
    store.subscribe(() => {
      setAmount(store.getState().amount);
    });
  }, []);

  useEffect(() => {
    document.getElementsByTagName("html")[0].style.overflowX = "hidden";
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";

    const path = window.location.href;
    let _path = props.location.pathname;
    _getNews(_path.substr(6));
    setId(_path.substr(6));
  }, []);

  const _getNews = async (id) => {
    const res = await getNewsInfo(id);
    if (res.code == 2000) {
      console.log("第十八届还多久啊撒", res.result);
      setObj(res.result);
    }
  };
  const history = useHistory();

  return (
    <div
      className="screen_1"
      style={{
        height: "auto",
        width: "100%",
        background: "white",
        padding: "0 0.3rem",
      }}
    >
      {/* 碳中和技术创新联盟 */}
      <div
        style={{
          border: CutLine,
          padding: "0 0.5rem",
          borderRight: "none",
          borderLeft: "none",
        }}
      >
        <h3
          style={{
            fontSize: "0.12rem",
            fontWeight: "400",
            display: "flex",
            margin: 0,
            padding: "0 0.3rem",
            height: "0.7rem",
            lineHeight: "0.7rem",
            borderLeft: CutLine,
            borderRight: CutLine,
          }}
        >
          <span
            className="homeBtn"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            首页
          </span>
          <span style={{ margin: "0 0.1rem" }}>/</span>
          <span
            className="dynamicBtn"
            onClick={() => {
              window.location.href = "/dynamic";
            }}
          >
            联盟动态
          </span>
          <span style={{ margin: "0 0.1rem" }}>/</span>
          <span>{obj && obj.title}</span>
        </h3>
      </div>

      <div
        style={{
          border: CutLine,
          padding: "0 0.5rem",
          borderRight: "none",
          borderLeft: "none",
          borderTop: "none",
        }}
      >
        <section
          style={{
            fontSize: "0.12rem",
            fontWeight: "400",
            display: "flex",
            margin: 0,
            padding: "0 0.3rem",
            height: "0.7rem",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderLeft: CutLine,
            borderRight: CutLine,
          }}
        >
          <div className="newsTitle">{obj && obj.title}</div>
          <div style={{ color: "rgba(0,0,0,0.6)" }}>
            发布时间: {obj && obj.releaseTime}
          </div>
        </section>
      </div>

      <div
        style={{
          boxSizing: "border-box",
          // color: "white",
          marginBottom: "-0.5rem",
          border: CutLine,
          borderTop: "none",
          borderBottom: "none",
          margin: "0 0.5rem 0 0.5rem",
          padding: "0.3rem 0",
        }}
      >
        <article
          style={{
            margin: "0 0",
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: obj && obj.content }}
            style={{ width: "100%" }}
          ></div>
        </article>
      </div>

      <div
        style={{
          border: CutLine,
          padding: "0 0.5rem",
          borderRight: "none",
          borderLeft: "none",
          // borderTop: "none"
        }}
      >
        <section
          style={{
            fontSize: "0.12rem",
            fontWeight: "400",
            display: "flex",
            margin: 0,
            padding: "0 0.3rem",
            height: "0.9rem",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            borderLeft: CutLine,
            borderRight: CutLine,
          }}
        >
          {obj && obj.proNews && (
            <div
              onClick={() => {
                if (obj && obj.proNews && obj.proNews.linking) {
                  window.open(obj.proNews.linking);
                } else {
                  window.location.href = `/news/${obj.proNews.id}`;
                }
              }}
            >
              <IconFont
                type="icon-tuichu"
                style={{
                  color: ThemeColor,
                  margin: "0 0.1rem 0 0",
                  fontSize: "0.12rem",
                }}
              />
              <a
                href="#"
                style={{
                  fontSize: "0.12rem",
                  textDecoration: "underline",
                  color: ThemeColor,
                  fontWeight: "400",
                }}
              >
                {obj && obj.proNews && obj.proNews.title}
              </a>
            </div>
          )}{" "}
          {obj && obj.nextNews && (
            <div
              onClick={() => {
                if (obj && obj.nextNews && obj.nextNews.linking) {
                  window.open(obj.nextNews.linking);
                } else {
                  window.location.href = `/news/${obj.nextNews.id}`;
                }
              }}
            >
              <IconFont
                type="icon-tuichu"
                style={{
                  color: ThemeColor,
                  margin: "0 0.1rem 0 0",
                  fontSize: "0.12rem",
                }}
              />
              <a
                href="#"
                style={{
                  fontSize: "0.12rem",
                  textDecoration: "underline",
                  color: ThemeColor,
                  fontWeight: "400",
                }}
              >
                {obj && obj.nextNews && obj.nextNews.title}
              </a>
            </div>
          )}{" "}
        </section>
      </div>
      <p
        style={{
          height: "0.5rem",
          fontSize: "0.12rem",
          color: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "right",
          padding: "0 0.5rem",
          alignItems: "center",
          zIndex: 10000,
        }}
      >
        <span>访问量：</span>
        <span>{amount}</span>
      </p>
    </div>
  );
}

export default withRouter(News);
