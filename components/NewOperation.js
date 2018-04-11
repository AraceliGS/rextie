import React from 'react';
import NewOperationPEN from './NewOperationPEN';
import NewOperationUSD from './NewOperationUSD';

const NewOperation = ({inputText, outputText, firstText, secondText, buyMoney1, peruvianFlag, peruvianMoney,firstPlaceholder, 
  setInputText, setOutputText, setExchangeChanged, setExchange2Changed, buyMoney2, americanFlag, americanMoney, secondPlaceholder
}) => {
  return (
    <div className="new-operation">
      <div className="main-box">
        <h3>¿Cuánto quieres cambiar?</h3>
        <div className="info-main-box">
          <h4>Cambio de Dólares Online</h4>
          <p>Seguro, Rápido y al Mejor precio</p>
        </div>
      </div>
      <div className="buy-sale-box">
        <div className="buy-box"> 
          <NewOperationUSD setExchangeChanged={setExchangeChanged} firstText={firstText} inputText={inputText} setInputText={setInputText} buy={buyMoney1} moneyType={americanMoney} us={americanFlag} placeholder={firstPlaceholder} />
        </div>
        <div className="sale-box"> 
          <NewOperationPEN setExchange2Changed={setExchange2Changed} secondText={secondText} outputText= {outputText} setOutputText={setOutputText} sell={buyMoney2} moneyType={peruvianMoney} peru={peruvianFlag} placeholder={secondPlaceholder} />
        </div>
      </div>
      <div className="button-container">
        <button className="next-button font-weight-bold">Continuar</button>
      </div>
    </div>
  )
}

export default NewOperation;