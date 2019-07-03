import React, { Component } from 'react';
import './NewTodoForm.css';

class NewTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      task: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      task: ''
    })
  }

  render(){
    return(
      <div>
        <form className="NewTodoForm" onSubmit={this.handleSubmit}>
          <label htmlFor="task">New Todo</label>
          <input 
            type="text" 
            name="task" 
            id="task" 
            value={this.state.task} 
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default NewTodoForm;