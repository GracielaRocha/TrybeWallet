import { TOTAL_EXPENSE, REQUEST_CURRENCIES,
  GET_CURRENCIES_SUCCESS, GET_CURRENCIES_ERROR, EXPENSE_DELETE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
  errorMessage: '',
  expenseDelete: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TOTAL_EXPENSE:
    return { ...state,
      expenses: state.expenses.concat(action.payload) };
  case EXPENSE_DELETE:
    return { ...state,
      expenses: state.expenseDelete.concat(action.payload) };
  case REQUEST_CURRENCIES:
    return { ...state,
      loading: true };
  case GET_CURRENCIES_SUCCESS:
    return { ...state,
      loading: false,
      currencies: action.payload };
  case GET_CURRENCIES_ERROR:
    return { ...state,
      loading: false,
      errorMessage: action.payload };
  default:
    return state;
  }
};
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

export default wallet;
