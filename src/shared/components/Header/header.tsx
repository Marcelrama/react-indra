import React from "react";
import LOGO from '../../assets/svg/LOGO_RIMAC.svg';
import IconPhone from '../../assets/svg/icon-phone.svg';
import './header.scss'

const Header = (props: any) => {
  return (
    // <header className="header header-login">
    <header className="header">
      <div className="header--container">
        <div className="header--img">
            <img src={LOGO} alt="LOGO" />
        </div>

        <div className="header--data">
          <div className="header--data--text">
            ¿Tienes alguna duda?    
          </div>

          <div className="header--data--phone">
            <img src={IconPhone} alt="Icono de telefono"/>
            <span className="phone--text">Llámanos</span>
            <span className="phone--number">(01) 411 6001</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
