import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Star from '../../common/star/star';
import './shop.less';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="shop">
        <div className="shopContent">
          <ul className='shopList'>
            <li className='shopItem'>
              <div className='shopImg'>
                <Link to='/collect'>
                  <img  alt=""/>
                </Link>
              </div>
              <div className='shopDesc'>
                <h5 className='shopName'>大白粥米店</h5>
                <Star size='24' score='3.6'/>
                <ul className='shopServer'>
                  <li>起送￥20</li>
                  <li>配送￥10</li>
                  <li>美团专送</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
 
export default Shop;