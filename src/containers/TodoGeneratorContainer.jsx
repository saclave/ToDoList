import { connect } from 'react-redux';
import { addTodo } from '../action';
import TodoGenerator from '../components/TodoGenerator';

const mapDispatchToProps = dispatch => ({
  addTodo: (todo) => { dispatch(addTodo(todo)) }
});

const mapStateToProps = state =>({
    actionEvent : state.actionEvent
})

const TodoGeneratorContainer = connect(mapStateToProps, mapDispatchToProps)(TodoGenerator);

export default TodoGeneratorContainer;