import AllCategoriesReducer from './all_categories_reducer';
import CurrentCategoriesReducer from './current_categories_reducer';
import { combineReducers } from 'redux';

const CategoriesReducer = combineReducers({
    allCategories: AllCategoriesReducer,
    currentCategories: CurrentCategoriesReducer
})

export default CategoriesReducer;