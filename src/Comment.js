import React, { Component } from 'react';

export default class Comment extends Component {
  render() {
    return (
      <div className="comment">
        {this.props.commentText}
      </div>
    )
  }
}


// It should expect a single prop (the text of a comment), which can be used in the component via: this.props.commentText. This prop is passed in src/BlogPost.js
