import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
// import ProductsReducer from './main_products_reducer';
// import ShopsReducer from './shops_reducer';
// import ReviewsReducer from './reviews_reducer';
import CartsReducer from './carts_reducer';
import OrdersReducer from './orders_reducer';
import CartItemsReducer from './cart_item_reducer';
import TagsReducer from './tags_reducer';

import NewProductsReducer from './products/new_products_reducer';
import PositiveReviewsReducer from './positive_reviews_reducer';
import NewReviewsReducer from './reviews/new_reviews_reducer';
import NewShopsReducer from './shops/new_shops_reducer';

import ViewsReducer from './views_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  // products: ProductsReducer,
  products: NewProductsReducer,
  // shops: ShopsReducer,
  shops : NewShopsReducer,
  // reviews: ReviewsReducer,
  reviews : NewReviewsReducer,
  positiveReviews : PositiveReviewsReducer,
  carts: CartsReducer,
  orders: OrdersReducer,
  cartItems: CartItemsReducer,
  tags: TagsReducer,
  views: ViewsReducer
});

export default EntitiesReducer;