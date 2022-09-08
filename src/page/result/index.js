import { useState, useEffect, useRef } from "react";
import { screen_scale } from "../../util/rem";
import { withRouter, useHistory } from "react-router-dom";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { AliOss, ThemeColor, CutLine } from "../../lib/const";
import {
  Input,
  Button,
  Radio,
  Timeline,
  Anchor,
  Pagination,
  message,
} from "antd";
import RadarChart from "./radar";
import { portrait } from "../../apis/index";
import * as $ from "jquery";
import "./index.less";
import * as echarts from "echarts";

const defaultImg = AliOss + "/new_version_0518/company_default.png";
const finTabs = [
  "盈利能力",
  "收益质量",
  "运营能力",
  "偿债能力",
  "现金能力",
  "成长能力",
];
const finArr = [
  ["净资产收益率ROE", "总资产报酬率ROA", "销售毛利率", "销售净利率"],
  [
    "经营活动产生的现金流量净额",
    "经营活动净利润",
    "营业利润总额",
    "扣除非经常损益后的净利润",
  ],
  [
    "经营活动产生的现金流量净额",
    "经营活动净利润",
    "营业利润总额",
    "扣除非经常损益后的净利润",
  ],
  ["应收账款周转率", "存货周转率", "总资产周转率", "流动资产周转率"],
  ["流动比率", "速动比率", "流动负债", "已获利息倍数"],
  [
    "经营活动净收益",
    "销售商品提供劳务收到的现金",
    "经营活动产生的现金流量净额",
    "资本支出",
  ],
  [
    "净资产同比增长率",
    "资产总计相对年初增长率",
    "营业总收入同比增长率",
    "净利润同比增长率",
  ],
];

const colors = ["#00E0FF", "#07CC3E", "#9732E2", "#D8DB3A"];

const initBar = (_node, _obj = {}) => {
  let option = {
    grid: {
      left: "0%",
      right: "0%",
      bottom: "10%",
      top: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: Object.keys(_obj),
      axisLabel: {
        interval: 0, //坐标轴刻度标签的显示间隔(在类目轴中有效) 0:显示所有  1：隔一个显示一个 :3：隔三个显示一个...
        // rotate:-20    //标签倾斜的角度，显示不全时可以通过旋转防止标签重叠（-90到90）
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: Object.values(_obj),
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
        itemStyle: {
          normal: {
            //这里是颜色
            color: function (params) {
              //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
              var colorList = [
                "#00A3E0",
                "#FFA100",
                "#ffc0cb",
                "#CCCCCC",
                "#BBFFAA",
                "#749f83",
                "#ca8622",
              ];
              return colorList[params.dataIndex];
            },
          },
        },
      },
    ],
  };

  var myChart = echarts.init(_node);
  myChart.resize();

  option && myChart.setOption(option);
};

// 柱状图
const initColumnar = (dom, cutFin, financeInx) => {
  var colorList = ["#00AAFF", "#A52A2A", "#FF752D", "#FFCF31"];
  // var defaultData = [800, 800, 800, 800]
  let option = {
    backgroundColor: "#fff",
    grid: {
      left: "0%",
      right: "0%",
      bottom: "-5%",
      top: "5%",
      containLabel: true,
    },
    tooltip: {
      // trigger: "axis",
      axisPointer: {
        // type: "shadow",
      },
      position: function (point, params, dom, rect, size) {
        return [point[0], point[1]];
      },
      confine: false,
      // formatter: function (params) {},
    },
    xAxis: {
      show: false,
      type: "value",
    },
    yAxis: [
      {
        type: "category",
        inverse: false,
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          // margin: 220,
          // interval:0,//横轴信息全部显示
          // textStyle: {
          //   color: "rgba(0,0,0,0.8)",
          //   fontSize: "12",
          //   align:"left"
          // },
          formatter: function (value) {
            // value = value.length > 7 ? value.substring(0, 7) + "..." : value;
            return value;
          },
        },
        data: finArr[financeInx],
      },
      {
        type: "category",
        inverse: true,
        axisTick: "none",
        axisLine: "none",
        show: true,
        axisLabel: {
          textStyle: {
            color: "rgba(0,0,0,0.8)",
            fontSize: "12",
          },
          formatter: function (value) {
            return value;
          },
        },
        data: cutFin,
      },
    ],
    series: [
      {
        name: "数量",
        type: "bar",
        zlevel: 1,
        label: {
          show: true,
          formatter: function (obj) {
            // return finArr[financeInx][obj.dataIndex];
            return "";
          },
        },
        itemStyle: {
          normal: {
            barBorderRadius: [0, 30, 30, 0],
            color: (params) => {
              return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "rgba(54,69,129,1)",
                },
                {
                  offset: 0.8,
                  color: colorList[params.dataIndex],
                },
                {
                  offset: 1,
                  color: "rgba(255,255,255,0.8)",
                },
              ]);
            },
            // color: (params) => {
            //   return colorList[params.dataIndex]
            // }
          },
        },
        barWidth: 20,
        data: cutFin,
      },
    ],
  };
  var myChart = echarts.init(dom);
  option && myChart.setOption(option);
};

