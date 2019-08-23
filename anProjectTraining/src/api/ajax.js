import axios from 'axios'

export default function ajax (url, data={}, method='GET') {
    return new Promise((resolve, reject) => {
        // 自定义Promise对象
        let promise
        if (method === 'GET') { // 发送get请求
            promise = axios.get(url, {params: data})
        } else if (method === 'POST') { // 发送post请求
            promise = axios.post(url, data)
        }
        // 根据结果给出响应
        promise
            .then((response) => { // 响应的结果
                resolve(response.data)
            })
            .catch((error) => { // 统一处理失败的结果
                reject(error.message)
            })
    })
} 