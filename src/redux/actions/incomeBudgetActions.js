import {
  CREATE_BUDGETS, DELETE_BUDGET, EDIT_BUDGET, LIST_BUDGETS
} from '../type';

export const createIncomeBudget = budgets => {
  return {
    type: CREATE_BUDGETS,
    payload: budgets
  };
};

export const listIncomeBudgets = () => {
  return {
    type: LIST_BUDGETS
  };
};

export const deleteIncomeBudget = id => {
  return {
    type: DELETE_BUDGET,
    payload: id
  };
};

export const editIncomeBudget = budget => {
  return {
    type: EDIT_BUDGET,
    payload: budget
  };
};
