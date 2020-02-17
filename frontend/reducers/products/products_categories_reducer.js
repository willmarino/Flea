import { RECEIVE_CATEGORIES } from '../../actions/products/products_categories_actions'

const ProductCategoriesReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CATEGORIES:
      return action.products;
    default:
      return state;
  }
}

export default ProductCategoriesReducer;