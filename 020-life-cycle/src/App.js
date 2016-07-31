import React from 'react';

// import MyDemo from './components/MyDemo.js';
// import LifeCycle from './components/LifeCycle.js';
import DestroyComponent from './components/DestroyComponent.js';

class App extends React.Component {
  render () {
    return(
      <div>
        <h1>App</h1>
        <DestroyComponent />
      </div>
    )
  }
}

export default App;
