import {
  CREATE_EXPENSES_BUDGETS, LIST_EXPENSES_BUDGETS, DELETE_EXPENSES_BUDGET, EDIT_EXPENSES_BUDGET
} from '../type';

import * as api from '../api';

export const createExpensesBudget = ( newExpenses ) => async dispatch => {
  try {
    const { data } = await api.createExpenses( newExpenses );
    dispatch( {
      type: CREATE_EXPENSES_BUDGETS,
      payload: data.newExpenses
    } );
  } catch ( error ) {
    console.log( error );
  }
};

export const listExpensesBudgets = () => async dispatch => {
  try {
    const { data } = await api.getExpenses();
    dispatch( {
      type: LIST_EXPENSES_BUDGETS,
      payload: data.expenses
    } );
  } catch ( error ) {
    console.log( error );
  }
};

export const deleteExpensesBudget = id => async dispatch => {
  try {
    await api.deleteExpenses( id );
    dispatch( {
      type: DELETE_EXPENSES_BUDGET,
      payload: id
    } );
  } catch ( error ) {
    console.log( error );
  }
};

export const editExpensesBudget = budget => {
  return {
    type: EDIT_EXPENSES_BUDGET,
    payload: budget
  };
};
