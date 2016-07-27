import React, { Component } from 'react';

class MyDemo extends Component {
  constructor(){
    super();
    this.state={
      opacity:1,
    }
    // console.log('init');
  }
  render(){
    // console.log('render')
    return(
      <div>
        <h1>demo</h1>
        <div style={this.state}>hello World</div>
      </div>
    )
  }

  componentDidMount(){
    // console.log('did');
    // this.interval = setInterval( this.change.bind(this), 100 );
  }
  componentWillMount(){
    // console.log('will');
  }
  change(){
    this.setState({
      opacity:this.state.opacity>0 ? this.state.opacity-0.1 : 1,
    })
  }
}

MyDemo.defaultProps={
  name:'world'
}
export default MyDemo;
