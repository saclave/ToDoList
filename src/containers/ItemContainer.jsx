import { connect } from 'react-redux';
import { deleteTodo, changeStatus } from '../action';
import Item from '../components/Item';

const mapDispatchToProps = dispatch => ({
  deleteTodo: (id) => { dispatch(deleteTodo(id)) },
  changeStatus: (id) => { dispatch(changeStatus(id)) }
});

const ItemContainer = connect(null, mapDispatchToProps)(Item);

export default ItemContainer;