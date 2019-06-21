import React, { Component } from 'react';
import TodoData from './todoListData';
import '../css/todoListList.css';


class todoList extends Component {

  // constructor(props) {
  //   super(props);
  // }

  id = 1
  state = {
    data : [{ id: 0, todo : 'hihi' } ]
    }

  // static getDerivedStateFromProps(nextProps, prevState) { 
  //   console.log("get Data From App.js [getDerivedStateFromProps]")
  //   //return { todoStr : nextProps.addTodo}
  //   return null;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("get Data From App.js [shouldComponentUpdate]")
  
    return true 
   
  }

  componentDidUpdate(prevProps, prevState){
    const { data } = this.state;
    console.log(prevState);
    console.log(this.state);
    if ( prevState.todo!== this.state.todo) {
    this.setState({
          data: data.concat( { id : this.id++, todo : this.props.addTodo })
        })
    }

    console.log(JSON.stringify("str" + { data }))    
  }

  componentDidMount() {
    console.log("componentDidMount")
  }
  
  render() {
    console.log("RENDER DONE")
    const { data } = this.state;
   
    const todoLists = data.map(
      data => (<TodoData key={data.id} todoData={data}/>)
    );

    return (
        <div>
            {todoLists}
        </div>
    )
  }
}

export default todoList;
