import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HeadTo from '../common/headTo/headTo';
import './rating.less';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      head:{
        lgShow:true,
        position:false,
        go:'/home/user',
        history:this.props.history
      },
      scroll: {
        listY: [],
        index:0,
        scrollY: 0,
        recordY: 0,
        listH: [],
        warpperEl:'',
        targetEl: ''
      }
    }
    this.onlineScroll = this.onlineScroll.bind(this);
  }

  componentDidMount () {
    let scroll = this.state.scroll;     
    scroll.warpperEl = this.refs.ratingPage;          // 元素初始化
    scroll.targetEl = this.refs.ratingContent;          // 元素初始化
    this.setState({                           // 状态保存
      scroll,
    });
  }
  
  itive (val) {             // 显示 赞和吐槽的UI
    if (val.rateType) {
      return true;
    }
    return false;
  }

  onlineScroll (event) {                 //商品类型 + 商品  滚动效果 
    let type = event.type;
    switch (type) {
      case 'touchstart':
        this.initScrollData(event)
        break;
      case 'touchmove':
        this.startScroll(event)  
        break;
      default:
        this.entScroll()
    }
  }
  
  initScrollData (event) {
    let scroll = this.state.scroll;
    let recordY = scroll.recordY; 
    scroll.initY = Math.ceil(event.changedTouches[0].clientY) + Math.abs(recordY)
    this.setState(scroll);
  }

  startScroll (event) {
    let scroll = this.state.scroll;
    let moveElm = scroll.targetEl;
    scroll.scrollY = scroll.recordY =  Math.ceil(event.changedTouches[0].clientY - scroll.initY)
    this.setState({
      scroll
    })
    if (scroll.scrollY < 0) {
      moveElm.style.transition = 'none';
      moveElm.style.top = Math.ceil(this.state.scroll.scrollY) + 'px';
    } else {
      moveElm.style.transition = 'none';
      moveElm.style.top = Math.ceil(scroll.scrollY) + 'px';
    }
  }

  entScroll () {
    let scroll = this.state.scroll;
    let moveElm = scroll.targetEl;
    if (scroll.scrollY < 0) {
      let YY = scroll.warpperEl.clientHeight - moveElm.scrollHeight;
      if(  moveElm.scrollHeight < scroll.warpperEl.clientHeight) {
        moveElm.style.top = scroll.recordY = 0;
        moveElm.style.transition = 'all 0.2s';
        return;
      }
      if (Math.abs(scroll.scrollY) >= Math.abs(YY)) {
        scroll.recordY = scroll.scrollY = YY;
        moveElm.style.top = YY + 'px';
        moveElm.style.transition = 'all 0.5s';
      }
    } else {
      if (moveElm.getBoundingClientRect().top > 0) {
        moveElm.style.top = scroll.recordY = 0;
        moveElm.style.transition = 'all 0.5s';
      }
    }
    this.setState(scroll);
  }

  render() { 
    return (  
      <div className="ratingPage" ref="ratingPage">
        <HeadTo name='评价' prop={this.state.head} />
          <div className="ratingContent" ref="ratingContent" onTouchStart={(event) =>this.onlineScroll(event)} onTouchMove={(event) =>this.onlineScroll(event)} onTouchEnd={(event) =>this.onlineScroll(event)}>
            <ul className='ratingList'>
              <li className='ratingItem'>
                <div className="r_good">
                  <div className='ratingImg'>
                    <Link to='/collect'>
                      <img  alt=""/>
                    </Link>
                  </div>
                  <div className='ratingDesc'>
                    <h5 className='ratingName'>大白粥米店</h5>
                    <ul className='ratingServer'>
                      <li>￥20</li>
                      <li>
                        <i className='iconfont icon-peisong1'></i>
                        美团专送
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="userRating">
                  <div className="r_content">
                    <div className="r_user">
                      <h6>我的评论:</h6>
                        <p>
                          撒旦法士大夫加快速度尖峰时刻就分手了
                        </p>
                        <p className='time'>
                          <i  className={"iconfont " + (this.itive(true) ? 'icon-zan4' : 'icon-zan')}></i>
                          2018-01-05 12:08:39
                        </p>
                    </div>
                    <div className="r_seller">
                      <h6>商家回复:</h6>
                      <p>
                        速度快回复就开始减肥开始减肥开始的副书记的咖啡机上岛咖啡技术开发
                      </p>
                      <p className='time'>2018-01-05 12:08:39</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
      </div>
    );
  }
}
 
export default Rating;