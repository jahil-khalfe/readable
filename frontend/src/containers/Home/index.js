import React, {Component} from 'react';
import {config} from '../../../package.json';

class Home extends Component {
  render(){
    return(
      <div>
        <pre>{config.authorization}</pre>
      </div>
    );
  }
}

export default Home;