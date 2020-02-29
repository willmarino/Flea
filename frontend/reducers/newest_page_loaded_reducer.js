import {
  RECEIVE_PAGE_LOADED,
  CLEAR_PAGE_LOADED
} from '../actions/newest_page_loaded_actions';


const NewestPageLoadedReducer = (state='none', action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PAGE_LOADED:
      return action.page;
    case CLEAR_PAGE_LOADED:
      return 'none';
    default:
      return state;
  }
}

export default NewestPageLoadedReducer;