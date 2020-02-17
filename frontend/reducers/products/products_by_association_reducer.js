import { RECEIVE_ASSOCIATED_PRODUCTS } from '../../actions/products/products_by_association_actions';
// still need to import receiveassociatedusers and receiveassociatedshops

const ProductsByAssociationReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ASSOCIATED_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}

export default ProductsByAssociationReducer;