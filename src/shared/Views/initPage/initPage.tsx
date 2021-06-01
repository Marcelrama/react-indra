import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Button from "../../components/Button/Button";
import Form from "../../components/Forms/Form";
import InputText from "../../components/Input-text/InputText";
import InputTextSelect from "../../components/InputTextSelect/InputTextSelect";
import "../../styles/estilos-fuentes.scss";
import "./initPage.scss";

export default function InitPage() {
  const open = () => {};
  return (
    <div className="init--page">
      <Banner />

      <div className="login">
        <h1 className="login--titulo">Déjanos tus datos</h1>
        <div className="formulario">
          <Form>
            <InputTextSelect clase="input--text--field" />

            <InputText
              id="Celular"
              type="text"
              validate="numeric"
              placeholder="Celular"
            />

            <InputText
              id="placa"
              type="text"
              validate="numeric"
              clase="col-sm-12 col-md-10 col-lg-8 container"
              placeholder="Placa"
            />
            <div className="formulario--checkbox">
              <input
                className="col-0 mr-1"
                type="checkbox"
                id="check"
                aria-label="términos y condiciones"
              />
              <label>
                Acepto la{" "}
                <a href="http://" target="_blank">
                  Política de Protecciòn de Datos Personales
                </a>{" "}
                y los{" "}
                <a href="http://" target="_blank">
                  Términos y Condiciones.
                </a>
              </label>
            </div>

            <div className="formulario--button">
              <Link to="/seleciona-plan">
                <Button iconoClase="" etiqueta="cotízalo" clicBoton={open} />
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
