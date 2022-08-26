import { withRouter, useHistory } from "react-router-dom";
import {
  saveBaseInfo,
  saveLeader,
  saveCoreCompetence,
  saveOperation,
  savePatent,
  saveStrategic,
  saveIndustry,
  saveInvestor,
  commit,
  fetchAreas,
} from "../../apis/index";
import { ThemeColor, CutLine } from "../../lib/const";

import "./others.less";
import {
  DownOutlined,
  UpOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Checkbox,
  message,
  DatePicker,
} from "antd";
import React, { useState, useReducer, useEffect, useRef } from "react";
import { ButtonCmt } from "../../component/button";
import sPng from "../../static/imgs/save.png";
import {
  industryEnum,
  stageEnum,
  patentStatus,
  patentType,
} from "../../lib/enum"; // 行业枚举
import "moment/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";
import moment from "moment";
const { Option } = Select;

// 专利技术item 用户增删行数
const cpPatentsItem = {
  abstracts: "", //专利优势
  patentName: "", //专利名称
  patentStatus: "", //专利状态
  patentType: "", //专利类型 1-实用新型  2-外观专利  3-发明专利  4-其他
};

// 投资方item
const cpInvestorsItem = {
  investorAmount: "", //投资金额
  investorName: "", //投资者
  investorRounds: "", //投资轮次
};

// 业务标签item
const companyMarksItem = {
  mark: "", //标签
};

// 业务构成
const compositionsItem = {
  composition: "", //客户名
};

// 客户
const cpCustomersItem = {
  customerName: "", //客户名
  proportionSale: "", //客户销售占比
};

//供应商
const cpSuppliersItem = {
  purchaseProportion: "", //购买占比
  supplierName: "", //供应商名称
};

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};

