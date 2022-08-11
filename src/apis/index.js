import { fetchGadget } from './fetch'

// 注册
export const register = (params) => {
    const url = `/stiacn/user/register`
    return fetchGadget(url, 'POST', params)
}

// 登录
export const login = (params) => {
    const { email, password } = params
    const url = `/stiacn/user/login?email=${email}&password=${password}`
    return fetchGadget(url, 'GET')
}


// 未读消息
export const messageTips = () => {
    const url = `/stiacn/message/tips`
    return fetchGadget(url, 'GET')
}

// 消息读取
export const readMessage = () => {
    const url = `/stiacn/message/enter`
    return fetchGadget(url, 'PUT')
}

// 问题反馈
export const consult = (params) => {
    const url = `/stiacn/consult/save`
    return fetchGadget(url, 'POST', params)
}

// 枚举
export const statusEnum = () => {
    const url = `/stiacn/dict?dictCode=user_status`
    return fetchGadget(url, 'GET')
}


// 管理员 - 今日待审核注册人数
export const todayPending = () => {
    const url = `/stiacn/user/pending`
    return fetchGadget(url, 'GET')
}

// 管理员 - 累计注册人数
export const totalRegister = () => {
    const url = `/stiacn/user/total`
    return fetchGadget(url, 'GET')
}

// 管理员 - 用户管理分页数据
export const adminManageList = (params) => {
    const { page, limit, email, companyName, status, approvalTimeBegin, approvalTimeEnd, applyTimeBegin, applyTimeEnd } = params
    const url = `/stiacn/user/list?page=${page}&limit=${limit}&email=${email}&` +
        `companyName=${companyName}&status=${status}&approvalTimeBegin=${approvalTimeBegin}&` +
        `approvalTimeEnd=${approvalTimeEnd}&applyTimeBegin=${applyTimeBegin}&applyTimeEnd=${applyTimeEnd}`
    return fetchGadget(url, 'GET')
}

// 管理员 - 年数据
export const yearStatistics = () => {
    const url = `/stiacn/user/statistics`
    return fetchGadget(url, 'GET')
}

// 管理员 - 禁用
export const disableUser = (id) => {
    const url = `/stiacn/user/disable?id=${id}`
    return fetchGadget(url, 'PUT')
}

// 管理员 - 启用
export const restartUser = (id) => {
    const url = `/stiacn/user/restart?id=${id}`
    return fetchGadget(url, 'PUT')
}

// 管理员 - 通过
export const passUser = (ids) => {
    const arr = JSON.parse(JSON.stringify(ids))
    var str = ''
    arr && arr.map((item, index) => {
        if (index != arr.length - 1) {
            str += String(item) + ','
        } else {
            str += String(item)
        }
    })
    const url = `/stiacn/user/pass?ids=${str}`
    return fetchGadget(url, 'PUT')
}

// 管理员 - 驳回
export const rejectUser = (ids) => {
    const arr = JSON.parse(JSON.stringify(ids))
    var str = ''
    arr && arr.map((item, index) => {
        if (index != arr.length - 1) {
            str += String(item) + ','
        } else {
            str += String(item)
        }
    })
    const url = `/stiacn/user/reject?ids=${str}`
    return fetchGadget(url, 'PUT')
}

// 管理员 - 咨询列表
export const consultList = (params) => {
    const { page, limit, consultCompany, status, phone, consultContent, consultTimeBegin, consultTimeEnd } = params
    const url = `/stiacn/consult/list?page=${page}&limit=${limit}&` +
        `consultCompany=${consultCompany}&status=${status}&phone=${phone}&consultContent=${consultContent}&` +
        `consultTimeBegin=${consultTimeBegin}&consultTimeEnd=${consultTimeEnd}`
    return fetchGadget(url, 'GET')
}

// 管理员 - 咨询 - 已读
export const readConsult = (ids) => {
    const arr = JSON.parse(JSON.stringify(ids))
    var str = ''
    arr && arr.map((item, index) => {
        if (index != arr.length - 1) {
            str += String(item) + ','
        } else {
            str += String(item)
        }
    })
    const url = `/stiacn/consult/read?ids=${str}`
    return fetchGadget(url, 'PUT')
}

// 普通用户 关注数量
export const attentionInfo = () => {
    const url = `/stiacn/attention/statistics`
    return fetchGadget(url, 'GET')
}

// 普通用户 关注列表
export const attentionList = (params) => {
    const { companyName, industry, page, limit } = params
    const url = `/stiacn/attention/list?page=${page}&limit=${limit}&industry=${industry}&companyName=${companyName}`
    return fetchGadget(url, 'GET')
}

// 普通用户 取消关注
export const cancelAttention = (ids) => {
    const arr = JSON.parse(JSON.stringify(ids))
    var str = ''
    arr && arr.map((item, index) => {
        if (index != arr.length - 1) {
            str += String(item) + ','
        } else {
            str += String(item)
        }
    })
    const url = `/stiacn/attention/cancel?ids=${str}`
    return fetchGadget(url, 'PUT')
}

// 普通用户 关注统计
export const myAttention = () => {
    const url = `/stiacn/attention/myAttention`
    return fetchGadget(url, 'GET')
}

// 普通用户 我的申报
export const myDeclare = () => {
    const url = `/stiacn-app/portrait/company/declare`
    return fetchGadget(url, 'GET')
}

// 普通用户 财务报表 资产负债表
export const getDeclareBalance = (params) => {
    const url = `/stiacn-app/declare/balance`
    return fetchGadget(url, 'POST', params)
}

// 联盟动态
export const getNewsList = (params) => {
    let { page, limit } = params
    const url = `/website/news/list?page=${page}&limit=${limit}`
    return fetchGadget(url, 'GET')
}
