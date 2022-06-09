
import { useState, useEffect, useRef, useMemo, memo } from "react"
import { withRouter, useHistory } from 'react-router-dom';
import {
    todayPending, totalRegister, consultList, adminManageList, yearStatistics,
    attentionList,attentionInfo
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
    const [obj, setObj] = useState({})

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
            console.log("但啊啊尽快那就开始", res.result)
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
        xAxis: {
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
        <div style={{
            fontSize: "0.12rem", fontWeight: "bold", width: "100%", margin: "0.1rem 0", padding: "0 15%",
            display: "flex", justifyContent: "space-between", alignItems: "center", color: "rgba(0,0,0,0.5)"
        }}>
            <span>当前已注册总人数: {obj && obj.registerSum}人</span>
            <span>当前已申报公司总数量：{obj && obj.approveSum} 个</span>
        </div>
    </div>;
})

const ButtonCmt = (bg, color, text, w = '0.8rem') => {
    return (
        <button onClick={() => {
            openNotification()
        }} style={{
            background: bg,
            color: color,
            fontSize: "0.12rem",
            padding: "0.03rem 0.1rem",
            width: w,
            borderRadius: "0.03rem",
            cursor: "pointer",
            border: `0.01rem solid ${color}`
        }}>{text}</button>
    )
}

function CommonUser(props) {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [selectedRows, setSelectedRows] = useState([])
    const [tabInx, setTabInx] = useState(1) // tab切换索引

    const [info, setInfo] = useState({})
    const [list, setList] = useState([]) //返回数据集合
    const [attention,setAttention] = useState({})

    const [total, setTotal] = useState(0)

    const [page, setPage] = useState(1) // 页码
    const [companyName, setCompanyName] = useState("")
    const [status, setStatus] = useState("")

    // 业务咨询
  


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
    // useEffect(() => {
    //     // 清除共用变量
    //     // setTotal(0)
    //     setStatus("")
    //     setPage(0)
    //     setSelectedRowKeys([])

    //     if (tabInx == 1) {
    //         _adminManageList()
    //     } else if (tabInx == 2) {
    //         _consultManageList()
    //     }
    // }, [tabInx])

    // 调用接口
    useEffect(() => {
        _attentionInfo()
    }, [])

    // 用户管理调用列表
    useEffect(() => {
        _attentionList()
    }, [page, companyName, status])

    const _attentionList = async () => {
        const params = {
            page,
            industry: status,
            companyName,
            limit: 10
        }
        const res = await attentionList(params)
        if (res.code === 2000) {
            setList(res.result.data)
            setTotal(res.result.totalRecord)
        }
    }

    // 关注的信息
    const _attentionInfo = async () => {
        const res = await attentionInfo()
        if (res.code === 2000) {
            setAttention(res.result)
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
        }, {
            title: '公司名称',
            dataIndex: 'companyName',
        }, {
            title: '关注时间',
            dataIndex: 'attentionTime',
        }, {
            title: '操作',
            width:200,
            render: (text, record) => {
                return (
                    <div style={{ display: "flex",justifyContent:"space-around" }}>
                        <div style={{ marginBottom: "0.05rem" }}
                            >
                            {ButtonCmt('white', ThemeColor, '查看详情')}
                        </div>
                        <div onClick={() => { }}>{ButtonCmt("#FD867F", 'white', '取消关注')}</div>
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
                                <div style={{ color: "rgba(0,0,0,0.5)", fontSize: "0.12rem" }}>公司今日收到的关注</div>
                                <div style={{ alignSelf: "flex-end", display: "flex", alignItems: "center", marginBottom: "0.07rem" }}>
                                    <span style={{ fontSize: "0.2rem" }}>{attention && attention.current}</span>
                                    <span style={{ fontSize: "0.12rem", marginTop: "0.03rem" }}>个</span>
                                </div>
                            </section>
                            <section style={{
                                background: "white", marginBottom: "0.05rem", flex: 1,
                                padding: "0.1rem", boxSizing: "border-box", display: "flex",
                                flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start"
                            }}>
                                <div style={{ color: "rgba(0,0,0,0.5)", fontSize: "0.12rem" }}>公司累计收到的关注</div>
                                <div style={{ alignSelf: "flex-end", display: "flex", alignItems: "center", marginBottom: "0.07rem" }}>
                                    <span style={{ fontSize: "0.2rem" }}>{attention && attention.total}</span>
                                    <span style={{ fontSize: "0.12rem", marginTop: "0.03rem" }}>个</span>
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
                    if (e * 1 == 2) {
                        message.warn("功能未开放")
                    }
                    // alert(e)
                }} style={{}}>
                    <TabPane tab="我的关注" key="1">
                        <section style={{ padding: "0.1rem 0.3rem" }}>
                            <Form>
                                <Row>
                                    <Col span={11}>
                                        <Form.Item label="公司名称">
                                            <Input placeholder="请输入公司名称" onChange={e => { setCompanyName(e.target.value) }} />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row>
                                    <Form.Item label="行业分类">
                                        <Radio.Group defaultValue="" buttonStyle="solid" onChange={e => setStatus(e.target.value)}>
                                            <Radio.Button value={''}
                                                key={0}>全部</Radio.Button>
                                            <Radio.Button value={0}
                                                key={2}>农、林、牧、渔业</Radio.Button>
                                            <Radio.Button value={1}
                                                key={3}>采矿业</Radio.Button>
                                            <Radio.Button value={2}
                                                key={4}>制造业</Radio.Button>
                                            <Radio.Button value={3}
                                                key={5}>电力、热力、燃气及水生产和供应业</Radio.Button>
                                            <Radio.Button value={4}
                                                key={6}>建筑业</Radio.Button>
                                            <Radio.Button value={5}
                                                key={7}>批发和零售业</Radio.Button>
                                        </Radio.Group>

                                    </Form.Item>
                                </Row>
                            </Form>
                        </section>
                    </TabPane>
                    <TabPane tab="我的申报" key="2">
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


                        {tabInx * 1 === 1 && <div onClick={() => {
                            let arr = []
                            selectedRows && selectedRows.map((item) => {
                                if (item.status === 2) {
                                    arr.push(item.id)
                                }
                            })
                            // _rejectUser(arr)
                        }}>
                            {ButtonCmt("#FD867F", 'white', '批量取消关注', '1.1rem')}
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

                {tabInx * 1 === 1 && <div style={{
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
                </div>}

                {tabInx * 1 === 1 && <Table style={{}} rowSelection={{
                    type: "checkbox",
                    ...rowSelection
                }} columns={columns} dataSource={list} style={{
                    width: "100%", marginTop: "0.3rem"
                }} bordered pagination={{
                    total: total,
                    onChange: (e) => { setPage(e) },
                }} />
                    //  <Table key={456} rowSelection={{
                    //     type: "checkbox",
                    //     ...rowSelection
                    // }} columns={cColumns} dataSource={cList} style={{
                    //     width: "100%", marginTop: "0.3rem"
                    // }} bordered pagination={{
                    //     total: cTotal,
                    //     onChange: (e) => { setPage(e) },
                    // }} />
                }

            </section>
        </div>
    )
}

export default withRouter(CommonUser)