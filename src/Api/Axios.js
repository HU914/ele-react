import Server from './server';
import '../mockJs/mock';

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
      let result = await this.axios('post','/user/signup/',params);        //发送用户数据到后台并获取到返回值
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
  /**
  *  用途：获取验证码
  *  @url http:
  *  success:{code:0}
    */
  async verifyImg (params={}) {
    try {
      let result = await this.axios('post','/user/imagecode/');
      if (result && result.code === 0) {
        return result;
      } else {
        let err = {
          tip: 'T图片接收失败',
          Response: result,
          data: params,
          url: 'http',
        }
        throw err;   
      }
    }  catch (err) {                                                    // try运行代码出现错误，进入catch
      throw err;                                                       // 抛出错误信息；
    }
  }

  async getSite (params={}) {
    try {
      let result = await this.axios('get','http://restapi.amap.com/v3/ip?key=4b5a60a2b9f51d7de51b938dbd3d5866');
      if (result) {
        return result;
      } 
      else {
        let err = {
          tip: '位置接收失败',
          Response: result,
          data: params,
          url: 'http',
        }
        throw err;
      }
    } 
    catch (err){
      throw(err);
    }
  }
  /**
   * 
  */
  async getTest (params={}) {
    try {
      let result = await this.axios('get',' http://106.12.22.19');
      if (result) {
        return result;
      } 
      else {
        let err = {
          tip: '位置接收失败',
          Response: result,
          data: params,
          url: 'http',
        }
        throw err;
      }
    } 
    catch (err){
      throw(err);
    }
  }

  async getSellerMesaage (params={}) {
    try {
      let result = await this.axios('get',' http://106.12.22.19');
      if (result) {
        return result;
      } 
      else {
        let err = {
          tip: '位置接收失败',
          Response: result,
          data: params,
          url: 'http',
        }
        throw err;
      }
    } 
    catch (err){
      throw(err);
    }
  }
}





export default new AXIOS();