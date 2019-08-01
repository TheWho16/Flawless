import React from 'react';
import styles from './FriendsList.module.css';

import Friend from './Friend/Friend'
const FriendsList = (props) => {
    
    let friendsListElement = props.state.friendsList.map(f => <Friend state={f.name}/>);
        return (
            <div className={styles.friendsList}>
              <h4>FriendList</h4>
                  {friendsListElement}
              
            </div>
        );
   

    

}

export default FriendsList;