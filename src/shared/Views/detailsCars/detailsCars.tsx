import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import IconReturn from "../../assets/svg/icon-return-red.svg";
import cardHombre from "../../assets/svg/hombre-card.svg";
import IconMinus from "../../assets/svg/icon-minus.svg";
import IconLlanta from "../../assets/svg/icon-llanta.svg";
import IconAdd from "../../assets/svg/icon-add.svg";
import "./details.scss";

export default function DetailsCars() {
  // const open = () => {};
  return (
    <div className="page details-cars">
      <Sidebar />
      <div className="content">
        <div className="content--return">
          <img src={IconReturn} alt="icono de retorno"/>
          <span>Volver</span>
        </div>

        <div className="content--titulo">
          <h1>Mira las coberturas</h1>
          <p>Conoce las coberturas para tu plan</p>
        </div>

        <div className="content--card">
          <div className="card--data">
            <div className="card--data--number">Placa: C2U-114</div>
            <div className="card--data--brand">Wolkswagen 2019 Golf</div>
            <div className="card--data--edit">Editar</div>
          </div>
          <img src={cardHombre} alt="imagen de hombre"/>
        </div>

        <div className="content--tab">
          <div className="tab--titulo">
            Agrega o quita coberturas
          </div>

          <div className="tab--head">
            <div className="tab--head--item active">
              Protege a tu auto
            </div>
            <div className="tab--head--item">
              Protege a los que te rodean
            </div>
            <div className="tab--head--item">
              Mejora tu plan
            </div>
          </div>

          <div className="tab--content">
            <div className="tab--content--item">
              <div className="accordeon">
                <div className="acordeon--head">
                  {/* <div className="accordeon--head--img"></div> */}
                  <img src={IconLlanta} alt=""/>
                  <div className="accordeon--head--title">
                    <h5>Llanta robada</h5>
                    <div className="btn--action">
                      <div className="btn--action--image">
                        <img src={IconMinus} alt=""/>
                      </div>
                      <div className="btn--action--text">
                        <span>Quitar</span>
                        {/* <span>Agregar</span> */}
                      </div>
                    </div>
                  </div>
                  <div className="accordeon--head--arrow"></div>
                </div>
                <div className="acordeon--content">
                  He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más
                </div>
              </div>
            </div>
            <div className="tab--content--item"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
