import React from 'react'

import Child from './components/Child.js';
import Boot from './components/Bootstrap.js';

class App extends React.Component {
  render () {
    return(
      <div>
        <h1>我是App</h1>
        <Boot />
        <Child>
          <a href="#">Facebook</a>
          <a href="#">Google</a>
          <a href="#">SpaceX</a>
        </Child>
      </div>
    )
  }
}

export default App;
