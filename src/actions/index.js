// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const AMOUNT_EXPENSE = 'AMOUNT_EXPENSE';

export const userEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});

export const amountExpense = (payload) => ({
  type: AMOUNT_EXPENSE,
  payload,
});
