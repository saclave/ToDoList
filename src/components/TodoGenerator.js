import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class TodoGenerator extends Component {

    constructor(props) {
        super(props)

        this.state = {
            string: ""
        };

    }

    handleChange =({ target }) => {
        this.setState({
          [target.name]: target.value
        });
      }

  onSubmit = (event) => {
    event.preventDefault();
    const text = this.state.string;
    const id = uuidv4();
    const todo = { id, text, done: false };
    this.props.addTodo(todo);
  }

  render() {
    return (
      <div id="todoGenerator">
            <input type="text" name="string" id="string" value={ this.state.string } 
            placeholder="Please add todo here"  onChange={ this.handleChange }  />
            <input type="submit" value="Add Item" onClick={this.onSubmit} />
      </div>
    );
  }
}

export default TodoGenerator;