import {
  CREATE_EXPENSES_BUDGETS, LIST_EXPENSES_BUDGETS, DELETE_EXPENSES_BUDGET, EDIT_EXPENSES_BUDGET
} from '../type';

import * as api from '../api';

export const createExpensesBudget = budgets => {
  return {
    type: CREATE_EXPENSES_BUDGETS,
    payload: budgets
  };
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

export const deleteExpensesBudget = id => {
  return {
    type: DELETE_EXPENSES_BUDGET,
    payload: id
  };
};

export const editExpensesBudget = budget => {
  return {
    type: EDIT_EXPENSES_BUDGET,
    payload: budget
  };
};
