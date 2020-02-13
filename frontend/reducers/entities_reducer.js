import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ProductsReducer from './products_reducer';
import ShopsReducer from './shops_reducer';
import ReviewsReducer from './reviews_reducer';
import CartsReducer from './carts_reducer';
import OrdersReducer from './orders_reducer';
import CartItemsReducer from './cart_item_reducer';
import TagsReducer from './tags_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  products: ProductsReducer,
  shops: ShopsReducer,
  reviews: ReviewsReducer,
  carts: CartsReducer,
  orders: OrdersReducer,
  cartItems: CartItemsReducer,
  tags: TagsReducer
});

export default EntitiesReducer;