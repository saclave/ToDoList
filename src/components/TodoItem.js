import React, { Component } from 'react';

class TodoItem extends Component {

  render() {

    const todoIsDone = this.props.todo.done;

    const style = {
      textDecoration: todoIsDone ? 'line-through' : '',
      color: todoIsDone ? 'gray' : 'white'
    }
    return (
      <div id="todoItem" onClick={() => this.props.changeStatus(this.props.todo.id)}>
        <span style={style} className="col-92">{this.props.todo.text}</span>
        <span className="col-8" onClick={() => this.props.deleteTodo(this.props.todo.id)}><span id="deleteIcon">X</span></span>
      </div>
    );
  }
}

export default TodoItem;