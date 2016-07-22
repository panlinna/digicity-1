import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppBar from './component/AppBar.js';
import Hero from './component/Hero.js';
import Progress from './component/Progress.js';
import Snackbar from './component/Snackbar.js';
import Icon from './component/Icon.js';
import Auto from './component/Auto.js';
import Select from './component/Select.js';

// console.log(darkBaseTheme);
import {Blue} from './component/Test';
// console.log(React);



var myTheme={
  palette:{
    alternateTextColor:'#000',
    primary1Color:'#bada55',
    shadowColor:'red'
  }
}

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(myTheme)};
  }
  render () {
    return(
      <div>
        <AppBar/>
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
