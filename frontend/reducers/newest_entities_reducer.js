import { combineReducers } from 'redux';
import NewestProductsReducer from './newest_products_reducer';
import NewestCategoriesReducer from './newest_categories_reducer';
import NewestTagsReducer from './newest_tags_reducer';
import NewestReviewsReducer from './newest_reviews_reducer';
import NewestShopReducer from './newest_shop_reducer';
import NewestSearchReducer from './newest_search_reducer';
import NewestCartReducer from './newest_cart_reducer';
import NewestCartItemsReducer from './newest_cart_items_reducer';
import NewestFiltersReducer from './newest_filters_reducer';
import UsersReducer from './users_reducer';

const NewestEntitiesReducer = combineReducers({
  products : NewestProductsReducer,
  categories : NewestCategoriesReducer,
  tags : NewestTagsReducer,
  reviews : NewestReviewsReducer,
  shops : NewestShopReducer,
  searches : NewestSearchReducer,
  users : UsersReducer,
  cart : NewestCartReducer,
  cartItems : NewestCartItemsReducer,
  filters : NewestFiltersReducer
})

export default NewestEntitiesReducer;