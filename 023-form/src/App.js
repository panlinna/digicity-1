import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';
import Card from 'material-ui/lib/card/card';



import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  _handleSubmit(e) {
    e.preventDefault();
  }
  render () {
    return(
      <div>
        <Card className="content">
          <form onSubmit={this._handleSubmit.bind(this)}>
            <TextField hintText="Your Github Account"
                       ref="account"/>
            <FlatButton label="Search Github"
                        type="submit"
                        primary={true}/>
          </form>
          { GitHubInfo }
        </Card>
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
