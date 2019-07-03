import React, { Component } from 'react'

class NewTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      newTodo: ''
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
      newTodo: ''
    })
  }

  render(){
    return(
      <div>
        <h3>New Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="newTodo">New Todo</label>
          <input 
            type="text" 
            name="newTodo" 
            id="newTodo" 
            value={this.state.newTodo} 
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default NewTodoForm;