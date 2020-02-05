import {
  RECEIVE_CUR_CAT,
  REMOVE_CUR_CAT,
  CLEAR_CUR_CAT,
  GENERATE_CATS
} from '../actions/current_categories_actions';

const CurrentCategoriesReducer = (state=[], action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_CUR_CAT:
      newState = state.concat(action.cat);
      return newState;
    case REMOVE_CUR_CAT:
      newState = state;
      for(let i = 0; i < newState.length; i++){
        let c = newState[i];
        if(c === action.cat){
          newState.splice(i, 1);
        }
      }
      return newState;
    case CLEAR_CUR_CAT:
      return [];
    case GENERATE_CATS:
      return action.cats;
    default:
      return state;
  }
}

export default CurrentCategoriesReducer;
