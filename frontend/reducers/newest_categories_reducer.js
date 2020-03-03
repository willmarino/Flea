import {
  RECEIVE_CATEGORIES,
  RECEIVE_CATEGORY,
  RECEIVE_SEARCH_CATEGORY_IDS
} from '../actions/newest_categories_actions';

const NewestCategoriesReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_CATEGORIES:
      for(let i = 0; i < action.categories.length; i++){
        let c = action.categories[i];
        newState[c.id] = c;
      }
      return Object.assign({}, state, newState);
    case RECEIVE_CATEGORY:
      return Object.assign({}, state, { [action.category.id] : action.category });
    case RECEIVE_SEARCH_CATEGORY_IDS:
      return Object.assign({}, state, { searchIds : action.ids });
    default:
      return state;
  }
}
export default NewestCategoriesReducer;