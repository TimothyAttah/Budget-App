import {
  CREATE_INCOME_BUDGETS, LIST_INCOME_BUDGETS, DELETE_INCOME_BUDGET, EDIT_INCOME_BUDGET
} from '../type';

import * as api from '../api';

export const createIncomeBudget = ( newIncome ) => async dispatch => {
  try {
    const { data } = await api.createIncome( newIncome );
    dispatch( {
      type: CREATE_INCOME_BUDGETS,
      payload: data.data
    } );
  } catch ( error ) {
    console.log( error );
  }
};

export const listIncomeBudgets = () => async dispatch => {
  try {
    const { data } = await api.getIncome();
    dispatch( {
      type: LIST_INCOME_BUDGETS,
      payload: data.data
    } );
  } catch (error) {
    console.log( error );
  }
};

export const deleteIncomeBudget = id => {
  return {
    type: DELETE_INCOME_BUDGET,
    payload: id
  };
};

export const editIncomeBudget = budget => {
  return {
    type: EDIT_INCOME_BUDGET,
    payload: budget
  };
};
