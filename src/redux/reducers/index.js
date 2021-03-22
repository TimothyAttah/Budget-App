import { combineReducers } from 'redux';
import incomeBudgets from './incomeBudgetReducers';
import expensesBudgets from './expensesBudgetReducer';

export default combineReducers( {
  incomeBudgets,
  expensesBudgets
} );
