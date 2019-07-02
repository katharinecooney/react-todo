import React, { Component } from 'react';
import TodoItem from './TodoItem';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  render(){
    return(
      <div>
        <h1>TODO LIST</h1>
        <TodoItem />
        <NewTodoForm />
      </div>
    )
  }
}

export default TodoList;