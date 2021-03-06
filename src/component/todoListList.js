import React, { Component } from 'react';
import TodoData from './todoListData';
import '../css/todoListList.css';


class todoList extends Component {

  // constructor(props) {
  //   super(props);
  // }

  id = 0
  count = 0
  state = {
    data : []
    }

  // static getDerivedStateFromProps(nextProps, prevState) { 
  //   console.log("get Data From App.js [getDerivedStateFromProps]")
  //   //return { todoStr : nextProps.addTodo}
  //   return null;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("get Data From App.js [shouldComponentUpdate]  " + this.count++)
    return true
  }

  componentDidUpdate(prevProps, prevState){
    const { data } = this.state;
    console.log("pomponentDidUpdate  "    + this.count++)
    if( prevProps.addTodo !== this.props.addTodo)
    this.setState({
          data: data.concat( { id : this.id++, todo : this.props.addTodo })
        })
  }

  componentDidMount() {
    console.log("componentDidMount    " + this.count++)
  }

  deleteTodo = (delId,callbackBoolean) =>  {
    console.log("deleteTodo    " + delId)
    const { data } = this.state;
    if(callbackBoolean === "true") {
    this.setState({
      data: data.filter( data => data.id !== delId ) 
    })
    }
  }

  updateTodo = (delId,uptodo) => {
    console.log("updateTodo    " + delId);
    const { data } = this.state;
      this.setState({
        data: data.map( data => data.id === delId ? ({...data, todo: uptodo }) : data ) 
      })
  }
  
  render() {
    console.log("RENDER DONE    " + this.count++)
    const { data } = this.state;
   
    const todoLists = data.map(
      data => (<TodoData key={data.id} todoData={data} isDelete={this.deleteTodo} updateTodo = {this.updateTodo}/>)
    );

    return (
        <div>
            {todoLists}
        </div>
    )
  }
}

export default todoList;
