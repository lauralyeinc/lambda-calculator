import React from "react";

export default  NumberButton = (props) => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      className="number_button" onClick={() => props.setNumberState}
    </button>
  );
};
