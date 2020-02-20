import {
  RECEIVE_NEW_CATEGORIES
} from '../actions/category_actions';

const NewCategoriesReducer = (state={}, action) => {
  if(action.type === RECEIVE_NEW_CATEGORIES) debugger;
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_NEW_CATEGORIES:
      let ns = {};
      for(let i = 0; i < action.categories.length; i++){
        let c = action.categories[i];
        ns[c.id] = c;
      }
      return ns;
    default:
      return state;
  }
}

export default NewCategoriesReducer;