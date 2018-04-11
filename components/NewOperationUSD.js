import React from 'react';

const NewOperationUSD = ({setExchangeChanged, firstText, inputText, setInputText, buy, moneyType, us, placeholder}) => (
  <div>
    <div className="buy-price font-weight-bold">
      <p onClick={evt => {
    // console.log(evt.isTrusted)
    setExchangeChanged(evt.isTrusted);
  }}>Compra:{' '}<span>{buy}</span></p>
    </div>
    <div className="coin">
      <span>{moneyType}</span><span><img className="flag-icon" src={"../../assets/icons/" + us} alt={us} /></span>
    </div>
    <div className="what-i-have">
      <p>{firstText}</p>
      <input 
      value={inputText} 
      onChange={evt => {
        setInputText(evt.target.value)
      }}
      placeholder={placeholder}
      />
    </div>
  </div>
)

export default NewOperationUSD;