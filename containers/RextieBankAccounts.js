import {connect} from 'react-redux';

import BankAccountsComponent from "../components/RextieBankAccounts";

const BankAccountsComponentWithRedux = connect(
  function mapStateToProps (state) {
    const {
      bankAccounts,
    } = state.AppReducer;

    return {
      rextieAccounts: bankAccounts
    };
  }
)(BankAccountsComponent);

export default BankAccountsComponentWithRedux;