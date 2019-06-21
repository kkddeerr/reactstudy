import React, { Component } from 'react';
import '../css/todoListBody.css';

class todoBody extends Component {
  state = {
    todoData : ''
  }
  handleChange = (e) => {
    this.setState({
      todoData: e.target.value
    })
  }
  
  addtoDo = (e) => {
    console.log(e);
    e.preventDefault();
    this.props.callbackFromBody(this.state.todoData);
  }

  render() {
    return (
        <div>
            <form onSubmit={this.addtoDo}>
            <input type ="text" value ={this.state.todoData} onChange={this.handleChange}></input>
            <button type="submit">추가하기</button>
            </form>
        </div>
    )
  }
}

export default todoBody;
