// 双碳咨讯
import React, { useState, useEffect } from "react";
import {
  AliOss,
  ThemeColor,
  CutLine,
  barFontSize,
  barHeight,
  IframeUrl,
} from "../../../lib/const";
import store from "../../../store/index";
import { useHistory } from "react-router-dom";

import "./default.less";

const ConsultSub7 = () => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    store.subscribe(() => {
      setAmount(store.getState().amount);
    });
  }, []);

  const history = useHistory();

  return (
    <div
      className="page_sub7"
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
              //   window.location.href = "/dynamic";
              history.push("/consult");
            }}
          >
            双碳资讯
          </span>
          <span style={{ margin: "0 0.1rem" }}>/</span>
          <span>
            《关于做好2022年企业温室气体排放报告管理相关重点工作的通知》解读
          </span>
        </h3>
      </div>

      <div
        style={{
          color: "black",
          margin: "0 0.5rem 0 0.5rem",
          padding: "0.2rem 0.3rem",
          border: CutLine,
          borderTop: "none",
          textAlign: "left",
        }}
      >
        <p className="col">
          2021年12月29日，中国建筑材料联合会六届理事会二次会议召开，党委书记、会长阎晓峰代表联合会明确提出“要着重组织打造零外购电、零化石能源、零一次资源、零碳排放、零废弃物排放、零员工的建材行业绿色节能、能源安全、资源综合利用、低碳、清洁、智能的‘六零’示范工厂，并作为行业企业长远发展导向”。{" "}
        </p>

        <p className="col" style={{ color: ThemeColor, fontWeight: "bold" }}>
          一、2022年企业温室气体排放报告管理有关重点工作的时间安排
        </p>
        <p className="col" style={{ color: ThemeColor, fontWeight: "bold" }}>
          二、发电行业重点排放单位的重点任务
        </p>
        <p className="col" style={{ fontWeight: "bold" }}>
          （一）哪些发电企业需要开展温室气体排放核算与报告工作？
        </p>
        <p className="col">
          2020和2021年任一年温室气体排放量达2.6万吨二氧化碳当量（综合能源消费量约1万吨标准煤）及以上的发电行业企业或其他经济组织（火力发电、热电联产、生物质能发电），需要开展2021年度温室气体核算和报告工作。符合上述年度排放量要求的自备电厂（不限行业）视同发电行业重点排放单位管理。
        </p>
        <p className="col" style={{ fontWeight: "bold" }}>
          （二）《企业温室气体排放核算方法与报告指南 发电设施》的适用时间
        </p>
        <p className="col">
          2021年度以及2022年1至3月仍按照《企业温室气体排放核算方法与报告指南
          发电设施》（环办气候〔2021〕9号）要求开展温室气体排放核算、编制排放报告。自2022年4月起，发电行业重点排放单位按《企业温室气体排放核算方法与报告指南
          发电设施（2022年修订版）》要求，通过环境信息平台（）更新数据质量控制计划并组织实施。需要注意的是，在核算2021及2022年度碳排放量时，全国电网排放因子由0.6101tCO2/MWh调整为最新的0.5810tCO2/MWh。{" "}
        </p>
        <p className="col" style={{ fontWeight: "bold" }}>
          （三）关于元素碳含量检测的要求
        </p>
        <p className="col">
          发电行业重点排放单位燃煤煤样的采样、制样、化验、基准换算，应按照《企业温室气体排放核算方法与报告指南
          发电设施（2022年修订版）》表1规定的相关标准实施。自2022年4月起，在每月结束后的40日内，发电行业重点排放单位应通过具有中国计量认证（CMA）资质或经过中国合格评定国家认可委员会（CNAS）认可的检测机构/实验室出具元素碳含量检测报告。检测报告应同时包括样品的元素碳含量、低位发热量、氢含量、全硫、水分等参数的检测结果，用于数据真实性的交叉验证。检测报告应加盖CMA资质认定标志或CNAS认可标识章。
        </p>
        <p className="col" style={{ fontWeight: "bold" }}>
          （四）发电行业重点排放单位应开展月度信息化存证
        </p>
        <p className="col">
          根据《碳排放权交易管理办法（试行）》，企业温室气体排放报告所涉数据的原始记录和管理台账应当至少保存5年。为加强数据质量管理，尽早发现问题、尽早解决问题，重点排放单位自2022年4月起，在每月结束后40日内，通过环境信息平台对以下台账和原始记录通过环境信息平台进行存证。月度信息化存证的信息，无需在年度报告中重复填报。{" "}
        </p>
        <p className="col">
          1.
          与碳排放量核算相关的参数数据及其盖章版台账记录扫描文件：包括但不限于发电设施月度燃料消耗量、燃料低位发热量、元素碳含量、购入使用电量等在核算中适用的相关参数数据；
        </p>
        <p className="col">
          2.
          通过具有CMA或CNAS资质的检验检测机构对元素碳含量等参数进行检测的，应同时检测同一样品的元素碳含量、低位发热量、氢含量、全硫、水分等参数，并存证加盖CMA资质认定标志或CNAS认可标识章的检验检测报告扫描文件；
        </p>
        <p className="col">
          3.
          与配额核算与分配相关的生产数据及其盖章版台账记录扫描文件：包括但不限于月度供电量、供热量、机组负荷（出力）系数等相关参数。
        </p>
        <p className="col">
          鼓励地方组织有条件的发电行业重点排放单位探索开展自动化存证，加强样品自动采集与分析技术应用，采取创新技术手段，加强原始数据防篡改管理。
        </p>
        <p className="col" style={{ fontWeight: "bold" }}>
          （五）信息公开要求
        </p>
        <p className="col">
          发电行业重点企业依法开展信息公开，按照《企业温室气体排放核算方法与报告指南
          发电设施(2022年修订版）》（见通知附件2）的信息公开格式要求，在2022年3月31日前通过环境信息平台公布全国碳市场第一个履约周期（2019-2020年度）经核查的温室气体排放相关信息。
        </p>
        <p className="col">
          如相关信息涉及国家秘密和商业秘密，企业应依据《保守国家秘密法》和《反不正当竞争法》等有关法律法规向省级生态环境部门提供证明材料，删减相关涉密信息后公开其余信息。
        </p>
        <p className="col" style={{ color: ThemeColor, fontWeight: "bold" }}>
          三、其他行业企业的重点任务
        </p>
        <p className="col" style={{ fontWeight: "bold" }}>
        （一）其他行业企业的范围
        </p>
        <p className="col">2020和2021年任一年温室气体排放量达2.6万吨二氧化碳当量（综合能源消费量约1万吨标准煤）及以上的建材、钢铁、有色、石化、化工、造纸、民航等行业企业或其他经济组织（行业子类件通知附件1）纳入本通知工作范围，开展温室气体排放报告与核查工作。相比上一年，2022年纳入本通知工作范围的行业子类不包括二氟一氯甲烷、航空旅客运输服务、航空货物运输服务。其中，二氟一氯甲烷副产物三氟甲烷按照《〈关于消耗臭氧层物质的蒙特利尔议定书〉基加利修正案》有关规定管理。为做好国际民航组织有关国际履约工作，中国民航局正在组织开展民航飞行活动碳排放报告与核查工作。为减轻企业负担，生态环境部不再重复组织航空旅客运输服务、航空货物运输服务行业企业开展碳排放报告与核查工作。</p>
        <p className="col" style={{ fontWeight: "bold" }}>
        （二）其他行业企业温室气体排放核算要求
        </p>

        <p className="col">其他行业企业温室气体排放核算方法与报告指南和补充数据表可在环境信息平台下载。需要注意的是，在核算2021及2022年度碳排放量时，全国电网排放因子由0.6101tCO2/MWh调整为最新的0.5810tCO2/MWh。</p>
        <p className="col" style={{ fontWeight: "bold" }}>
        （三）其他行业企业温室气体排放报告完成时限
        </p>
        <p className="col"> 应于2022年9月30日前完成2021年度温室气体排放量核算、排放报告编制，并通过环境信息平台报告温室气体排放情况、有关生产情况、相关支撑材料以及编制温室气体排放报告的技术服务机构信息等。</p>
        <p className="col" style={{ color: ThemeColor, fontWeight: "bold" }}>
        四、核查机构的重点任务
        </p>
        <p className="col" style={{ fontWeight: "bold" }}>
        （一）哪些机构可以从事核查业务？
        </p>
        <p className="col"> 核查技术服务机构未设立资质审批。省级生态环境主管部门根据《碳排放权交易管理办法（试行）》《企业温室气体排放报告核查指南（试行）》等规定，通过政府购买服务等方式确定技术服务机构开展核查有关工作。核查技术服务机构应当对提交核查结果的真实性、完整性、准确性负责。</p>

        <p className="col" style={{ fontWeight: "bold" }}>
        （二）开展核查技术服务
        </p>
        <p className="col">按照《企业温室气体排放核算方法与报告指南 发电设施》（环办气候〔2021〕9号）要求，为省级生态环境部门开展2021年度排放报告的核查提供技术支撑。编制并向省级生态环境部门报告年度公正性自查报告</p>
        <p className="col" style={{ fontWeight: "bold" }}>
        （三）核查信息网上填报要求
        </p>
        <p className="col">省级生态环境主管部门应通过生态环境专网登录全国碳排放数据报送系统管理端，进行核查任务分配和核查工作管理。组织核查技术服务机构通过环境信息平台（全国碳排放数据报送系统核查端）注册账户并进行核查信息填报。</p>
        <p className="col" style={{ fontWeight: "bold" }}>
        （四）核查机构禁止开展哪些活动？
        </p>
        <p className="col">根据《企业温室气体排放报告核查指南（试行）》，核查技术服务机构不应开展以下活动：</p>
        <p className="col">1.向重点排放单位提供碳排放配额计算、咨询或管理服务；</p>
        <p className="col">2.接受任何对核查活动的客观公正性产生影响的资助、合同或其他形式的服务或产品；</p>
        <p className="col"> 3.参与碳资产管理、碳交易的活动，或与从事碳咨询和交易的单位存在资产和管理方面的利益关系，如隶属于同一个上级机构等；</p>
        <p className="col">4.与被核查的重点排放单位存在资产和管理方面的利益关系，如隶属于同一个上级机构等；</p>
        <p className="col">5.为被核查的重点排放单位提供有关温室气体排放和减排、监测、测量、报告和校准的咨询服务；</p>
        <p className="col">6.与被核查的重点排放单位共享管理人员，或者在 3 年之内曾在彼此机构内相互受聘过管理人员；</p>
        <p className="col">7.使用具有利益冲突的核查人员，如 3 年之内与被核查重点排放单位存在雇佣关系或为被核查的重点排放单位提供过温室气体排放或碳交易的咨询服务等；</p>
        <p className="col">8.宣称或暗示如果使用指定的咨询或培训服务，对重点排放单位的排放报告的核查将更为简单、容易等。</p>
        <p className="col" style={{ color: ThemeColor, fontWeight: "bold" }}>
        五、省级生态环境主管部门加强数据质量监管
        </p>
        <p className="col" style={{ fontWeight: "bold" }}>
        （一）确定发电行业重点排放单位名录
        </p>
        <p className="col">根据核查结果，将2020或2021年年度碳排放量达到2.6万吨二氧化碳当量，并拥有符合纳入配额管理标准的机组（见附件3）的发电行业重点排放单位，纳入2022年度全国碳排放权交易市场配额管理的重点排放单位名录。名录及其调整情况，于2022年6月30日前在省级生态环境主管部门官方网站向社会公开，并书面向我部（应对气候变化司）报告，抄送全国碳排放权注册登记机构和全国碳排放权交易机构。</p>
        <p className="col">组织新纳入名录的重点排放单位，于2022年9月30日前分别向全国碳排放权注册登记机构和全国碳排放权交易机构报送全国碳排放权注册登记系统和交易系统开户申请材料。</p>
        <p className="col" style={{ fontWeight: "bold" }}>
        （二）严格落实整改
        </p>
        <p className="col">针对我部在碳排放数据质量监督帮扶专项行动中通报的典型案例，各地方应进一步核实整改。将被通报的重点排放单位列为日常监管的重点对象，对查实的有关违法违规行为依法从严处罚。对于被通报的核查技术服务机构，各地方应审慎委托其承担2021年度核查工作。对于被通报的检验检测机构，各地方应审慎采信其出具的碳排放相关检测报告结果。</p>
        <p className="col" style={{ fontWeight: "bold" }}>
        （三）突出对发电行业重点排放单位开展日常监管
        </p>
        <p className="col">组织设区的市级生态环境部门，按照“双随机、一公开”的方式对名录内的重点排放单位进行日常监管与执法，重点包括名录的准确性，企业数据质量控制计划的有效性和各项措施的落实情况，企业依法开展信息公开的执行情况，投诉举报和上级生态环境主管部门转办交办有关问题线索的查实情况等。</p>
        <p className="col">对核实的问题要督促企业整改，每季度汇总、检查设区的市级生态环境主管部门日常监管工作的执行情况，分别于2022年4月15日、7月15日、10月21日，2023年1月13日前向我部（应对气候变化司）书面报告上一季度的日常监管执行情况。</p>
        <p className="col" style={{ fontWeight: "bold" }}>
        （四）提高对核查技术服务机构的监管力度
        </p>
        <p className="col">为确保核查技术服务机构的公正性、规范性和科学性，可通过核查技术服务机构自查、省级生态环境主管部门抽查等方式，依据《企业温室气体排放报告核查指南（试行）》对核查技术服务机构内部管理情况、公正性管理措施、工作及时性、工作质量和利益冲突等内容进行评估。省级生态环境主管部门对核查技术服务机构的评估结果在省级生态环境主管部门网站、环境信息平台向社会公开。</p>
        <p className="col" style={{ fontWeight: "bold" }}>
        （五）加强对检验检测机构、编制排放报告的技术服务机构的联合监管
        </p>
        <p className="col">生态环境部门会同有关部门对检验检测机构、编制排放报告的技术服务机构依法实施监管。</p>

     

        
        <p className="col3" style={{ paddingBottom: "0.1rem",paddingTop:"0.4rem" }}>
        信息来源：生态环境部
        </p>
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
};

export default ConsultSub7;
