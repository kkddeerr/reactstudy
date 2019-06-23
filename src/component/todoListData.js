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

    handleToggleEdit = (e) => {
        const { editing } = this.state;
        const { id, todo } = e.target;
        this.setState({ editing: !editing, todo: todo, id : id });
    }

    handleChange = (e) => {
        const { todo, value } = e.target;
        this.setState({
          [todo]: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("수정")
        if(!prevState.editing && this.state.editing) {
            this.setState({
              id : id
              phone: info.phone
            })
          }
    

        if (prevState.editing && !this.state.editing) {
            // editing 값이 true -> false 로 전환 될 때
            this.props.updateTodo()
            
        }

    }



    render() {
    
    const { editing } = this.state;
    
        if (editing) { // 수정모드
          return (
            <div>
              <div>
                <input
                  value={this.state.todo}
                  placeholder="할일"
                  onChange={this.handleChange}
                />
              </div>
              <button onClick={this.handleToggleEdit}>적용</button>
              <button onClick={this.handleRemove.bind(this,id)}>삭제</button>
            </div>
          );
        }


    const { todo,id } = this.props.todoData;
        return (
            <div>
                <div className ="TodoListData">{todo}</div>
                <button onClick={this.handleRemove.bind(this,id)}>삭제</button>
                <button onClick={this.handleToggleEdit}>수정</button>
            </div>
        )
    }
}

export default todoListData;
