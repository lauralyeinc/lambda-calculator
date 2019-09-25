import React from "react";

const NumberButton = (props) => {
  return (
    <button
      id = {props.key}
      className="number_button">
      {props.numberData}
    </button>
  );
  };

  export default NumberButton; 
