import React from 'react';

const extraInfo = ({info}) => {
  const spanInfo= info.map(el => <span className="span-info" key={el}>{el}</span>);

  return (
    <div>
     {spanInfo}
    </div>
  )
}

export default extraInfo;