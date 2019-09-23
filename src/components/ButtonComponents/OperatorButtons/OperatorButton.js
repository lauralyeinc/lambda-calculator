import React from "react";

export default OperatorButton = (props) => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      className="operator_button" onClick={() => props.setOperatorState}
    </button>
  );
};
