import React from 'react';
import PersonalInformationUser from './PersonalInformationUser';


const data = {
  personalInfo: { title: 'Cuenta Personal', otherInfo: [['DNI:', 78451235], ['Ponte', 'Ana']] },
  infopersonal : [
    { label: 'Nombre Completo'},
    { label: 'Fecha de Nacimiento'},
    { label: 'Tipo de Documento' },
    { label: 'Número de Documento'},
    { label: 'Ocupación'},
    { label: 'Profesión o Cargo'},
    { label: 'Correo Electrónico'},
    { label: 'Celular / Fijo'},
    { label: 'Ubigeo DNI -Nacimiento'},
    { label: 'Fecha de Emisión'}
  ]
}

const PersonalInformation = () => (
  <div className="personal-information">
    <h3>Perfil</h3>
    {/* <div className=""> */}
      <PersonalInformationUser info={data.infopersonal}/>
      {/* {infopersonal.map = ( info => {console.log(info)})} */}
      {/* <div className="profile-info">
        <label for="full-name">Nombre Completo</label>
        <input type="text" className="" id="full-name" placeholder="Tu nombre..." />
      </div>
      <div className="profile-info">
        <label for="birth-date">Fecha de Nacimiento</label>
        <input type="text" className="" id="birth-date" placeholder="Tu fecha de nacimiento..." />
      </div>
      <div className="profile-info">
        <label for="id-card-type">Tipo de Documento</label>
        <input type="text" className="" id="id-card-type" placeholder="Tipo de documento..." />
      </div>
      <div className="profile-info">
        <label for="id-card-number">Número de Documento</label>
        <input type="text" className="" id="id-card-number" placeholder="Número de documento..." />
      </div>
      <div className="profile-info">
        <label for="job">Ocupación</label>
        <input type="text" className="" id="job" placeholder="Tu profesión..." />
      </div>
      <div className="profile-info">
        <label for="job-position">Profesión o Cargo</label>
        <input type="text" className="" id="job-position" placeholder="..." />
      </div>
      <div className="profile-info">
        <label for="job-position">Profesión o Cargo</label>
        <input type="text" className="" id="job-position" placeholder="..." />
      </div>
      <div className="profile-info">
        <label for="job-position">Profesión o Cargo</label>
        <input type="text" className="" id="job-position" placeholder="..." />
      </div>
      <div className="profile-info">
        <label for="job-position">Profesión o Cargo</label>
        <input type="text" className="" id="job-position" placeholder="..." />
      </div>      */}
    {/* </div>   */}
  </div>
)

export default PersonalInformation;