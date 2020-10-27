import { connect } from 'react-redux';
import TodoResource from '../components/TodoResource';

const mapStateToProps = state => ({
  actionEvent: state.actionEvent
});

const TodoResourceContainer = connect(mapStateToProps)(TodoResource);

export default TodoResourceContainer;