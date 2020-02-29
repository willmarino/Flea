import {
  RECEIVE_CATEGORIES,
  RECEIVE_CATEGORY
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
    default:
      return state;
  }
}
export default NewestCategoriesReducer;