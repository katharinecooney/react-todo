import React, { Component } from 'react';
import TodoItem from './TodoItem';
import NewTodoForm from './NewTodoForm';
import uuid from 'uuid';
import './TodoList.css';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      allTodos: []
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  addTodo(todo) {
    console.log('todo is ', todo)
    let newTodo = {...todo, id: uuid(), completed: false}
    console.log('newTodo is ', newTodo);
    this.setState(curState => ({
      allTodos: [...curState.allTodos, newTodo]
    }))
  }

  removeTodo(id){
    this.setState(curState => ({
      allTodos: curState.allTodos.filter(todo => todo.id !== id)
    }))
  }

  updateTodo(id, updatedTask){
    const updatedTodos = this.state.allTodos.map(todo => {
      if(todo.id === id){
        return {...todo, task: updatedTask};
      } else {
        return todo;
      }
    });
    this.setState({allTodos: updatedTodos})
  }

  render(){
    let todos = this.state.allTodos.map(todo => <TodoItem 
      todo={todo.task} 
      id={todo.id} 
      key={todo.id} 
      removeTodo={this.removeTodo} 
      updateTodo={this.updateTodo}
      completed={todo.completed}
    />)
    return(
      <div className="TodoList">
        <h1>
          Todo List 
          <span>A Simple React Todo List App</span>
        </h1>
        <ul>
          {todos}
        </ul>
        <NewTodoForm addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default TodoList;