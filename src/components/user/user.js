import React from 'react';
import HeadTo from '../common/headTo';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <HeadTo></HeadTo>
        <div className="user">
          <div className="userBase">
            <div className="userImg">
            </div>
            <div className="userIphone">
            </div>
          </div>
          <div className="userNumber">
            <div className="u_number">
              <p><span></span></p>
              <span></span>
            </div>
          </div>
          <div className="userNumber">
            <div className="u_number">
              <p><span></span></p>
              <span></span>
            </div>
          </div>
          <div className="userNumber">
            <div className="u_number">
              <p><span></span></p>
              <span></span>
            </div>
          </div>
          <div className="userBar">
            <ul>
              <li><i></i></li>
              <li><i></i></li>
              <li><i></i></li>
            </ul>
          </div>
          <div className="userServer">
            <ul>
              <li><i></i></li>
              <li><i></i></li>
              <li><i></i></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
 
export default User;