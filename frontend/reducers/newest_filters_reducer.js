import {
  RECEIVE_FILTERS
} from '../actions/newest_filters_actions';

const NewestFiltersReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_FILTERS:
      return action.filters;
    default:
      return state;
  }
}

export default NewestFiltersReducer;