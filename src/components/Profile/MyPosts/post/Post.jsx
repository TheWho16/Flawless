import React from 'react';
import styles from './Post.module.css';
import ava from './Ava.jpg';
import like from './like.png';
const Post = (props) => {

    return (
        <div className={styles.post}>
            <img src={ava} alt="ava" /> {props.message}
            <div className={styles.likePatern}>
                <div className={styles.likeCount}>
                    {props.likesCount}
                </div>
                <div className={styles.like}>
                    <img src={like} alt="like" />
                </div>
            </div>
        </div>
    )
}





export default Post;