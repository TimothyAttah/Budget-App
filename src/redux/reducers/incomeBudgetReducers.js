import {
  CREATE_BUDGETS, LIST_BUDGETS, DELETE_BUDGET, EDIT_BUDGET
} from '../type';

const initialState = {
  budgets: [
    {
      id: 1,
      content: 'Salary',
      value: 5000
    },
    {
      id: 2,
      content: 'Project',
      value: 3000
    },
    {
      id: 3,
      content: 'Gift',
      value: 2000
    },
    {
      id: 4,
      content: 'Class Work',
      value: 5000
    },
  ]
};

const incomeBudgets = ( state = initialState, action ) => {
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

export default incomeBudgets;
