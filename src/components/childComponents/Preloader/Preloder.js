import React from 'react';
import style from './Preloder.module.css'
import Fetching from '../../foto/fetch.gif'


let Preloder =(props)=>{
return <div className={style.fetching}>
    <img src={Fetching} alt='Fetching'  />
    </div >
}


export default Preloder;