import React from "react";

import {numbers} from '../../../data.js';


import NumberButton from './NumberButton.js';

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

// part of STEP 2 ????
import { numbers } from '../path/to/data';

const Numbers = () => {
  // STEP 2 - add the imported data to state

  const [numberState, setNumberState] = React.useState(numbers); 

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      const numberButtons = numbers.map(numberDataObject => (
        <NumberButton numberData={numberDataObject} />
      )); 

      console.log(numberButtons); 

      console.log(numbers);

    </div>
  );
};
