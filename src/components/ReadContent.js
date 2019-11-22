import React, { Component } from 'react';

class ReadContent extends Component{
    render(){
        console.log('ReadContent render');
      return(
        <article>
            <h4>{this.props.title}</h4>
              {this.props.desc}
        </article>        
      );
    }
  }
  export default ReadContent;