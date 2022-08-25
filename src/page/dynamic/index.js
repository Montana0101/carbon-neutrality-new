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

const data = [
  {
    title: "电力行业碳中和技术专委会",
    des1:
      "为助推全国电力行业，推动电力技术发展，专委会以战略研究、能力建设、技术交流、标准制定、产学研合作、创投融资、国际合作为目标各相关企业院校搭建开放的交流平台。",
    des2:
      "专委会工作包括：针对中央和地方政府的碳达峰、碳中和政策进行政策研究，并提出战略建议、加强国内外企业交流、学术交流和调研考察，推动相关产业研发和技术进步、制定并发布相关标准、规范，促进其贯彻实施、积极推动产学研合作，搭建创投融资平台，加速技术创新成果转化和落地、开展电力碳中和相关领域的培训等。",
  },
  {
    title: "材料和制造碳中和技术专委会",
    des1:
      "为更好地深入研究碳中和技术、新材料制造与应用，开发更加适应地域和区域特点、符合生产实际需求的解决方案，专委会联合相关专业组织、碳中和技术与材料、制造相关技术生产企业等单位搭建学术交流平台，充分发挥专委会的方向引领作用，形成合力进行跨专业、跨部门、跨行业合作。",
    des2:
      "专委会工作包括：服务战略性新兴产业发展；建立集成技术研发、项目攻关、人才培养、决策咨询等多种功能服务，集聚一批博士人才，转化一批科技成果，解决一批技术难题，培养一批技术人才。集智攻关、协同创新，为材料和制造碳中和技术的创新发展和人才队伍建设奠定基础。共同推动碳中和技术与新材料的应用发展。",
  },
  {
    title: "绿色建筑碳中和技术专委会",
    des1:
      "为全面落实党中央“双碳”战略目标，将太阳能、风能、氢能等可再生清洁能源与建筑一体化结合，推动建筑业实现碳中和，绿色建筑碳中和技术专委会将充分发挥平台的桥梁和纽带作用，切实以开展相关政策研究、技术创新、标准编制。",
    des2:
      "专委会工作包括：发展绿色建材助力节能降耗、清洁生产，在绿色建筑全寿命期内，节约资源、保护环境、减少污染，为人们提供健康、适用、高效的使用空间，最大限度地实现人与自然和谐共生的高质量建筑，并且在已有的可再生能源技术支撑下，建筑及由建筑组成的城市社区，可由单纯的能源消耗者转变为可再生能源的提供者，围绕可再生能源与建筑领域碳中和技术，助力城市与建筑碳中和目标早日实现。",
  },
];

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
      // setData(res.result.data)

      res.result.data &&
        res.result.data.map((item) => {
          item.releaseTime.split(0, 7);
          arr.push({
            releaseTime: item.releaseTime.substring(0, 10),
            title: item.title,
            linking: item.linking,
          });
        });
      setTotal(res.result.totalRecord);
    }
    console.log("答应数据", arr);
    setData(arr);
    // setTotal(arr.length)
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
                      // if(index!=0){
                      //     // window.location.href = `/news/${index-1}`
                      //     history.push(`/news/${index}`)
                      // }else{
                      //     //  window.location.href = `/news/4`
                      //     history.push('/news/4')
                      // }
                      if (index == 3) {
                        history.push(`/news/1`);
                      } else if (index == 4) {
                        history.push(`/news/2`);
                      } else if (index == 5) {
                        history.push(`/news/3`);
                      } else if (index == 1) {
                        history.push(`/news/4`);
                      }
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
      </section>
      <p
        style={{
          height: "0.5rem",
          fontSize: "0.12rem",
          color: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "right",
          padding: "0 0.5rem",
          alignItems: "center",
        }}
      >
        <span>访问量：</span>
        <span>{amount}</span>
      </p>
    </div>
  );
};

export default Dynamic;
