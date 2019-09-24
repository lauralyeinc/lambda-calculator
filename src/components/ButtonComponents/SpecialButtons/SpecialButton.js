import React from "react";

export default SpecialButton = (props) => {
  return (
    <button className='specialButtons' onClick={() => props.setSpecialState()}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
