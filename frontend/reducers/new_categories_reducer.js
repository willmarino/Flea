import {
  RECEIVE_NEW_CATEGORIES,
  RECEIVE_CATEGORIES_FOR_INDEX,
  RECEIVE_CATEGORIES_FOR_CAT_ROW,
  RECEIVE_SHOP_SHOW_CATEGORIES
} from '../actions/category_actions';

import {
  RECEIVE_CATS_FOR_RECENTLY_VIEWED
} from '../actions/view_actions';

const NewCategoriesReducer = (state={}, action) => {
  if(action.type === RECEIVE_CATEGORIES_FOR_INDEX) debugger;
  Object.freeze(state);
  let newState;
  switch(action.type){
    // case RECEIVE_NEW_CATEGORIES:
    //   let ns;
    //   for(let i = 0; i < action.categories.length; i++){
    //     let c = action.categories[i];
    //     ns[c.id] = c;
    //   }
    //   return ns;
    case RECEIVE_CATEGORIES_FOR_INDEX:
      newState = {};
      for(let i = 0; i < action.categories.length; i++){
        let c = action.categories[i];
        newState[c.id] = c;
      }
      return Object.assign({}, state, { index : newState });
    case RECEIVE_CATEGORIES_FOR_CAT_ROW:
      newState = {};
      for(let i = 0; i < action.categories.length; i++){
        let c = action.categories[i];
        newState[c.id] = c;
      }
      return Object.assign({}, state, { catRow : newState });
    case RECEIVE_SHOP_SHOW_CATEGORIES:
      newState = {};
      for(let i = 0; i < action.categories.length; i++){
        let c = action.categories[i];
        newState[c.id] = c;
      }
      return Object.assign({}, state, { shopShow : newState });
    case RECEIVE_CATS_FOR_RECENTLY_VIEWED:
      newState = {};
      for(let i = 0; i < action.categories.length; i++){
        let c = action.categories[i];
        newState[c.id] = c;
      }
      return Object.assign({}, state, { forRecentProducts : newState });
    default:
      return state;
  }
}

export default NewCategoriesReducer;