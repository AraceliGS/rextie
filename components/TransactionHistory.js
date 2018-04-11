import React from 'react';

const TransactionHistory = () => {
  return (
    <div className="transaction-history-container">
      <h2>Historial de Operaciones</h2>
      {' '}
      <table>
        <thead>
          <tr>
            <td>Banco</td>
            <td>Cuenta</td>
            <td>Monto</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>INTERBANK</td>
            <td>1663001273435</td>
            <td>$75</td>
          </tr>
          <tr>
            <td>CCI Interbank</td>
            <td>00316600300127343563</td>
            <td>$200</td>
          </tr>
          <tr>
            <td>BCP</td>
            <td>1932357833093</td>
            <td>S/.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TransactionHistory;