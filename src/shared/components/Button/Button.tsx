import React from "react";

const Button = (props :any) => {
  return (
    <button
      onClick={() => props.clicBoton(props?.elemento)}
    >
      <span>{props.etiqueta} <i className={props?.iconoClase}></i></span>
    </button>
  );
};

export default Button;
