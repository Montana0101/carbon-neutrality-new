import { withRouter, useHistory } from "react-router-dom";
import {
  putDeclareBalance,
  putDeclareProfit,
  putDeclareCash,
} from "../../apis/index";
import { ThemeColor, CutLine } from "../../lib/const";

import "./others.less";
import {
  DownOutlined,
  UpOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select, Checkbox, message } from "antd";
import React, { useState, useReducer, useEffect } from "react";
import { ButtonCmt } from "../../component/button";
import sPng from "../../static/imgs/save.png";
i

const { Option } = Select;

const init2 = {
  id: "", //企业ID
  companyName: "", //公司名称
  province: "上海", //注册省
  city: "宝山", //注册城市
  district: "罗店", //注册地区
  contactNumber: "15026829392", //联系电话
  stage: "IPO", //融资阶段
  financingScale: "5000", //融资金额
  industry: "2", //行业
  website: "https://www.stiacn.com", //官网
  enterpriseAbbreviation: "上海碳中和联盟", //简称
  regCapital: "2500", //注册资金（万元）
  regTime: "2022-08-15 09:45:45", //注册时间
  email: "Admin@shbeidou.com", //联系邮箱
  enterpriseValuation: "900000", //企业估值（万元）
  legalPersonName: "陈诚", //法人
  companyProfile: "", //公司简介
};

const reducer2 = (state, action) => {
  console.log("基本信息state is", state);
  console.log("基本信息action is", action);
};