function Others(props) {
  const {
    inx,
    companyId,
    obj,
    updateId,
    setFlags,
    titles,
    flags,
    action,
  } = props;
  const history = useHistory();
  const [form] = Form.useForm();
  const [d1, setD1] = useState([]); //省
  const [d1_id, setD1_id] = useState(null);
  const [d2, setD2] = useState([]); //市
  const [d2_id, setD2_id] = useState(null);
  const [d3, setD3] = useState([]); //区
  const [d3_id, setD3_id] = useState(null);

  const [flag1, setFlag1] = useState(false); // 校验基本信息表是否完成
  const [flag2, setFlag2] = useState(false); //
  const [flag3, setFlag3] = useState(false); //
  const [flag4, setFlag4] = useState(false); //
  const [flag5, setFlag5] = useState(false); //
  const [flag6, setFlag6] = useState(false); //
  const [flag7, setFlag7] = useState(false); //
  const [flag8, setFlag8] = useState(false); //

  const [leaders, setLeaders] = useState(1); // 领军人物
  const [teams, setTeams] = useState(1); // 核心团队
  const [patent, setPatent] = useState(1); // 专利
  const [investor, setInvestor] = useState(1); // 投资方
  const [marks, setMarks] = useState(1); // 业务标签
  const [compositions, setCompositions] = useState(1); // 业务构成
  const [cpCustomers, setcpCustomers] = useState(1); //客户
  const [cpSuppliers, setcpSuppliers] = useState(1); // 供应商

  const [checked, setChecked] = useState(false);
  const [rigsterTime, setRigsterTime] = useState(null);

  const [table1, setTable1] = useState({
    city: null,
    companyName: null,
    companyProfile: null,
    contactNumber: null,
    district: null,
    email: null,
    enterpriseAbbreviation: null,
    enterpriseValuation: null,
    financingScale: null,
    id: null,
    industry: null,
    legalPersonName: null,
    province: null,
    regCapital: null,
    stage: null,
    website: null,
  }); // 基本信息表
  const [table2, setTable2] = useState({
    strategicPositioning: null,
    strategicPlanning: null,
  }); // 公司战略
  const [table3, setTable3] = useState({
    businessModel: "",
    mainBusiness: "",
    companyMarks: [
      companyMarksItem,
      companyMarksItem,
      companyMarksItem,
      companyMarksItem,
      companyMarksItem,
      companyMarksItem,
    ],
    compositions: [compositionsItem],
    cpCustomers: [cpCustomersItem],
    cpSuppliers: [cpSuppliersItem],
  }); // 公司经营
  const [table4, setTable4] = useState({
    coreCompetitiveness: "",
  }); // 核心竞争力
  const [table5, setTable5] = useState({
    cpLeaders: [
      {
        briefIntroduction: "", //领军人物简介
        leaderName: "", //领军人物名称
        position: "", //职务
      },
    ],
    cpTeams: [
      {
        briefIntroduction: "", //简介
        memberName: "", //成员名称
        position: "", //职务
      },
    ],
  }); // 核心团队

  const [table6, setTable6] = useState({
    coreTechnology: "",
    cpPatents: [cpPatentsItem],
  }); // 核心技术
  const [table7, setTable7] = useState({
    cpInvestors: [cpInvestorsItem],
  }); // 投资方
  const [table8, setTable8] = useState({ industryIntroduction: "" }); // 行业成长性

  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
  };

  // 省市区
  const _fetchAreas = async (pid, level) => {
    const res = await fetchAreas(pid);
    if (res && res.code === 2000) {
      if (level == 0) {
        setD1(res.result);
      } else if (level == 1) {
        setD2(res.result);
      } else if (level == 2) {
        setD3(res.result);
      }
    }
  };

  // 校验字段是否全部填写了
  const verifyFull = (data) => {
    let _data = JSON.parse(JSON.stringify(data));
    let _flag = true;
    delete _data.id;
    delete data.id;
    Object.values(_data).map((item) => {
      if (item == null) {
        _flag = false;
      }
      if (item == "null") {
        _flag = false;
      }
      if (item == "" || item == " ") {
        _flag = false;
      }
      // if(typeof(item) == 'undefined'){
      //   _flag = false;
      // }
    });
    for (let key in data) {
      if (typeof data[key] == "undefined") {
        _flag = false;
      }
    }
    return _flag;
  };

  // 保存基本信息
  const save1 = async () => {
    if (!verifyFull(table1)) {
      message.warn("请完善基本信息！");
      setFlag1(false);
      setFlags(false, 1);
      return;
    }

    let _t1 = JSON.parse(JSON.stringify(table1));
    _t1.id = companyId ? companyId : null;
    d1_id && (_t1.province = d1_id);
    d2_id && (_t1.city = d2_id);
    d3_id && (_t1.district = d3_id);
    // delete _t1.regTime;
    if (rigsterTime) {
      _t1.regTime = rigsterTime;
    }
    const res = await saveBaseInfo(_t1);
    if (res && res.code == 2000) {
      message.success("基本信息保存成功！");
      setFlag1(true);
      setFlags(true, 1);
      updateId(res.result);
      localStorage.setItem("companyId", res.result);
    } else {
      message.error("基本信息保存失败！");
      setFlag1(false);
      setFlags(false, 1);
    }
  };

  // 公司战略
  const save2 = async () => {
    if (!verifyFull(table2)) {
      message.warn("请完善公司战略！");
      setFlag2(false);
      setFlags(false, 2);
      return;
    }
    let _t2 = JSON.parse(JSON.stringify(table2));
    _t2.id = companyId ? companyId : null;
    const res = await saveStrategic(_t2);
    if (res && res.code == 2000) {
      message.success("公司战略保存成功！");
      updateId(res.result);
      localStorage.setItem("companyId", res.result);
      setFlag2(true);
      setFlags(true, 2);
    } else {
      message.error("公司战略保存失败！");
      setFlag2(false);
      setFlags(false, 2);
    }
  };

  // 公司经营
  const save3 = async () => {
    if (!verifyFull(table3)) {
      message.warn("请完善公司经营！");
      setFlag3(false);
      setFlags(false, 3);
      return;
    }

    let _t = JSON.parse(JSON.stringify(table3));
    _t.id = companyId ? companyId : null;
    const res = await saveOperation(_t);
    if (res && res.code == 2000) {
      message.success("公司经营保存成功！");
      setFlag3(true);
      setFlags(true, 3);
      updateId(res.result);
      localStorage.setItem("companyId", res.result);
    } else {
      message.error("公司经营保存失败！");
      setFlag3(false);
      setFlags(false, 3);
    }
  };

  // 核心竞争力
  const save4 = async () => {
    if (!verifyFull(table4)) {
      message.warn("请完善核心竞争力！");
      setFlag4(false);
      setFlags(false, 4);
      return;
    }
    let _t = JSON.parse(JSON.stringify(table4));
    _t.id = companyId ? companyId : null;

    const res = await saveCoreCompetence(_t);
    if (res && res.code == 2000) {
      message.success("核心竞争力保存成功！");
      setFlag4(true);
      setFlags(true, 4);
      updateId(res.result);
      localStorage.setItem("companyId", res.result);
    } else {
      message.error("核心竞争力保存失败！");
      setFlag4(false);
      setFlags(false, 4);
    }
  };

  // 核心团队
  const save5 = async () => {
    let _t = JSON.parse(JSON.stringify(table5));
    if (
      _t.cpLeaders[0].briefIntroduction == "" ||
      _t.cpLeaders[0].leaderName == "" ||
      _t.cpLeaders[0].position == ""
    ) {
      message.warn("请完善核心团队！");
      setFlag5(false);
      setFlags(false, 5);
      return;
    }
    if (
      _t.cpTeams[0].briefIntroduction == "" ||
      _t.cpTeams[0].leaderName == "" ||
      _t.cpTeams[0].position == ""
    ) {
      setFlag5(false);
      setFlags(false, 5);
      message.warn("请完善核心团队！");
      return;
    }

    _t.id = companyId ? companyId : null;
    const res = await saveLeader(_t);
    if (res && res.code == 2000) {
      message.success("核心团队保存成功！");
      setFlag5(true);
      setFlags(true, 5);
      updateId(res.result);
      localStorage.setItem("companyId", res.result);
    } else {
      message.error("核心团队保存失败！");
      setFlag5(false);
      setFlags(false, 5);
    }
  };

  // 核心技术
  const save6 = async () => {
    let _t = JSON.parse(JSON.stringify(table6));
    if (
      _t.cpPatents[0].abstracts == "" ||
      _t.cpPatents[0].patentName == "" ||
      _t.cpPatents[0].patentStatus == "" ||
      _t.cpPatents[0].patentType == ""
    ) {
      message.warn("请完善核心技术！");
      setFlag6(false);
      setFlags(false, 6);
      return;
    }
    if (!_t.coreTechnology) {
      message.warn("请完善核心技术！");
      setFlag6(false);
      setFlags(false, 6);
      return;
    }

    _t.id = companyId ? companyId : null;
    const res = await savePatent(_t);
    if (res && res.code == 2000) {
      message.success("核心技术保存成功！");
      setFlag6(true);
      setFlags(true, 6);
      updateId(res.result);
      localStorage.setItem("companyId", res.result);
    } else {
      message.error("核心技术保存失败！");
      setFlag6(false);
      setFlags(false, 6);
    }
  };

  // 投资方
  const save7 = async () => {
    let _t = JSON.parse(JSON.stringify(table7));
    if (
      // _t.cpInvestors[0].investorAmount == "" ||
      // _t.cpInvestors[0].investorAmount == null ||
      _t.cpInvestors[0].investorName == "" ||
      _t.cpInvestors[0].investorName == null ||
      _t.cpInvestors[0].investorRounds == "" ||
      _t.cpInvestors[0].investorRounds == null
    ) {
      message.warn("请完善投资方！");
      setFlag7(false);
      setFlags(false, 7);
      return;
    }
    _t.id = companyId ? companyId : null;
    const res = await saveInvestor(_t);

    if (res && res.code == 2000) {
      message.success("投资方保存成功！");
      setFlag7(true);
      setFlags(true, 7);
      updateId(res.result);
      localStorage.setItem("companyId", res.result);
    } else {
      message.error("投资方保存失败！");
      setFlag7(false);
      setFlags(false, 7);
    }
  };

  // 行业成长性
  const save8 = async () => {
    let _t = JSON.parse(JSON.stringify(table8));
    if (_t.industryIntroduction == "" || _t.industryIntroduction == null) {
      message.warn("请完善行业成长性！");
      setFlag8(false);
      setFlags(false, 8);
      return;
    }
    _t.id = companyId ? companyId : null;
    const res = await saveIndustry(_t);
    if (res && res.code == 2000) {
      message.success("行业成长性保存成功！");
      setFlag8(true);
      setFlags(true, 8);
      updateId(res.result);
      localStorage.setItem("companyId", res.result);
    } else {
      message.error("行业成长性保存失败！");
      setFlag8(false);
      setFlags(false, 8);
    }
  };

  // 保存所有表格
  const saveAll = async () => {
    let _flag = true;
    let _index;

    for (let i = 0; i < props.flags.length; i++) {
      if (!props.flags[i]) {
        _flag = false;
        _index = i;
        break;
      }
    }

    console.log("当前所有表状态", props.flags);
    if (_flag) {
      const res = await commit(companyId);
      if (res && res.code == 2000) {
        message.success("提交成功！");
        setTimeout(() => {
          history.push("/common");
        }, 1500);
      } else {
        message.error("提交失败！");
      }
    } else {
      message.warn(`请将${props.titles[_index]}表填写完成再提交！`);
    }
  };

  // 提交
  const submit = () => {
    switch (inx) {
      case 1:
        save1();
        break;
      case 2:
        save2();
        break;
      case 3:
        save3();
        break;
      case 4:
        save4();
        break;
      case 5:
        save5();
        break;
      case 6:
        save6();
        break;
      case 7:
        save7();
        break;
      case 8:
        save8();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // 省市区
    _fetchAreas(0, 0);
  }, []);

  // 监听是否完成了表单填写 -> 进入下一步
  useEffect(() => {
    if (flag1) {
      props.setInx(2);
      setFlag1(false);
    } else if (flag2) {
      props.setInx(3);
      setFlag2(false);
    } else if (flag3) {
      props.setInx(4);
      setFlag3(false);
    } else if (flag4) {
      props.setInx(5);
      setFlag4(false);
    } else if (flag5) {
      props.setInx(6);
      setFlag5(false);
    } else if (flag6) {
      props.setInx(7);
      setFlag6(false);
    } else if (flag7) {
      props.setInx(8);
      setFlag7(false);
    } else if (flag8) {
      props.setInx(9);
      setFlag8(false);
    }
  }, [flag1, flag2, flag3, flag4, flag5, flag6, flag7, flag8]);

  // 编辑状态初始化数据
  const initDataByEdit = () => {
    let { inx } = props;
    // 基本信息
    if (props.inx == 1) {
      form.setFieldsValue({
        companyName: obj.companyName,
        enterpriseAbbreviation: obj.enterpriseAbbreviation,
        regCapital: obj.regCapital,
        contactNumber: obj.contactNumber,
        email: obj.email,
        financingScale: obj.financingScale,
        enterpriseValuation: obj.enterpriseValuation,
        legalPersonName: obj.legalPersonName,
        website: obj.website,
        companyProfile: obj.companyProfile,
        // industry:
        //   obj.industry,
        // stage: obj.stage,
      });

      let _obj = JSON.parse(JSON.stringify(table1));
      _obj.companyName = obj.companyName || null;
      _obj.enterpriseAbbreviation = obj.enterpriseAbbreviation || null;
      _obj.regCapital = obj.regCapital || null;
      _obj.contactNumber = obj.contactNumber || null;
      _obj.email = obj.email || null;
      _obj.financingScale = obj.financingScale || null;
      _obj.enterpriseValuation = obj.enterpriseValuation || null;
      _obj.legalPersonName = obj.legalPersonName || null;
      _obj.website = obj.website || null;
      _obj.companyProfile = obj.companyProfile || null;
      _obj.regTime = obj.regTime || null;
      _obj.id = companyId ? companyId : null;
      _obj.stage = obj.stage || null;
      _obj.industry = obj.industry || null;
      _obj.province = obj.province || null;
      _obj.city = obj.city || null;
      _obj.district = obj.district || null;
      setTable1(_obj);
    } else if (props.inx == 2) {
      // 公司战略
      form.setFieldsValue({
        strategicPositioning: obj.strategicPositioning,
        strategicPlanning: obj.strategicPlanning,
      });
      let _obj = JSON.parse(JSON.stringify(table2));
      _obj.strategicPositioning = obj.strategicPositioning;
      _obj.strategicPlanning = obj.strategicPlanning;
      setTable2(_obj);
    } else if (props.inx == 3) {
      // 公司经营
      form.setFieldsValue({
        businessModel: obj.businessModel, //商业模式
        mainBusiness: obj.mainBusiness, //主营业务
      });
      let _obj = JSON.parse(JSON.stringify(table3));
      _obj.mainBusiness = obj.mainBusiness;
      _obj.businessModel = obj.businessModel;
      if (obj.companyMarks && obj.companyMarks.length > 0) {
        setMarks(Math.ceil(obj.companyMarks.length / 6));
        _obj.companyMarks = obj.companyMarks;
      }
      if (obj.cpCustomers && obj.cpCustomers.length > 0) {
        setcpCustomers(obj.cpCustomers.length);
        _obj.cpCustomers = obj.cpCustomers;
      }
      if (obj.compositions && obj.compositions.length > 0) {
        setCompositions(obj.compositions.length);
        _obj.compositions = obj.compositions;
      }

      if (obj.cpSuppliers && obj.cpSuppliers.length > 0) {
        setcpSuppliers(obj.cpSuppliers.length);
        _obj.cpSuppliers = obj.cpSuppliers;
      }

      setTable3(_obj);
    } else if (inx == 4) {
      // 核心竞争力
      form.setFieldsValue({
        coreCompetitiveness: obj.coreCompetitiveness,
      });
      let _obj = JSON.parse(JSON.stringify(table4));
      _obj.coreCompetitiveness = obj.coreCompetitiveness;
      setTable4(_obj);
    } else if (inx == 5) {
      // 领军人物
      let _obj = JSON.parse(JSON.stringify(table5));
      if (obj.cpLeaders && obj.cpLeaders.length > 0) {
        setLeaders(obj.cpLeaders.length);
        _obj.cpLeaders = obj.cpLeaders;
      }
      if (obj.cpTeams && obj.cpTeams.length > 0) {
        setTeams(obj.cpTeams.length);
        _obj.cpTeams = obj.cpTeams;
      }
      setTable5(_obj);
    } else if (inx == 6) {
      // 核心技术
      let _obj = JSON.parse(JSON.stringify(table6));
      _obj.coreTechnology = obj.coreTechnology;
      if (obj.cpPatents && obj.cpPatents.length > 0) {
        _obj.cpPatents = obj.cpPatents;
        setPatent(obj.cpPatents.length);
      }
      setTable6(_obj);
    } else if (inx == 7) {
      // 有数据
      if (obj.cpInvestors && obj.cpInvestors.length > 0) {
        setInvestor(obj.cpInvestors.length);
        setTable7({ cpInvestors: obj.cpInvestors });
      }
    } else if (inx == 8) {
      // 行业成长性
      form.setFieldsValue({
        industryIntroduction: obj.industryIntroduction,
      });
      let _obj = JSON.parse(JSON.stringify(table8));
      _obj.industryIntroduction = obj.industryIntroduction;
      setTable8(_obj);
    }
  };

  useEffect(() => {
    // console.log("编辑状态接收数据", obj);
    initDataByEdit();
  }, [obj]);

  useEffect(() => {
    initDataByEdit();
  }, [props.inx]);

  const initRef = useRef();

  return (
    <div className="others_page">
      <div>
        {/* 1 - 基本信息 */}
        {props.inx == 1 && (
          <Form
            ref={initRef}
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
            {...layout}
            // onChange={(e) => {
            //   let obj = form.getFieldsValue();
            //   obj.id = companyId ? companyId : null;
            //   setTable1(obj);
            //   console.log("当前大撒把哈就", e);
            // }}
            onValuesChange={(changedValues, allValues) => {
              console.log("表11", table1);
              let _obj = JSON.parse(JSON.stringify(table1));
              Object.assign(_obj, changedValues);
              setTable1(_obj);
            }}
          >
            <Row gutter={24}>
              <Col span={10}>
                <Form.Item label={"企业名称"} name="companyName">
                  <Input placeholder="请输入企业名称" />
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item label={"企业简介"} name="enterpriseAbbreviation">
                  <Input placeholder="请输入企业简介" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={10}>
                <Form.Item label={"注册地"}>
                  <section
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Select
                      style={{ flex: 1, marginRight: "0.1rem" }}
                      defaultValue={() => {
                        if (obj.province) {
                          return {
                            value: obj.province || "",
                            label: obj.provinceName || "",
                          };
                        }
                      }}
                      placeholder="请选择"
                      labelInValue
                      onChange={(e) => {
                        _fetchAreas(e.value, 1);
                        setD1_id(e.value);
                        let _obj = JSON.parse(JSON.stringify(table1));
                        _obj.province = e.value;
                        setTable1(_obj);
                      }}
                    >
                      {d1 &&
                        d1.map((item, index) => {
                          return (
                            <Option value={item.id} key={index}>
                              {item.name}
                            </Option>
                          );
                        })}
                    </Select>
                    <Select
                      defaultValue={() => {
                        if (obj.city) {
                          return {
                            value: obj.city || "",
                            label: obj.cityName || "",
                          };
                        }
                      }}
                      placeholder="请选择"
                      labelInValue
                      style={{ flex: 1, marginRight: "0.1rem" }}
                      onChange={(e) => {
                        _fetchAreas(e.value, 2);
                        setD2_id(e.value);
                        let _obj = JSON.parse(JSON.stringify(table1));
                        _obj.city = e.value;
                        setTable1(_obj);
                      }}
                    >
                      {d2 &&
                        d2.map((item, index) => {
                          return (
                            <Option value={item.id} key={index}>
                              {item.name}
                            </Option>
                          );
                        })}
                    </Select>
                    <Select
                      defaultValue={() => {
                        if (obj.district) {
                          return {
                            value: obj.district || "",
                            label: obj.districtName || "",
                          };
                        }
                      }}
                      style={{ flex: 1, marginRight: "0rem" }}
                      onChange={(e) => {
                        setD3_id(e.value);
                        let _obj = JSON.parse(JSON.stringify(table1));
                        _obj.district = e.value;
                        setTable1(_obj);
                      }}
                      placeholder="请选择"
                      labelInValue
                    >
                      {d3 &&
                        d3.map((item, index) => {
                          return (
                            <Option value={item.id} key={index}>
                              {item.name}
                            </Option>
                          );
                        })}
                    </Select>
                    {/* <Form.Item
                      name="city"
                      style={{ flex: 1, marginRight: "0.1rem" }}
                    >
                      <Select defaultValue="2">
                        <Option value="1">1</Option>
                        <Option value="2">1</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item
                      name="district"
                      style={{ flex: 1, marginRight: "0rem" }}
                    >
                      <Select defaultValue="2">
                        <Option value="1">1</Option>
                        <Option value="2">1</Option>
                      </Select>
                    </Form.Item> */}
                  </section>
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item label={"注册资金"} name="regCapital">
                  <Input placeholder="请输入注册资金，默认单位为万" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={10}>
                <Form.Item label={"联系电话"} name="contactNumber">
                  <Input placeholder="请输入联系电话" />
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item label={"注册时间"} name="regTime">
                  <DatePicker
                    style={{ width: "100%" }}
                    onChange={(moment, str) => {
                      setRigsterTime(str);
                    }}
                    defaultValue={obj.regTime && moment(obj.regTime)}
                    // picker="day"
                    locale={locale}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={10}>
                <Form.Item label={"融资阶段"} name="stage">
                  <Select
                    defaultValue={() => {
                      if (obj.stage) {
                        return stageEnum[obj.stage - 1].name;
                      }
                    }}
                    placeholder="请选择融资阶段"
                    onChange={(e) => {
                      let _obj = JSON.parse(JSON.stringify(table1));
                      _obj.stage = e;
                      setTable1(_obj);
                    }}
                  >
                    {stageEnum.map((item) => {
                      return (
                        <Option value={item.value} key={item.value}>
                          {item.name}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item label={"联系邮箱"} name="email">
                  <Input placeholder="请输入联系邮箱" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={10}>
                <Form.Item label={"融资金额"} name="financingScale">
                  <Input placeholder="请输入融资金额，默认单位为万" />
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item label={"投前估值"} name="enterpriseValuation">
                  <Input placeholder="请输入投前估值，默认单位为万" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={10}>
                <Form.Item label={"所属行业"} name="industry">
                  <Select
                    defaultValue={() => {
                      if (obj.industry != null) {
                        return industryEnum[obj.industry].name;
                      }
                    }}
                    placeholder="请选择所属行业"
                    onChange={(e) => {
                      let _obj = JSON.parse(JSON.stringify(table1));
                      _obj.industry = e;
                      setTable1(_obj);
                    }}
                  >
                    {industryEnum.map((item, index) => {
                      return <Option value={item.value}>{item.name}</Option>;
                    })}
                  </Select>
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item label={"法定代表人"} name="legalPersonName">
                  <Input placeholder="请输入法定代表人" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={10}>
                <Form.Item label={"官网"} name="website">
                  <Input placeholder="请输入官网" />
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item label={"公司简介"} name="companyProfile">
                  <Input.TextArea
                    showCount
                    maxLength={300}
                    placeholder="请输入企业简介，不超过300个字"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}
        {/* 2 - 公司战略 */}
        {props.inx == 2 && (
          <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
            // onChange={(e) => {
            //   let obj = form.getFieldsValue();
            //   obj.id = companyId ? companyId : null;
            //   setTable2(obj);
            // }}
            onValuesChange={(changedValues, allValues) => {
              console.log("biao22222", table2);
              let _obj = JSON.parse(JSON.stringify(table2));
              Object.assign(_obj, changedValues);
              setTable2(_obj);
            }}
            {...layout}
          >
            <Row gutter={24}>
              <Col span={10}>
                <Form.Item label={"战略定位"} name="strategicPositioning">
                  <Input.TextArea
                    showCount
                    maxLength={300}
                    placeholder="请输入战略定位，不超过300个字"
                  />
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item label={"战略规划"} name="strategicPlanning">
                  <Input.TextArea
                    showCount
                    maxLength={300}
                    placeholder="请输入战略规划，不超过300个字"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}
        {/* 3 - 公司经营 */}
        {props.inx == 3 && (
          <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
            onChange={(e) => {
              let obj = form.getFieldsValue();
              // console.log("监听下书", obj);
              // obj.id = companyId ? companyId : null;
              // setTable3(obj);
            }}
          >
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item label={"商业模式"} name="businessModel">
                  <Input.TextArea
                    showCount
                    maxLength={300}
                    style={{ width: "100%" }}
                    placeholder="请输入商业模式，不超过300个字"
                    onChange={(e) => {
                      let _obj = JSON.parse(JSON.stringify(table3));
                      _obj.businessModel = e.target.value;
                      setTable3(_obj);
                    }}
                  />
                </Form.Item>
              </Col>

              <Col span={12} offset={0}>
                <Form.Item label={"主营业务"} name="mainBusiness">
                  <Input.TextArea
                    showCount
                    maxLength={300}
                    style={{ width: "100%" }}
                    placeholder="请输入主营业务，不超过300个字"
                    onChange={(e) => {
                      let _obj = JSON.parse(JSON.stringify(table3));
                      _obj.mainBusiness = e.target.value;
                      setTable3(_obj);
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item label={"业务标签"}>
                  {new Array(marks).fill("").map((item, index) => {
                    return (
                      <section
                        style={{
                          display: "flex",
                          marginTop: index != 0 && "0.2rem",
                          alignItems: "center",
                        }}
                        key={index}
                      >
                        <span>&nbsp;</span> <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <Input
                          placeholder="请输入"
                          style={{ marginRight: "0.1rem" }}
                          onChange={(e) => {
                            let _obj = JSON.parse(JSON.stringify(table3));
                            _obj.companyMarks &&
                              _obj.companyMarks[index * 6] &&
                              (_obj.companyMarks[index * 6].mark =
                                e.target.value);
                            setTable3(_obj);
                          }}
                          defaultValue={
                            (obj.companyMarks &&
                              obj.companyMarks[index * 6] &&
                              obj.companyMarks[index * 6].mark) ||
                            ""
                          }
                        />
                        <Input
                          placeholder="请输入"
                          style={{ marginRight: "0.1rem" }}
                          onChange={(e) => {
                            let _obj = JSON.parse(JSON.stringify(table3));
                            _obj.companyMarks &&
                              _obj.companyMarks[index * 6 + 1] &&
                              (_obj.companyMarks[index * 6 + 1].mark =
                                e.target.value);
                            setTable3(_obj);
                          }}
                          defaultValue={
                            (obj.companyMarks &&
                              obj.companyMarks[index * 6 + 1] &&
                              obj.companyMarks[index * 6 + 1].mark) ||
                            ""
                          }
                        />
                        <Input
                          placeholder="请输入"
                          style={{ marginRight: "0.1rem" }}
                          onChange={(e) => {
                            let _obj = JSON.parse(JSON.stringify(table3));
                            _obj.companyMarks[index * 6 + 2].mark =
                              e.target.value;
                            setTable3(_obj);
                          }}
                          defaultValue={
                            (obj.companyMarks &&
                              obj.companyMarks[index * 6 + 2] &&
                              obj.companyMarks[index * 6 + 2].mark) ||
                            ""
                          }
                        />
                        <Input
                          placeholder="请输入"
                          style={{ marginRight: "0.1rem" }}
                          onChange={(e) => {
                            let _obj = JSON.parse(JSON.stringify(table3));
                            _obj.companyMarks[index * 6 + 3].mark =
                              e.target.value;
                            setTable3(_obj);
                          }}
                          defaultValue={
                            (obj.companyMarks &&
                              obj.companyMarks[index * 6 + 3] &&
                              obj.companyMarks[index * 6 + 3].mark) ||
                            ""
                          }
                        />
                        <Input
                          placeholder="请输入"
                          style={{ marginRight: "0.1rem" }}
                          onChange={(e) => {
                            let _obj = JSON.parse(JSON.stringify(table3));
                            _obj.companyMarks[index * 6 + 4].mark =
                              e.target.value;
                            setTable3(_obj);
                          }}
                          defaultValue={
                            (obj.companyMarks &&
                              obj.companyMarks[index * 6 + 4] &&
                              obj.companyMarks[index * 6 + 4].mark) ||
                            ""
                          }
                        />
                        <Input
                          placeholder="请输入"
                          style={{ marginRight: "0.1rem" }}
                          onChange={(e) => {
                            let _obj = JSON.parse(JSON.stringify(table3));
                            _obj.companyMarks[index * 6 + 5].mark =
                              e.target.value;
                            setTable3(_obj);
                          }}
                          defaultValue={
                            (obj.companyMarks &&
                              obj.companyMarks[index * 6 + 5] &&
                              obj.companyMarks[index * 6 + 5].mark) ||
                            ""
                          }
                        />
                        {index === 0 ? (
                          <PlusCircleOutlined
                            onClick={() => {
                              setMarks(marks + 1);
                              let _obj = JSON.parse(JSON.stringify(table3));
                              _obj.companyMarks.push(companyMarksItem);
                              _obj.companyMarks.push(companyMarksItem);
                              _obj.companyMarks.push(companyMarksItem);
                              _obj.companyMarks.push(companyMarksItem);
                              _obj.companyMarks.push(companyMarksItem);
                              _obj.companyMarks.push(companyMarksItem);
                              setTable3(_obj);
                            }}
                            style={{
                              height: "100%",
                              fontSize: "0.2rem",
                            }}
                          />
                        ) : (
                          <MinusCircleOutlined
                            onClick={() => {
                              setMarks(marks - 1);
                              let _obj = JSON.parse(JSON.stringify(table3));
                              _obj.companyMarks.splice(index * 6, 6);
                              setTable3(_obj);
                            }}
                            style={{
                              height: "100%",
                              fontSize: "0.2rem",
                            }}
                          />
                        )}
                      </section>
                    );
                  })}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={24}>
                <Form.Item label={"业务构成"}>
                  {new Array(compositions).fill("").map((item, index) => {
                    return (
                      <section
                        style={{
                          display: "flex",
                          marginTop: index != 0 && "0.2rem",
                          alignItems: "center",
                        }}
                        key={index}
                      >
                        <span>&nbsp;</span> <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <Input
                          placeholder="请输入"
                          style={{ marginRight: "0.1rem" }}
                          onChange={(e) => {
                            let _obj = JSON.parse(JSON.stringify(table3));
                            _obj.compositions[index] &&
                              (_obj.compositions[index].composition =
                                e.target.value);
                            setTable3(_obj);
                          }}
                          defaultValue={
                            (obj.compositions &&
                              obj.compositions[index] &&
                              obj.compositions[index].composition) ||
                            ""
                          }
                        />
                        {index === 0 ? (
                          <PlusCircleOutlined
                            onClick={() => {
                              setCompositions(compositions + 1);
                              let _obj = JSON.parse(JSON.stringify(table3));
                              _obj.compositions.push(compositionsItem);
                              setTable3(_obj);
                            }}
                            style={{
                              height: "100%",
                              fontSize: "0.2rem",
                            }}
                          />
                        ) : (
                          <MinusCircleOutlined
                            onClick={() => {
                              setCompositions(compositions - 1);
                              let _obj = JSON.parse(JSON.stringify(table3));
                              _obj.compositions.splice(index, 1);
                              setTable3(_obj);
                            }}
                            style={{
                              height: "100%",
                              fontSize: "0.2rem",
                            }}
                          />
                        )}
                      </section>
                    );
                  })}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={24}>
                <Form.Item label={"核心客户"}>
                  {new Array(cpCustomers).fill("").map((item, index) => {
                    return (
                      <section
                        style={{
                          display: "flex",
                          marginTop: index != 0 && "0.2rem",
                          alignItems: "center",
                        }}
                        key={index}
                      >
                        <span>&nbsp;</span> <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <Input
                          placeholder="请输入客户名称"
                          style={{ marginRight: "0.1rem" }}
                          onChange={(e) => {
                            let _obj = JSON.parse(JSON.stringify(table3));
                            _obj.cpCustomers[index] &&
                              (_obj.cpCustomers[index].customerName =
                                e.target.value);
                            setTable3(_obj);
                          }}
                          defaultValue={
                            (obj.cpCustomers &&
                              obj.cpCustomers[index] &&
                              obj.cpCustomers[index].customerName) ||
                            ""
                          }
                        />
                        <Input
                          placeholder="请输入占比"
                          style={{ marginRight: "0.1rem" }}
                          onChange={(e) => {
                            let _obj = JSON.parse(JSON.stringify(table3));
                            _obj.cpCustomers[index] &&
                              (_obj.cpCustomers[index].proportionSale =
                                e.target.value);
                            setTable3(_obj);
                          }}
                          defaultValue={
                            (obj.cpCustomers &&
                              obj.cpCustomers[index] &&
                              obj.cpCustomers[index].proportionSale) ||
                            ""
                          }
                        />
                        {index === 0 ? (
                          <PlusCircleOutlined
                            onClick={() => {
                              setcpCustomers(cpCustomers + 1);
                              let _obj = JSON.parse(JSON.stringify(table3));
                              _obj.cpCustomers.push(cpCustomersItem);
                              setTable3(_obj);
                            }}
                            style={{
                              height: "100%",
                              fontSize: "0.2rem",
                            }}
                          />
                        ) : (
                          <MinusCircleOutlined
                            onClick={() => {
                              setcpCustomers(cpCustomers - 1);
                              let _obj = JSON.parse(JSON.stringify(table3));
                              _obj.cpCustomers.splice(index, 1);
                              setTable3(_obj);
                            }}
                            style={{
                              height: "100%",
                              fontSize: "0.2rem",
                            }}
                          />
                        )}
                      </section>
                    );
                  })}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={24}>
                <Form.Item label={"核心供应商"}>
                  {new Array(cpSuppliers).fill("").map((item, index) => {
                    return (
                      <section
                        style={{
                          display: "flex",
                          marginTop: index != 0 && "0.2rem",
                          alignItems: "center",
                        }}
                        key={index}
                      >
                        <Input
                          placeholder="请输入供应商名称"
                          style={{ marginRight: "0.1rem" }}
                          onChange={(e) => {
                            let _obj = JSON.parse(JSON.stringify(table3));
                            _obj.cpSuppliers[index] &&
                              (_obj.cpSuppliers[index].supplierName =
                                e.target.value);
                            setTable3(_obj);
                          }}
                          defaultValue={
                            (obj.cpSuppliers &&
                              obj.cpSuppliers[index] &&
                              obj.cpSuppliers[index].supplierName) ||
                            ""
                          }
                        />
                        <Input
                          placeholder="请输入占比"
                          style={{ marginRight: "0.1rem" }}
                          onChange={(e) => {
                            let _obj = JSON.parse(JSON.stringify(table3));
                            _obj.cpSuppliers[index] &&
                              (_obj.cpSuppliers[index].purchaseProportion =
                                e.target.value);
                            setTable3(_obj);
                          }}
                          defaultValue={
                            (obj.cpSuppliers &&
                              obj.cpSuppliers[index] &&
                              obj.cpSuppliers[index].purchaseProportion) ||
                            ""
                          }
                        />
                        {index === 0 ? (
                          <PlusCircleOutlined
                            onClick={() => {
                              setcpSuppliers(cpSuppliers + 1);
                              let _obj = JSON.parse(JSON.stringify(table3));
                              _obj.cpSuppliers.push(cpSuppliersItem);
                              setTable3(_obj);
                            }}
                            style={{
                              height: "100%",
                              fontSize: "0.2rem",
                            }}
                          />
                        ) : (
                          <MinusCircleOutlined
                            onClick={() => {
                              setcpSuppliers(cpSuppliers - 1);
                              let _obj = JSON.parse(JSON.stringify(table3));
                              _obj.cpSuppliers.splice(index, 1);
                              setTable3(_obj);
                            }}
                            style={{
                              height: "100%",
                              fontSize: "0.2rem",
                            }}
                          />
                        )}
                      </section>
                    );
                  })}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}
        {/* 4 - 核心竞争力 */}
        {props.inx == 4 && (
          <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
            onChange={(e) => {
              let obj = form.getFieldsValue();
              obj.id = companyId ? companyId : null;
              setTable4(obj);
            }}
            // {...layout}
          >
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item label={"核心竞争力"} name="coreCompetitiveness">
                  <Input.TextArea
                    showCount
                    maxLength={300}
                    placeholder="包含技术、市场、构成、成本、人才、资源、品牌、研发、其他。最多300个字符。"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}
        {/* 5 - 核心团队 */}
        {props.inx == 5 && (
          <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
            // {...layout}
            labelCol={{ span: 4 }}
            onChange={(e) => {
              // let obj = form.getFieldsValue();
              // obj.id = companyId ? companyId : null;
              // setTable5(obj);
            }}
          >
            <Row gutter={24}>
              {new Array(leaders).fill("").map((item, index) => {
                return (
                  <Col span={24}>
                    <Form.Item
                      label={
                        index == 0
                          ? "领军人物（最多五个）"
                          : "领军人物" + (index + 1)
                      }
                      rules={[
                        {
                          required: true,
                          message: "Input something!",
                        },
                      ]}
                    >
                      <section
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {/* {index != 0 && <span style={{opacity:0}}>领军人物（最多五个）: &nbsp;</span>} */}

                        <Input
                          onChange={(e) => {
                            let _obj = JSON.parse(JSON.stringify(table5));
                            _obj.cpLeaders[index] &&
                              (_obj.cpLeaders[index].leaderName =
                                e.target.value);
                            setTable5(_obj);
                          }}
                          placeholder="请输入姓名"
                          style={{ marginRight: "0.1rem", flex: 1 }}
                          defaultValue={
                            obj.cpLeaders &&
                            obj.cpLeaders[index] &&
                            obj.cpLeaders[index].leaderName
                          }
                        />
                        <Input
                          placeholder="请输入职务"
                          style={{ marginRight: "0.1rem", flex: 1 }}
                          onChange={(e) => {
                            let _obj = JSON.parse(JSON.stringify(table5));
                            _obj.cpLeaders &&
                              (_obj.cpLeaders[index].position = e.target.value);
                            setTable5(_obj);
                          }}
                          defaultValue={
                            obj.cpLeaders &&
                            obj.cpLeaders[index] &&
                            obj.cpLeaders[index].position
                          }
                        />
                        <Input
                          placeholder="请输入领军人物描述"
                          style={{ marginRight: "0.1rem", flex: 4 }}
                          onChange={(e) => {
                            let _obj = JSON.parse(JSON.stringify(table5));
                            _obj.cpLeaders &&
                              (_obj.cpLeaders[index].briefIntroduction =
                                e.target.value);
                            setTable5(_obj);
                          }}
                          defaultValue={
                            obj.cpLeaders &&
                            obj.cpLeaders[index] &&
                            obj.cpLeaders[index].briefIntroduction
                          }
                        />
                        {index === 0 ? (
                          <PlusCircleOutlined
                            onClick={() => {
                              if (leaders < 5) {
                                setLeaders(leaders + 1);
                                let _obj = JSON.parse(JSON.stringify(table5));
                                _obj.cpLeaders.push({
                                  briefIntroduction: "", //领军人物简介
                                  leaderName: "", //领军人物名称
                                  position: "", //职务
                                });
                                setTable5(_obj);
                              }
                            }}
                            style={{
                              height: "100%",
                              fontSize: "0.2rem",
                            }}
                          />
                        ) : (
                          <MinusCircleOutlined
                            onClick={() => {
                              setLeaders(leaders - 1);
                              let _obj = JSON.parse(JSON.stringify(table5));
                              _obj.cpLeaders.splice(index, 1);
                              setTable5(_obj);
                            }}
                            style={{
                              height: "100%",
                              fontSize: "0.2rem",
                            }}
                          />
                        )}
                      </section>
                    </Form.Item>
                  </Col>
                );
              })}
            </Row>
            <Row gutter={24}>
              {new Array(teams).fill("").map((item, index) => {
                return (
                  <Col span={24}>
                    <Form.Item
                      label={
                        index == 0
                          ? "核心团队（最多十个）"
                          : "核心团队" + (index + 1)
                      }
                      rules={[
                        {
                          required: true,
                          message: "Input something!",
                        },
                      ]}
                    >
                      <section
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {/* {index != 0 && <span style={{opacity:0}}>领军人物（最多五个）: &nbsp;</span>} */}
                        <Input
                          placeholder="请输入姓名"
                          style={{ marginRight: "0.1rem", flex: 1 }}
                          onChange={(e) => {
                            let _obj = JSON.parse(JSON.stringify(table5));
                            _obj.cpTeams[index] &&
                              (_obj.cpTeams[index].memberName = e.target.value);
                            setTable5(_obj);
                          }}
                          defaultValue={
                            obj.cpTeams &&
                            obj.cpTeams[index] &&
                            obj.cpTeams[index].memberName
                          }
                        />
                        <Input
                          placeholder="请输入职务"
                          style={{ marginRight: "0.1rem", flex: 1 }}
                          onChange={(e) => {
                            let _obj = JSON.parse(JSON.stringify(table5));
                            _obj.cpTeams[index] &&
                              (_obj.cpTeams[index].position = e.target.value);
                            setTable5(_obj);
                          }}
                          defaultValue={
                            obj.cpTeams &&
                            obj.cpTeams[index] &&
                            obj.cpTeams[index].position
                          }
                        />
                        <Input
                          placeholder="请输入描述"
                          style={{ marginRight: "0.1rem", flex: 4 }}
                          onChange={(e) => {
                            let _obj = JSON.parse(JSON.stringify(table5));
                            _obj.cpTeams[index] &&
                              (_obj.cpTeams[index].briefIntroduction =
                                e.target.value);
                            setTable5(_obj);
                          }}
                          defaultValue={
                            obj.cpTeams &&
                            obj.cpTeams[index] &&
                            obj.cpTeams[index].briefIntroduction
                          }
                        />
                        {index === 0 ? (
                          <PlusCircleOutlined
                            onClick={() => {
                              if (teams < 10) {
                                setTeams(teams + 1);
                                let _obj = JSON.parse(JSON.stringify(table5));
                                _obj.cpTeams.push({
                                  briefIntroduction: "", //简介
                                  memberName: "", //成员名称
                                  position: "", //职务
                                });
                                setTable5(_obj);
                              }
                            }}
                            style={{
                              height: "100%",
                              fontSize: "0.2rem",
                            }}
                          />
                        ) : (
                          <MinusCircleOutlined
                            onClick={() => {
                              setTeams(teams - 1);
                              let _obj = JSON.parse(JSON.stringify(table5));
                              _obj.cpTeams.splice(index, 1);
                              setTable5(_obj);
                            }}
                            style={{
                              height: "100%",
                              fontSize: "0.2rem",
                            }}
                          />
                        )}
                      </section>
                    </Form.Item>
                  </Col>
                );
              })}
            </Row>
          </Form>
        )}
        {/* 6 - 核心技术 */}
        {props.inx == 6 && (
          <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
            labelCol={{ span: 2 }}
            // {...layout}
          >
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item label={"核心技术"}>
                  <Input.TextArea
                    showCount
                    maxLength={300}
                    placeholder="请输入核心技术，最多300个字符。"
                    onChange={(e) => {
                      let _obj = JSON.parse(JSON.stringify(table6));
                      _obj.coreTechnology = e.target.value;
                      setTable6(_obj);
                    }}
                    defaultValue={obj && obj.coreTechnology}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              {new Array(patent).fill("").map((item, index) => {
                return (
                  <Col span={24}>
                    <Form.Item
                      label={patent == 1 ? "专利" : "专利" + (index + 1)}
                      rules={[
                        {
                          required: true,
                          message: "Input something!",
                        },
                      ]}
                    >
                      <div>
                        <section
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <Input
                            placeholder="请输入专利名称"
                            style={{ marginRight: "0.1rem", flex: 4 }}
                            onChange={(e) => {
                              let _obj = JSON.parse(JSON.stringify(table6));
                              _obj.cpPatents[index] &&
                                (_obj.cpPatents[index].patentName =
                                  e.target.value);
                              setTable6(_obj);
                            }}
                            defaultValue={
                              obj.cpPatents &&
                              obj.cpPatents[index] &&
                              obj.cpPatents[index].patentName
                            }
                          />
                          <Select
                            defaultValue={() => {
                              if (obj.cpPatents && obj.cpPatents[index]) {
                                return {
                                  value:
                                    (obj.cpPatents &&
                                      obj.cpPatents[index] &&
                                      obj.cpPatents[index].patentType) ||
                                    "",
                                  label: patentType[
                                    obj.cpPatents &&
                                      obj.cpPatents[index] &&
                                      obj.cpPatents[index].patentType - 1
                                  ]
                                    ? patentType[
                                        obj.cpPatents &&
                                          obj.cpPatents[index] &&
                                          obj.cpPatents[index].patentType - 1
                                      ].name
                                    : "",
                                };
                              }
                            }}
                            labelInValue
                            placeholder="请选择专利类型"
                            style={{ marginRight: "0.1rem", flex: 1 }}
                            onChange={(e) => {
                              let _obj = JSON.parse(JSON.stringify(table6));
                              _obj.cpPatents[index] &&
                                (_obj.cpPatents[index].patentType = e.value);
                              setTable6(_obj);
                            }}
                          >
                            {patentType.map((item, index) => {
                              return (
                                <Option value={item.value} key={index}>
                                  {item.name}
                                </Option>
                              );
                            })}
                          </Select>
                          <Select
                            defaultValue={() => {
                              if (obj.cpPatents && obj.cpPatents[index]) {
                                return {
                                  value:
                                    (obj.cpPatents &&
                                      obj.cpPatents[index] &&
                                      obj.cpPatents[index].patentStatus) ||
                                    "",
                                  label: patentStatus[
                                    obj.cpPatents &&
                                      obj.cpPatents[index] &&
                                      obj.cpPatents[index].patentStatus - 1
                                  ]
                                    ? patentStatus[
                                        obj.cpPatents &&
                                          obj.cpPatents[index] &&
                                          obj.cpPatents[index].patentStatus - 1
                                      ].name
                                    : "",
                                };
                              }
                            }}
                            labelInValue
                            placeholder="请选择专利状态"
                            style={{ marginRight: "0.1rem", flex: 1 }}
                            onChange={(e) => {
                              let _obj = JSON.parse(JSON.stringify(table6));
                              _obj.cpPatents[index] &&
                                (_obj.cpPatents[index].patentStatus = e.value);
                              setTable6(_obj);
                            }}
                          >
                            {patentStatus.map((item, index) => {
                              return (
                                <Option value={item.value} key={index}>
                                  {item.name}
                                </Option>
                              );
                            })}
                          </Select>
                          {index === 0 ? (
                            <PlusCircleOutlined
                              onClick={() => {
                                setPatent(patent + 1);
                                let _obj = JSON.parse(JSON.stringify(table6));
                                _obj.cpPatents.push(cpPatentsItem);
                                setTable6(_obj);
                              }}
                              style={{
                                height: "100%",
                                fontSize: "0.2rem",
                              }}
                            />
                          ) : (
                            <MinusCircleOutlined
                              onClick={() => {
                                setPatent(patent - 1);
                                let _obj = JSON.parse(JSON.stringify(table6));
                                _obj.cpPatents.splice(index, 1);
                                setTable6(_obj);
                              }}
                              style={{
                                height: "100%",
                                fontSize: "0.2rem",
                              }}
                            />
                          )}
                        </section>
                        <section style={{ marginTop: "0.1rem" }}>
                          <Input
                            placeholder="请输入专利优势"
                            style={{ marginRight: "0.1rem", flex: 4 }}
                            onChange={(e) => {
                              let _obj = JSON.parse(JSON.stringify(table6));
                              _obj.cpPatents[index] &&
                                (_obj.cpPatents[index].abstracts =
                                  e.target.value);
                              setTable6(_obj);
                            }}
                            defaultValue={
                              obj.cpPatents &&
                              obj.cpPatents[index] &&
                              obj.cpPatents[index].abstracts
                            }
                          />
                        </section>
                      </div>
                    </Form.Item>
                  </Col>
                );
              })}
            </Row>
          </Form>
        )}
        {/* 7 - 投资方 */}
        {props.inx == 7 && (
          <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
            // {...layout}
          >
            <Row gutter={24}>
              {new Array(investor).fill("").map((item, index) => {
                return (
                  <Col span={24}>
                    <Form.Item
                      label={investor == 1 ? "投资方" : "投资方" + (index + 1)}
                      rules={[
                        {
                          required: true,
                          message: "Input something!",
                        },
                      ]}
                    >
                      <div>
                        <section
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          {/* {index != 0 && <span style={{opacity:0}}>领军人物（最多五个）: &nbsp;</span>} */}
                          <Input
                            placeholder="请输入投资方名称"
                            style={{ marginRight: "0.1rem", flex: 4 }}
                            onChange={(e) => {
                              let _obj = JSON.parse(JSON.stringify(table7));
                              _obj.cpInvestors[index] &&
                                (_obj.cpInvestors[index].investorName =
                                  e.target.value);
                              setTable7(_obj);
                            }}
                            defaultValue={
                              obj.cpInvestors &&
                              obj.cpInvestors[index] &&
                              obj.cpInvestors[index].investorName
                            }
                          />
                          <Input
                            placeholder="请输入轮次"
                            style={{ marginRight: "0.1rem", flex: 4 }}
                            onChange={(e) => {
                              let _obj = JSON.parse(JSON.stringify(table7));
                              _obj.cpInvestors[index] &&
                                (_obj.cpInvestors[index].investorRounds =
                                  e.target.value);
                              setTable7(_obj);
                            }}
                            defaultValue={
                              obj.cpInvestors &&
                              obj.cpInvestors[index] &&
                              obj.cpInvestors[index].investorRounds
                            }
                          />
                          <Input
                            placeholder="请输入投资金额，不填则代表暂不公开，默认单位为万"
                            style={{ marginRight: "0.1rem", flex: 4 }}
                            onChange={(e) => {
                              let _obj = JSON.parse(JSON.stringify(table7));
                              _obj.cpInvestors[index].investorAmount =
                                e.target.value;
                              setTable7(_obj);
                            }}
                            defaultValue={
                              obj.cpInvestors &&
                              obj.cpInvestors[index] &&
                              obj.cpInvestors[index].investorAmount
                            }
                          />

                          {index === 0 ? (
                            <PlusCircleOutlined
                              onClick={() => {
                                setInvestor(investor + 1);
                                let _obj = JSON.parse(JSON.stringify(table7));
                                _obj.cpInvestors &&
                                  _obj.cpInvestors.push(cpInvestorsItem);
                                setTable7(_obj);
                              }}
                              style={{
                                height: "100%",
                                fontSize: "0.2rem",
                              }}
                            />
                          ) : (
                            <MinusCircleOutlined
                              onClick={() => {
                                setInvestor(investor - 1);
                                let _obj = JSON.parse(JSON.stringify(table7));
                                _obj.cpInvestors &&
                                  _obj.cpInvestors.splice(index, 1);
                                setTable7(_obj);
                              }}
                              style={{
                                height: "100%",
                                fontSize: "0.2rem",
                              }}
                            />
                          )}
                        </section>
                      </div>
                    </Form.Item>
                  </Col>
                );
              })}
            </Row>
          </Form>
        )}
        {/* 8 - 行业成长性 */}
        {props.inx == 8 && (
          <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
            onChange={(e) => {
              let obj = form.getFieldsValue();
              obj.id = companyId ? companyId : null;
              setTable8(obj);
            }}
          >
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item label={"行业介绍"} name="industryIntroduction">
                  <Input.TextArea
                    showCount
                    maxLength={500}
                    placeholder="请输入行业前景、现状、痛点、周期、需求、供给、政策、技术、模式等。最多500个字。"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}
        {/* 9 - 保存提交 */}
        {props.inx == 9 && (
          <div>
            <img src={sPng} style={{ width: "1rem" }} />

            <section
              style={{
                marginTop: "0.1rem",
                fontWeight: "bold",
                fontSize: "0.2rem",
              }}
            >
              填写完成
            </section>
            <section
              style={{
                marginTop: "0.1rem",
                fontWeight: "bold",
                fontSize: "0.12rem",
                color: "rgba(0,0,0,0.5)",
              }}
            >
              点击“提交“，直接上交申报数据
            </section>
            <section
              style={{
                marginTop: "0.1rem",
                fontSize: "0.12rem",
                color: "rgba(0,0,0,0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>
                <Checkbox
                  onChange={(e) => setChecked(e.target.checked)}
                ></Checkbox>
              </span>
              <span style={{ marginLeft: "0.05rem" }}>
                本公司承诺，以上所有申报内容均为本公司真实信息，且授权上海碳中和技术创新联盟可公开展示所有申报内容。
              </span>
            </section>
          </div>
        )}
        {action != 2 &&
          (props.inx != 9 ? (
            <p
              style={{
                height: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{ marginRight: "0.3rem" }}
                onClick={() => {
                  // if (tabInx < 2) {
                  //   setTabInx(tabInx + 1);
                  // }
                  props.setInx(props.inx - 1);
                }}
              >
                <ButtonCmt
                  bg={ThemeColor}
                  w="0.8rem"
                  color="white"
                  t="上一步"
                  h="0.4rem"
                />
              </div>
              <div
                style={{ marginRight: "0.3rem" }}
                onClick={() => {
                  submit();
                  // if(flag1){
                  //   props.setInx(2);
                  // }
                  if (props.inx < 9) {
                    // props.setInx(props.inx + 1);
                  }
                }}
              >
                <ButtonCmt
                  bg={ThemeColor}
                  w="0.8rem"
                  color="white"
                  t="下一步"
                  h="0.4rem"
                />
              </div>
              {/* <div
              onClick={() => {
                // alert(1)
                // submit();
                // saveDeclareBalance();
              }}
            >
              <ButtonCmt
                bg="#51AA95"
                w="0.8rem"
                color="white"
                t="保存"
                h="0.4rem"
              />
            </div> */}
            </p>
          ) : (
            <p
              style={{
                height: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                onClick={() => {
                  if (checked) {
                    // message.success("提交成功 ！");
                    saveAll();
                  } else {
                    message.warn("请授权后再提交 ！");
                  }
                  // saveDeclareBalance();
                }}
              >
                <ButtonCmt
                  bg="#51AA95"
                  w="0.8rem"
                  color="white"
                  t="提交"
                  h="0.4rem"
                />
              </div>
            </p>
          ))}
      </div>
    </div>
  );
}

export default withRouter(Others);
