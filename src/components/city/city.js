import React, { Component } from 'react';
import {connect} from 'react-redux';
import {recordSite} from '../../store/cart/actions';
import HeadTo from '../common/headTo/headTo'
import './city.less';

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      head:{
        lgShow:false,
        position:false,
        city:true,
        history:this.props.history
      },
      scroll: {
        listY: [],
        index:0,
        scrollY: 0,
        recordY: 0,
        listH: [],
        cityList:'',
        menu: this.refs.c_left,
        foods: this.refs.c_right
      }
    }
    this.onlineScroll = this.onlineScroll.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.selectCity = this.selectCity.bind(this);
  }
  
  componentDidMount () {
    let scroll = this.state.scroll;     
    scroll.cityList = this.refs.cityList;          // 元素初始化
    scroll.menu = this.refs.c_left;          // 元素初始化
    scroll.foods = this.refs.c_right;        
    this.setState({                           // 状态保存
      scroll,
    });
    this.calculateHeight();  // 初始化商品栏高度数据
    this.switchMenuIndex(); //初始化菜单栏 选中状态
  }

  selectCity (event) {
    let val = event.target.textContent;
    this.props.recordSite(val);
    this.props.history.push('./home');
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
    let moveElm = scroll.menu;
    scroll.scrollY = scroll.scrollY =  Math.ceil(event.changedTouches[0].clientY - scroll.initY)
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
    let moveElm = scroll.menu;
    if (scroll.scrollY < 0) {
      let YY = scroll.cityList.clientHeight - moveElm.scrollHeight;
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

  calculateHeight () {
    let height = 0;
    let scroll = this.state.scroll;
    let foodList = scroll.cityList.querySelectorAll('.heightItem'); // 获取商品栏 各大类  高度   
    scroll.listH = [];// 存储 高度，用于和 判断选中 菜单
    scroll.listY = [];
    this.setState({
      scroll
    })
    for (let i = 0; i < foodList.length; i++) {
      let item = foodList[i];
      height += item.clientHeight;
      scroll.listY.push(height);
      scroll.listH.push(height);
    };
    this.setState({
      scroll                        // 存储 高度，用于和 判断选中 菜单
    })
  }

  switchMenuIndex () {            // 利用 商品栏滚动高度 和 菜单栏index对应的商品栏高度 判断处于某个菜单类 
    let scroll = this.state.scroll;
    for (let i = 0; i < scroll.listH.length; i++) {
      let height = scroll.listH[i];
      if (Math.abs(scroll.scrollY) <= height) {
        scroll.index = i;
        this.setState(scroll)
        return;                 // 只要 进入一次，就打断，保证在某高度内  输出同一个index
      }
    }
  }

  toggleNav (index) {         // 菜单栏 点击 切换商品栏滚动高度
    this.calculateHeight();   // 实时获取高度
    let scroll = this.state.scroll;
    let scrollFoods = scroll.menu;
    if (index === 0) {
      scrollFoods.style.top = 0 + 'px';
      scrollFoods.style.transition = 'all 0.2s';
      scroll.recordY = 0
      scroll.scrollY = 0
      scroll.index = index;
      this.setState( preState => ({
        scroll
      }))
    } else {                      // index 大于 0 时，商品大类为第二个大类，这时滚动距离应为第一个大类的高度
      let itemIndex = index - 1; // 所以获取的高度应为当前 index的前一个数据，这里 index-1
      scroll.index = index;
      scroll.recordY = scroll.listH[itemIndex];
      scroll.scrollY = scroll.listH[index];
      scrollFoods.style.top = -scroll.listH[itemIndex] + 'px';
      scrollFoods.style.transition = 'all 0.2s';
      this.setState( preState => ({
        scroll          //保存状态
      }))
    }
  }
  render() { 
    return (
      <div className="city">
        <HeadTo name='选择城市' prop={this.state.head} />
        <div className="cityList" ref='cityList'>
          <div className="c_warpper">
            <div className="c_left" ref="c_left" onTouchStart={(event) =>this.onlineScroll(event)} onTouchMove={(event) =>this.onlineScroll(event)} onTouchEnd={(event) =>this.onlineScroll(event)}>
              <div className="current_prosition heightItem">
                <h4 className='title'>当前城市</h4>
                <div className='c_p'>
                  <i className='iconfont icon-dizhi'></i>
                  <span className='position'>重庆</span>
                </div>
              </div>
              <div className="hotCity heightItem">
                <h4 className='title'>热门城市</h4>
                <div className="h_c">
                  <ul className='cityItem'>
                    <li className='c_item'>
                      <span className='c_city' onClick={this.selectCity}>重庆</span>
                    </li>
                    <li className='c_item'>
                      <span className='c_city' onClick={this.selectCity}>重庆</span>
                    </li>
                    <li className='c_item'>
                      <span className='c_city' onClick={this.selectCity}>重庆</span>
                    </li>
                    <li className='c_item'>
                      <span className='c_city' onClick={this.selectCity}>重庆</span>
                    </li>
                  </ul>
                  <ul className='c_area'>
                    <li className='c_item'>
                      <span className='c_city' onClick={this.selectCity}>重庆</span>
                    </li>
                    <li className='c_item'>
                      <span className='c_city' onClick={this.selectCity}>重庆</span>
                    </li>
                    <li className='c_item'>
                      <span className='c_city' onClick={this.selectCity}>重庆</span>
                    </li>
                    <li className='c_item'>
                      <span className='c_city' onClick={this.selectCity}>重庆</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="c_list heightItem">
                <h4 className='c_title'>A</h4>
                <ul className='cityItem'>
                  <li className='c_item'>
                    <span className='c_city' onClick={this.selectCity}>重庆</span>
                  </li>
                  <li className='c_item'>
                    <span className='c_city' onClick={this.selectCity}>重庆</span>
                  </li>
                  <li className='c_item'>
                    <span className='c_city' onClick={this.selectCity}>重庆</span>
                  </li>
                  <li className='c_item'>
                    <span className='c_city' onClick={this.selectCity}>重庆</span>
                  </li>
                </ul>
                <ul className='c_area'>
                  <li className='c_item'>
                    <span className='c_city' onClick={this.selectCity}>重庆</span>
                  </li>
                  <li className='c_item'>
                    <span className='c_city' onClick={this.selectCity}>重庆</span>
                  </li>
                  <li className='c_item'>
                    <span className='c_city' onClick={this.selectCity}>重庆</span>
                  </li>
                  <li className='c_item'>
                    <span className='c_city' onClick={this.selectCity}>重庆</span>
                  </li>
                </ul>
              </div>
              <div className="c_list heightItem">
                <h4 className='c_title'>A</h4>
                <ul className='cityItem'>
                  <li className='c_item'>
                    <span className='c_city' onClick={this.selectCity}>重庆</span>
                  </li>
                  <li className='c_item'>
                    <span className='c_city' onClick={this.selectCity}>重庆</span>
                  </li>
                  <li className='c_item'>
                    <span className='c_city' onClick={this.selectCity}>重庆</span>
                  </li>
                  <li className='c_item'>
                    <span className='c_city' onClick={this.selectCity}>重庆</span>
                  </li>
                </ul>
                <ul className='c_area'>
                  <li className='c_item'>
                    <span className='c_city' onClick={this.selectCity}>重庆</span>
                  </li>
                  <li className='c_item'>
                    <span className='c_city' onClick={this.selectCity}>重庆</span>
                  </li>
                  <li className='c_item'>
                    <span className='c_city' onClick={this.selectCity}>重庆</span>
                  </li>
                  <li className='c_item'>
                    <span className='c_city' onClick={this.selectCity}>重庆</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="c_right">
              <ul className='r_letter'>
                <li onTouchEnd={() => this.toggleNav(0)} className={"c_letter " + ( this.state.scroll.index === 0 ? 'l_active' : '')}>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(1)} className='c_letter'>
                  <span className='c_l'>A</span>
                </li>
                <li onTouchEnd={() => this.toggleNav(3)} className={"c_letter " + ( this.state.scroll.index === 3 ? 'l_active' : '')}>
                  <span className='c_l'>z</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default connect(state =>({

}),{
  recordSite
})(City);