import { connect } from 'react-redux';
import { addItem } from '../action';
import Todo from '../components/Todo';

const mapDispatchToProps = dispatch => ({
  addItem: (todo) => { dispatch(addItem(todo)) }
});

const mapStateToProps = state =>({
  todos : state.todos
})

const TodoGeneratorContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default TodoGeneratorContainer;