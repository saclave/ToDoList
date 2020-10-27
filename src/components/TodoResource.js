import React, { Component } from 'react';
import TodoItemContainer from '../containers/ItemContainer';

class TodoResource extends Component {
  render() {
    return (
      <div>
        {this.props.actionEvent.map((todo) => (
          <TodoItemContainer key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}

export default TodoResource;