import React, { useState } from "react";

import { specials } from '../../../data.js'; 

import SpecialButton from './SpecialButton.js';



const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsState, setSpecialState] = useState; 

  return (
    <div>
      
       {specials.map((specialDataObject, key) => {
         return <SpecialButton key={key} specialData={specialDataObject} />
})}; 
    </div>
  );
};
