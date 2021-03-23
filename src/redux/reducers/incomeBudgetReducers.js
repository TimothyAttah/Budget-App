import {
  CREATE_INCOME_BUDGETS, LIST_INCOME_BUDGETS, DELETE_INCOME_BUDGET, EDIT_INCOME_BUDGET
} from '../type';

// const initialState = {
//   budgets: [
//     // {
//     //   id: 1,
//     //   content: 'Salary',
//     //   values: 5000
//     // },
//     // {
//     //   id: 2,
//     //   content: 'Project',
//     //   values: 3000
//     // },
//     // {
//     //   id: 3,
//     //   content: 'Gift',
//     //   values: 2000
//     // },
//     // {
//     //   id: 4,
//     //   content: 'Class Work',
//     //   values: 5000
//     // },
//   ]
// };

const incomeBudgets = ( budgets = [], action ) => {
  switch ( action.type ) {
    case CREATE_INCOME_BUDGETS:
      return [ action.payload, ...budgets ];
      // return {
      //   ...state,
      //   budgets: [ action.payload, ...state.budgets ]
      // };
    case LIST_INCOME_BUDGETS:
      return action.payload;
      // return {
      //   ...state,
      //   budgets: action.payload
      // };
    case DELETE_INCOME_BUDGET:
      return budgets.filter( budget => budget.id !== action.payload );
      // return {
      //   ...state,
      //   budgets: state.budgets.filter( budget => budget.id !== action.payload )
      // };
    case EDIT_INCOME_BUDGET:
      return action.payload;
      // return {
      //   ...state,
      //   budgets: [ ...state.budgets ]
      // };
    default:
      return budgets;
  }
};

export default incomeBudgets;
