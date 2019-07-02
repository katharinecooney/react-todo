import React, { Component } from 'react'

class NewTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      newTodo: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return(
      <div>
        <h3>New Todo</h3>
        <form>
          <label htmlFor="newTodo"></label>
          <input 
            type="text" 
            name="newTodo" 
            id="newTodo" 
            value={this.state.newTodo} 
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default NewTodoForm;