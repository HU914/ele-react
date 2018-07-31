import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Star from '../../common/star/star';
import './good.less';

class Good extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="good">
        <div className="goodContent">
          <ul className='goodList'>
            <li className='goodItem'>
              <div className='goodImg'>
                <Link to='/collect'>
                  <img  alt=""/>
                </Link>
              </div>
              <div className='goodDesc'>
                <h5 className='goodName'>小炒肉</h5>
                <Star size='24' score='3.6'/>
                <ul className='goodServer'>
                  <li>￥20</li>
                  <li>
                    <i className='iconfont icon-peisong1'></i>
                    美团专送
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
 
export default Good;