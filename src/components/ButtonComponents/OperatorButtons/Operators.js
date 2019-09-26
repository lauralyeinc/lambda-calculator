import React from "react";

import { operators } from '../../../data.js'; 

import OperatorButton from './OperatorButton.js';



const Operators = () => {
  // STEP 2 - add the imported data to state

  //const [operator, setOperator] = useState; 

  return (
    <div>
      {operators.map((each) => {
        return (each);  
      })}; 
      {operators.forEach((operatorDataObject, key) => {
        return <OperatorButton id={key} operatorData={operatorDataObject} />
      })}; 
      
    </div>
  );
};

export default Operators;
