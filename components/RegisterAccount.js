import React from 'react';

function hacerClick()
	{
		alert("Me haz dado un click");
	}


const RegisterAccount = ({ click }) => {
  return(
  <div className="personal-bank-account">
    <div className="header-personal-bank-account">
      <h3>Cuentas Bancarias Personales -  </h3>
      <img src="assets/icons/simbolo-mas-en-un-cuadrado-negro-redondeado.png" />
    </div>
    <div className="soles-account">
      <p>Soles</p>
      <table className="container-soles">
        <thead>
          <tr>
            <th>Banco</th>
            <th>Tipo de Cuenta</th>
            <th>Número de Cuenta</th>
            <th className="in-use">En uso</th>
          </tr>
        </thead>
        <tbody>
          <tr className="data-soles">
            <td>BCP<i class="fas fa-star"></i></td>
            <td>Ahorros</td>
            <td>19136248273015</td>
            <td className="in-use"><button type="button" className="active-button" onclick={hacerClick}>Activo</button></td>
            <td>X</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)
}

export default RegisterAccount;