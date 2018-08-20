import React from 'react';
import './search.less';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div className="search">
        <form>
          <input type="text" id='search'/>
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}
 
export default Main;