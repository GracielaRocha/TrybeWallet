import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import user from '../reducers/user';

class Wallet extends React.Component {
  state={
    expense: 0,
  }

  render() {
    const { userEmail } = this.props;
    const { expense } = this.state;
    // console.log(this.props);
    return (
      <div>
        TrybeWallet
        <header>
          <section>
            <h3 data-testid="email-field">{ userEmail }</h3>
            <label htmlFor="despesa-total">
              Despesa Total
              <input
                name="despesa-total"
                value={ expense }
                data-testid="total-field"
              />
            </label>
            <p data-testid="header-currency-field">BRL</p>
          </section>
        </header>
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
