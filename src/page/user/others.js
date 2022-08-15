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
  PlusCircleOutlined,MinusCircleOutlined
} from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select } from "antd";
import React, { useState } from "react";
import { ButtonCmt } from "../../component/button";
const { Option } = Select;

function Others(props) {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();
  const [leaders, setLeaders] = useState(1); // 领军人物
  const [teams,setTeams] = useState(1); // 核心团队
  const [patent,setPatent] = useState(1); // 专利
  // const []

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
          >
            <Row gutter={24}>
              <Col span={10}>
                <Form.Item
                  label={"企业名称"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item
                  label={"企业名称"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={10}>
                <Form.Item
                  label={"企业名称"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
                  <section
                    style={{
                      display: "flex",
                    }}
                  >
                    <Select defaultValue="2" style={{}}>
                      <Option value="1">1</Option>
                      <Option value="2">1</Option>
                    </Select>
                    <Select defaultValue="2">
                      <Option value="1">1</Option>
                      <Option value="2">1</Option>
                    </Select>
                    <Select defaultValue="2">
                      <Option value="1">1</Option>
                      <Option value="2">1</Option>
                    </Select>
                  </section>
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item
                  label={"注册资金"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={10}>
                <Form.Item
                  label={"联系电话"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item
                  label={"注册时间"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={10}>
                <Form.Item
                  label={"融资阶段"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
                  <Select defaultValue="2">
                    <Option value="1">1</Option>
                    <Option value="2">1</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item
                  label={"联系邮箱"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={10}>
                <Form.Item
                  label={"融资金额"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item
                  label={"投前估值"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={10}>
                <Form.Item
                  label={"所属行业"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
                  <Select defaultValue="2">
                    <Option value="1">1</Option>
                    <Option value="2">1</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item
                  label={"法定代表人"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={10}>
                <Form.Item
                  label={"官网"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item
                  label={"公司简介"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
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
                <Form.Item
                  label={"战略定位"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
                  <Input.TextArea
                    showCount
                    maxLength={300}
                    placeholder="请输入战略定位，不超过300个字"
                  />
                </Form.Item>
              </Col>

              <Col span={10} offset={4}>
                <Form.Item
                  label={"战略规划"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
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
                <Form.Item
                  label={"商业模式"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
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
                <Form.Item
                  label={"主营业务"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
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
                <Form.Item
                  label={"业务标签"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
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
                <Form.Item
                  label={"业务构成"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
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
                <Form.Item
                  label={"核心客户"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
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
                <Form.Item
                  label={"核心供应商"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
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
                <Form.Item
                  label={"核心竞争力"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
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
            labelCol = {{span:4}}
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
                      label={index == 0 ? "领军人物（最多五个）" : "领军人物"+(index+1)}
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
                              if(leaders<5){
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
                      label={index == 0 ? "核心团队（最多十个）" : "核心团队"+(index+1)}
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
                              if(teams<10){
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
            {...layout}
          >
             <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  label={"核心技术"}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                >
                  <Input.TextArea
                    showCount
                    maxLength={300}
                    placeholder="请输入核心技术，最多300个字符。"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
             {new Array(teams).fill("").map((item, index) => {
                return (
                  <Col span={24}>
                    <Form.Item
                      label={index == 0 ? "专利" : "专利"+(index+1)}
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
                              if(teams<10){
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
      </div>
    </div>
  );
}

export default withRouter(Others);
