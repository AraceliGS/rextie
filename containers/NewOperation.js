import {connect} from 'react-redux';

import NewOperationComponent from '../components/NewOperation';

import {inputTextChanged, outputTextChanged, exchangeChanged, otherExchangeChanged} from '../actions/index';

const NewOperationComponentWithRedux = connect(
  function mapStateToProps(state) {
    const {
      inputText,
      outputText,
      firstInputText,
      secondInputText,
      firstPlaceholder,
      secondPlaceholder,
      moneyType1,
      moneyType2,
      countryFlag1,
      countryFlag2,
      exchangeForMoney1,
      exchangeForMoney2,
      exchange,
      exchange2
    } = state.AppReducer;

    return {
      inputText,
      outputText,
      firstText: firstInputText,
      secondText: secondInputText,
      buyMoney1: exchangeForMoney1,
      buyMoney2: exchangeForMoney2,
      peruvianFlag: countryFlag1,
      americanFlag: countryFlag2,
      peruvianMoney: moneyType1,
      americanMoney: moneyType2,
      firstPlaceholder: firstPlaceholder,
      secondPlaceholder: secondPlaceholder,
      exchange,
      exchange2
    };
  },

  function mapDispatchToProps(dispatch) {
    return {
      setInputText(newInputText) {
        dispatch(inputTextChanged(newInputText));
      },
      setOutputText(newOutputText) {
        dispatch(outputTextChanged(newOutputText));
      },
      setExchangeChanged(newEvent) {
        dispatch(exchangeChanged(newEvent));
      },
      setExchange2Changed(otherEvent) {
        dispatch(otherExchangeChanged(otherEvent));
      }
    };
  }
)(NewOperationComponent);

export default NewOperationComponentWithRedux;