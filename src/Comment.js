import React, { Component } from 'react'

//your code here
export default class Comment extends Component {
  render() {
    console.log(this.props.commentText)
    return (
      <div className="comment">{this.props.commentText}</div>
    )
  }
}