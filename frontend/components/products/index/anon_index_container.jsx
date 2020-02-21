import { connect } from 'react-redux';
import AnonIndex from './anon_index';

// import { fetchIndex } from '../../../actions/product_actions';
import { fetchIndex } from '../../../actions/products/products_by_index_actions';
import { fetchProductCategories } from '../../../actions/products/products_categories_actions';

const msp = (state, ownProps) => ({
  products : state.entities.products.forIndex,
  categories : state.entities.products.categories,
  happyProducts : state.entities.products.happyProducts,
  happyReviews : state.entities.reviews.happyReviews,
  catRowCategories : state.newcategories.catRow,
  indexCategories : state.newcategories.index
})

const mdp = (dispatch) => ({
  fetchIndex : () => dispatch(fetchIndex()),
  fetchProductCategories : () => dispatch(fetchProductCategories())
})

export default connect(msp, mdp)(AnonIndex)