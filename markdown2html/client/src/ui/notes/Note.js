import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import Radium from 'radium';
import Marked from 'marked';

import Covert2HTML from './Covert2HTML';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawContent: ''

    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let address = this.refs.url.getValue();
    axios.get(address).then((res) => {
      this.setState({
        rawContent: res.data
      })
    });
  }

  getStyles() {
    return {
      root: {
        backgroundColor: '#F7F6F2',
        marginTop: '30px',
        paddingTop: '30px',
        paddingBottom: '30px'
      },
      form: {
        maxWidth: '900px',
        margin: '20px auto',
        padding: '1em',
        border: '1px solid #ddd',
        backgroundColor: '#fff',
        textAlign: 'center'
      },
      textField: {
        width: '100%'
      },
      button: {
        marginTop: '20px'
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.root}>
        <Covert2HTML rawContent={this.state.rawContent} />
        <form onSubmit={ this.handleSubmit.bind(this) } style={styles.form}>
          <div>
            <TextField ref='url' floatingLabelText='文本地址' style={styles.textField} />
          </div>
          <RaisedButton type="submit" label="提交" secondary={true} style={styles.button} />
        </form>
      </div>
    );
  }
}

export default Radium(Note);
