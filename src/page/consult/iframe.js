import React, { useEffect, useRef, useState } from "react";
import { screen_scale2, screen_scale } from "../../util/rem";
import { IframeUrl } from "../../lib/const";
import { useHistory } from "react-router-dom";
import "./index.less";

const SubIframe = () => {
  const [num, setNum] = useState(0);

  const history = useHistory();
  useEffect(() => {
    document.documentElement.scrollTop = "0px";
    document.getElementsByTagName("html")[0].style.overflowX = "hidden";
    document.getElementsByTagName("html")[0].style.overflowY = "hidden";

    if (window.location.href.indexOf("information") != -1) {
      // alert(11)
      const n = window.location.href.substr(window.location.href.length - 1, 1);
      // alert(n)
      setNum(n);
    } else {
      history.push("/consult");
    }
    window.addEventListener("message", function (eve) {
      if (eve.data == "home") {
        window.location.href = "/";
        // history.push('/')
      }
    });

    return () => {
      document.getElementsByTagName("html")[0].style.overflowY = "auto";
    };
  }, []);

  return (
    <div
      className="screen_1"
      style={{
        height: "100%",
        // width: '100%'
        // padding:'0 0.6rem 0 0.3rem !important'
      }}
    >
      <iframe
        // onload={adjustIframe()}
        id="bi_iframe"
        title="定位导航"
        scrolling="yes"
        style={{
          zIndex: 6,
          margin: "0rem !important",
          position: "relative",
          // top: "-0.1rem",
          //   left: "10px",
          border: "0px",
          width: "1500px",
          height: `${100 * screen_scale2()[1]}%`,
          overflowX: "hidden",
          overflowY: "hidden",
          transform: `scale(${screen_scale2()[0]})`,
          transformOrigin: "0 0",
        }}
        src={`${IframeUrl}/zixun/information_${num}.html`}
      />
    </div>
  );
};

export default SubIframe;
