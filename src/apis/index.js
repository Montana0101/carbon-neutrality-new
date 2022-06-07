import { fetchGadget } from './fetch'

// 注册
export const shutVideos = (terminalId, channel) => {
    const url = `/api/vedio/stopAllVedio?terminalId=${terminalId}&channels=${channel}`
    return fetchGadget(url, 'PUT')
}

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

// 管理员

// 今日待审核注册人数
export const todayPending = () => {
    const url = `/stiacn/user/pending`
    return fetchGadget(url, 'GET')
}

// 累计注册人数
export const totalRegister = () => {
    const url = `/stiacn/user/total`
    return fetchGadget(url, 'GET')
}

// 用户管理分页数据
export const adminManageList = (parmas) => {
    const { page, limit, email, companyName, status, approvalTimeBegin, approvalTimeEnd, applyTimeBegin, applyTimeEnd } = parmas
    const url = `/stiacn/user/list?page=${page}&limit=${limit}&email=${email}&` +
        `companyName=${companyName}&status=${status}&approvalTimeBegin=${approvalTimeBegin}&` +
        `approvalTimeEnd=${approvalTimeEnd}&applyTimeBegin=${applyTimeBegin}&applyTimeEnd=${applyTimeEnd}`
    return fetchGadget(url, 'GET')
}

// 年数据
export const yearStatistics = () => {
    const url = `/stiacn/user/statistics`
    return fetchGadget(url, 'GET')
}