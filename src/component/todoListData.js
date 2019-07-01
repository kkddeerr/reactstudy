import React, { Component } from 'react';
import '../css/todoListData.css';


class todoListData extends Component {
    static defaultProps = {
        data: {
          todo: ' ',
          id : 0
        }
      }

      state = {
          editing : false,
          todo: ' ',
          id : 0
      }
    
    handleRemove = (delId) => {
        console.log("handleRemove  " + delId )
        // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
        this.props.isDelete(delId,"true")
    }

    handleToggleEdit = (id,todo) => {
        const { editing } = this.state;
        this.setState({ editing: !editing, todo: todo, id : id});
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
          todo: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        
        // editing 값이 false -> true 로 전환 될 때
        if(!prevState.editing && this.state.editing) {
          console.log("editing 값이 false -> true 로 전환 될 때")   
          }
    

        if (prevState.editing && !this.state.editing) {
            // editing 값이 true -> false 로 전환 될 때
            console.log("editing 값이 true -> false 로 전환 될 때")
            const { id , todo } = this.state;
            this.props.updateTodo(id,todo)
            
        }

    }

    render() {
    
    const { editing } = this.state;
    const { todo,id } = this.props.todoData;
    
        if (editing) { // 수정모드
          return (
            <div>
              <div className ="TodoListData">
                <input
                  value={this.state.todo}
                  placeholder="할일"
                  onChange={this.handleChange}
                />
              </div>
              <button onClick={this.handleToggleEdit.bind(this,id,this.state.todo)}>적용</button>
              <button onClick={this.handleRemove.bind(this,id)}>삭제</button>
            </div>
          );
        }


    
        return (
            <div>
                <div className ="TodoListData">{todo}</div>
                <button onClick={this.handleRemove.bind(this,id)}>삭제</button>
                <button onClick={this.handleToggleEdit.bind(this,id,todo)}>수정</button>
            </div>
        )
    }
}

export default todoListData;
