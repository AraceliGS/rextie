import {actionTypes} from '../actions/index';

const DATA = {
  iHaveText: 'Tengo',
  iWantText: 'Quiero',
  buySoles: 3.1900,
  buyDollars: 3.2380,
  money1: 'PEN S/.',
  money2: 'USD $',
  placeholder1: 'Input',
  placeholder2: 'Output',
  flag1: 'pe.png',
  flag2: 'us.png',
  text1: '',
  text2: '',
  accounts: [
    {name: 'CCI Interbank', accountDollars: '00316600300127343563', accountSoles:  '00316600300127342868'},
    {name:'BCP', accountDollars: '1931700523109', accountSoles:  '1932357833093'},
    {name:'INTERBANK', accountDollars: '1663001273435', accountSoles: '1663001273428'}
  ]
}
// {DATA.accounts.map( account => {
//   console.log(account.accountDollars);
// } );}
const INIT_STATE = {
  bankAccounts: DATA.accounts,
  firstInputText: DATA.iHaveText,
  secondInputText: DATA.iWantText,
  inputText: DATA.text1,
  outputText: DATA.text2,
  moneyType1: DATA.money1,
  moneyType2: DATA.money2,
  countryFlag1: DATA.flag1,
  countryFlag2: DATA.flag2,
  exchangeForMoney1: DATA.buySoles,
  exchangeForMoney2: DATA.buyDollars,
  exchange: false,
  exchange2: false,
  firstPlaceholder: DATA.placeholder1,
  secondPlaceholder: DATA.placeholder2
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.INPUT_TEXT_CHANGED:
      state = {
        ...state,
        inputText: action.text,
        outputText: action.text * 3.1900
      }
      break;
    case actionTypes.OUTPUT_TEXT_CHANGED:
      state = {
        ...state,
        inputText: action.text * 3.2380,
        outputText: action.text,
      }
      break;
    case actionTypes.EXCHANGE_CHANGED:
      state = {
        ...state,
        countryFlag1: DATA.flag1,
        countryFlag2: DATA.flag2,
        moneyType1: DATA.money1,
        moneyType2: DATA.money2,
        inputText: '',
        outputText: '',
        firstPlaceholder: DATA.placeholder1,
        secondPlaceholder: DATA.placeholder2
      }
      break;
    case actionTypes.EXCHANGE_2_CHANGED:
      state = {
        ...state,
        countryFlag1: DATA.flag2,
        countryFlag2: DATA.flag1,
        moneyType1: DATA.money2,
        moneyType2: DATA.money1,
        inputText: '',
        outputText: '',
        firstPlaceholder: DATA.placeholder2,
        secondPlaceholder: DATA.placeholder1
      }
      break;
    default:
      return state;
  }

  return state;
};