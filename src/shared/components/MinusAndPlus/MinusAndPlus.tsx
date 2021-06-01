import React from "react";
import "./MinusAndPlus.scss";
import IconMinus from "../../assets/svg/icon-minus.svg";
import IconAdd from "../../assets/svg/icon-add.svg";

const MinusAndPlus = (props: any) => {

  return (
    <div className="minus--and--plus input-group">
      <div className="input-group-prepend">
        <img src={IconMinus} alt=""/>
      </div>

      <input
        type="text"
        className="form-control"
        aria-label="Amount (to the nearest dollar)"
        value="$ 12,500"
      />

      <div className="input-group-append">
        <img src={IconAdd} alt=""/>
      </div>
    </div>
  );
};

export default MinusAndPlus;
