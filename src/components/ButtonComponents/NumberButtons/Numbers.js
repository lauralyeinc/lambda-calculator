import React from "react";

import { numbers } from '../../../data.js';


import NumberButton from './NumberButton.js';



 const Numbers = () => {
  // STEP 2 - add the imported data to state

  //const [number, setNumber] = useState(0); 
  

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numbers.map((numberDataObject, key) => {
        return <NumberButton key={key} numberData={numberDataObject} />
      })}; 
    </div>
  );
};

export default Numbers;
