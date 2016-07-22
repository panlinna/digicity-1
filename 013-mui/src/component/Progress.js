import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class Progress extends Component{
  render(){
    let styles={
      display:'block',
      margin:'40px auto',
    }
    return(
      <CircularProgress style={styles}/>
    )
  }
}

export default Progress;
