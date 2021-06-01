import React from "react";

const FormCtx = React.createContext({
  fields: {},
  errors: {},
  addField: (id) => {},
  setFields: (event, id) => {},
  validateField: (id) => {},
});
export const MyFormsProvider = FormCtx.Provider;
export default FormCtx;
