import React, { Component } from 'react';

class MyDemo extends Component {
  constructor(){
    super();
    this.state={
      opacity:1,
    }
    // alert('init');
  }
  render(){
    return(
      <div>
        <h1>demo</h1>
        <div style={this.state}>{this.props.name}</div>
      </div>
    )
  }

  componentWillMount(){
    // alert('will');
  }
  componentDidMount(){
    // alert('did');
    this.interval = setInterval( this.change.bind(this), 100 );
  }
  change(){
    this.setState({
      opacity:this.state.opacity>0 ? this.state.opacity-0.1 : 1
    })
  }
}

MyDemo.defaultProps={
  name:'world'
}
export default MyDemo;
