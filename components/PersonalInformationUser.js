import React from 'react';

const PersonalInformationUser = ({ info }) => (
  <div className="profile-info-container">
    {/* {info.map(info.map((i, v)=>{console.log(i)}))}  */}
    {info.map(i =>  
      <div className="profile-info">
        <label for="birth-date">{i.label}</label>
        <input type="text" className="" id="birth-date" placeholder={i.placeholder} />
      </div>
    )};
  </div>
);

export default PersonalInformationUser;