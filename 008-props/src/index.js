import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button.js';
import Message from './components/Message.js';
import Cards from './components/Cards.js';

let buttonProps={
  title:'来至外部对象',
  bg:'blue'
}

class App extends Component {
  render(){
    let btnProps={
      title:'内部对象属性',
      bg:'#666'
    }
    let btns=[<Button key="1"/>,<Button key="2"/>,<Button key="3"/>];
    return(
      <div>
        <p>Hello , {this.props.name} , welcome to {this.props.location}</p>
        <p>直接传递props</p>
        <Button title="我是props的title" bg="deeppink"/>
        <Button bg="teal" />
        <p>通过定义变量传递props</p>
        <Button bg={buttonProps.bg} title={buttonProps.title}/>
        <p>传递多个props</p>
        <Button {...btnProps}/>
        <p>遍历数组</p>
        {btns}
        <Message />
        <Cards />
      </div>
    )
  }
}

ReactDOM.render(<App name="newming" location="China"/>,document.getElementById('app'));
