import { connect } from 'react-redux';
import Todo from '../components/Todo';

const mapStateToProps = state => ({
  todos: state.todos
});

const TodoContainer = connect(mapStateToProps)(Todo);

export default TodoContainer;