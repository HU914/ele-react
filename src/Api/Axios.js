import Server from './server';

class AXIOS extends Server {
  /** 
  *  用途：登录数据上传
  *  @url http:
  *  success:{code:0}
  *  @method get
  *  @return {promise}
  */
  
async userlLogin (params={}) {                                        // async/await 异步执行所需数据
    try {                                                             //尝试运行代码
      let result = await this.axios('get','',params);        //发送用户数据到后台并获取到返回值
      if (result && result.code === 0){                               // 验证成功，则返回所获取的值
        return result;
      } else {                                                       
        let err = {
          tip: '用户数据错误',
          Response: result,
          data: params,
          url: 'http',
        }
        throw err;                                                     // 验证失败，抛出错误信息
      }
    } catch (err) {                                                    // try运行代码出现错误，进入catch
      throw err;                                                       // 抛出错误信息；
    }
  }
}

export default new AXIOS();