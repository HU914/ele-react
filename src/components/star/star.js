import React, { Component } from 'react';
import './star.less';

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LENGTH: 5,
      CLS_ON: 'on',
      CLS_HALF: 'half',
      CLS_OFF: 'off',
      size:''
    }
  }
  componentDidMount () {
    // this.starType();
    this.itemClasses();
 }
  // starType () {
  //   this.setState(preState => ({
  //     size:
  //   }))
  //   // this.props.size = 'star-' + this.props.size;
  // }

  itemClasses () {
    let result = [];
    let score = Math.floor(this.props.score * 2) / 2;
    let hasDecimal = score % 1 !== 0;
    let integer = Math.floor(score);
    for (let i = 0; i < integer; i++) {
      result.push(this.state.CLS_ON);
    }
    if (hasDecimal) {
      result.push(this.state.CLS_HALF);
    }
    while (result.length < this.state.LENGTH) {
      result.push(this.state.CLS_OFF);
    }
    return result;
  }
  render() { 
    let starConent;
    let data = this.itemClasses();
    starConent = data.map((rating,index) =>{
      // let kEY = 1;
      return (<span key={index} className={rating + " star-item"}></span>)
    })
    return (
      <div  className={ 'star star-' + this.props.size}>
      {/* {this.renStar.bind(this)} */}
      {starConent}
      {/* <span v-for="(itemClass,index) in itemClasses" :key="index" :class="itemClass" class="star-item"></span> */}
    </div>
    );
  }
}
 
export default Start;