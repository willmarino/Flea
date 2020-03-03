import {
  RECEIVE_VIEWS,
  RECEIVE_SHOP_PRODUCT_VIEW_IDS
} from '../actions/view_actions';


const ViewsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_VIEWS:
      for(let i = 0; i < action.views.length; i++){
        let cur_view = action.views[i];
        newState[cur_view.id] = cur_view;
      }
      return Object.assign({}, state, newState);
    case RECEIVE_SHOP_PRODUCT_VIEW_IDS:
      return Object.assign({}, state, { shopProductViewIds : action.ids});
    default:
      return state;
  }
}

export default ViewsReducer;