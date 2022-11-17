import { ProxyUrl } from '../lib/const'

import { message } from 'antd'

var myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')
if (JSON.parse(localStorage.getItem('user'))) {
    myHeaders.append('token', JSON.parse(localStorage.getItem('user')).token)

}
// fetch封装
export const fetchGadget = (url, method, params) => {
    let _url = `${ProxyUrl}${url}`
    // store.dispatch({
    //     type: 'LOADING_START'
    // })

    // if (url.indexOf('/news/list')!= -1) {
    //     _url = `https://website.stiacn.com${url}`
    // }

    return fetch(_url, {
        method: method,
        headers: myHeaders,
        body: JSON.stringify(params)
    }).then(res => {
        // store.dispatch({
        //     type: "LOADING_END"
        // })
        console.log("打一把你的撒九年",res)
        return res.json()
    }).then(res => {
        if(res.code===2002){
            message.warn(res.msg)
            return 
        }
        return res
    }).catch(e => {
        setTimeout(() => {
            // window.location.href='/'
        }, 500)
    })
}