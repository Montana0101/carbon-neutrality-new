
import { useState, useEffect, memo } from "react"
import { withRouter, useHistory } from 'react-router-dom';
import {
    todayPending, totalRegister, consultList, adminManageList, yearStatistics,
    passUser, rejectUser, restartUser, disableUser, readConsult
} from '../../apis/index'
import { AliOss, ThemeColor, CutLine } from "../../lib/const"
import { createFromIconfontCN, ExclamationCircleFilled } from '@ant-design/icons';
import { Tabs, Radio, Col, Row, Form, DatePicker, Input, Table, message, ConfigProvider, notification } from 'antd';
import { Line } from '@ant-design/plots';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

import DefaultLogo from '../../static/imgs/default.png' // 默认企业logo

import zhCN from 'antd/lib/locale-provider/zh_CN';

import './admin.less'

const { TabPane } = Tabs;

const openNotification = () => {
    const args = {
        //   message: '已提交，请稍后',
        description:
            '请求已发送，请稍后查看',
        duration: 0,
    };
    notification.open(args);
};

const DemoLine = memo(() => {
    const [data, setData] = useState([]);
    const [obj,setObj] = useState({})

    useEffect(() => {

        _yearStatistics()
    }, []);

    // 折线图数据
    const _yearStatistics = async () => {
        const res = await yearStatistics()
        if (res.code === 2000) {
            // setData(res.result)
            let arr = []
       
            for (var i in res.result.data) {
                arr.push(i)
            }
            setData(res.result.data)
            setObj(res.result)
            console.log("但啊啊尽快那就开始",res.result.data)
            // approveSum
            // registerSum
        }
    }


    const config = {
        data,
        xField: 'month',
        yField: 'value',
        seriesField: 'type',
        yAxis: {
            label: {
                formatter: (v) => `${v}`,
            },
            title: {
                text: '',
                // style: {
                //     fontSize: 12,
                // },
                // position:'end'
            },
        },
        xAxis:{
            label: {
                formatter: (v) => `${v}月`,
            },
        },
        legend: {
            position: 'top-right',
        },
        // smooth: true,
        // @TODO 后续会换一种动画方式
        animation: {
            appear: {
                animation: 'path-in',
                duration: 2000,
            },
        },
    };

    return <div style={{ width: "100%", height: "100%" }}>
        <Line {...config} style={{ width: "100%", height: "85%" }} />
        <div style={{fontSize:"0.12rem",fontWeight:"bold",width:"100%",margin:"0.1rem 0",padding:"0 15%",
        display:"flex",justifyContent:"space-between",alignItems:"center",color:"rgba(0,0,0,0.5)"}}>
            <span>当前已注册总人数: {obj && obj.registerSum}人</span>
            <span>当前已申报公司总数量：{obj && obj.approveSum} 个</span>
        </div>
    </div>;
})

const ButtonCmt = (bg, color, text) => {
    return (
        <button onClick={() => {
            // openNotification()
        }} style={{
            background: bg,
            color: color,
            fontSize: "0.12rem",
            padding: "0.03rem 0.1rem",
            width: '0.8rem',
            borderRadius: "0.03rem",
            cursor: "pointer"
        }}>{text}</button>
    )
}

