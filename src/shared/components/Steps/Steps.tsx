import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Steps.scss";
import IconBackCirlce from "../../assets/svg/icon_Back_circle.svg";
const Steps = (props: any) => {
  return (
    <div className="steps container-fluids">
      <img src={IconBackCirlce} alt="ir atras"  className="steps--img"/>
      <p className="steps--text">Paso 1 de 2</p>
      <ProgressBar className="steps--progress" width={props.widthProgressBar} />
    </div>
  );
};

export default Steps;
