import React from 'react';
import {Link} from 'react-router-dom';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import './seller.less';
import Start from '../common/star/star'

class Goods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [1, 2, 3, 4],
    }
  }
  componentDidMount() {
    new Swiper(this.swiperID, {
      pagination: {
        el: this.paginateID,
      },
    });
  }
  render() {
    return (
      <div className="sellerMain">
        <section className="swiper-container" ref={self => this.swiperID = self}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="s_content">
                <div className="goodsItem">
                  <Link to=''>
                    <img className='goodsImg' src={require('../../images/user.png')} alt="" />
                    <p className='imgText'>ttrr</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="s_content">
               
              </div>
            </div>
          </div>
          <div className="swiper-pagination" ref={self => this.paginateID = self}></div>
        </section>
        <div className="sellers">
          <h5 className='title'>
            <i className='iconfont icon-shouye'></i>
            附近商家
          </h5>
          <div className="s_seller">
            <div className="sellerImg">
              <Link to='/shop'>
                <img className='s_img' src={require('../../images/user.png')} alt="" />
              </Link>
            </div>
            <div className="s_desc">
              <p className='title'>十三香</p>
              <Start size='24' score='3.6'></Start>
              <p className='rating'>
              <span>4.7</span>
              <span>月售106单</span>
              </p>
              <p className='delivery'>
                <span>¥20起送 /</span>
                <span>配送费约¥5</span>
              </p>
            </div>
            <div className="s_server">
              <p className="pledge">保准票</p>
              <p className="time_pledge">
                <span>蜂鸟专送</span>
                <span>准时达</span>
              </p>
              <p className="distance_time">
                <span>0</span>
                <span></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Goods;