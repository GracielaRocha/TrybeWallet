import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { amountExpense, fetchCurrencies } from '../actions';
import getCurrency from './API';

class Form extends React.Component {
  state = {
    id: -1,
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    // console.log(target);
    this.setState({
      [name]: value,
    });
  }

  componentDidMount = () => {
    const { currencies } = this.props;
    currencies();
  }

  handleClick = async (event) => {
    event.preventDefault();
    const { expense } = this.props;
    const { id } = this.state;
    this.setState({
      id: id + 1,
      exchangeRates: await getCurrency(),
    });
    expense(this.state);
    this.setState({
      value: 0,
      description: '',
    });
  }

  render() {
    const { value, description, currency, tag, method } = this.state;
    const { handleChange, handleClick } = this;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            data-testid="value-input"
            type="number"
            name="value"
            id="value"
            value={ value }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            data-testid="currency-input"
            name="currency"
            id="currency"
            value={ currency }
            onChange={ handleChange }
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="EUR">EUR</option>
          </select>
        </label>
        <label htmlFor="method">
          Metodo de Pagamento:
          <select
            data-testid="method-input"
            name="method"
            id="method"
            value={ method }
            onChange={ handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            data-testid="tag-input"
            name="tag"
            id="tag"
            value={ tag }
            onChange={ handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  expense: PropTypes.func.isRequired,
  currencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  expense: (value) => dispatch(amountExpense(value)),
  currencies: (value) => dispatch(fetchCurrencies(value)),
});
export default connect(null, mapDispatchToProps)(Form);
