import { combineReducers } from 'redux';
import fetchDatas from "./fetchDatas"
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  datas:fetchDatas,
  form:formReducer
});

export default rootReducer;
