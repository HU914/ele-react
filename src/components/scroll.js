const scrollJs = {
  onlineScroll: function (event) {                 //商品类型 + 商品  滚动效果 
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
  },
  initScrollData: function (event) {
    let scroll = this.state.scroll;
    let recordY = scroll.recordY; 
    scroll.initY = Math.ceil(event.changedTouches[0].clientY) + Math.abs(recordY)
    this.setState(scroll);
  },
  startScroll: function (event) {
    let scroll = this.state.scroll;
    let moveElm = scroll.targetEl;
    scroll.scrollY = scroll.scrollY =  Math.ceil(event.changedTouches[0].clientY - scroll.initY)
    this.setState({
      scroll
    })
    if (scroll.scrollY < 0) {
      moveElm.style.position = 'relative';
      moveElm.style.transition = 'none';
      moveElm.style.top = Math.ceil(this.state.scroll.scrollY) + 'px';
    } else {
      moveElm.style.transition = 'none';
      moveElm.style.top = Math.ceil(scroll.scrollY) + 'px';
    }
  },
  entScroll: function () {
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
 }

 export default scrollJs;
