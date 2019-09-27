import React  from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from './TEST.module.css'

import Calculator from "../childComponents/Calculator/Calculator";


class PauseOnHover extends React.Component {
    
    


     
     

render() {
  
   
    
    return (
        <div className={styled.sliderWraper}>
            <h2>Calculator </h2>

            <div>
                <Calculator/>
            </div>
        </div>
    );
}
  }
export default PauseOnHover;