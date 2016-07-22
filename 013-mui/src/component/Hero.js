import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class AppBarDemo extends Component{
  render(){
    let styles={
      display:'block',
      margin:'40px auto',
      width:'50px'
    }
    return(
      <RaisedButton
        label="DEMO"
        primary={true}
        style={styles}/>
    )
  }
}

export default AppBarDemo;
