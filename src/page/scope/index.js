//  联盟动态
import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import {
  AliOss,
  ThemeColor,
  CutLine,
  barFontSize,
  barHeight,
  IframeUrl,
} from "../../lib/const";
import { getNewsList } from "../../apis/index";
import scopeBg from "../../static/imgs/scope_bg.png";
import "./index.less";

const data = ["战略咨询服务", "绿色金融服务", "课题研究服务", "人才培养任务"];
const arr = [
    {msg:"",
    img:""}
]
const Scope = () => {
    const [inx,setInx] = useState(0)
  return (
    <div className="scope_page">
      <section
        style={{
          height: "100%",
          borderTop: CutLine,
          padding: "0 0.5rem 0 0.5rem",
        }}
      >
        <div
          style={{
            border: CutLine,
            borderBottom:"none"
          }}
        >
          <section>
            <img
              alt=""
              src={scopeBg}
              style={{
                width: "100%",
              }}
            />
          </section>
          <main>
            <ul>
              {data.map((item, index) => {
                return (
                  <li key={index} onClick={()=>{setInx(index)}}>
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
            {inx==0 && <div className="content">
                <article>1</article>
                <img/>
            </div>}

            {inx==1 && <div className="content">
                2
            </div>}
          </main>
        </div>
      </section>
    </div>
  );
};

export default Scope;
