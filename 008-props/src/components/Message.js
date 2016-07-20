import React, { Component } from 'react';

import MessageList from './MessageList.js'

class Message extends Component {
  render(){
    let Messages=[
      '我会代码搬砖',
      '也会花式搬砖',
      '不说了，工头叫我去搬砖。。。'
    ];
    return(
      <div>
        <h2>消息列表</h2>
        <MessageList messages={Messages}/>
      </div>
    )
  }
}

export default Message;
