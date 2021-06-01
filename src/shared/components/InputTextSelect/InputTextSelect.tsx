import React from "react";
import InputText from "../Input-text/InputText";
import "./InputTextSelect.scss";

const InputTextSelect = (props: any) => {
  return (
    <div className={`input-group ${props.clase}`}>
      <div className="input-group-prepend">
        <button
          className="dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Doc
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item">DNI</a>
          <a className="dropdown-item">PAP</a>
          <a className="dropdown-item">CE</a>
        </div>
      </div>

      <InputText
        id="props.label"
        type="text"
        validate="numeric"
        placeholder=" "
      />
    </div>
  );
};

export default InputTextSelect;
