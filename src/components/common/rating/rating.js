import React, { Component } from 'react'
import './rating.less';


class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ALL: 2,
      POSITIVE: 0,
      NEGAITIVE: 1,
    }
    // this.positive = this.positive.bind(this);
    // this.negaitive = this.negaitive.bind(this);
    this.select = this.select.bind(this);
    this.toggleContent = this.toggleContent.bind(this);
  }


  select (type) {
    this.props.transfrom(type)
  }

  toggleContent () {
    this.props.toggleContent(this.props.onlyContent)
  }


  render() { 
    let {ratings }= this.props;
    let positive = [];
    let negative = [];
    if (ratings) {
      ratings.forEach(item => {
        if ( item.rateType === this.state.POSITIVE) {
          positive.push(item)
        } else {
          negative.push(item);
        }
      });
    }
    return (
      <div className="ratingSelect">
        <div className="ratingType">
          <div  className={ "block goodsAll " + (this.props.selectType === 2 ? 'active' : '') } onClick={() =>this.select(2)}>
            <span className="text">{this.props.desc.all}</span>
            <span className="ratingSum">{this.props.ratings ? this.props.ratings.length : 0}</span>
          </div>
          <div className={"block goodPositive " + (this.props.selectType === 0 ? 'active' : '') } onClick={() =>this.select(0)}>
            <span className="text">{this.props.desc.positive}</span>
            <span className="ratingSum">{positive.length}</span>
          </div>
          <div  className={"block goodNegative " + (this.props.selectType === 1 ? 'active' : '') } onClick={() =>this.select(1)}>
            <span className="text">{this.props.desc.negative}</span>
            <span className="ratingSum">{negative.length}</span>
          </div>
        </div>
        <div className="switch">
          <span className={"iconfont icon-gou " + (this.props.onlyContent ? 'active' : '') } onTouchStart={this.toggleContent}></span>
          <span className="text">只看有内容的评价</span>
        </div>
      </div>
    );
  }
}
 
export default Rating;