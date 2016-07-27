import React from 'react';

import LifeCycle from './components/LifeCycle.js';
import DestroyComponent from './components/DestroyComponent.js';
import MyDemo from './components/MyDemo.js';

class App extends React.Component {
  render () {
    return(
      <div>
        <h1>App</h1>
        <LifeCycle />
        <DestroyComponent />
        <MyDemo />
      </div>
    )
  }
}

export default App;
