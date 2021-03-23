import {
  CREATE_EXPENSES_BUDGETS, LIST_EXPENSES_BUDGETS, DELETE_EXPENSES_BUDGET, EDIT_EXPENSES_BUDGET
} from '../type';

const initialState = {
  budgets: [
    {
      id: 1,
      content: 'Groceries',
      values: 5000
    },
    {
      id: 2,
      content: 'T-fare',
      values: 3000
    },
    {
      id: 3,
      content: 'Shopping Mall',
      values: 2000
    }
  ]
};

const expensesBudgets = ( state = initialState, action ) => {
  switch ( action.type ) {
    case CREATE_EXPENSES_BUDGETS:
      return {
        ...state,
        budgets: [ action.payload, ...state.budgets ]
      };
    case LIST_EXPENSES_BUDGETS:
      return {
        ...state
      };
    case DELETE_EXPENSES_BUDGET:
      return {
        ...state,
        budgets: state.budgets.filter( budget => budget.id !== action.payload )
      };
    case EDIT_EXPENSES_BUDGET:
      return {
        ...state,
        budgets: [ ...state.budgets ]
      };
    default:
      return state;
  }
};

export default expensesBudgets;
