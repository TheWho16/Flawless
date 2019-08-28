import React from 'react';
import BlackMode from './Blackmode'




const BlackModeConteiner = () => {
   
    let valueTrue =(stan)=>{
        if (stan === true) {
            debugger;
           return <BlackMode/>
        }else{
            return(
                <div>" "</div>
            )
        }
    }
    

    return (
        <div>
            <button onClick={()=>{valueTrue(true)}}>+</button><button onClick={false}>-</button>
        </div>
    )
}


export default BlackModeConteiner; 