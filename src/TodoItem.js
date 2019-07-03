import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditting: false,
      task: this.props.todo,
      completed: this.props.completed
    }
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
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

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUpdate(event){
    event.preventDefault();
    // take the updated task info from the input, pass it up to TodoList
    this.props.updateTodo(this.props.id, this.state.task);
    // this will hide the form and display the updated todo
    // we can also use the toggleForm method to hide the form
    this.setState({
      isEditting: false
    })
  }

  toggleCompleted(){
    this.setState({
      completed: !this.state.completed
    })
  }

  render(){
    let result;

    if(this.state.isEditting) {
      result = (
        <div className="TodoItem">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input 
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
      <div className="TodoItem">
        <li className={this.state.completed ? 'Todo-task completed' : 'Todo-task'} onClick={this.toggleCompleted}>{this.props.todo}</li>
        <div className="Todo-buttons">
          <button onClick={this.toggleForm}>
            <i className="fas fa-pen"></i>
          </button>
          <button onClick={this.handleRemoveTodo}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
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