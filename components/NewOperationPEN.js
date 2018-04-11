import React from 'react';

const NewOperationPEN = ({setExchange2Changed, secondText, outputText, setOutputText, sell, moneyType, peru, placeholder}) => (
  <div>
    <div className="sale-price font-weight-bold">   
      <p onClick={evt => {
    // console.log(evt.isTrusted)
       setExchange2Changed(evt.isTrusted);
       }}>Venta:{' '}<span>{sell}</span></p>
    </div>
    <div className="coin">
      <span>{moneyType}</span><span><img className="flag-icon" src={"../../assets/icons/" + peru} alt={peru} /></span>
    </div>
    <div className="what-i-have">
      <p>{secondText}</p>
      <input 
      value={outputText} 
      placeholder={placeholder}
      onChange={evt => {
        setOutputText(evt.target.value);
      }}
      />
    </div>
  </div>
);


export default NewOperationPEN;