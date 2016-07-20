import React, { Component } from 'react';

class CardList extends Component {
  render(){
    let styles={
      root:{
        width:'80%',
        height:'100px',
        margin:'10px auto',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)',
      },
      index:{
        float:'left',
        width:'80px',
        height:'100px',
        textAlign:'center',
        backgroundColor:'#00bcd4',
        color:'#fff',
        lineHeight:'100px'
      },
      content:{
        float:'left',
        color:'#777',
        paddingLeft:'10px'
      }
    }
    return(
      <div style={styles.root}>
        <div style={styles.index}>{this.props.index}</div>
        <div style={styles.content}>
          <h3>{this.props.title}</h3>
          <p>{this.props.data}</p>
        </div>
      </div>
    )
  }
}

CardList.propTypes = {
  title: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
  data: React.PropTypes.string.isRequired,
};
CardList.defaultProps = {
  title: "请输入标题",
  index: 1,
  data: '2016.7.19',
};

export default CardList;
