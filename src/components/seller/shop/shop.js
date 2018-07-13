import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import GoodsHead from '../goodsHead/goodHead';
import './shop.less';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="good_warper">
        <GoodsHead/>
        <div className="tab">
          <Link tag="li" to= "/goods" className="tab-item">商品</Link>
          <Link tag="li" to= "/ratings" className="tab-item">评论</Link>
          <Link tag="li" to= "/seller" className="tab-item">商家</Link>
        </div>
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
          {/* <cart ref="cart"></cart>
          <goodsDetail ref="goodWrapper"></goodsDetail> */}
        </div>
      </div>
    );
  }
}
 
export default Shop;