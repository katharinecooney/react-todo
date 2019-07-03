import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditting: false
    }
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  handleRemoveTodo(){
    console.log('remove');
    this.props.removeTodo(this.props.id);
  }

  toggleForm(){
    this.setState({
      isEditting: !this.state.isEditting
    })
  }

  render(){
    let result;
    if(this.state.isEditting) {
      result = (
        <div>
          <form>
            <input type="text"/>
          </form>
        </div>
      )
    } else {
      result = (
      <div>
        <p>{this.props.todo}</p>
        <button onClick={this.toggleForm}>Edit</button>
        <button onClick={this.handleRemoveTodo}>Delete</button>
      </div>
      );
    }
    return(
      <div>
        {result}
      </div>
    )
  }
}
export default TodoItem;