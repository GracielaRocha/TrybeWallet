import getCurrency from '../components/API';

export const USER_EMAIL = 'USER_EMAIL';
export const TOTAL_EXPENSE = 'AMOUNT_EXPENSE';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';

export const userEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});

export const amountExpense = (payload) => ({
  type: TOTAL_EXPENSE,
  payload,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const getCurrenciesSuccess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrenciesError = (payload) => ({
  type: GET_CURRENCIES_ERROR,
  payload,
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(requestCurrencies());
  try {
    dispatch(getCurrenciesSuccess(await getCurrency()));
  } catch (error) {
    dispatch(getCurrenciesError(error));
  }
};
