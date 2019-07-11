import React from 'react';
import like from './Likes.module.css'

  class Likes extends React.Component {
 
    onClick = () => {
        const { count } = this.state;
        this.setState({ count: count + 1 });
      };
    
    render() {
      return(
      <div>
        <button value={this.onClick}> {this}</button>
      </div>
      );
    }
  }
  export default Likes;
