import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expenseDelete } from '../actions';

class Table extends React.Component {
  removeArr = ({ target }) => {
    console.log(target);
    const { expensesTable, expenseChange } = this.props;
    console.log('tabela original', expensesTable);
    const tableChange = expensesTable.filter((expense) => expense.id !== +target.id);
    console.log('tabela modificada', tableChange);

    expenseChange(tableChange);
  }

  render() {
    const { expensesTable } = this.props;
    const { removeArr } = this;
    // console.log(removeLine());
    return (
      <table border="1" width="100%">
        <tr className="table-title">
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de Pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio Utilizado</th>
          <th>Valor Convertido</th>
          <th>Moeda de Conversão</th>
          <th>Excluir</th>
        </tr>
        <tbody>
          {
            expensesTable.map((item) => (
              <tr key={ item.id }>
                <td>{ item.description }</td>
                <td>{ item.tag }</td>
                <td>{ item.method }</td>
                <td>{ parseFloat(item.value).toFixed(2) }</td>
                <td>{ (item.exchangeRates[item.currency].name).split('/')[0] }</td>
                <td>
                  { parseFloat(item.exchangeRates[item.currency].ask).toFixed(2) }
                </td>
                <td>
                  { parseFloat(item.exchangeRates[item.currency]
                    .ask * item.value).toFixed(2) }
                </td>
                <td>Real</td>
                <td>
                  <input
                    className="btn-delete"
                    data-testid="delete-btn"
                    type="image"
                    id={ item.id }
                    onClick={ removeArr }
                    src="https://www.svgrepo.com/show/79440/delete-button.svg"
                    alt="Excluir"
                  />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenseChange: PropTypes.arrayOf(PropTypes.object).isRequired,
  expensesTable: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  expenseChange: (value) => dispatch(expenseDelete(value)),
});

const mapStateToProps = (state) => ({
  expensesTable: state.wallet.expenses,
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);
