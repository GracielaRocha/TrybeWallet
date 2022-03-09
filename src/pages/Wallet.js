import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
// import user from '../reducers/user';

class Wallet extends React.Component {
  render() {
    const { userEmail, expensesList } = this.props;
    console.log(expensesList);

    return (
      <div>
        TrybeWallet
        <header>
          <section>
            <h3 data-testid="email-field">{ userEmail }</h3>
            <p>
              Despesa Total: R$
              <span data-testid="total-field">
                { expensesList
                  .reduce((acc, item) => acc + (item.value
                  * item.exchangeRates[item.currency].ask), 0).toFixed(2)}
              </span>
            </p>
            <p data-testid="header-currency-field">BRL</p>
          </section>
        </header>
        <Form />
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expensesList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expensesList: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
