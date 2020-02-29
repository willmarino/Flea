import { connect } from 'react-redux';
import UserIndex from './user_index';

// import { fetchIndex } from '../../../actions/products/products_by_index_actions';
// import { fetchUserCart } from '../../../actions/users_actions';
// import { fetchProductCategories } from '../../../actions/products/products_categories_actions';
// import { fetchSuggestedSearches } from '../../../actions/search_actions';
// import { fetchRecentViews } from '../../../actions/view_actions';
import { fetchIndex } from '../../../actions/newest_product_actions';
import { fetchSuggestedTags } from '../../../actions/newest_tag_actions';
import { fetchRecentlyViewedProducts } from '../../../actions/newest_product_actions';

const msp = (state) => {
  return({
    products : state.entities.products,
    categories : state.entities.categories,
    tags : state.entities.tags,
    user : state.session.currentUser,
    loggedIn : Boolean(state.session.currentUser)
    // products : state.entities.products.forIndex,
    // categories : state.entities.products.categories,
    // cartId : state.entities.carts,
    // catRowCategories : state.newcategories.catRow,
    // indexCategories : state.newcategories.index,
    // suggestedSearches : state.search.suggestedSearchTags,
    // recentlyViewedProducts : state.entities.products.main.recentlyViewed,
    // recentlyViewedCategories : state.newcategories.forRecentProducts
  })
}

const mdp = (dispatch) => ({
  fetchIndex : () => dispatch(fetchIndex()),
  fetchSuggestedTags : () => dispatch(fetchSuggestedTags()),
  fetchRecentlyViewedProducts : (limit) => dispatch(fetchRecentlyViewedProducts(limit))
  // fetchRecentViews : () => dispatch(fetchRecentViews())
  // fetchUserCart : (userId) => dispatch(fetchUserCart(userId)),
  // fetchProductCategories : () => dispatch(fetchProductCategories()),
  // fetchSuggestedSearches : () => dispatch(fetchSuggestedSearches()),
})

export default connect(msp, mdp)(UserIndex)