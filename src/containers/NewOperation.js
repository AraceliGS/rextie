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
      exchangeForMoney1,
      exchangeForMoney2,
      exchange,
      exchange2,
      americanMoney,
      americanFlag,
      peruvianMoney,
      peruvianFlag
    } = state.AppReducer;

    return {
      inputText,
      outputText,
      firstText: firstInputText,
      secondText: secondInputText,
      buyMoney1: exchangeForMoney1,
      buyMoney2: exchangeForMoney2,
      exchange,
      exchange2,
      soles: peruvianMoney,
      dollars: americanMoney,
      peru: peruvianFlag,
      us: americanFlag
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