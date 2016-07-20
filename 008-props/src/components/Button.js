import React, { Component } from 'react';

class Button extends Component {
  render(){
    let styles={
      backgroundColor:this.props.bg,
    }
    return(
      <button style={styles}>{this.props.title}</button>
    )
  }
}

Button.propTypes = {
  title: React.PropTypes.string.isRequired,
  bg:React.PropTypes.string.isRequired
};
Button.defaultProps = {
  title: "我是一个漂亮的按钮",
  bg:'#bada55',
};

export default Button;
