import React, { Component } from 'react';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer';
import TodoResourceContainer from '../containers/TodoResourceContainer';

class TodoList extends Component {
    render() {
        return (
            <div>
                <h1 id="appName">TodoList</h1>
                <TodoGeneratorContainer />
                <TodoResourceContainer />
            </div>
        );
    }
}

export default TodoList;