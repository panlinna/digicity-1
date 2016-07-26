import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import List from './components/List.js';


class App extends Component {
  render(){
    return(
      <div>
        <List />
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'));
