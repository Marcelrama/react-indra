import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import InputSelect from "../../components/InputSelect/InputSelect";
import GetYears from "../../services/UtilsService";
import IconCar from "../../assets/svg/icon_car.svg";
import IconReturn from "../../assets/svg/icon-return-red.svg";
import "./selectPlan.scss";
import MinusAndPlus from "../../components/MinusAndPlus/MinusAndPlus";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function SelectPlan() {
  const goTo = () => {};
  const years = GetYears();
  const brands = [
    { codigo: 1, valor: "KIA" },
    { codigo: 2, valor: "Mercerdes" },
    { codigo: 3, valor: "Ferrari" },
    { codigo: 4, valor: "Reanult" },
    { codigo: 5, valor: "Ford" },
  ];
  return (
    <div className="page">
      <Sidebar />
      <div className="content">
        <div className="content--return">
          <img src={IconReturn} alt="icono de retorno" />

          <Link to="/">
            <span>Volver</span>
          </Link>
        </div>

        <div className="content--titulo">
          <h1>
            ¡Hola, <span>Juan!</span>
          </h1>
          <p>Completa los datos de tu auto</p>
        </div>

        <div className="content--select">
          <div className="field-input">
            <InputSelect elemento={years} label="Año" id="years" />

            <InputSelect elemento={brands} label="Marca" id="brands" />
          </div>

          <div className="field--help">
            <div className="field--help--titulo">Ayuda</div>
            <div className="field--help--aviso">
              <div className="aviso">
                <p>¿No encuentras el modelo?</p>
                <a href="./">Clic Aquí</a>
              </div>
              <img src={IconCar} alt="" />
            </div>
          </div>
        </div>

        <div className="content--option">
          <p>¿Tu auto es a gas?</p>
          <div className="field--radio">
            <div className="input-radio">
              <input type="radio" id="si" name="question" value="si" />
              <label htmlFor="si">Si</label>
            </div>

            <div className="input-radio">
              <input type="radio" id="no" name="question" value="no" />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>

        <div className="content--price">
          <div className="price">
            <p> Indica la suma asegurada</p>
            <div className="price--text select--plan--mountNumbers">
              <p className="mr-2"> MIN $12.500 </p>
              <p className="mr-2">|</p>
              <p className="mr-0"> MIN $12.500 </p>
            </div>
          </div>
          <MinusAndPlus />
        </div>

        <div className="content--btn">
          <Link to="/detalles-carro">
            <Button
              clase="border-0 mb-5 mt-4"
              iconoClase="fa fa-chevron-right"
              etiqueta="CONTINUAR"
              clicBoton={goTo}
            />
          </Link>
        </div>
      </div>
      <div className="footer">© 2020 RIMAC Seguros y Reaseguros.</div>
    </div>
  );
}
