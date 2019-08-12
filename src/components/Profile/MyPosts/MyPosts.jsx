import React from 'react';
import styles from './MyPosts.module.css';
import Post from './post/Post';





const MyPosts = (props) => {
    let postElements =
        props.post.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={styles.postBlock}>
            <h3>My Post</h3>
            <div className={styles.textarea}>
                <textarea onChange={onPostChange} ref={newPostElement}
                    value={props.newPostText} />
            </div>
            <div className={styles.button} >
                <button onClick={onAddPost}>Add Post</button>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>

        </div>
    )
}





export default MyPosts;