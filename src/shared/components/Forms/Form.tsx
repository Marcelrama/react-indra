import React, { Component } from "react";
import  { MyFormsProvider } from "../../services/FormCtx";

const validations: any = {
  required: {
    rule: () => /\S/,
    formatter(fieldName: any) {
      return `${fieldName} es requerido.`;
    },
  },
  numeric: {
    rule: () => /^[0-9]*$/,
    formatter(fieldName: any) {
      return `${fieldName} es invalido , solo números`;
    },
  },  
  text: {
    rule: () => /^[A-Za-záéíóúÁÉÍÓÚñÑ'\-\s]{0,35}$/,
    formatter(fieldName: any) {
      return `${fieldName} es invalido, solo textos`;
    },
  },
};

export default class Form extends Component {
  state: any = {
    fields: {},
    errors: {},
  };

  render() {
    const { fields, errors } = this.state;
    const formCtx = {
      fields,
      errors,
      addField: (data: any) => {
        this.addField(data);
      },
      setFields: this.setFields,
      validateField: this.validateField,
    };

    return (
    <form action="">
     <MyFormsProvider value={formCtx} >
       {this.props.children}
     </MyFormsProvider>
   </form>
    );
  }

  setFields = (event: any, {id}: any) => {
    event.persist();
   
    const { fields } = this.state;
    const field = fields[id];
  
    this.addField({
      field: {
        ...field,
        value: event.target.value
      }
    });
 
  };

  addField = ({ field }:any) => {

    const { id } = field;
    
    field = {
      value: "",
      ...field
    };
 
    if (id) {
      this.setState((res:any) => {
        return {
          ...res,
          fields: {
            ...res.fields,
            [id]: field
          }
        };
      });

      return;
    }

  };

  validateField = (id: string) => {
    let error = "";
    
    console.log("*********************");
    console.log(this.state.errors);
    console.log("*********************");
    
    const {
      value: fieldValue,
      validate,
      displayName,
      customRules = {},
    } = this.state.fields[id];
    const rules = validate ? validate.split("|") : "";

    if (rules.length) {
      for (const rule in rules) {
        const ruleName = rules[rule];
        const validation = validations[ruleName] || customRules[ruleName];
        const isRuleSatisfied =
          ruleName !== "required" && !fieldValue
            ? true
            : validation.rule().test(fieldValue.toString());

        if (!isRuleSatisfied) {
          error = validation.formatter.apply(null, [displayName || id]);
        }

        if (error !== "") {
          break;
        }
      }

      this.setState((res: any) => ({
        ...res,
        errors: {
          ...res.errors,
          [id]: error,
        },
      }));
    }
  };
}
