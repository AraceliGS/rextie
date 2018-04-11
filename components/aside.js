import React from 'react';
import UserInfo from './userInfo.js';
import NavigationOptionsList from './navigationOptionsList.js';
import { Link } from 'react-router-dom';

const data = {
  personalInfo: { title: 'Cuenta Personal', otherInfo: [['DNI:', 78451235], ['Ponte', 'Ana']] },
  menuOptions : [
    { route: '/', icon: 'boton-de-reproduccion.png', text: 'Nueva Operación' },
    { route: '/personal-information', icon: 'usuario-hombre.png', text: 'Información Personal' },
    { route: '/register-acount', icon: 'pago-con-tarjetas-de-credito.png', text: 'Cuentas Bancarias Registradas' },
    { route: '/historial', icon: 'historial-de-navegacion-simbolo-de-interfaz-de-un-reloj-con-una-flecha.png', text: 'Historial de Operaciones' },
    { route: '/bank-rextie', icon: 'pago-con-tarjetas-de-credito.png', text: 'Cuentas Bancarias de Rextie' },
    { route: '', icon: 'logout.png', text: 'salir' },
  ]
}

const Aside = () => (
  <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-4">
    <div className="aside">
      <UserInfo title={data.personalInfo.title} otherInfo={data.personalInfo.otherInfo} />
      <NavigationOptionsList menuOptions = {data.menuOptions}/>
    </div>
  </div>
)

export default Aside;

// icons={data.icons}