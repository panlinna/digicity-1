import React , { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="app-wrap">
        <Link to="/about" />
        {this.props.children}
        <div>My Footer</div>
      </div>
    );
  }
}
export default App;
