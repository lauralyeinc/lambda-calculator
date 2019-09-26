import React from "react";

const OperatorButton = (props) => {
  return (
    <button id={props.key}
    className="operator_Button">
    {props.operatorData}
    </button>
  );
};

export default OperatorButton; 
