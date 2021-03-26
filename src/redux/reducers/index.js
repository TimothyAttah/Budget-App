import { combineReducers } from 'redux';
import incomeBudgets from './incomeBudgetReducers';
import expensesBudgets from './expensesBudgetReducer';
import users from './authReducer';

export default combineReducers( {
  incomeBudgets,
  expensesBudgets,
  users
} );
