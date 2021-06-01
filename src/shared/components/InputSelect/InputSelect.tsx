import React from "react";
import "./InputSelect.scss";

const InputSelect = (props: any) => {
  return (
    <div className="input--select">
      <label>{props.label}</label>
      <select className="input-select" id={props.id}>
        {props.elemento.map((el: any) => {
          return (
            <option key={el.codigo} value={el.codigo}>
              {el.valor}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputSelect;