// 折线图
const initLine = (dom, d1, d2, d3, d4, years) => {
  let option = {
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      top: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      // boundaryGap: false,
      data: years,
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(0,0,0,0.8)",
          width: 0,
          type: "solid",
        },
      },
      splitLine: {
        //分割线配置
        show: false,
        lineStyle: {
          color: "red",
        },
      },
    },
    yAxis: {
      type: "value",
      splitNumber: 3,
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(0,0,0,0.8)",
          width: 0,
          type: "solid",
        },
      },
      splitLine: {
        //分割线配置
        show: true,
        lineStyle: {
          color: "rgba(1,1,1,0.3)",
          type: "dashed",
        },
      },
    },
    series: [
      {
        name: d1.name,
        type: "line",

        data: d1.data,
        lineStyle: {
          color: colors[0],
        },
      },
      {
        name: d2.name,
        type: "line",

        data: d2.data,
        lineStyle: {
          color: colors[1],
        },
      },
      {
        name: d3.name,
        type: "line",

        data: d3.data,
        lineStyle: {
          color: colors[2],
        },
      },
      {
        name: d4.name,
        type: "line",

        data: d4.data,
        lineStyle: {
          color: colors[3],
        },
      },
    ],
  };

  var myChart = echarts.init(dom);
  option && myChart.setOption(option);
};

const CompanyCard = (props) => {
  let { data } = props;

  useEffect(() => {}, [data]);

  return (
    <div className="card">
      <p className="lp">
        <StarOutlined
          style={{
            marginRight: "0.05rem",
            fontSize: "0.18rem",
            color: "white",
          }}
        />
        添加关注
      </p>
      {/* <StarFilled /> */}
      <p className="rp" style={{ background: ThemeColor }}>
        <span>
          {data.comprehensiveScore ? data.comprehensiveScore.totalScore : 0}
        </span>
        分
      </p>
      <section className="left">
        <img src={defaultImg} alt="" />
      </section>
      <section className="middle">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.1rem",
          }}
        >
          <span
            style={{
              fontSize: "0.2rem",
              fontWeight: "bold",
              color: "rgba(0,0,0,0.8)",
            }}
          >
            {data.companyName}
          </span>
          <span style={{ marginLeft: "0.1rem" }}>
            (简称：{data.enterpriseAbbreviation})
          </span>
        </div>
        <ul>
          <li>
            <p>
              <span>行业：</span>
              <span>{data.industryName}</span>
            </p>
            <p>
              <span>电话：</span>
              <span>{data.contactNumber}</span>
            </p>
            <p>
              <span>邮箱：</span>
              <span>{data.email}</span>
            </p>
            <p>
              <span>统一社会信用代码：</span>
              <span>{data.industryName}</span>
            </p>
          </li>
          <li>
            <p>
              <span>法定代表人：</span>
              <span>{data.legalPersonName}</span>
            </p>
            <p>
              <span>注册地：</span>
              <span>{data.cityName}</span>
            </p>
            <p>
              <span>注册资金：</span>
              <span>{data.regCapital}万元</span>
            </p>
            <p>
              <span>企业注册时间：</span>
              <span>{data.regTime}</span>
            </p>
          </li>
          <li>
            <p>
              <span>网址：</span>
              <a target="_blank" href={data.website}>
                {data.website}
              </a>
            </p>
            <p>
              <span>融资阶段：</span>
              <span>{data.stageName}</span>
            </p>
            <p>
              <span>融资金额：</span>
              <span>{data.financingScale}万元</span>
            </p>
            <p>
              <span>投前估值：</span>
              <span>{data.enterpriseValuation}万元</span>
            </p>
          </li>
        </ul>
      </section>
      <section className="right">
        <RadarChart data={data} />
      </section>
    </div>
  );
};

