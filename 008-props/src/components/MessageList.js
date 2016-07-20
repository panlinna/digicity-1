import React, { Component } from 'react';


class MessageList extends Component {
  render(){
    let msgs = [];
    // console.log(this.props.messages.length)
    for (var i = 0; i < this.props.messages.length; i++) {
      msgs.push(
        this.props.messages[i]
      )
    }
    return(
      <p>{msgs}</p>
    )
  }
}

MessageList.propTypes = {
  messages:React.PropTypes.array.isRequired,
};
MessageList.defaultProps = {
};

export default MessageList;
