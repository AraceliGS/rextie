import React from 'react';

import { Link } from 'react-router-dom';
const NavigationOptions = ({text, icon, route}) => {
  return(
    <li className="list-group-item">
      <Link to={route} key={route}>
        <span><img className="navigation-icon" src={"../../assets/icons/" + icon} alt={icon} key={icon}/></span><span>{text}</span>
      </Link>
    </li>
  )
} 

export default NavigationOptions;