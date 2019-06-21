import React, { Component } from 'react';
import '../css/todoListData.css';


class todoListData extends Component {
    static defaultProps = {
        data: {
          todo: ' ',
          id : 0
        }
      }
    
    handleRemove = (delId) => {
        console.log("handleRemove  " + delId )
        // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
        this.props.isDelete(delId,"true")
    }


    render() {
    const { todo,id } = this.props.todoData;
        return (
            <div>
                <div className ="TodoListData">{todo}</div>
                <button onClick={this.handleRemove.bind(this,id)}>삭제</button>
            </div>
        )
    }
}

export default todoListData;
