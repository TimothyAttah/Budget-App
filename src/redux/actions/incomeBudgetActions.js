import {
  CREATE_INCOME_BUDGETS, LIST_INCOME_BUDGETS, DELETE_INCOME_BUDGET, EDIT_INCOME_BUDGET
} from '../type';

export const createIncomeBudget = budgets => {
  return {
    type: CREATE_INCOME_BUDGETS,
    payload: budgets
  };
};

export const listIncomeBudgets = () => {
  return {
    type: LIST_INCOME_BUDGETS
  };
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
