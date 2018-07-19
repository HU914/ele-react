import React,{Component} from 'react';
import store from '../../../store/store';
// import Buy from '../../common/buy/buy';
import './sellerGood.less';

class Good extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: [],
      initY: 0,
      scrollY: 0,
      cartHeight:0,
      listH: [],
      scroll: {
        // menu: {
        //   scrollY: 0,
        //   recordY: 0,
        //   listY: [],
        //   el: this.$refs.menu,
        //   cls: '.menuItem',
        //   parent: '.menu',
        //   index: 0
        // },
        // foods: {
        //   scrollY: 0,
        //   recordY: 0,
        //   listY: [],
        //   el: this.$refs.foods,
        //   cls: '.foodsList',
        //   parent: '.foods'
        // }
      }
    }
    this.initScrollData = this.initScrollData.bind(this);
    this.startScroll = this.startScroll.bind(this);
    this.entScroll = this.entScroll.bind(this);
    this.getCartHeight = this.getCartHeight.bind(this);
    this.fliter = this.fliter.bind(this);
  }

  componentWillMount () {
    let goods = store.getState().sellerCart.sellerCart;
    let scroll = this.state.scroll;
    scroll.el = this.refs.goodItem;
    this.setState({
      scroll,
      goods
    });
  }
  componentDidMount () {
    // console.log(store.getState());
  }
  // ShowBlock () {
  //   if (!this.props.selectFoods.length) {
  //     this.setState({isActive:false});
  //     return;
  //   }
  //   this.setState((prevState) => {
  //     return {isActive:!prevState.isActive}
  //   })
  // }

  fliter (productId) {
    this.state.goods.filter(item => item.productId===productId)
  }

  initScrollData (event) {
    this.setState({initY : Math.ceil(event.changedTouches[0].clientY) + Math.abs(this.state.scroll.recordY)});
  }
  startScroll (event) {
    let moveElm = this.state.scroll.el;
    let scroll = this.state.scroll;
    let scrollY = this.state.scrollY;
    scrollY = scroll.scrollY  = scroll.recordY =  Math.ceil(event.changedTouches[0].clientY - this.state.initY)
    this.setState({
      scroll,
      scrollY
    })
    if (this.state.scroll.scrollY < 0) {
      moveElm.style.transition = 'none';
      moveElm.style.top = Math.ceil(this.state.scroll.scrollY) + 'px';
    } else {
      moveElm.style.transition = 'none';
      moveElm.style.top = Math.ceil(this.state.scroll.scrollY) + 'px';
    }
  }
  entScroll () {
    let moveElm = this.state.scroll.el;
    let cartGoodsH = this.refs.goodsType;
    let ul = this.state.scroll.el.querySelector(this.state.scroll.cls + '>ul');
    let scroll = this.state.scroll;
    if (this.state.scroll.scrollY < 0) {
      let YY = cartGoodsH.clientHeight - this.acquireHeight() - ul.scrollHeight;
      console.log(YY);
      if (Math.abs(this.state.scroll.scrollY) >= Math.abs(YY)) {
        scroll.recordY = scroll.scrollY = YY;
        moveElm.style.top = YY + 'px';
        moveElm.style.transition = 'all 0.2s';
      }
    } else {
      if (moveElm.getBoundingClientRect().top > 174) {
        moveElm.style.top = scroll.recordY = 0;
        moveElm.style.transition = 'all 0.2s';
      }
    }
    this.setState(scroll);
  }
  getCartHeight(H) {
    this.setState({
      cartHeight:H
    })
  }
  foodsBar = () => {
    // <li >
    //   <h1 className="title">套餐</h1>
    //   <ul>
    //     <li  className="foodItem">
    //       <div className="icon">
    //         <img src={require('../../../images/user.png')} alt=''/>
    //       </div>
    //       <div className="f-conent">
    //         <h2 className="name">白粥</h2>
    //         <p className="desc"></p>
    //         <div className="extra">
    //           <span>月售份</span>
    //           <span>好评率%</span>
    //         </div>
    //         <div className="price">
    //           <span>￥<span className="p-price"></span></span>
    //           <span v-if="food.oldPrice" className="p-floor">￥</span>
    //           <Buy getCartHeight={this.acquireHeight.bind(this)} good={this.fliter()}/>
    //         </div>
    //       </div>
    //     </li>
    //   </ul>
    // </li>
  }

  typesBar = () => {
    // <li className="menuItem">
    //   <p className="text">
    //     <span></span>
    //     <span>饮料</span>
    //   </p>
    // </li>
  }
  render() { 

    return (
      <div className="goods" ref='goods'>
        <div className="menu"  ref="menu">
          <ul>
           
          </ul>
        </div>
        <div className="foods" ref="foods">
          <ul>
          
          </ul>
        </div>
      </div>  
    );
  }
}
 
export default Good;