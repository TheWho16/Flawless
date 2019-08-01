import React from 'react';
import styles from './Friend.module.css';
import ava from './FrendsFoto.jpg'
const FriendsList = (props) => {
           return (
            
               <div className={styles.friend}>
                <div className={styles.ava}>
                <img src={ava} alt='ava'/>
                </div>
                
                <div className={styles.names}>
                   {props.state} 
                   </div>
               </div>
            
        );
   

    

}

export default FriendsList;