function Admin(props) {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [selectedRows, setSelectedRows] = useState([])
    const [tabInx, setTabInx] = useState(1) // tab切换索引

    const [info, setInfo] = useState({})
    const [pendings, setPendings] = useState(0) // 今日待审核
    const [totalRegisters, setTotalRegisters] = useState(0) //总计审核
    const [list, setList] = useState([]) //返回数据集合
    const [total, setTotal] = useState(0)

    const [page, setPage] = useState(1) // 页码

    const [approvalArr, setApproval] = useState([]) // 审核时间
    const [applyArr, setApply] = useState([]) // 申请时间
    const [email, setEmail] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [status, setStatus] = useState("")

    // 业务咨询
    const [company, setCompany] = useState("")
    const [phone, setPhone] = useState("")
    const [consultArr, setConsult] = useState([]) // 咨询时间
    const [content, setContent] = useState("") // 咨询内容
    const [cList, setConsultList] = useState([]) // 返回数据集合
    const [cTotal, setCtotal] = useState(0)


    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setSelectedRowKeys(selectedRowKeys)
            setSelectedRows(selectedRows)
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };


    useEffect(() => {
        document.getElementsByTagName("html")[0].style.overflowX = "hidden"
        document.getElementsByTagName("html")[0].style.overflowY = "scroll"

        const user = localStorage.getItem('user')
        if (JSON.parse(user)) {
            setInfo(JSON.parse(user))
        }
    }, [])

    // tab切换
    useEffect(() => {
        // 清除共用变量
        // setTotal(0)
        setStatus("")
        setPage(0)
        setSelectedRowKeys([])

        if (tabInx == 1) {
            _adminManageList()
        } else if (tabInx == 2) {
            _consultManageList()
        }
    }, [tabInx])

    // 调用接口
    useEffect(() => {
        _todayPendings()
        _totalRegister()
    }, [])

    // 用户管理调用列表
    useEffect(() => {
        _adminManageList()
    }, [page, approvalArr, applyArr, email, companyName, status])

    // 咨询列表
    useEffect(() => {
        _consultManageList()
    }, [status, page, company, phone, content, consultArr])


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

    // 用户管理列表数据
    const _adminManageList = async () => {
        let params = {
            page: page,
            limit: 10,
            email,
            companyName,
            status,
            approvalTimeBegin: approvalArr[0] ? approvalArr[0] : "",
            approvalTimeEnd: approvalArr[1] ? approvalArr[1] : "",
            applyTimeBegin: applyArr[0] ? applyArr[0] : "",
            applyTimeEnd: applyArr[1] ? applyArr[1] : ""
        }
        const res = await adminManageList(params)
        if (res.code === 2000) {

            let arr = res.result.data
            arr && arr.map((item, index) => {
                arr[index].key = item.id
            })
            setList(arr)
            setTotal(res.result.totalRecord)
        }
    }

    // 咨询管理列表数据
    const _consultManageList = async () => {
        const params = {
            limit: 10,
            page,
            phone,
            status,
            consultCompany: company,
            consultContent: content,
            consultTimeBegin: consultArr[0] ? consultArr[0] : "",
            consultTimeEnd: consultArr[1] ? consultArr[1] : "",
        }
        const res = await consultList(params)
        if (res.code === 2000) {
            let arr = res.result.data
            arr && arr.map((item, index) => {
                arr[index].key = item.id
            })
            setConsultList(res.result.data)
            setCtotal(res.result.totalRecord)
        }
    }

    // 启用用户
    const _restartUser = async (id) => {
        const res = await restartUser(id)
        // alert(id) 
        if (res.code === 2000) {
            message.success("操作成功")
            _adminManageList()
        } else {
            message.error("操作失败")
        }
    }

    // 禁用用户
    const _disableUser = async (id) => {
        const res = await disableUser(id)
        if (res.code === 2000) {
            message.success("操作成功")
            _adminManageList()
        } else {
            message.error("操作失败")
        }
    }

    // 通过
    const _passUser = async (arr) => {
        const res = await passUser(arr)
        if (res.code === 2000) {
            message.success("操作成功")
            _adminManageList()
        } else {
            message.error("操作失败")
        }
    }

    // 驳回
    const _rejectUser = async (arr) => {
        const res = await rejectUser(arr)
        if (res.code === 2000) {
            message.success("操作成功")
            _adminManageList()
        } else {
            message.error("操作失败")
        }
    }

    // 已读
    const _readConsult = async (arr) => {
        const res = await readConsult(arr)
        if (res.code === 2000) {
            message.success("操作成功")
            _consultManageList()
        } else {
            message.error("操作失败")
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
            case 4:
                val.name = '已驳回'
                val.color = '#F7372B'
                return val
            case 3:
                val.name = '已通过'
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
            title: '序号',
            render: (text, record, index) => {
                return (
                    <span>
                        {record.id}
                    </span>
                )
            }
        },
        {
            title: '审核状态',
            dataIndex: 'status',
            width: 80,
            render: (text, record, index) => {
                return (
                    <span style={{ color: statusValue(text).color }}>{statusValue(text).name}</span>
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
            render: (text, record) => {
                return (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {/* 待审核 */}
                        {  record.status === 2 && <div style={{ marginBottom: "0.05rem" }}
                            onClick={() => _passUser([record.id])}>
                            {ButtonCmt(ThemeColor, 'white', '通过')}
                        </div>}
                        { record.status === 2 && <div onClick={() => _rejectUser([record.id])}>{ButtonCmt("#FD867F", 'white', '驳回')}</div>}

                        {/* 已通过 */}
                        { record.status === 3 && <div onClick={() => _disableUser(record.id)}>{ButtonCmt("#EFA71C", 'white', '禁用')}</div>}

                        {/* 已禁用 */}
                        { record.status === 5 && <div onClick={() => _restartUser(record.id)}>{ButtonCmt("#418DF5", 'white', '启用')}</div>}
                    </div>

                )
            }
        },
    ];

    const cColumns = [

        {
            title: '序号',
            render: (text, record, index) => {
                return (
                    <span>
                        {record.id}
                    </span>
                )
            }
        },
        {
            title: '咨询状态',
            dataIndex: 'status',
            width: 80,
            render: (text, record, index) => {
                return (
                    <span style={{ color: record.status == 0 ? '#D79727' : ThemeColor }}>
                        {record.status == 0 ? '未读' : '已读'}
                    </span>
                )
            }
        }, {
            title: '公司名称',
            dataIndex: 'consultCompany',
        }, {
            title: '联系方式',
            dataIndex: 'phone',
        }, {
            title: '咨询内容',
            dataIndex: 'consultContent',
        }, {
            title: '咨询时间',
            dataIndex: 'consultTime',
        }, {
            title: '操作人',
            dataIndex: 'operater',
            width: 80
        }, {
            title: '最后操作时间',
            dataIndex: 'updateTime',
            width: 120
        }, {
            title: '操作',
            render: (text, record) => {
                return (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {/* 待审核 */}
                        {  record.status === 0 && <div
                            onClick={() => _readConsult([record.id])}>
                            {ButtonCmt(ThemeColor, 'white', '已读')}
                        </div>}
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
                <Tabs defaultActiveKey="1" onChange={(e) => {
                    // 清除缓存

                    setTabInx(e)
                }} style={{}}>
                    <TabPane tab="用户管理" key="1">
                        <section style={{ padding: "0.1rem 0.3rem" }}>
                            <Form>
                                <Row>
                                    <Form.Item label="用户状态">
                                        <Radio.Group defaultValue="" buttonStyle="solid" onChange={e => setStatus(e.target.value)}>
                                            <Radio.Button value={''}
                                                key={0}>全部</Radio.Button>
                                            <Radio.Button value={2}
                                                key={2}>待审核</Radio.Button>
                                            <Radio.Button value={4}
                                                key={3}>已驳回</Radio.Button>
                                            <Radio.Button value={3}
                                                key={4}>已通过</Radio.Button>
                                            <Radio.Button value={5}
                                                key={5}>已禁用</Radio.Button>
                                        </Radio.Group>

                                    </Form.Item>
                                </Row>
                                <Row>
                                    <Col span={11}>
                                        <Form.Item label="审核日期">
                                            <DatePicker.RangePicker style={{ width: "100%" }} onChange={
                                                (moment, str) => setApproval(str)
                                            } locale={locale} />
                                        </Form.Item>
                                    </Col>
                                    <Col span={2} />

                                    <Col span={11}>
                                        <Form.Item label="申请日期">
                                            <DatePicker.RangePicker style={{ width: "100%" }} onChange={
                                                (moment, str) => setApply(str)
                                            } locale={locale} />                                    </Form.Item>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={11}>
                                        <Form.Item label="申请邮箱">
                                            <Input placeholder="请输入申请的邮箱" onChange={e => { setEmail(e.target.value) }} />
                                        </Form.Item>
                                    </Col>
                                    <Col span={2} />

                                    <Col span={11}>
                                        <Form.Item label="申请公司">
                                            <Input placeholder="请输入申请的公司" onChange={e => { setCompanyName(e.target.value) }} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        </section>
                    </TabPane>
                    <TabPane tab="业务咨询" key="2">
                        <section style={{ padding: "0.1rem 0.3rem" }}>
                            <Form>
                                <Row>
                                    <Form.Item label="咨询状态">
                                        <Radio.Group defaultValue="" buttonStyle="solid" onChange={e => setStatus(e.target.value)}>
                                            <Radio.Button value={''}
                                                key={0}>全部</Radio.Button>
                                            <Radio.Button value={1}
                                                key={2}>已读</Radio.Button>
                                            <Radio.Button value={0}
                                                key={3}>未读</Radio.Button>
                                        </Radio.Group>

                                    </Form.Item>
                                </Row>
                                <Row>
                                    <Col span={11}>
                                        <Form.Item label="咨询日期">
                                            <DatePicker.RangePicker style={{ width: "100%" }} onChange={
                                                (moment, str) => setConsult(str)
                                            } locale={locale} />
                                        </Form.Item>
                                    </Col>
                                    <Col span={2} />

                                    <Col span={11}>
                                        <Form.Item label="咨询内容">
                                            <Input placeholder="请输入咨询内容" onChange={e => { setContent(e.target.value) }} />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={11}>
                                        <Form.Item label="联系方式">
                                            <Input placeholder="请输入联系方式" onChange={e => { setPhone(e.target.value) }} />
                                        </Form.Item>
                                    </Col>
                                    <Col span={2} />

                                    <Col span={11}>
                                        <Form.Item label="公司名称">
                                            <Input placeholder="请输入公司名称" onChange={e => { setCompany(e.target.value) }} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        </section>
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

                        {tabInx * 1 === 1 && <div style={{ marginRight: "0.15rem" }} onClick={() => {
                            let arr = []
                            selectedRows && selectedRows.map((item) => {
                                if (item.status === 2) {
                                    arr.push(item.id)
                                }
                            })
                            _passUser(arr)
                        }}>
                            {ButtonCmt(ThemeColor, 'white', '批量通过')}
                        </div>}
                        {tabInx * 1 === 1 && <div onClick={() => {
                            let arr = []
                            selectedRows && selectedRows.map((item) => {
                                if (item.status === 2) {
                                    arr.push(item.id)
                                }
                            })
                            _rejectUser(arr)
                        }}>
                            {ButtonCmt("#FD867F", 'white', '批量驳回')}
                        </div>}

                        {tabInx * 1 === 2 && <div onClick={() => {
                            let arr = []
                            selectedRows && selectedRows.map((item) => {
                                if (item.status === 0) {
                                    arr.push(item.id)
                                }
                            })
                            _readConsult(arr)
                        }}>
                            {ButtonCmt(ThemeColor, 'white', '批量已读')}
                        </div>}
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
                    <span style={{ margin: '0 0.1rem', color: "#337FFF" }}>{selectedRowKeys.length}</span>
                    <span>项</span>
                    <a style={{ marginLeft: "0.15rem", textDecoration: "underline", color: "#337FFF" }} onClick={() => {
                        setSelectedRowKeys([])
                    }} >清空</a>
                </div>

                {tabInx * 1 === 1 ? <Table style={{}} rowSelection={{
                    type: "checkbox",
                    ...rowSelection
                }} columns={columns} dataSource={list} style={{
                    width: "100%", marginTop: "0.3rem"
                }} bordered pagination={{
                    total: total,
                    onChange: (e) => { setPage(e) },
                }} /> : <Table key={456} rowSelection={{
                    type: "checkbox",
                    ...rowSelection
                }} columns={cColumns} dataSource={cList} style={{
                    width: "100%", marginTop: "0.3rem"
                }} bordered pagination={{
                    total: cTotal,
                    onChange: (e) => { setPage(e) },
                }} />}

            </section>
        </div>
    )
}

export default withRouter(Admin)