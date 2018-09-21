import React, { Component } from 'react';
import './todo-list.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Todo = (props) => {
  return (
        <div className="todo">
          <p>{props.name}</p>
        </div>
  );
}

class TodoList extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      todoLists: []
    };
  };  
  
  componentDidMount() {
    axios.get(`https://huawei-todo-api.herokuapp.com/api/todos`)
      .then(response => {
        const todoLists = response.data;
        console.log(todoLists);
        this.setState({ todoLists });
      });
  }
  
  render() {
    return (
      <div>
          {this.state.todoLists.map(todo => 
            <Router>
              <Link to={`/${todo._id}`}>
                <Todo key={todo._id} {...todo} />
              </Link>
            </Router>
          )}; 
      </div>
    );
  }

}

export default TodoList;