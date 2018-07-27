import React, { Component } from 'react';
import Start from '../../common/star/star';
import './sellerDetail.less';

class SellerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classMap:['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
    this.showGoodsDetail = this.showGoodsDetail.bind(this);
  }

  privilege () {
    let seller = this.props.privilege;
    let privilege = seller.supports.map((item,index) => {
      return (
        <li className="supports-item" key={index}>
          <span className= {"icon " + this.state.classMap[seller.supports[index].type]}></span>
          <span className="text">{seller.supports[index].description}</span>
        </li>
      )
    }) 
    return privilege;
  }

  showGoodsDetail () {
    console.log(1);
    this.props.showGoodsDetail();
  }

  render() { 
    return (
      <div  className="detail">
        <div className="c_warp" >
          <div className="c_c">
            <h1 className="name">木马打火锅</h1>
            <div className="star-warp">
              <Start size="48" score="4.7"/>
            </div>
            <div className="info">
              <p>优惠信息</p>
            </div>
            <ul className="supports">
              {this.privilege()}
            </ul>
            <div className ="info">
              <p>商家公告</p>
            </div>
            <div className="s_in">
              <p>{this.props.privilege.bulletin}</p>
            </div>
          </div>
        </div>
        <div className="detailColse" onClick={this.showGoodsDetail}>
          <span className=" icon iconfont icon-cuowu" ></span>
          </div>
      </div>
    );
  }
}
 
export default SellerDetail;