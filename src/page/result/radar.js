import React, { useEffect, useState } from "react";
import * as echarts from "echarts";

const RadarChart = (props) => {
  var option;
  const { data } = props;
  const [score, setScore] = useState(null);

  useEffect(() => {
    setScore(props.data.comprehensiveScore);
  }, [props.data]);

  useEffect(() => {
      if(score){
        const radar_dom = document.getElementById("radar");
        initRadar(radar_dom);
      }
  }, [score]);

  const initRadar = (dom) => {
    option = {
      color: ["#67F9D8", "#FFE434", "#56A3F1", "#FF917C"],
      tooltip: {},
      radar: [
        {
          indicator: [
            { name: "战略管理能力", max: 10 },
            { name: "成长能力", max: 10 },
            { name: "现金能力", max: 10 },
            { name: "债尝能力", max: 10 },
            { name: "运营能力", max: 10 },
            { name: "收益质量", max: 10 },
            { name: "盈利能力", max: 10 },
            { name: "行业成长性", max: 10 },
            { name: "核心竞争力", max: 10 },
            { name: "主营业务能力", max: 10 },
          ],
        //   center: ['75%', '0%'],
          radius: [20,45],
          axisName: {
            color: "rgba(1,1,1,0.8)",
            // backgroundColor: '#666',
            // borderRadius: 3,
            // padding: [3, 5],
          },
          // splitArea: {
          //   show: true,
          // },
          splitArea: {
            areaStyle: {
              color: "transparent",
              shadowColor: "rgba(0, 0, 0, 1)",
              shadowBlur: 30,
              shadowOffsetX: 10,
              shadowOffsetY: 10,
            },
          },
          axisLine: { lineStyle: { color: "#002B7800" } },
          splitLine: {
            lineStyle: {
              width: 1,
              color: "#002B7810",
            },
          },
        },
      ],

      series: [
        {
          type: "radar",
          tooltip: {
            show: true,
            formatter: function (e) {
              return "战略管理能力：" + score.strategicManagementCapability;
            },
          },
          z: 10,
          itemStyle: {
            color: "#9FE080",
          },
          lineStyle: {
            color: "transparent",
          },
          symbol: "none",
          data: [
            {
              name: "hi",
              value: [
                score && score.strategicManagementCapability,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                // score && score.growthAbility,
                // score && score.cashCapacity,
                // score && score.debtRepaymentCapacity,
                // score && score.operationalCapacity,
                // score && score.incomeQuality,
                // score && score.profitability,
                // score && score.industryGrowth,
                // score && score.coreCompetitiveness,
                // score && score.mainBusinessCapacity,
              ],
            },
          ],
        },
        {
          type: "radar",
          tooltip: {
            show: true,
            formatter: function (e) {
              return "成长能力：" + score.growthAbility;
            },
          },
          z: 10,
          itemStyle: {
            color: "#9FE080",
          },
          lineStyle: {
            color: "transparent",
          },
          symbol: "none",
          data: [
            {
              name: "hi",
              value: [
                // score && score.strategicManagementCapability,
                null,
                score && score.growthAbility,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
              ],
              areaStyle: {
                color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                  {
                    color: "rgba(92, 123, 217,0.4)",
                    offset: 0,
                  },
                  {
                    color: "#7ED3F4",
                    offset: 1,
                  },
                ]),
              },
            },
          ],
        },
        {
          type: "radar",
          radarIndex: 0,
          itemStyle: {
            color: "#9FE080",
          },
          lineStyle: {
            color: "transparent",
          },
          symbol: "none",
          tooltip: {
            show: true,
            formatter: function (e) {
              return "现金能力：" + score.cashCapacity;
            },
          },
          z: 10,
          data: [
            {
              name: "hi",
              value: [
                // score && score.strategicManagementCapability,
                null,
                null,
                score && score.cashCapacity,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                // score && score.growthAbility,
                // score && score.cashCapacity,
                // score && score.debtRepaymentCapacity,
                // score && score.operationalCapacity,
                // score && score.incomeQuality,
                // score && score.profitability,
                // score && score.industryGrowth,
                // score && score.coreCompetitiveness,
                // score && score.mainBusinessCapacity,
              ],
              areaStyle: {
                color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                  {
                    color: "rgba(92, 123, 217,0.4)",
                    offset: 0,
                  },
                  {
                    color: "#7ED3F4",
                    offset: 1,
                  },
                ]),
              },
            },
          ],
        },
        {
          type: "radar",
          radarIndex: 0,
          itemStyle: {
            color: "#9FE080",
          },
          lineStyle: {
            color: "transparent",
          },
          symbol: "none",
          tooltip: {
            show: true,
            formatter: function (e) {
              return "债尝能力：" + score.debtRepaymentCapacity;
            },
          },
          z: 10,
          data: [
            {
              name: "hi",
              value: [
                // score && score.strategicManagementCapability,
                null,
                null,
                null,
                score && score.debtRepaymentCapacity,
                null,
                null,
                null,
                null,
                null,
                null,
                // score && score.growthAbility,
                // score && score.cashCapacity,
                // score && score.debtRepaymentCapacity,
                // score && score.operationalCapacity,
                // score && score.incomeQuality,
                // score && score.profitability,
                // score && score.industryGrowth,
                // score && score.coreCompetitiveness,
                // score && score.mainBusinessCapacity,
              ],
              areaStyle: {
                color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                  {
                    color: "rgba(92, 123, 217,0.4)",
                    offset: 0,
                  },
                  {
                    color: "#7ED3F4",
                    offset: 1,
                  },
                ]),
              },
            },
          ],
        },
        {
          type: "radar",
          radarIndex: 0,
          itemStyle: {
            color: "#9FE080",
          },
          lineStyle: {
            color: "transparent",
          },
          symbol: "none",
          tooltip: {
            show: true,
            formatter: function (e) {
              return "运营能力：" + score.operationalCapacity;
            },
          },
          z: 10,
          data: [
            {
              name: "hi",
              value: [
                // score && score.strategicManagementCapability,
                null,
                null,
                null,
                null,
                score && score.operationalCapacity,
                null,
                null,
                null,
                null,
                null,
                // score && score.growthAbility,
                // score && score.cashCapacity,
                // score && score.debtRepaymentCapacity,
                // score && score.operationalCapacity,
                // score && score.incomeQuality,
                // score && score.profitability,
                // score && score.industryGrowth,
                // score && score.coreCompetitiveness,
                // score && score.mainBusinessCapacity,
              ],
              areaStyle: {
                color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                  {
                    color: "rgba(92, 123, 217,0.4)",
                    offset: 0,
                  },
                  {
                    color: "#7ED3F4",
                    offset: 1,
                  },
                ]),
              },
            },
          ],
        },
        {
          type: "radar",
          radarIndex: 0,
          itemStyle: {
            color: "#9FE080",
          },
          lineStyle: {
            color: "transparent",
          },
          symbol: "none",
          tooltip: {
            show: true,
            formatter: function (e) {
              return "收益质量：" + score.incomeQuality;
            },
          },
          z: 10,
          data: [
            {
              name: "hi",
              value: [
                // score && score.strategicManagementCapability,
                null,
                null,
                null,
                null,
                null,
                score && score.incomeQuality,
                null,
                null,
                null,
                null,
                // score && score.growthAbility,
                // score && score.cashCapacity,
                // score && score.debtRepaymentCapacity,
                // score && score.operationalCapacity,
                // score && score.incomeQuality,
                // score && score.profitability,
                // score && score.industryGrowth,
                // score && score.coreCompetitiveness,
                // score && score.mainBusinessCapacity,
              ],
              areaStyle: {
                color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                  {
                    color: "rgba(92, 123, 217,0.4)",
                    offset: 0,
                  },
                  {
                    color: "#7ED3F4",
                    offset: 1,
                  },
                ]),
              },
            },
          ],
        },
        {
          type: "radar",
          radarIndex: 0,
          itemStyle: {
            color: "#9FE080",
          },
          lineStyle: {
            color: "transparent",
          },
          symbol: "none",
          tooltip: {
            show: true,
            formatter: function (e) {
              return "盈利能力：" + score.profitability;
            },
          },
          z: 10,
          data: [
            {
              name: "hi",
              value: [
                // score && score.strategicManagementCapability,
                null,
                null,
                null,
                null,
                null,
                null,
                score && score.profitability,
                null,
                null,
                null,
                // score && score.growthAbility,
                // score && score.cashCapacity,
                // score && score.debtRepaymentCapacity,
                // score && score.operationalCapacity,
                // score && score.incomeQuality,
                // score && score.profitability,
                // score && score.industryGrowth,
                // score && score.coreCompetitiveness,
                // score && score.mainBusinessCapacity,
              ],
            },
          ],
        },
        {
          type: "radar",
          radarIndex: 0,
          itemStyle: {
            color: "#9FE080",
          },
          lineStyle: {
            color: "transparent",
          },
          symbol: "none",
          tooltip: {
            show: true,
            formatter: function (e) {
              return "行业成长性：" + score.industryGrowth;
            },
          },
          z: 10,
          data: [
            {
              name: "hi",
              value: [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                score && score.industryGrowth,
                null,
                null,
                // score && score.industryGrowth,
                // score && score.coreCompetitiveness,
                // score && score.mainBusinessCapacity,
              ],
            },
          ],
        },
        {
          type: "radar",
          radarIndex: 0,
          itemStyle: {
            color: "#9FE080",
          },
          lineStyle: {
            color: "transparent",
          },
          symbol: "none",
          tooltip: {
            show: true,
            formatter: function (e) {
              return "核心竞争力：" + score.coreCompetitiveness;
            },
          },
          z: 10,
          data: [
            {
              value: [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                score && score.coreCompetitiveness,
                null,
                // score && score.industryGrowth,
                // score && score.coreCompetitiveness,
                // score && score.mainBusinessCapacity,
              ],
            },
          ],
        },
        {
          type: "radar",
          radarIndex: 0,
          itemStyle: {
            color: "#9FE080",
          },
          lineStyle: {
            color: "transparent",
          },
          symbol: "none",
          tooltip: {
            show: true,
            formatter: function (e) {
              return "主营业务能力：" + score.mainBusinessCapacity;
            },
          },
          z: 10,
          data: [
            {
              value: [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                score && score.mainBusinessCapacity,
              ],
            },
          ],
        },
        {
          label: {
            show: false,
            /*formatter: [
            '{a|{@unit}}',
          ].join('\n'),*/
            rich: {
              a: {
                fontWeight: "bold",
                fontFamily: "lcd",
                color: "#00C5CC",
                fontSize: 20,
              },
              b: {
                color: "#00C5CC",
                fontSize: 16,
              },
            },
            formatter: function (obj) {
              var value = obj.value;
              var dataTmp = obj.data.dataTmp;
              var arr = dataTmp.filter(function (item) {
                return item.value == value;
              });
              if (arr.length > 0) {
                return "{a|" + arr[0].value + "}{b|" + arr[0].unit + "}";
              }

              //return data.value+"<br>"+a1.seriesName+":"+a1.value;
            },
          },
          name: "hi",
          type: "radar",
          areaStyle: {
            color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
              {
                color: "rgba(92, 123, 217,0.2)",
                offset: 0,
              },
              {
                color: "#7ED3F4",
                offset: 1,
              },
            ]),
          }, //#00C5CC
          // symbol: "circle",
          symbolSize: 0,
          symbol: "none",
          itemStyle: {
            color: "rgba(0,197,204,0)",
            borderColor: "rgba(0,197,204,0)",
            borderWidth: 10,
          },
          lineStyle: { color: "#7ED3F4", width: 2 },
          tooltip: {
            show: false, //原始的就是五个连成一条线的，tooltip不能显示，否则会一次显示五个维度的
          },
          data: [
            {
              value: [
                score && score.strategicManagementCapability,
                score && score.growthAbility,
                score && score.cashCapacity,
                score && score.debtRepaymentCapacity,
                score && score.operationalCapacity,
                score && score.incomeQuality,
                score && score.profitability,
                score && score.industryGrowth,
                score && score.coreCompetitiveness,
                score && score.mainBusinessCapacity,
              ],
              name: "hi",
              dataTmp: [
                // { name: "平均下载速率", value: 4000 },
                // { name: "建立连接时延", value: 2080 },
                // { name: "首屏时长", value: 2080 },
                // { name: "打开成功率", value: 80 },
                // { name: "页面显示成功率", value: 80 },
              ],
            },
          ],
        },
      ],
    };
    var myChart = echarts.init(dom);
    option && myChart.setOption(option);
  };

  return <div id="radar" style={{width:"100%",height:"100%"}}></div>;
};

export default RadarChart;
