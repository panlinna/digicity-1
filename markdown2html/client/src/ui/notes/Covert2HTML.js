import React, { Component } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';

class Covert2HTML extends Component {
  render() {
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    let rawMarkup = marked(this.props.rawContent ? this.props.rawContent : 'HTML');
    return (
      <div className="post-content">
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
}

export default Covert2HTML;