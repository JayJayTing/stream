import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import postReducers from './postReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer //form is a keyword for the npm package redux-form
});
