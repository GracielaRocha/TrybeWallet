import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const { expensesTable } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        <tr>
          {
            expensesTable.map((item) => (
              <tbody key={ item.id }>
                <td>{ item.description }</td>
                <td>{ item.tag }</td>
                <td>{ item.method }</td>
                <td>{ parseFloat(item.value).toFixed(2) }</td>
                <td>{ (item.exchangeRates[item.currency].name).split('/')[0] }</td>
                <td>{ parseFloat(item.exchangeRates[item.currency].ask).toFixed(2) }</td>
                <td>
                  { parseFloat(item.exchangeRates[item.currency]
                    .ask * item.value).toFixed(2) }
                </td>
                <td>Real</td>
              </tbody>
            ))
          }
        </tr>
      </table>
    );
  }
}

Table.propTypes = {
  expensesTable: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expensesTable: state.wallet.expenses,
});
export default connect(mapStateToProps)(Table);
