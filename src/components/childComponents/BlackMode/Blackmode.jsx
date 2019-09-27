import React from 'react';
import  './Bl.css'
import style from  './Black.module.css'
import Sahrick from  './sharik.jpg'




const BlackMode = () => {



    return (
        <div>

            <div id="note">
                
                <div className={style.imgBox1}> 
                <img src={Sahrick} />
                </div>
                <div className={style.imgBox2}> 
                <img src={Sahrick} />
                </div>
                <div className={style.imgBox3}> 
                <img src={Sahrick} />
                </div>
                <div className={style.imgBox4}> 
                <img src={Sahrick} />
                </div>
                В честь окрытия магазина Акция!
                 <a  className="close" href="#">[закрыть]</a>
            </div>
            <a href="#note">Вызвать всплывающее окно</a>
        </div>
    )
}



export default BlackMode; 