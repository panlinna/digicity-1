import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class AppBarDemo extends Component{
  handleTouchTap(){
    alert('left')
  }
  handelClick(){
    alert('title')
  }
  render(){
    return(
      <AppBar
        title="666"
        onLeftIconButtonTouchTap={this.handleTouchTap.bind(this)}
        onTitleTouchTap={this.handelClick.bind(this)}
        iconElementRight={<FlatButton label="Save" />}
      />
    )
  }
}

export default AppBarDemo;