function Others(props) {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const [leaders, setLeaders] = useState(1); // 领军人物
  const [teams, setTeams] = useState(1); // 核心团队
  const [patent, setPatent] = useState(1); // 专利
  const [investor, setInvestor] = useState(1); // 投资方
  const [checked, setChecked] = useState(false);
  const [state2, dispatch2] = useReducer(reducer2, init2); //基本信息

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };

  useEffect(() => {
    console.log("监听基本信息state 变化", state2);
  }, [state2]);

  return (
    <div className="others_page">
      <div>
        {/* 2 - 基本信息 */}
        {props.inx == 1 && (
          <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
            {...layout}
            onChange={(e) =>
              console.log("基本信息表格变化", form.getFieldsValue())
            }
          >
            <Row gutter={24}>
              <Col span={10}>
                <Form.Item
                  label={"企业名称"}
                  name="companyName"
                  rules={
                    [
                      // {
                      //   required: true,
                      //   message: "Input something!",
                      // },
                    ]
                  }
                >
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item label={"企业简介"} name="enterpriseAbbreviation">
                  <Input placeholder="请输入" />
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
                  
                        <Form.Item name="province" style={{flex:1,marginRight: "0.1rem"}}>
                          <Select
                            defaultValue="2"
                          >
                            <Option value="1">1</Option>
                            <Option value="2">1</Option>
                          </Select>
                        </Form.Item>
                 
                        <Form.Item name="city"  style={{flex:1,marginRight: "0.1rem"}}>
                          <Select
                            defaultValue="2"
                          >
                            <Option value="1">1</Option>
                            <Option value="2">1</Option>
                          </Select>
                        </Form.Item>
                 
                        <Form.Item name="district"  style={{flex:1,marginRight: "0rem"}}>
                          <Select
                            defaultValue="2"
                          >
                            <Option value="1">1</Option>
                            <Option value="2">1</Option>
                          </Select>
                        </Form.Item>
                 
                  </section>
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item label={"注册资金"} name="regCapital">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={10}>
                <Form.Item label={"联系电话"} name="contactNumber"> 
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item label={"注册时间"}>
                  <Input placeholder="请输入" name="regTime"/>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={10}>
                <Form.Item label={"融资阶段"} name="stage">
                  <Select defaultValue="2">
                    <Option value="1">1</Option>
                    <Option value="2">1</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item label={"联系邮箱"} name="email">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={10}>
                <Form.Item label={"融资金额"}>
                  <Input placeholder="请输入" name="financingScale"/>
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item label={"投前估值"}>
                  <Input placeholder="请输入" name="enterpriseValuation"/>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={10}>
                <Form.Item label={"所属行业"} name="industry">
                  <Select defaultValue="2">
                    <Option value="1">1</Option>
                    <Option value="2">1</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item label={"法定代表人"}  name="legalPersonName">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={10}>
                <Form.Item label={"官网"} name="website">
                  <Input placeholder="请输入" />
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
        {/* 3 - 公司战略 */}
        {props.inx == 2 && (
          <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
            {...layout}
          >
            <Row gutter={24}>
              <Col span={10}>
                <Form.Item label={"战略定位"}>
                  <Input.TextArea
                    showCount
                    maxLength={300}
                    placeholder="请输入战略定位，不超过300个字"
                  />
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item label={"战略规划"}>
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
        {/* 4 - 公司经营 */}
        {props.inx == 3 && (
          <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
          >
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item label={"商业模式"}>
                  <section style={{ display: "flex" }}>
                    <span>&nbsp;</span> <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <Input.TextArea
                      showCount
                      maxLength={300}
                      style={{ width: "100%" }}
                      placeholder="请输入商业模式，不超过300个字"
                    />
                  </section>
                </Form.Item>
              </Col>

              <Col span={12} offset={0}>
                <Form.Item label={"主营业务"}>
                  <section style={{ display: "flex" }}>
                    <span>&nbsp;</span> <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <Input.TextArea
                      showCount
                      maxLength={300}
                      style={{ width: "100%" }}
                      placeholder="请输入主营业务，不超过300个字"
                    />
                  </section>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item label={"业务标签"}>
                  <section style={{ display: "flex" }}>
                    <span>&nbsp;</span> <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <Input
                      placeholder="请输入"
                      style={{ marginRight: "0.1rem" }}
                    />
                    <Input
                      placeholder="请输入"
                      style={{ marginRight: "0.1rem" }}
                    />
                    <Input
                      placeholder="请输入"
                      style={{ marginRight: "0.1rem" }}
                    />
                    <Input
                      placeholder="请输入"
                      style={{ marginRight: "0.1rem" }}
                    />
                    <Input
                      placeholder="请输入"
                      style={{ marginRight: "0.1rem" }}
                    />
                    <Input placeholder="请输入" />
                  </section>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={24}>
                <Form.Item label={"业务构成"}>
                  <section style={{ display: "flex" }}>
                    <span>&nbsp;</span> <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <Input placeholder="请输入" />
                  </section>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={24}>
                <Form.Item label={"核心客户"}>
                  <section style={{ display: "flex" }}>
                    <span>&nbsp;</span> <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <Input
                      placeholder="请输入"
                      style={{ marginRight: "0.1rem" }}
                    />
                    <Input placeholder="请输入占比" />
                  </section>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={24}>
                <Form.Item label={"核心供应商"}>
                  <section style={{ display: "flex" }}>
                    <Input
                      placeholder="请输入"
                      style={{ marginRight: "0.1rem" }}
                    />
                    <Input placeholder="请输入占比" />
                  </section>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}
        {/* 5 - 核心竞争力 */}
        {props.inx == 4 && (
          <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
            // {...layout}
          >
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item label={"核心竞争力"}>
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
        {/* 6 - 核心团队 */}
        {props.inx == 5 && (
          <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
            // {...layout}
            labelCol={{ span: 4 }}
            // labelCol: {
            //   span: 4,
            // },
            // wrapperCol: {
            //   span: 20,
            // },
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
                          placeholder="请输入姓名"
                          style={{ marginRight: "0.1rem", flex: 1 }}
                        />
                        <Input
                          placeholder="请输入职务"
                          style={{ marginRight: "0.1rem", flex: 1 }}
                        />
                        <Input
                          placeholder="请输入领军人物描述"
                          style={{ marginRight: "0.1rem", flex: 4 }}
                        />
                        {index === 0 ? (
                          <PlusCircleOutlined
                            onClick={() => {
                              if (leaders < 5) {
                                setLeaders(leaders + 1);
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
                        />
                        <Input
                          placeholder="请输入职务"
                          style={{ marginRight: "0.1rem", flex: 1 }}
                        />
                        <Input
                          placeholder="请输入描述"
                          style={{ marginRight: "0.1rem", flex: 4 }}
                        />
                        {index === 0 ? (
                          <PlusCircleOutlined
                            onClick={() => {
                              if (teams < 10) {
                                setTeams(teams + 1);
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
        {/* 7 - 核心技术 */}
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
                          {/* {index != 0 && <span style={{opacity:0}}>领军人物（最多五个）: &nbsp;</span>} */}
                          <Input
                            placeholder="请输入专利名称"
                            style={{ marginRight: "0.1rem", flex: 4 }}
                          />
                          <Select
                            defaultValue="2"
                            placeholder="请选择专利类型"
                            style={{ marginRight: "0.1rem", flex: 1 }}
                          >
                            <Option value="1">1</Option>
                            <Option value="2">1</Option>
                          </Select>
                          <Select
                            defaultValue="2"
                            placeholder="请选择专利状态"
                            style={{ marginRight: "0.1rem", flex: 1 }}
                          >
                            <Option value="1">1</Option>
                            <Option value="2">1</Option>
                          </Select>
                          {index === 0 ? (
                            <PlusCircleOutlined
                              onClick={() => {
                                setPatent(patent + 1);
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
        {/* 8 - 投资方 */}
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
                          />
                          <Input
                            placeholder="请输入轮次"
                            style={{ marginRight: "0.1rem", flex: 4 }}
                          />
                          <Input
                            placeholder="请输入投资金额，不填则代表暂不公开"
                            style={{ marginRight: "0.1rem", flex: 4 }}
                          />

                          {index === 0 ? (
                            <PlusCircleOutlined
                              onClick={() => {
                                setInvestor(investor + 1);
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
        {/* 9 - 行业成长性 */}
        {props.inx == 8 && (
          <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
            // {...layout}
          >
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item label={"行业介绍"}>
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
        {/* 10 - 保存提交 */}
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
        {props.inx != 9 ? (
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
                if (props.inx < 9) {
                  props.setInx(props.inx + 1);
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
            <div
              onClick={() => {
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
            </div>
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
                  message.success("提交成功 ！");
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
        )}{" "}
      </div>
    </div>
  );
}

export default withRouter(Others);
