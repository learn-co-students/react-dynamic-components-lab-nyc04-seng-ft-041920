//your code here
import React, { Component } from 'react'
import BlogPost from './BlogPost.js'

export default class X extends React.Component {

    render(){
        console.log("comment.js", this)
        return(
            <div className = "comment">
                <h1> {this.props.commentText} </h1>
            </div>
        )
    }
}
