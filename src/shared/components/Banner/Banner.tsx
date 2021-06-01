import React from "react";
import "./Banner.scss";
import PersonaMovil from "../../assets/svg/Persona.svg";
import CarImg from "../../assets/svg/car-init-page.svg";

const Banner = (props: any) => {
  return (
    <div className="banner">
      <div className="banner--content">
        <div className="banner--image">
          <img src={CarImg} className="banner--image--d" alt=""/>
          <img src={PersonaMovil} className="banner--image--m" alt=""/>
        </div>

        <div className="banner--text">
          <h5>¡NUEVO!</h5>
          <h1>
            Seguro <span className="bicolor">Vehicular</span>
            <br/>
            <span>Tracking</span>
          </h1>
          <h6>Cuentanos donde le haras seguimiento a tu seguro</h6>
        </div>
        
      </div>
      <div className="banner--copy">
        <p className="copyright">© 2020 RIMAC Seguros y Reaseguros.</p>
      </div>
    </div>

    // <section className={`banner--section ${props.clase}`}>
    //   <div className="banner--section--body">
    //     <img
    //       src={CarImg}
    //       alt="rimac carro"
    //       className="banner--section--body--imgDesktop"
    //     />
    //     <div className="banner--section--body--text">
    //       <h5>¡NUEVO!</h5>
    //       <h1>
    //         Seguro Vehicular <b>Tracking</b>
    //       </h1>
    //       <h6>Cuentanos donde le haras seguimiento a tu seguro</h6>
    //     </div>
    //   </div>

    //   <img
    //     className="banner--section--body--imgMovil d-block d-sm-none d-none d-sm-block d-md-none"
    //     src={PersonaMovil}
    //     alt="rimac banner"
    //   />

    //   <p className="copyright">© 2020 RIMAC Seguros y Reaseguros.</p>
    // </section>
  );
};

export default Banner;
