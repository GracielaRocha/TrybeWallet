import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userEmail } from '../actions';

class Login extends React.Component {
  state = {
    email: '',
    senha: '',
    disabled: true,
    redirect: false,
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(value);
    this.setState({
      [name]: value,
    }, this.validate);
  }

  validate = () => {
    const { email, senha } = this.state;
    const number = 5;
    const validation = (senha.length > number
      && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email));
    this.setState({
      disabled: !validation,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { emailUser } = this.props;
    emailUser(email);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { disabled, redirect } = this.state;
    const { handleChange, handleClick } = this;

    if (redirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <div className="container">
        <div className="login-container">
          <div className="title-container">
            <h1>Trybe</h1>
            <h1>Wallet</h1>
          </div>
          <section className="login-form">
            <input
              className="input-login"
              name="email"
              type="email"
              onChange={ handleChange }
              placeholder="Digite seu email"
              data-testid="email-input"
            />
            <input
              className="input-login"
              name="senha"
              type="password"
              onChange={ handleChange }
              placeholder="Digite sua senha"
              data-testid="password-input"
            />
          </section>
          <section>
            <button
              className="login-btn"
              type="button"
              onClick={ handleClick }
              disabled={ disabled }
            >
              Entrar
            </button>
          </section>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  emailUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailUser: (value) => dispatch(userEmail(value)),
});
export default connect(null, mapDispatchToProps)(Login);
