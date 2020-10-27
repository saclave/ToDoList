import React, { Component } from 'react';
import { RiDeleteBack2Line } from 'react-icons/ri';

class Item extends Component {

  render() {

    const todoIsDone = this.props.todo.done;
    return (
      <div id="Item" onClick={() => this.props.changeStatus(this.props.todo.id)}>
        <span style={{textDecoration: todoIsDone ? 'line-through' : ''}}>{this.props.todo.text}</span>
        <span onClick={() => this.props.deleteTodo(this.props.todo.id)}>
            <RiDeleteBack2Line /></span>
      </div>
      
    );
  }
}

export default Item;