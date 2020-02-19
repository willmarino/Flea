import {
  RECEIVE_USER_VIEWS,
  RECEIVE_PRODUCT_VIEWS
} from '../actions/view_actions';

import {
  RECEIVE_SHOP_VIEWS
} from '../actions/shop_view_actions';

const ViewsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_USER_VIEWS:
      return Object.assign({}, state, { userViews : action.views });
    case RECEIVE_PRODUCT_VIEWS:
      return Object.assign({}, state, { productViews : action.views });
    case RECEIVE_SHOP_VIEWS:
      return Object.assign({}, state, { shopViews : action.views });
    default:
      return state;
  }
}

export default ViewsReducer;