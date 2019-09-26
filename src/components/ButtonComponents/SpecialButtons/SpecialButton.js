import React from "react";

const SpecialButton = (props) => {
  return (
    <button 
    id= {props.key}
    className="special_Button">
    {props.specialData} 
    </button>
  );
};


export default SpecialButton; 