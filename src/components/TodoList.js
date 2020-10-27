import React, { Component } from 'react';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer';

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1 id="appName">TodoList</h1>
        <TodoGeneratorContainer/>
      </div>
    );
  }
}

export default TodoList;