import { connect } from 'react-redux';
import UserIndex from './user_index';

import { fetchIndex } from '../../../actions/products/products_by_index_actions';
import { fetchUserCart } from '../../../actions/users_actions';
import { fetchProductCategories } from '../../../actions/products/products_categories_actions';
import { fetchSuggestedSearches } from '../../../actions/search_actions';
import { fetchRecentViews } from '../../../actions/view_actions';

const msp = (state, ownProps) => {
  return({
    products : state.entities.products.forIndex,
    categories : state.entities.products.categories,
    cartId : state.entities.carts,
    user : state.session.currentUser,
    catRowCategories : state.newcategories.catRow,
    indexCategories : state.newcategories.index,
    suggestedSearches : state.search.suggestedSearchTags,
    recentlyViewedProducts : state.entities.products.main.recentlyViewed,
    recentlyViewedCategories : state.newcategories.forRecentProducts
  })
}

const mdp = (dispatch) => ({
  fetchIndex : () => dispatch(fetchIndex()),
  fetchUserCart : (userId) => dispatch(fetchUserCart(userId)),
  fetchProductCategories : () => dispatch(fetchProductCategories()),
  fetchSuggestedSearches : () => dispatch(fetchSuggestedSearches()),
  fetchRecentViews : () => dispatch(fetchRecentViews())
})

export default connect(msp, mdp)(UserIndex)