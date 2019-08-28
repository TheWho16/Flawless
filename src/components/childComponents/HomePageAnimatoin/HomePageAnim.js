import React from 'react';
import style from './HomePageAnim.module.css'


let HomePageAnim = (props) => {
  return <div className={style.wrapper}>
    <div className={style.hulk}>
      <div className={style.txt}></div>
      <div className={style.head}><div className={style.mouth}></div></div>
      <div className={style.right_arm}></div>
      <div className={style.fist}></div>
      <div className={style.left_arm}></div>
      <div className={style.body}></div>
      <div className={style.right_leg}></div>
      <div className={style.left_leg}></div>
    </div>

    <div className={style.captain}>
      <div className={style.head}>A</div>
      <div className={style.body}><div className={style.star}></div></div>
      <div className={style.arms}></div>
      <div className={style.shield}><div className={style.star}></div></div>
      <div className={style.hands}></div>
      <div className={style.legs}></div>
      <div className={style.boots}></div>
    </div>

    <div className={style.ironman}>
      <div className={style.helmet}><div className={style.mask}></div></div>
      <div className={style.right_arm}></div>
      <div className={style.left_arm}></div>
      <div className={style.body}><div className={style.power}></div></div>
      <div className={style.right_leg}></div>
      <div className={style.left_leg}></div>
    </div>

    <div className={style.thor}>
      <div className={style.helmet}></div>
      <div className={style.head}>
        <div className={style.beard}></div>
      </div>
      <div className={style.cap}></div>
      <div className={style.arm_right}></div>
      <div className={style.arm_left}></div>
      <div className={style.body}></div>
      <div className={style.hammer}></div>
      <div className={style.legs}></div>
      <div className={style.feet}></div>

    </div>
   
  </div>





}


export default HomePageAnim;