import React from "react";

import { specials } from '../../../data.js'; 

import SpecialButton from './SpecialButton.js';



const Specials = () => {
  // STEP 2 - add the imported data to state
  //const [specials, setSpecial] = useState; 

  return (
    <div>
      
       {specials.map((specialDataObject, key) => {
         return <SpecialButton key={key} specialData={specialDataObject} />
})}; 
    </div>
  );
};

export default Specials;