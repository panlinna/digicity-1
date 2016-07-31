import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }

  getStyles() {
    return {
      root: {
        display: 'flex',
        flexDirection: 'column'
      }
    };
  }
  render() {
    let styles = this.getStyles();
    return (
      <StyleRoot>
        <div style={styles.root}>
          { this.props.children }
        </div>
      </StyleRoot>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Radium(App);
