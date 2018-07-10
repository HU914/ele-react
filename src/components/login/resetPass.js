import React from 'react';
import HeadTo from '../common/headTo';
import './resetPass.less';

class ResetPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      head:{
        lgShow:true,
        history:this.props.history
      }
    }
  }
  render() {
    return (
      <div>
        <HeadTo name='重置密码' show={this.state.head.lgShow} history={this.state.head.history} />
        <p>LISHI</p>
      </div>
    )
  }
}
 
export default ResetPass;