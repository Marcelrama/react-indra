import React from "react";
import "./ProgressBar.scss";

const ProgressBar = (props: any) => {
  const style = {
    width: props.width,
  };

  return (
    <div className="progress--bar">
      <div className="progress--bar--body">
        <div className="progress--bar--body--line" style={style}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
