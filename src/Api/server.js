import axios from 'axios';                    // 引入获取数据API

let baseURL;                                // 定义数据交互请求前缀
// let imgUrl = '//elm.cangdu.org/img/';       // 定义图片请求前缀
if(process.env.NODE_ENV === 'development'){   // 判断系统环境是否
  baseURL = '//api.cangdu.org';               // 开发环境的baseURL
}else{
  baseURL = '//api.cangdu.org';               // 生产环境的baseURL
}

export default class Server {                     // 默认输出 Server类
  axios(method,url,params) {                      // 初始化axios配置
    return new Promise ((resolve, reject) => {    // 返回一个新的promise对象 resolve：异步操作执行成功后的回调函数，reject:异步操作执行失败后的回调函数
      if (typeof params !== 'object') params = {};// 判断参数params类型，并初始化params
      let AxiosConfig = params;                   // 初始化axios公共配置
      AxiosConfig = {
        method,                   /* 注意：params中的数据会覆盖method url 参数，所以如果指定了这2个参数则不需要在params中带入 */
        url,
        baseURL:baseURL,
        timeout:30000,                            // 请求超时时间 默认 30000
        params:null,                              // params {object} get方式传参key值
        data:null,                                // data {object} post、put、patch方式传参key值
        headers:null,                             // 指定请求头{string}
        withCredentials:true,                     // 是否携带本地cookie
        validateStatus:(status)=>{         //如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
          return status >= 200 && status < 300;
        },
        ...params,                                //外界传参
      }
      axios.request(AxiosConfig).then(res => {    // 发送请求
        console.log(res.data);
        resolve(typeof res.data === 'object' ? res.data : JSON.parse(res.data)) // 请求成功，promise resolve，服务端返回响应数据
      },error =>{                                                               
        if (error.response) {
          reject(error.response.data,'请求失败')                                          // 请求成功，promise reject, 状态为失败，服务端返回失败响应数据，
        } else {
          reject(error,'请求未成功')                                                       // 请求失败，promise reject, API返回失败原因 
        }
      })
    })
  }
}