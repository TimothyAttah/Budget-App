import {
  CREATE_BUDGETS, DELETE_BUDGET, EDIT_BUDGET, LIST_BUDGETS
} from '../type';

export const createExpensesBudget = budgets => {
  return {
    type: CREATE_BUDGETS,
    payload: budgets
  };
};

export const listExpensesBudgets = () => {
  return {
    type: LIST_BUDGETS
  };
};

export const deleteExpensesBudget = id => {
  return {
    type: DELETE_BUDGET,
    payload: id
  };
};

export const editExpensesBudget = budget => {
  return {
    type: EDIT_BUDGET,
    payload: budget
  };
};
