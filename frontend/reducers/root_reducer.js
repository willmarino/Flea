import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import SessionReducer from './session_reducer';
import UIReducer from './ui_reducer';
import ErrorsReducer from './errors_reducer';
import CategoriesReducer from './categories_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  search: SearchReducer,
  session: SessionReducer,
  ui: UIReducer,
  errors: ErrorsReducer,
  categories: CategoriesReducer
});

export default RootReducer;