import axios from 'axios';

const incomeUrl = 'http://localhost:8080/api/budgets/incomes';

export const getIncome = () => axios.get( `${ incomeUrl }` );

export const createIncome = (newIncome) => axios.create( `${ incomeUrl }/create/income`, newIncome );
