import React from 'react';
import NavigationOptions from './navigationOptions';

const NavigationOptionsList = ({menuOptions}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div>
            <ul className="list-group">
               { menuOptions.map(menu =>
                  <NavigationOptions
                    key={menu.text}
                    {...menu}
                  />
               )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
// ../../assets/icons/usuario-hombre.png
export default NavigationOptionsList;