import React, { Component } from 'react'

class TodoItem extends Component {
  render(){
    return(
      <div>
        <p>{this.props.task}</p>
        <span>Edit</span>
        <span>Delete</span>
      </div>
    )
  }
}
export default TodoItem;