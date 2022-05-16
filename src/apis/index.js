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

// 首页 >> 播放全部视频
export const playAllVideo = (terminalId) => {
    const url = `/api/vedio/playAllVedio?terminalId=${terminalId}`
    return fetchGadget(url, 'GET')
}