import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import BlogList from './components/BlogList.js';


class App extends Component {
  render(){

    return(
      <div>
        <BlogList />
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'));
