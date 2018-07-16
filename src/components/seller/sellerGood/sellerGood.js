import React,{Component} from 'react';
import './sellerGood.less';

class Good extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="goods" ref='goods'>
        <div className="menu"  ref="menu">
          <ul>
            <li className="menuItem">
              <p className="text">
                <span></span>
                <span>饮料</span>
              </p>
            </li>
            <li className="menuItem">
              <p className="text">
                <span></span>
                <span>饮料</span>
              </p>
            </li>
            <li className="menuItem">
              <p className="text">
                <span></span>
                <span>饮料</span>
              </p>
            </li>
            <li className="menuItem">
              <p className="text">
                <span></span>
                <span>饮料</span>
              </p>
            </li>
            <li className="menuItem">
              <p className="text">
                <span></span>
                <span>饮料</span>
              </p>
            </li>
            <li className="menuItem">
              <p className="text">
                <span></span>
                <span>饮料</span>
              </p>
            </li>
            <li className="menuItem">
              <p className="text">
                <span></span>
                <span>饮料</span>
              </p>
            </li>
            <li className="menuItem">
              <p className="text">
                <span></span>
                <span>饮料</span>
              </p>
            </li>
            <li className="menuItem">
              <p className="text">
                <span></span>
                <span>饮料</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="foods" ref="foods">
          <ul>
            <li >
              <h1 className="title">套餐</h1>
              <ul>
                <li  className="foodItem">
                  <div className="icon">
                    <img src={require('../../../images/user.png')} alt=''/>
                  </div>
                  <div className="f-conent">
                    <h2 className="name">白粥</h2>
                    <p className="desc"></p>
                    <div className="extra">
                      <span>月售份</span>
                      <span>好评率%</span>
                    </div>
                    <div className="price">
                      <span>￥<span className="p-price"></span></span>
                      <span v-if="food.oldPrice" className="p-floor">￥</span>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>  
    );
  }
}
 
export default Good;