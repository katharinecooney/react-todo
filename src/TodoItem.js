import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props){
    super(props);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  handleRemoveTodo(){
    console.log('remove');
    this.props.removeTodo(this.props.id);
  }

  render(){
    return(
      <div>
        <p>{this.props.todo}</p>
        <span>Edit</span>
        <span onClick={this.handleRemoveTodo}>Delete</span>
      </div>
    )
  }
}
export default TodoItem;