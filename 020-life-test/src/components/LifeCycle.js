import React, { Component } from 'react';

class LifeCycle extends Component {
  constructor(){
    super();
    this.state={
      num:0
    }
  }
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps',nextProps);
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdate',nextProps,nextState);
    if (nextState.num>5) {
      return false;
    }else {
      return true;
    }
  }
  componentWillUpdate(nextProps,nextState){
    console.log('componentWillUpdate',nextProps,nextState);
  }
  render() {
    console.log('render');
    return (
      <div>
        <p>state数字为：{this.state.num}</p>
        <p>props值为：{this.props.value}</p>
      </div>
    )
  }
  componentDidMount() {
    console.log('componentDidMount');
    // console.log(this.props.value);
    //这里注释掉了，打开后会console 出（shouldComponentUpdate,componentWillUpdate）
    // this.interval = setInterval( this.tick.bind(this), 5000 );
  }
  tick(){
    this.setState({
      num:this.state.num+1,
    })
  }
  componentDidUpdate(prevProps,prevState) {
    console.log('componentDidUpdate',prevProps,prevState);
  }
}
LifeCycle.defaultProps={
  value:0
}
export default LifeCycle;
