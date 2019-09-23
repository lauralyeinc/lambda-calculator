import React from "react";

//import any components needed

//Import your array data to from the provided data file

import {operators} from '../../../data.js'; 

import OperatorButton from './OperatorButton.js';


// part of STEP 2 ????
import { operators } from '../path/to/data'; 

const Operators = () => {
  // STEP 2 - add the imported data to state

  const [operationsState, setOperationState] = useState(operators); 

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       const operatorsButtons = operators.map(operatorsDataObject => (<OperatorButton operationsData={operatorsDataObject}/>
       ));
    </div>
  );
};
