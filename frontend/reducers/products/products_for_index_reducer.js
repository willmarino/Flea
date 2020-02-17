import { RECEIVE_INDEX } from '../../actions/products/products_by_index_actions';

const ProductsForIndexReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_INDEX:
      return action.products;
    default:
      return state;
  }
}

export default ProductsForIndexReducer;