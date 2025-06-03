import { legacy_createStore as createStore ,applyMiddleware} from 'redux';
import employeeReducer from './employee/employeeReducer';


import logger from 'redux-logger';

const store = createStore(
  employeeReducer,
  undefined,
  applyMiddleware(logger)
);

export default store