//  联盟动态
import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import { withRouter, useHistory } from "react-router-dom";
import {
  AliOss,
  ThemeColor,
  CutLine,
  barFontSize,
  barHeight,
  IframeUrl,
} from "../../lib/const";
import { getNewsList } from "../../apis/index";
import store from "../../store/index";
import "./index.less";

const Dynamic = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    store.subscribe(() => {
      setAmount(store.getState().amount);
    });
  }, []);

  const history = useHistory();

  useEffect(() => {
    _handleNewsList();
  }, [page]);

  const _handleNewsList = async () => {
    let params = {
      page,
      limit,
    };
    const res = await getNewsList(params);
    let arr = [];
    if (res && res.code == 2000) {
      res.result.data &&
        res.result.data.map((item) => {
          item.releaseTime.split(0, 7);
          arr.push({
            releaseTime: item.releaseTime.substring(0, 10),
            title: item.title,
            linking: item.linking,
            id:item.id
          });
        });
      setTotal(res.result.totalRecord);
    }
    setData(arr);
  };

  return (
    <div className="dynamic_page">
      <section
        style={{
          height: "100%",
          borderTop: CutLine,
          padding: "0 0.5rem 0rem 0.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: CutLine,
            borderTop: "none",
            height: "auto",
            padding: "0 0.3rem",
            borderBottom: "none",
          }}
        >
          <ul style={{ height: "auto" }}>
            {data.map((item, index) => {
              return (
                <li
                  key={index}
                  style={{
                    height: "0.84rem",
                    display: "flex",
                    position: "relative",
                    cursor: "pointer",
                    overflow: "hidden",
                    borderBottom: CutLine,
                    width: "100%",
                    alignItems: "center",
                    paddingLeft: "0.02rem",
                  }}
                  onClick={() => {
                    if (item.linking) {
                      window.open(item.linking);
                    } else {
                      window.location.href = '/news/'+item.id
                    }
                  }}
                  className="col"
                >
                  <div
                    style={{
                      fontSize: "0.15rem",
                      fontWeight: "bold",
                      color: "rgba(0,0,0,0.5)",
                      letterSpacing: "0.02rem",
                      width: "25%",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      fontFamily: "思源宋体 !important",
             
                    }}
                  >
                    <span>{item.releaseTime.substring(0, 4)}</span>
                    <span style={{ fontSize: "0.12rem" }}>年</span>
                    <span>{item.releaseTime.substring(5, 7) * 1}</span>
                    <span style={{ fontSize: "0.12rem" }}>月</span>
                    <span>{item.releaseTime.substring(8, 10) * 1}</span>
                    <span style={{ fontSize: "0.12rem" }}>号</span>
                  </div>
                  <div
                    style={{
                      color: ThemeColor,
                      fontWeight: "bold",
                      fontSize: "0.15rem",
                      width: "75%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      textAlign:"left"
                    }}
                  >
                    {item.title}
                  </div>
                </li>
              );
            })}
          </ul>
          <p
            style={{
              height: "0.6rem",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            {total > 10 && (
              <Pagination
                total={total}
                showTotal={(total) => `总计 ${total} 条`}
                defaultPageSize={5}
                defaultCurrent={1}
                pageSizeOptions={[5, 10]}
                onChange={(a, b) => {
                  setPage(a);
                }}
              />
            )}
          </p>
        </div>
        <p
        style={{
          height: "0.5rem",
          fontSize: "0.12rem",
          color: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "right",
          // padding: "0 0.5rem",
          alignItems: "center",
          // background:"red",
          // position:"fixed",
          // bottom:'1rem'
        }}
      >
        <span>访问量：</span>
        <span>{amount}</span>
      </p>
      </section>

    </div>
  );
};

export default Dynamic;
