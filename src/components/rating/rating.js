import React, { Component } from 'react'
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
    }
  }
  render() { 
    return (  
      <div className="rating">
        <HeadTo name='' prop={this.state.head} />
        <div className="r_content">
          <ul className='r_list'>
            <li className='r_item'>
              tt
            </li>
          </ul> 
        </div>
      </div>
    );
  }
}
 
export default Rating;