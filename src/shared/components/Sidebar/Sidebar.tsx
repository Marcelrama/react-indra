import React from "react";
import "./Sidebar.scss";
import Steps from "../../components/Steps/Steps";

const Sidebar = (props: any) => {
  return (
    <aside className="sidebar">
      <ul>
        <li className="step step-active">
          <span className="step--number">1</span> Datos del auto
        </li>
        
        <li className="step">
          <span className="step--number">2</span> Arma tu plan
        </li>
      </ul>

      <Steps widthProgressBar="40%" />
    </aside>
  );
};

export default Sidebar;
