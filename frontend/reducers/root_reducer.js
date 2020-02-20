import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import SessionReducer from './session_reducer';
import UIReducer from './ui_reducer';
import ErrorsReducer from './errors_reducer';
import NewCategoriesReducer from './new_categories_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  search: SearchReducer,
  session: SessionReducer,
  ui: UIReducer,
  errors: ErrorsReducer,
  newcategories: NewCategoriesReducer
});

export default RootReducer;