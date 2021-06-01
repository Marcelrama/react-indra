import React, { useContext, useEffect } from "react";
import FormCtx from "../../services/FormCtx";
import "./InputText.scss";

const InputText = (props: any) => {
  const { id } = props;
  const { fields, setFields, addField, errors, validateField }: any =
    useContext(FormCtx);
  const field = fields[id] || {};
  const fieldError = errors[id] || "";
  const { value = "" } = field;

  useEffect(() => {
    addField({
      field: props,
      value: "",
    });
  }, []);

  useEffect(() => {
    if (field.value !== undefined) {
      validateField(id);
    }
  }, [value]);

  return (
    <div className="input--text">
      <div className="input--text--field">
        <input
          key={props.id}
          type={props?.type}
          value={field && value}
          className={props?.claseInput}
          placeholder={props.placeholder}
          disabled={props.disabled}
          aria-label={props.id}
          onChange={(event) => setFields(event, field)}
        />
      </div>

      <small id="error" className="input--text--error">
     {fieldError} 
      </small>
    </div>
  );
};

export default InputText;
