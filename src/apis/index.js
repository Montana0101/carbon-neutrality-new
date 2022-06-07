import {fetchGadget} from './fetch'

// 注册
export const shutVideos = (terminalId, channel) => {
    const url = `/api/vedio/stopAllVedio?terminalId=${terminalId}&channels=${channel}`
    return fetchGadget(url,'PUT')
}

// 注册
export const register = (params) => {
    const url = `/stiacn/user/register`
    return fetchGadget(url, 'POST', params)
}

// 登录
export const login = (params) => {
    const {email,password} = params 
    const url = `/stiacn/user/login?email=${email}&password=${password}`
    return fetchGadget(url, 'GET')
}


// 问题反馈
export const consult = (params) => {
    const url = `/stiacn/consult/save`
    return fetchGadget(url, 'POST', params)
}

// 管理员 今日待审核注册人数
export const todayPending = () => {
    const url = `/stiacn/user/pending`
    return fetchGadget(url, 'GET')
}