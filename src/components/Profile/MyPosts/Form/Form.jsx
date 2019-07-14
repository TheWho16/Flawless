import React from "react";
import Post from "./Post/Post"
import styles from './Form.module.css'
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className={styles.formBlock}>  
        <h3>Post</h3>
       
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-form">
            
          </label>
          <input
            id="new-form"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
          New coment
          </button>
           <Post items={this.state.items} />


        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

export default Form;
 