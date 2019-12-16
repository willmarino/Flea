import {connect} from 'react-redux';
import categoryFilter from '../../selectors/category_filter';
import IndexRow from './index_row';

const msp = (state, ownProps) => ({
  products: categoryFilter(state.entities.products, ownProps.category),
  shops: state.entities.shops
});



export default connect(msp, null)(IndexRow);