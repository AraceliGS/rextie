import React from 'react';
// import TransactionHistory from "./TransactionHistory";
// import RextieBankAccounts from "./RextieBankAccounts";
import { Switch, Route } from 'react-router-dom';
import TransactionHistory from "./TransactionHistory";
import RextieBankAccounts from "./RextieBankAccounts";
// import NewOperation from './NewOperation';
import NewOperation from '../containers/NewOperation';
import RegisterAccount from './RegisterAccount';
import PersonalInformation from './PersonalInformation';


const Main = () => {
  return (
    <main className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-8">
      <Switch>
        <Route exact path='/' component={NewOperation} />
        <Route path= '/personal-information' component={PersonalInformation}/>
        <Route path='/historial' component={TransactionHistory} />
        <Route path='/bank-rextie' component={RextieBankAccounts} />
        <Route path='/register-acount' component={RegisterAccount} />
      </Switch>
    </main>
  )
}

export default Main;
