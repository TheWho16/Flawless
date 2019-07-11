import React from 'react';
import styles from './Post.module.css';
import ava from './Ava.jpg';


class Post extends React.Component {
    render() {
        return (
            <div className={styles.content}>
                <ul>
                    {this.props.items.map(item => (
                        <li key={item.id}><img src={ava}/> {item.text}</li>

                    ))}

                </ul>
            </div>
        );
    }
}


export default Post;