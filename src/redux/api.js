import axios from 'axios';

const incomeUrl = 'http://localhost:8080/api/budgets/incomes';

export const getIncome = () => axios.get( `${ incomeUrl }` );

export const createIncome = ( newIncome ) => axios.post( `${ incomeUrl }/create/income`, newIncome );

export const deleteIncome = ( id ) => axios.delete( `${ incomeUrl }/delete/income/${ id }` );
