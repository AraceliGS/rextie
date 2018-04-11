import React from 'react';
import ExtraInfo from './extraInfo';

const UserInfo = ({title, otherInfo}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="personal-account">
            <h5>{title}</h5>
            {otherInfo.map((el, index) => <ExtraInfo info={el} key={index}/>)}
          </div>
        </div>
      </div> 
    </div>
  )
}

export default UserInfo;
