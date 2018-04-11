import React from 'react';
import Header from './header'
import Main from './main'
import Aside from './aside';

const App = () => (
  <div>
    <Header
      url="logo2.png" 
    />
    <div className="container-fluid">
      <div className="row">
        <Aside />
        <Main /> 
      </div>
    </div>
  </div>
)   

export default App;