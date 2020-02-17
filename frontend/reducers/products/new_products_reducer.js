import { combineReducers } from "redux";
import ProductsByAssociationReducer from './products_by_association_reducer';
import ProductsByReviewsReducer from './products_by_reviews_reducer';
import ProductsByShopReducer from './products_by_shop_reducer';
import ProductsForIndexReducer from './products_for_index_reducer';
import ProductsInCartReducer from './products_in_cart_reducer';
import ProductsCategoriesReducer from './products_categories_reducer';
import MainProductsReducer from './main_products_reducer';

const NewProductsReducer = combineReducers({
  main : MainProductsReducer,
  byAssociation : ProductsByAssociationReducer,
  byReviews : ProductsByReviewsReducer,
  byShop : ProductsByShopReducer,
  categories : ProductsCategoriesReducer,
  forIndex : ProductsForIndexReducer,
  inCart : ProductsInCartReducer
});

export default NewProductsReducer;