const SearchResult = (props) => {
  const [obj, setObj] = useState({});
  const [financeInx, setFinanceInx] = useState(0);
  const [targetOffset, setTargetOffset] = useState(undefined);
  const [pageNo, setPageNo] = useState(1);
  const [cutFin, setCutFin] = useState([]); //当前tab数据
  const [d1, setData1] = useState({});
  const [d2, setData2] = useState({});
  const [d3, setData3] = useState({});
  const [d4, setData4] = useState({});
  const [finances, setFinances] = useState({});
  const [lineData, setLineData] = useState([]);
  const [years, setYears] = useState([]);
  const [company, setCompany] = useState("");
  const [scrollPos, setScrollPos] = useState(undefined); //滚动条位置
  const [cardPos, setCardPos] = useState(undefined);
  const [flag, setFlag] = useState(false); // 是否吸顶

  const [inx, setInx] = useState(0); // 子菜单索引
  const [isUp, setIsUp] = useState(null); //true往下滚 false往上

  const history = useHistory();

  const _portrait = async () => {
    const res = await portrait(company);
    if (res && res.code == 2000) {
      setObj(res.result);
      localStorage.setItem("search", JSON.stringify(res.result));
      // history.push("/")
    } else {
      message.warn("未查询到该公司数据！");
    }
  };

  // 动态获取当前财务参数
  const getParams = (inx = 0) => {
    let arr = [];
    let _years = [];
    let _d1 = { name: "", data: [] };
    let _d2 = { name: "", data: [] };
    let _d3 = { name: "", data: [] };
    let _d4 = { name: "", data: [] };

    switch (inx) {
      case 0:
        arr = [
          finances.profitRoe,
          finances.profitRoa,
          finances.profitGpm,
          finances.profitNir,
        ];
        lineData &&
          lineData.map((item) => {
            _d1.data.push(item.profitRoe);
            _d2.data.push(item.profitRoa);
            _d3.data.push(item.profitGpm);
            _d4.data.push(item.profitNir);
            _years.push(item.createTime);
          });
        _d1.name = "净资产收益率ROE";
        _d2.name = "总资产报酬率ROA";
        _d3.name = "销售毛利率";
        _d4.name = "销售净利率";
        break;
      case 1:
        arr = [
          finances.incomeQualityCashFlow,
          finances.incomeQualityNetProfit,
          finances.incomeQualityTotalProfit,
          finances.incomeQualityNpl,
        ];
        lineData &&
          lineData.map((item) => {
            _d1.data.push(item.incomeQualityCashFlow);
            _d2.data.push(item.incomeQualityNetProfit);
            _d3.data.push(item.incomeQualityTotalProfit);
            _d4.data.push(item.incomeQualityNpl);
            _years.push(item.createTime);
          });
        _d1.name = "经营活动产生的现金流量净额";
        _d2.name = "经营活动净利润";
        _d3.name = "营业利润总额";
        _d4.name = "扣除非经常损益后的净利润";
        break;
      case 2:
        arr = [
          finances.operateTrc,
          finances.operateIta,
          finances.operateTat,
          finances.operateTra,
        ];
        lineData &&
          lineData.map((item) => {
            _d1.data.push(item.operateTrc);
            _d2.data.push(item.operateIta);
            _d3.data.push(item.operateTat);
            _d4.data.push(item.operateTra);
            _years.push(item.createTime);
          });
        _d1.name = "应收账款周转率";
        _d2.name = "存货周转率";
        _d3.name = "总资产周转率";
        _d4.name = "流动资产周转率";
        break;
      case 3:
        arr = [
          finances.debtQuickRatio,
          finances.debtCurrentLiabilities,
          finances.debtInterestCoverage,
          finances.debtCurrentRatio,
        ];
        lineData &&
          lineData.map((item) => {
            _d1.data.push(item.debtQuickRatio);
            _d2.data.push(item.debtCurrentLiabilities);
            _d3.data.push(item.debtInterestCoverage);
            _d4.data.push(item.debtCurrentRatio);
            _years.push(item.createTime);
          });
        _d1.name = "流动比率";
        _d2.name = "速动比率";
        _d3.name = "流动负债";
        _d4.name = "已获利息倍数";
        break;
      case 4:
        arr = [
          finances.cashIoa,
          finances.cashCsp,
          finances.cashFoa,
          finances.cashCe,
        ];
        lineData &&
          lineData.map((item) => {
            _d1.data.push(item.cashIoa);
            _d2.data.push(item.cashCsp);
            _d3.data.push(item.cashFoa);
            _d4.data.push(item.cashCe);
            _years.push(item.createTime);
          });
        _d1.name = "经营活动净收益";
        _d2.name = "销售商品提供劳务收到的现金";
        _d3.name = "经营活动产生的现金流量净额";
        _d4.name = "资本支出";
        break;
      case 5:
        arr = [
          finances.growthRoa,
          finances.growthTar,
          finances.growthGoi,
          finances.growthGrp,
        ];
        lineData &&
          lineData.map((item) => {
            _d1.data.push(item.growthRoa);
            _d2.data.push(item.growthTar);
            _d3.data.push(item.growthGoi);
            _d4.data.push(item.growthGrp);
            _years.push(item.createTime);
          });
        _d1.name = "净资产同比增长率";
        _d2.name = "资产总计相对年初增长率";
        _d3.name = "营业总收入同比增长率";
        _d4.name = "净利润同比增长率";
        break;
      default:
        break;
    }
    setCutFin(arr);
    setData1(_d1);
    setData2(_d2);
    setData3(_d3);
    setData4(_d4);
    setYears(_years);
  };

  function getScrollTop() {
    var scrollPos;
    if (window.pageYOffset) {
      scrollPos = window.pageYOffset;
    } else if (document.compatMode && document.compatMode != "BackCompat") {
      scrollPos = document.documentElement.scrollTop;
    } else if (document.body) {
      scrollPos = document.body.scrollTop;
    }
    return scrollPos;
  }

  const initPie = (_node, _data, _total, _title) => {
    let data = [];

    if (_title == "核心客户") {
      _data &&
        _data.map((item) => {
          data.push({
            value: item.proportionSale,
            name: item.customerName,
          });
        });
    } else {
      _data &&
        _data.map((item) => {
          data.push({
            value: item.purchaseProportion,
            name: item.supplierName,
          });
        });
    }

    let option = {
      tooltip: {
        trigger: "item",
        formatter: function (params) {
          return `${params.name}  ${params.value}%`;
        },
        textStyle: {
          color: "rgba(0,0,0,0.8)",
        },
        backgroundColor: "rgba(255,255,255,1)",
      },
      legend: {
        // top: "5%",
        left: "center",
        orient: "vertical",

        bottom: "bottom",
      },
      series: [
        {
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "center",
            color: "rgba(0,0,0,0.8)",
            formatter: `{total|${_total}\n}` + `${_title}`,
            rich: {
              total: {
                fontSize: 20,
                fontWeight: "bold", // fontFamily : “微软雅黑”,
                color: "rgba(0,0,0,0.8)",
                lineHeight: 30,
              },
              active: {
                // fontFamily : “微软雅黑”,
                // fontSize: 12,
                // color: "rgba(0,0,0,0.8)",
                // color: "#fff",
                // lineHeight: 30,
              },
            },
          },
          // emphasis: {
          //   label: {
          //     show: false,
          //     fontSize: "20",
          //     fontWeight: "bold",
          //     formatter: function(item){
          //       return `{${item.name} : ${item.value}%}`
          //     },
          //   },
          // },
          labelLine: {
            show: false,
          },
          data: data,
        },
      ],
    };
    var myChart = echarts.init(_node);
    option && myChart.setOption(option);
  };

  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
    setCardPos(window.innerHeight / 2);
    let input_search = document.getElementById("input_search");
    let icon_search = document.getElementById("icon_search");
    input_search.style.display = "none";
    icon_search.style.display = "none";
    document.getElementsByTagName("html")[0].style.overflowX = "hidden";
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
    // chrome
    document.body.scrollTop = 0;
    // firefox
    document.documentElement.scrollTop = 0;
    // safari
    window.pageYOffset = 0;

    let { state } = props.location;
    if (state && state.value) {
      let _obj = JSON.parse(state.value);
      setObj(_obj);
      if (_obj.cpFinancial) {
        setFinances(_obj.cpFinancial);
      }
      if (_obj.financialHistories) {
        setLineData(_obj.financialHistories);
      }
    } else {
      if (JSON.parse(localStorage.getItem("search"))) {
        setObj(JSON.parse(localStorage.getItem("search")));
      } else {
        history.push("/");
      }
    }

    let h1 = $("#pos0").offset().top;
    let h0 = $("#nav").offset().top;
    let card = $("#card").offset().top;

    // 监听滚动条当前定位
    window.onscroll = function () {
      let scrollPos = getScrollTop();
      setScrollPos(scrollPos);
    };

    // 监听鼠标滚轮事件

    window.onmousewheel = document.onmousewheel = (e) => {
      if (e.wheelDelta < 0) {
        throttle(function () {
          setIsUp(true);
        }, 500)();
      } else if (e.wheelDelta > 0) {
        throttle(function () {
          setIsUp(false);
        }, 500)();
      }
    };

    setTargetOffset((h1 - h0).toFixed(2));
    setCardPos(card);

    return () => {
      input_search.style.display = "inline-block";
      icon_search.style.display = "inline-block";
    };
  }, []);

  // 节流函数

  function throttle(fn, interval) {
    // last为上一次触发回调的时间
    var last = 0;
    // 将throttle处理结果当作函数返回
    return function () {
      // 保留调用时的this上下文
      var context = this;
      // 保留调用时传入的参数
      var args = arguments;
      // 记录本次触发回调的时间
      var now = +new Date();
      // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
      if (now - last >= interval) {
        // 如果时间间隔大于我们设定的时间间隔阈值，则执行回调
        last = now;
        fn.apply(context, args);
      }
    };
  }
  // 卡片吸顶
  useEffect(() => {
    if ($("#card").offset().top <= 0) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [cardPos, scrollPos]);

  useEffect(() => {
    if (flag && isUp) {
      console.log("12312m3k12lm312lk");
      throttle(function () {
        console.log("dmsakdsal");
        if (inx < 11) {
          setInx(inx + 1);
        }
        setIsUp(null);
      }, 1000)();
      console.log("难道就卡死难道就卡死");
    }

    if (flag && isUp == false) {
      throttle(function () {
        console.log("网上触发");
        if (inx > 0) {
          setInx(inx - 1);
        }
        setIsUp(null);
      }, 1000)();
    }
  }, [flag, isUp]);

  // 监听索引变化
  useEffect(() => {
    console.log("监听索引变化", inx);
    if (inx == 5) {
      // $(window).scrollTop($("#pos0").offset().top)
      // $(window).scrollTop(500)
    }

    setTargetOffset(
      ($(`#pos${inx}`).offset().top - $("#nav").offset().top).toFixed(2)
    );
    // $("#article")[3].scrollIntoView({block: 'center'});
  }, [inx]);

  useEffect(() => {
    if (obj != null) {
      let node1 = document.getElementById("pie1");
      initPie(
        node1,
        obj.cpCustomers,
        obj.cpCustomers && obj.cpCustomers.length,
        "核心客户"
      );
      let node2 = document.getElementById("pie2");
      initPie(
        node2,
        obj.cpSuppliers,
        obj.cpSuppliers && obj.cpSuppliers.length,
        "核心供应商"
      );

      let bar1 = document.getElementById("bar1");
      initBar(bar1, obj.patents);

      // let bar2 = document.getElementById("bar2");
      // initColumnar(bar2, cutFin, financeInx);
    }
  }, [obj]);

  useEffect(() => {
    let bar2 = document.getElementById("bar2");
    initColumnar(bar2, cutFin, financeInx);

    let line1 = document.getElementById("line1");
    initLine(line1, d1, d2, d3, d4, years);
  }, [financeInx, cutFin]);

  useEffect(() => {
    getParams();
  }, [finances]);

  return (
    <div
      className="result_page"
      style={{
        height: !flag ? "auto" : "150%",
      }}
    >
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
            企业搜索
          </span>
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
            alignItems: "center",
            justifyContent: "center",
            borderLeft: CutLine,
            borderRight: CutLine,
          }}
        >
          <Input
            placeholder="请输入公司名进行查询"
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
          <Button type="primary" onClick={_portrait}>
            搜索
          </Button>
        </section>
      </div>

      <div
        style={{
          boxSizing: "border-box",
          color: "white",
          marginBottom: "-0.5rem",
          border: CutLine,
          borderTop: "none",
          borderBottom: "none",
          margin: "0 0.5rem 0 0.5rem",
          padding: "0.3rem 0",
          height: !flag ? "2.4rem" : 0,
          visibility: !flag ? 1 : 0,
          overflow: "hidden",
        }}
        id="card"
      >
        <CompanyCard data={obj} />
      </div>
      {flag && (
        <div
          style={{
            boxSizing: "border-box",
            color: "white",
            marginBottom: "-0.5rem",
            // border: CutLine,
            borderTop: "none",
            borderBottom: "0.07rem solid rgba(144, 144, 144, 0.1)",
            margin: "0 0.5rem 0 0.5rem",
            padding: "0.15rem 0",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 7777,
            background: "white",
          }}
        >
          <CompanyCard data={obj} />
        </div>
      )}

      <main
        style={{
          boxSizing: "border-box",
          color: "black",
          marginBottom: "-0.5rem",
          border: CutLine,
          borderTop: "none",
          borderBottom: "none",
          margin: "0 0.5rem 0 0.5rem",
          padding: "0 0.3rem",
          borderLeft: !flag ? CutLine : "none",
          // position:!flag ? 'relative' :'fixed',
          // top:!flag ? 0 :'0.25rem'
        }}
      >
        {!flag ? (
          <nav id="nav" style={{ width: "1.5rem" }}>
            <h3>基本信息</h3>
            <p
              id="pos0"
              style={{ color: inx == 0 ? ThemeColor : "rgba(0,0,0,0.8)" }}
            >
              企业简介
            </p>
            <h3>公司战略</h3>
            <p>战略定位</p>
            <p>战略规划</p>
            <h3>公司经营</h3>
            <p>商业模式</p>
            <p>主营业务</p>
            <p>业务构成</p>
            <p>核心客户&amp;供应商</p>
            <h3>核心能力</h3>
            <p>核心竞争力</p>
            <p>领军人物</p>
            <p>核心团队</p>
            <p>核心技术</p>
            <p>专利</p>
            <h3>财务能力</h3>
            <h3>投资方</h3>
            <h3>行业成长</h3>
          </nav>
        ) : (
          <nav
            id="nav"
            style={{
              width: "2.1rem",
              position: "fixed",
              top: "2.2rem",
              bottom: 0,
              left: "0.8rem",
              borderLeft: CutLine,
              color: "rgba(0,0,0,0.8)",
              borderRight: "0.05rem solid rgba(133, 133, 133, 0.1)",
            }}
          >
            <h3>基本信息</h3>
            <p
              id="pos0"
              style={{ color: inx == 0 ? ThemeColor : "rgba(0,0,0,0.8)" }}
            >
              企业简介
            </p>

            <p
              id="pos1"
              style={{ color: inx == 1 ? ThemeColor : "rgba(0,0,0,0.8)" }}
            >
              战略定位
            </p>
            <p
              id="pos2"
              style={{ color: inx == 2 ? ThemeColor : "rgba(0,0,0,0.8)" }}
            >
              战略规划
            </p>
            <h3>公司经营</h3>
            <p
              id="pos3"
              style={{ color: inx == 3 ? ThemeColor : "rgba(0,0,0,0.8)" }}
            >
              商业模式
            </p>
            <p
              id="pos4"
              style={{ color: inx == 4 ? ThemeColor : "rgba(0,0,0,0.8)" }}
            >
              主营业务
            </p>
            <p
              id="pos5"
              style={{ color: inx == 5 ? ThemeColor : "rgba(0,0,0,0.8)" }}
            >
              业务构成
            </p>
            <p
              id="pos6"
              style={{ color: inx == 6 ? ThemeColor : "rgba(0,0,0,0.8)" }}
            >
              核心客户&amp;供应商
            </p>
            <h3>核心能力</h3>
            <p
              id="pos7"
              style={{ color: inx == 7 ? ThemeColor : "rgba(0,0,0,0.8)" }}
            >
              核心竞争力
            </p>
            <p
              id="pos8"
              style={{ color: inx == 8 ? ThemeColor : "rgba(0,0,0,0.8)" }}
            >
              领军人物
            </p>
            <p
              id="pos9"
              style={{ color: inx == 9 ? ThemeColor : "rgba(0,0,0,0.8)" }}
            >
              核心团队
            </p>
            <p
              id="pos10"
              style={{ color: inx == 10 ? ThemeColor : "rgba(0,0,0,0.8)" }}
            >
              核心技术
            </p>
            <p
              id="pos11"
              style={{ color: inx == 11 ? ThemeColor : "rgba(0,0,0,0.8)" }}
            >
              专利
            </p>
            <h3>财务能力</h3>
            <h3>投资方</h3>
            <h3>行业成长</h3>
          </nav>
        )}

        {/* 占位 */}
        {flag && <nav style={{ width: "1.5rem" }}></nav>}

        {!flag && (
          <div className="line" style={{ width: "0.05rem" }}>
            <section
              style={{
                top: targetOffset + "px",
              }}
            >
              <span></span>
            </section>
          </div>
        )}

        {flag && (
          <div
            className="line"
            style={{
              position: "fixed",
              width: "0",
              top: "2.22rem",
              left: "2.65rem",
            }}
          >
            <section
              style={{
                top: targetOffset + "px",
              }}
            >
              <span></span>
            </section>
          </div>
        )}

        <article
          id="article"
          style={{
            marginLeft: !flag ? 0 : "0.5rem",
          }}
        >
          <section
            style={{ color: ThemeColor, marginTop: targetOffset - 6 + "px" }}
          >
            <p className="sub">企业简介：</p>
            <p className="content">{obj.companyProfile}</p>
            <div className="underline"></div>
          </section>

          <section style={{ color: ThemeColor }}>
            <p className="sub">战略定位：</p>
            <p className="content">{obj.corporateStrategy}</p>
          </section>
          <section style={{ color: ThemeColor }}>
            <p className="sub">战略规划：</p>
            <p className="content">{obj.strategicPlanning}</p>
          </section>
          <div className="underline"></div>
          <section style={{ color: ThemeColor }}>
            <p className="sub">商业模式：</p>
            <p className="content">{obj.businessModel}</p>
          </section>
          <section style={{ color: ThemeColor }}>
            <p className="sub">主营业务：</p>
            <p className="content">{obj.mainBusiness}</p>
          </section>
          <section style={{ color: ThemeColor }} className="sub_table">
            <p className="sub">业务构成：</p>
            <table style={{ width: "100%" }}>
              <tr style={{ width: "100%", color: "white", height: "0.4rem" }}>
                <th style={{ width: "0.7rem" }}>序号</th>
                <th>构成</th>
                {/* <th>占比</th> */}
              </tr>
              {obj.compositions &&
                obj.compositions.map((item, index) => {
                  return (
                    <tr style={{ height: "0.4rem" }}>
                      <td>{index + 1}</td>
                      <td>{item.composition}</td>
                      {/* <td>2</td> */}
                    </tr>
                  );
                })}
            </table>
          </section>
          <section style={{ color: ThemeColor, display: "flex" }}>
            <div style={{ flex: 1 }}>
              <p className="sub">核心客户：</p>
              <div
                id="pie1"
                style={{
                  height: "3rem",
                  width: "100%",
                }}
              ></div>
            </div>
            <div style={{ flex: 1 }}>
              <p className="sub">核心供应商：</p>
              <div
                id="pie2"
                style={{
                  height: "3rem",
                  width: "100%",
                }}
              ></div>
            </div>
          </section>
          <div className="underline"></div>

          <section style={{ color: ThemeColor }}>
            <p className="sub">核心竞争力：</p>
            <p className="content">{obj.coreCompetitiveness}</p>
          </section>

          <section style={{ color: ThemeColor }} className="sub_table">
            <p className="sub">领军人物：</p>
            <table style={{ width: "100%" }}>
              <tr style={{ width: "100%", color: "white", height: "0.4rem" }}>
                <th style={{ width: "10%" }}>序号</th>
                <th style={{ width: "15%" }}>姓名</th>
                <th style={{ width: "15%" }}>职位</th>
                <th style={{ width: "60%" }}>描述</th>
              </tr>
              {obj.cpLeaders &&
                obj.cpLeaders.map((item, index) => {
                  return (
                    <tr style={{ height: "0.4rem" }}>
                      <td>{index + 1}</td>
                      <td>{item.leaderName}</td>
                      <td>{item.position}</td>
                      <td>{item.briefIntroduction}</td>
                    </tr>
                  );
                })}
            </table>
          </section>

          <section style={{ color: ThemeColor }} className="sub_table">
            <p className="sub">核心团队：</p>
            <table style={{ width: "100%" }}>
              <tr style={{ width: "100%", color: "white", height: "0.4rem" }}>
                <th style={{ width: "10%" }}>序号</th>
                <th style={{ width: "15%" }}>姓名</th>
                <th style={{ width: "15%" }}>职位</th>
                <th style={{ width: "60%" }}>描述</th>
              </tr>
              {obj.cpTeams &&
                obj.cpTeams.map((item, index) => {
                  return (
                    <tr style={{ height: "0.4rem" }}>
                      <td>{index + 1}</td>
                      <td>{item.memberName}</td>
                      <td>{item.position}</td>
                      <td>{item.briefIntroduction}</td>
                    </tr>
                  );
                })}
            </table>
          </section>

          <section style={{ color: ThemeColor }}>
            <p className="sub">核心技术：</p>
            <p className="content">{obj.coreTechnology}</p>
          </section>

          <section style={{ color: ThemeColor }}>
            <p className="sub">专利：</p>
            <div style={{ display: "flex", height: "auto" }}>
              <div
                style={{
                  width: "25%",
                  marginRight: "5%",
                  height: "auto",
                }}
                id="bar1"
              ></div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <table style={{ width: "100%", marginBottom: "0.1rem" }}>
                  <tr
                    style={{ width: "100%", color: "white", height: "0.4rem" }}
                  >
                    <th style={{ width: "10%" }}>序号</th>
                    <th style={{}}>专利名称</th>
                    <th>专利类型</th>
                    <th>专利状态</th>
                    <th style={{}}>专利优势</th>
                  </tr>
                  {obj.cpPatents &&
                    obj.cpPatents
                      .slice((pageNo - 1) * 5, pageNo * 5)
                      .map((item, index) => {
                        return (
                          <tr style={{ height: "0.4rem" }}>
                            <td>{index + 1 + (pageNo - 1) * 5}</td>
                            <td>{item.patentName}</td>
                            <td>{item.patentType}</td>
                            <td>{item.patentStatus}</td>
                            <td>{item.abstracts}</td>
                          </tr>
                        );
                      })}
                </table>

                <p style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Pagination
                    total={obj.cpPatents ? obj.cpPatents.length : 0}
                    size="small"
                    pageSize={5}
                    onChange={(e) => {
                      setPageNo(e);
                      console.log("答应你西萨的难道就卡死难道就卡死", e);
                    }}
                    // showSizeChanger
                    showQuickJumper
                    // showTotal={(total) => `Total ${total} items`}
                  />
                </p>
              </div>
            </div>
            <div className="underline"></div>
          </section>

          <section style={{ color: ThemeColor }}>
            <p className="sub">财务能力：</p>
            <ul style={{ display: "flex" }}>
              {finTabs.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setFinanceInx(index);
                      getParams(index);
                    }}
                    style={{
                      borderBottom:
                        financeInx == index
                          ? "0.02rem solid " + ThemeColor
                          : "none",
                      padding: "0.05rem 0",
                      marginRight: "0.2rem",
                      cursor: "pointer",
                      color:
                        financeInx == index ? ThemeColor : "rgba(0,0,0,0.8)",
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>

            <div
              style={{
                height: "2.2rem",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div id="bar2" style={{ height: "100%", width: "45%" }}></div>
              <div
                style={{
                  height: "100%",
                  width: "45%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div id="line1" style={{ height: "80%", width: "100%" }}></div>
                <div className="underLine_div">
                  <p>
                    <div>
                      <span style={{ background: colors[0] }}></span>
                      <span>{d1.name}</span>
                    </div>
                    <div>
                      <span style={{ background: colors[1] }}></span>
                      <span>{d2.name}</span>
                    </div>
                  </p>
                  <p>
                    <div>
                      <span style={{ background: colors[2] }}></span>
                      <span>{d3.name}</span>
                    </div>
                    <div>
                      <span style={{ background: colors[3] }}></span>
                      <span>{d4.name}</span>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className="underline"></div>
          </section>

          <section style={{ color: ThemeColor }} className="sub_table">
            <p className="sub">投资方：</p>
            <table style={{ width: "100%" }}>
              <tr style={{ width: "100%", color: "white", height: "0.4rem" }}>
                <th style={{ width: "10%" }}>序号</th>
                <th style={{ width: "40%" }}>投资方名称</th>
                <th style={{ width: "15%" }}>轮次</th>
                <th style={{ width: "35%" }}>投资金额</th>
              </tr>
              {obj.cpInvestors &&
                obj.cpInvestors.map((item, index) => {
                  return (
                    <tr style={{ height: "0.4rem" }}>
                      <td>{index + 1}</td>
                      <td>{item.investorName}</td>
                      <td>{item.investorRounds}</td>
                      <td>
                        {item.investorAmount
                          ? item.investorAmount + "万元"
                          : null}
                      </td>
                    </tr>
                  );
                })}
            </table>
            <div className="underline"></div>
          </section>

          <section style={{ color: ThemeColor }}>
            <p className="sub">行业成长性：</p>
            <p className="content">{obj.industryIntroduction}</p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default withRouter(SearchResult);
