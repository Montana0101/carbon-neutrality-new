
import { useState, useEffect, useRef } from "react"
import { withRouter, useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {
    LeftOutlined
} from '@ant-design/icons'
// import img1 from './imgs/1.png'
import { AliOss, ThemeColor, CutLine } from "../../lib/const"
import { createFromIconfontCN } from '@ant-design/icons';
import { Tabs, Radio, Col, Row, Form, DatePicker, Input } from 'antd';
import { Line } from '@ant-design/plots';
import './admin.scss'

const { TabPane } = Tabs;

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const DemoLine = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'year',
        yField: 'gdp',
        seriesField: 'name',
        yAxis: {
            label: {
                formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
            },
        },
        legend: {
            position: 'top',
        },
        smooth: true,
        // @TODO 后续会换一种动画方式
        animation: {
            appear: {
                animation: 'path-in',
                duration: 5000,
            },
        },
    };

    return <Line {...config} style={{ width: "100%", height: "100%" }} />;
};


function Admin(props) {
    useEffect(() => {
        document.getElementsByTagName("html")[0].style.overflowX = "hidden"
        document.getElementsByTagName("html")[0].style.overflowY = "scroll"
    }, [])
    const history = useHistory()

    const onChange = (key) => {
        console.log(key);
    };

    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
    }

    return (
        <div className="admin_page" style={{
            height: "auto",
            width: "100%",
            background: 'white',
            padding: "0 0.3rem"
        }}>
            {/* 碳中和技术创新联盟 */}
            <div style={{ border: CutLine, padding: '0 0.5rem', borderRight: "none", borderLeft: "none" }}>
                <h3 style={{
                    fontSize: "0.12rem", fontWeight: "400", display: "flex", margin: 0,
                    padding: "0 0.3rem", height: "0.7rem", lineHeight: "0.7rem",
                    borderLeft: CutLine, borderRight: CutLine
                }}>
                    <span style={{ color: "rgba(0,0,0,0.6)" }}>首页</span>
                    <span style={{ margin: "0 0.1rem" }}>/</span><span>个人中心</span>
                </h3>
            </div>

            <div style={{
                border: CutLine, padding: '0 0.5rem', borderRight: "none", borderLeft: "none",
                borderTop: "none", boxSizing: "border-box"
            }}>
                <section style={{
                    fontSize: "0.12rem", fontWeight: "400", display: "flex", margin: 0,
                    padding: "0 0.3rem", height: "2.8rem", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    borderLeft: CutLine, borderRight: CutLine, boxSizing: "border-box"
                }}>

                    <div style={{
                        background: "#EEF7EE", width: "100%", height: "100%", margin: "0.2rem 0", padding: '0.2rem',
                        display: "flex", justifyContent: "space-between", boxSizing: "border-box"
                    }}>
                        <div style={{
                            background: "white",
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            padding: "0.2rem 0.15rem",
                            boxSizing: "content-box",
                            alignItems: 'center',
                            justifyContent: "space-between",
                            fontSize: "0.12rem",
                            color: "rgba(0,0,0,0.6)"
                        }}>
                            <img style={{ height: "0.8rem" }}
                                src="https://axure-file.lanhuapp.com/31b63b61-b591-4fa5-badd-980d384a1046__4687b4d118d33d65d4888f8ef69fc693.png" />
                            <span style={{
                                fontSize: "0.16rem", fontWeight: "bold", color: "black"
                                , marginTop: "0.05rem"
                            }}>admin</span>
                            <span>shichen@shbeidou.com</span>
                            <span>上海北斗卫星导航平台有限公司</span>
                        </div>
                        <div style={{
                            flex: 3,
                            margin: "0 0.2rem",
                            background: "white",
                            padding: '0.1rem'
                        }}>
                            <DemoLine />
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: 'column',
                            flex: 1,
                        }}>
                            <section style={{
                                background: "white", marginBottom: "0.05rem", flex: 1,
                                padding: "0.1rem", boxSizing: "border-box", display: "flex",
                                flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start"
                            }}>
                                <div style={{ color: "rgba(0,0,0,0.5)", fontSize: "0.12rem" }}>今日待审核的注册人数</div>
                                <div style={{ alignSelf: "flex-end", display: "flex", alignItems: "center", marginBottom: "0.07rem" }}>
                                    <span style={{ fontSize: "0.2rem" }}>7</span>
                                    <span style={{ fontSize: "0.12rem", marginTop: "0.03rem" }}>人</span>
                                </div>
                            </section>
                            <section style={{
                                background: "white", marginBottom: "0.05rem", flex: 1,
                                padding: "0.1rem", boxSizing: "border-box", display: "flex",
                                flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start"
                            }}>
                                <div style={{ color: "rgba(0,0,0,0.5)", fontSize: "0.12rem" }}>累计审核的注册人数</div>
                                <div style={{ alignSelf: "flex-end", display: "flex", alignItems: "center", marginBottom: "0.07rem" }}>
                                    <span style={{ fontSize: "0.2rem" }}>7</span>
                                    <span style={{ fontSize: "0.12rem", marginTop: "0.03rem" }}>人</span>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>

            <div style={{
                boxSizing: "border-box",
                color: 'white',
                marginBottom: "-0.5rem",
                border: CutLine,
                borderTop: 'none',
                borderBottom: 'none',
                margin: '0 0.5rem 0 0.5rem',

            }}>
                <Tabs defaultActiveKey="1" onChange={onChange} style={{}}>
                    <TabPane tab="用户管理" key="1">
                        <section style={{ padding: "0.1rem 0.3rem" }}>
                            <Form>
                                <Row>
                                    <Form.Item label="用户状态">
                                        <Radio.Group defaultValue="a" buttonStyle="solid">
                                            <Radio.Button value="a">全部</Radio.Button>
                                            <Radio.Button value="b">审核通过</Radio.Button>
                                            <Radio.Button value="c">审核驳回</Radio.Button>
                                            <Radio.Button value="d">待审核</Radio.Button>
                                            <Radio.Button value="d">已禁用</Radio.Button>
                                        </Radio.Group>
                                    </Form.Item>
                                </Row>
                                <Row>
                                    <Col span={11}>
                                        <Form.Item label="审核日期">
                                            <DatePicker style={{ width: "100%" }} placeholder='请选择审核的日期' />
                                        </Form.Item>
                                    </Col>
                                    <Col span={2} />

                                    <Col span={11}>
                                        <Form.Item label="申请日期">
                                            <DatePicker style={{ width: "100%" }} placeholder='请选择申请的日期' />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={11}>
                                        <Form.Item label="申请邮箱">
                                            <Input placeholder="请输入申请的邮箱" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={2} />

                                    <Col span={11}>
                                        <Form.Item label="申请公司">
                                            <Input placeholder="请输入申请的公司" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        </section>
                    </TabPane>
                    <TabPane tab="业务咨询" key="2">
                        Content of Tab Pane 2
                  </TabPane>
                </Tabs>
            </div>

            <div style={{
                border: 'none', padding: '0 0.5rem', borderRight: "none", borderLeft: "none",
                // borderTop: "none"
            }}>
                <section style={{
                    fontSize: "0.12rem", fontWeight: "400", display: "flex", margin: 0,
                    padding: "0 0.3rem", height: "0.7rem", 
                    alignItems: "center", justifyContent: "space-between",
                    border:CutLine,
                }}>
                    <span style={{
                        color:ThemeColor,
                        fontSize:"0.12rem",
                        fontWeight:"bold"
                    }}>为您找到65条相关结果</span>
                    <div style={{display:"flex",}}>
                        <button style={{
                            background:ThemeColor,
                            color:"white",
                            fontSize:"0.12rem",
                            padding:"0.05rem 0.1rem",
                            marginRight:"0.2rem"
                        }}>批量通过</button>
                        <button style={{
                            background:"#FD867F",
                            color:"white",
                            fontSize:"0.12rem",
                            padding:"0.05rem 0.1rem"
                        }}>批量驳回</button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default withRouter(Admin)