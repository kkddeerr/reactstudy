import React, { Component } from 'react';
import '../css/App.css';
import TodoBody from './todoListBody';
import TodoHeader from './todoListHeader';
import TodoList from './todoListList';

class App extends Component {
  state = {
    todo : ''
  }
  
  dataCallback = (dataFromChild) => {
    this.setState({
      todo: dataFromChild
    })
  };
  render() {
    return (
      <div className = "Contents">
        <div className = "TodoHeader"><TodoHeader /></div>
        <div className = "TodoBody"><TodoBody callbackFromBody = {this.dataCallback}/></div>
        <div className = "TodoList"><TodoList addTodo = {this.state.todo}/></div>
      </div>
    );
  }
}

export default App;
