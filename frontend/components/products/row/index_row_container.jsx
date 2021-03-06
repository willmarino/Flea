import { connect }  from 'react-redux';
import IndexRow from './index_row';

const msp = (state, ownProps) => {
  return({
    products: state.entities.products.forIndex[ownProps.rowId],
    shops: state.entities.shops,
    type: ownProps.type,
    loggedIn: Boolean(state.session.currentUser),
    categories: state.newcategories.index
  });
};

export default connect(msp, null)(IndexRow);