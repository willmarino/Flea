import { combineReducers } from 'redux';
import ModalReducer from './modal_reducer';
import ShopManagerReducer from './shop_manager_reducer';

const UIReducer = combineReducers({
  modal: ModalReducer,
  shopManager : ShopManagerReducer
});

export default UIReducer;