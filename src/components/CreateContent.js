import React, { Component } from 'react';
import './CreateContent.css';

class CreateContent extends Component{
    render(){
        console.log('CreateContent render');
      return(
        <div classname = "CreateContent">
              {/* <h2>Create</h2> */}
              <form action = "/create_process" method = "post" onSubmit = {function(e){
                e.preventDefault();                
                this.props.onSubmit(e.target.title.value, e.target.desc.value);
                alert("저장되었습니다!");
                }.bind(this)}>
                
                <p><input type = "text" name = "title" placeholder = "자기소개서 문항" size = "98"></input></p>
                <p><textarea name = "desc" placeholder = "내용" cols = "100" rows = '40'></textarea></p>
                <p><input type = "submit" value = "저장"></input></p>
                
              </form>
        </div>        
      );
    }
  }

  export default CreateContent;