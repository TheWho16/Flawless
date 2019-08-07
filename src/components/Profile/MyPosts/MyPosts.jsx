import React from 'react';
import styles from './MyPosts.module.css';
import Post from './post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";





const MyPosts = (props) => {
    let postElements =
        props.state.post.map(p => <Post message={p.message} likesCount={p.likesCount} />);


    let newPostElement = React.createRef();

    let addPost = () => {

        props.dispatch(addPostActionCreator());

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;

        props.dispatch(updateNewPostActionCreator(text));

    }

    return (
        <div className={styles.postBlock}>
            <h3>My Post</h3>
            <div className={styles.textarea}>
                <textarea onChange={onPostChange} ref={newPostElement}
                    value={props.state.newPostText} />
            </div>
            <div className={styles.button} >
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>

        </div>
    )
}





export default MyPosts;