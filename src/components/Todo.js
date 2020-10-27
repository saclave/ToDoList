import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class Todo extends Component {
    

onClick = (event) => {
    const text = event.target.value;
    const id = uuidv4();
    const item = { id, text, done: false };
    this.props.addItem(item);
    event.target.value = "";
}
render() {
    return (
      <div>
            <input type="text" name="todoInput" id="todoInput" />
            <button type="submit"  onClick={this.onClick}> Add Item </button>
      </div>
    );
  }
}
export default Todo;