import React, { Component } from 'react';
import TodoItem from './TodoItem';
import NewTodoForm from './NewTodoForm';
import uuid from 'uuid';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      allTodos: [{task: 'Apply to jobs', id: uuid()},
      {task: 'Read', id: uuid()}]
    }
  }
  
  render(){
    let todos = this.state.allTodos.map(todo => <TodoItem task={todo.task} id={todo.id} key={todo.id}/>)
    return(
      <div>
        <h1>TODO LIST</h1>
        {todos}
        <NewTodoForm />
      </div>
    )
  }
}

export default TodoList;