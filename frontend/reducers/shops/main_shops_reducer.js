import { RECEIVE_SHOP, REMOVE_SHOP } from '../../actions/shop_actions';

const MainShopsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    // Only should be used for main/shop show
    case RECEIVE_SHOP:
      // return Object.assign({}, state, { main : action.shop });
      return action.shop;
    // case REMOVE_SHOP:
    //   let newState = Object.assign({}, state);
    //   delete newState[action.shopId];
    //   return newState;
    default:
      return state;
  }
}

export default MainShopsReducer;