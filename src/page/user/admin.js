
import { useState, useEffect, useRef } from "react"
import { withRouter, useHistory } from 'react-router-dom';
import { todayPending, totalRegister, statusEnum, adminManageList } from '../../apis/index'
import { AliOss, ThemeColor, CutLine } from "../../lib/const"
import { createFromIconfontCN, ExclamationCircleFilled } from '@ant-design/icons';
import { Tabs, Radio, Col, Row, Form, DatePicker, Input, Table, message } from 'antd';
import { Line } from '@ant-design/plots';
import DefaultLogo from '../../static/imgs/default.png' // 默认企业logo

import './admin.less'

const { TabPane } = Tabs;

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

const ButtonCmt = (bg, color, text) => {
    return (
        <button style={{
            background: bg,
            color: color,
            fontSize: "0.12rem",
            padding: "0.03rem 0.1rem",
            width: '0.8rem',
            borderRadius: "0.03rem"
        }}>{text}</button>
    )
}

function Admin(props) {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [info, setInfo] = useState({})
    const [pendings, setPendings] = useState(0) // 今日待审核
    const [totalRegisters, setTotalRegisters] = useState(0) //总计审核
    const [enums, setEnum] = useState([]) //状态枚举类
    const [list, setList] = useState([]) //返回数据集合
    const [total, setTotal] = useState(0)

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }

                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }

                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };

    useEffect(() => {
        document.getElementsByTagName("html")[0].style.overflowX = "hidden"
        document.getElementsByTagName("html")[0].style.overflowY = "scroll"

        const user = localStorage.getItem('user')
        if (JSON.parse(user)) {
            setInfo(JSON.parse(user))
        }
    }, [])

    // 调用接口
    useEffect(() => {
        _todayPendings()
        _totalRegister()
        _statusEnum()
        _adminManageList()
    }, [])


    // 状态枚举类
    const _statusEnum = async () => {
        const res = await statusEnum()
        if (res.code === 2000) {
            setEnum(res.result)
        }
    }
    // 今天待审核人数
    const _todayPendings = async () => {
        const res = await todayPending()
        if (res.code === 2000) {
            setPendings(res.result)
        }
    }

    // 累计注册人数
    const _totalRegister = async () => {
        const res = await totalRegister()
        if (res.code === 2000) {
            setTotalRegisters(res.result)
        }
    }

    // 列表数据
    const _adminManageList = async () => {
        let params = {
            page: 1,
            limit: 10,
            email: "",
            companyName: "",
            status: "",
            approvalTimeBegin: "",
            approvalTimeEnd: "",
            applyTimeBegin: "",
            applyTimeEnd: ""
        }
        const res = await adminManageList(params)
        if (res.code === 2000) {
            console.log("你的健康三剑客的撒", res.result)
            setList(res.result.data)
            setTotal(res.result.totalRecord)
        }
    }

    const history = useHistory()

    const onChange = (key) => {
        console.log(key);
    };

    const statusValue = (num) => {
        let val = { name: "", color: 'black' }

        switch (num) {
            case 2:
                val.name = '待审核'
                val.color = '#EFA71C'
                return val
            case 3:
                val.name = '审核驳回'
                val.color = '#F7372B'
                return val
            case 4:
                val.name = '审核通过'
                val.color = '#51AA52'
                return val
            case 5:
                val.name = '已禁用'
                val.color = '#757575'
                return val
            default:
                return val
        }
    }
    const columns = [
        {
            title: '选择',
            dataIndex: 'name',
        },
        {
            title: '序号',
            render: (text, record, index) => `${index + 1}`
        },
        {
            title: '审核状态',
            dataIndex: 'status',
            width:80,
            render:(text,record,index)=>{
                return (
                    <span style={{color:statusValue(text).color}}>{statusValue(text).name}</span>
                )
            }
        }, {
            title: '申请公司',
            dataIndex: 'companyName',
        }, {
            title: '申请邮箱',
            dataIndex: 'email',
        }, {
            title: '申请人员',
            dataIndex: 'name',
        }, {
            title: '申请时间',
            dataIndex: 'registerTime',
        }, {
            title: '审核人',
            dataIndex: 'approver',
        }, {
            title: '最后操作时间',
            dataIndex: 'lastUpdateTime',
        }, {
            title: '操作',
            render: (text) => {
                return (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ marginBottom: "0.05rem" }}>
                            {ButtonCmt(ThemeColor, 'white', '审核通过')}
                        </div>
                        {ButtonCmt("#FD867F", 'white', '审核驳回')}
                    </div>

                )
            }
        },
    ];
    const data = [];

    for (let i = 0; i < 46; i++) {
        data.push({
            key: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `London, Park Lane no. ${i}`,
        });
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
                            {info.logoUrl ? <img style={{ height: "0.8rem" }}
                                src={info.logoUrl} alt="" />
                                : <img style={{ height: "0.8rem" }}
                                    src={DefaultLogo} alt="" />}
                            <span style={{
                                fontSize: "0.16rem", fontWeight: "bold", color: "black"
                                , marginTop: "0.05rem"
                            }}>{info.name}</span>
                            <span>{info.email}</span>
                            <span>{info.companyName}</span>
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
                                    <span style={{ fontSize: "0.2rem" }}>{pendings}</span>
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
                                    <span style={{ fontSize: "0.2rem" }}>{totalRegisters}</span>
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
                                        <Radio.Group defaultValue="" buttonStyle="solid">
                                            <Radio.Button value={''}
                                                key={0}>全部</Radio.Button>
                                            <Radio.Button value={2}
                                                key={2}>待审核</Radio.Button>
                                            <Radio.Button value={3}
                                                key={3}>审核驳回</Radio.Button>
                                            <Radio.Button value={4}
                                                key={4}>审核通过</Radio.Button>
                                            <Radio.Button value={5}
                                                key={5}>已禁用</Radio.Button>
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
                    border: CutLine,
                }}>
                    <span style={{
                        color: ThemeColor,
                        fontSize: "0.12rem",
                        fontWeight: "bold"
                    }}>为您找<span style={{ margin: '0 0.02rem' }}>{total}</span>条相关结果</span>
                    <div style={{ display: "flex", }}>

                        <div style={{ marginRight: "0.15rem" }}>
                            {ButtonCmt(ThemeColor, 'white', '批量通过')}
                        </div>
                        {ButtonCmt("#FD867F", 'white', '批量驳回')}

                    </div>
                </section>
            </div>

            {/* 表格数据区域 */}
            <section style={{
                fontSize: "0.12rem", fontWeight: "400", display: "flex", margin: '0 0.5rem',
                padding: "0.3rem",
                alignItems: "center", justifyContent: "flex-start", flexDirection: "column",
                border: CutLine, borderTop: "none",
            }}>

                <div style={{
                    display: "flex", background: '#E6F7FF', width: "100%",
                    height: "0.4rem", alignItems: "center", paddingLeft: '0.2rem', fontSize: "0.12rem"
                }}>
                    <ExclamationCircleFilled style={{ marginRight: "0.1rem", color: "#337FFF", fontSize: "0.14rem" }} />
                    <span>已选择</span>
                    <span style={{ margin: '0 0.1rem', color: "#337FFF" }}>3</span>
                    <span>项</span>
                    <a style={{ marginLeft: "0.15rem", textDecoration: "underline" }}>清空</a>
                </div>

                <Table rowSelection={rowSelection} columns={columns} dataSource={list} style={{
                    width: "100%", marginTop: "0.3rem"
                }} bordered  pagination={{
                    total:total,
                    onChange: ()=>{},
                  }}/>
            </section>
        </div>
    )
}

export default withRouter(Admin)