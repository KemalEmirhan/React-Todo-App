import React, { Component } from 'react';
import './App.css';

import Form from './components/form/Form';
import TodoList from './components/todo-lists/todo-list';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      todos: []
    };
  }
  
  addNewTodo = (todo) => {
    this.setState(prevState => ({
      todos: prevState.todos.concat(todo)
    }));
    window.location.reload();
  };

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>Huawei Todo App</h1>
        </header>

        {/* <div className="info-box">
          <span className="info-box__text">Welcome to Huawei Todo App. Lets make a nice Todo Lists :)</span>
        </div> */}

        <Form onSubmit={this.addNewTodo} />
        <h1 className="todolists__header">Todo Lists</h1>
        
        <TodoList todos={this.state.todos} />
      </div> 
    );
  }
}
export default App;
