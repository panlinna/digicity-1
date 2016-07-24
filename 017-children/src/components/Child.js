import React from 'react';

import Me from '../images/aboutme.jpg'

class Child extends React.Component {
  render () {
    // console.log(this.props.children);
    let styles={
      backgroundImage: 'url(' + Me + ')',
      width:'480px',
      height:'480px'
    }
    return(
      <div>
        <h1>hhah</h1>
        {
          React.Children.map( this.props.children, function(c){
            return <li>{c}</li>;
          })
        }
        <p>下面是如何在页面内使用图片</p>
        <img src={Me} />
        <div style={styles}>行内样式背景图片</div>
        <div style={styles} className="myimg">外部css样式背景图片</div>
      </div>
    )
  }
}

export default Child;
