import {
  CREATE_BUDGETS, LIST_BUDGETS, DELETE_BUDGET, EDIT_BUDGET
} from '../type';

const initialState = {
  budgets: [
    {
      id: 1,
      content: 'Groceries',
      value: 5000
    },
    {
      id: 2,
      content: 'T-fare',
      value: 3000
    },
    {
      id: 3,
      content: 'Shopping Mall',
      value: 2000
    }
  ]
};

const expensesBudgets = ( state = initialState, action ) => {
  switch ( action.type ) {
    case CREATE_BUDGETS:
      return {
        ...state,
        budgets: [ action.payload, ...state.budgets ]
      };
    case LIST_BUDGETS:
      return {
        ...state
      };
    case DELETE_BUDGET:
      return {
        ...state,
        budgets: state.budgets.filter( budget => budget.id !== action.payload )
      };
    case EDIT_BUDGET:
      return {
        ...state,
        budgets: [ ...state.budgets ]
      };
    default:
      return state;
  }
};

export default expensesBudgets;
