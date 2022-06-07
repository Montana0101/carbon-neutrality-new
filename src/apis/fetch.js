import {ProxyUrl} from '../lib/const'
var myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')
myHeaders.append('token',JSON.parse(localStorage.getItem('user')).token)
// fetch封装
export const fetchGadget = (url, method, params) => {
    let _url = `${ProxyUrl}${url}`
    // store.dispatch({
    //     type: 'LOADING_START'
    // })

    return fetch(_url, {
        method: method,
        headers: myHeaders,
        body: JSON.stringify(params)
    }).then(res => {
        // store.dispatch({
        //     type: "LOADING_END"
        // })
        return res.json()
    }).then(res => {
        return res
    })
}