import { combineReducers } from 'redux';
import NewestEntitiesReducer from './newest_entities_reducer';
import SessionReducer from './session_reducer';
import UIReducer from './ui_reducer';
import ErrorsReducer from './errors_reducer';
import NewestPageLoadedReducer from './newest_page_loaded_reducer';

const NewestRootReducer = combineReducers({
  entities : NewestEntitiesReducer,
  pageLoaded : NewestPageLoadedReducer,
  session : SessionReducer,
  ui : UIReducer,
  errors : ErrorsReducer
})

export default NewestRootReducer;