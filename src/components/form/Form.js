import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';

export default class Form extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      // todoList: [],
      name: ''
    };    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const name = this.state.name;
     

    axios.post(`https://huawei-todo-api.herokuapp.com/api/todos`, { name })
      .then(response => {
        // const todoList = response.data;
        this.props.onSubmit(response.data);
        // this.setState({ todoList });
      });
  }
  
  render () {
    return (
      <div className="form-todo">
      <h3>Create new todo list</h3>
        <form onSubmit={this.handleSubmit} className="form">
          <input type="text" value={this.state.name} onChange={this.handleChange} placeholder="List Name" className="form-input" required />        
          <button type="submit" className="btn-submit">Add</button>
        </form>
      </div>
    );
  }
}
