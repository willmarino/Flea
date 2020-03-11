import {
  RECEIVE_PAGE_LOADED,
  CLEAR_PAGE_LOADED
} from '../actions/newest_page_loaded_actions';


const NewestPageLoadedReducer = (state=['none'], action) => {
  let newState = [];
  switch(action.type){
    case RECEIVE_PAGE_LOADED:
      // return action.page;
      for(let i = 0; i < state.length; i++){
        let p = state[i];
        newState.push(p);
      }
      newState.push(action.page)
      while(newState.length > 5){
        newState.shift;
      }
      return newState;
    case CLEAR_PAGE_LOADED:
      return ['none'];
    default:
      return state;
  }
}

export default NewestPageLoadedReducer;