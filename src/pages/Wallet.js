import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
// import user from '../reducers/user';

class Wallet extends React.Component {
  render() {
    const { userEmail, expensesList } = this.props;
    // console.log(expensesList);

    return (
      <div className="wallet-container">
        <header>
          <h1 className="wallet-title">
            Trybe Wallet
          </h1>
          <section className="wallet-email">
            <div className="wallet-spence">
              Despesa Total: R$
              <span data-testid="total-field">
                { expensesList
                  .reduce((acc, item) => acc + (item.value
                    * item.exchangeRates[item.currency].ask), 0)}
              </span>
              <p
                className="brl"
                data-testid="header-currency-field"
              >
                BRL
              </p>
            </div>
            <h3 data-testid="email-field">{ userEmail }</h3>
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
