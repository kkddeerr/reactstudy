import React, { Component } from 'react';
import '../css/todoListData.css';


class todoListData extends Component {
    static defaultProps = {
        data: {
          todo: ' ',
          id : 0
        }
      }

    render() {
    const { todo,id } = this.props.todoData;
        return (
            <div>
                <div className ="TodoListData">{todo}</div>
            </div>
        )
    }
}

export default todoListData;
