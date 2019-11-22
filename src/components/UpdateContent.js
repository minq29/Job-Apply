import React, { Component } from 'react';

class UpdateContent extends Component{
    constructor(props){
      super(props);
      this.state = {
          id : this.props.data.id,
          title : this.props.data.title,
          desc : this.props.data.desc
      }
      this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e){
      this.setState({[e.target.name] : e.target.value });
    }
    render(){
        console.log(this.props.data);
        console.log('UpdateContent render');
      return(
        <article>
              {/* <h2>Update</h2> */}
              <form action = "/create_process" method = "post" onSubmit = {function(e){
                e.preventDefault();                
                this.props.onSubmit(
                  this.state.id,
                  this.state.title,
                  this.state.desc);
                alert("저장되었습니다!");
              }.bind(this)}>

                <input type = "hidden" name = "id" value = {this.state.id}></input>

                <p><input type = "text" name = "title" placeholder = "자기소개서 문항" size = "98"
                value = {this.state.title} onChange = {this.inputFormHandler.bind(this)} ></input></p>
                
                <p><textarea name = "desc" placeholder = "내용" cols = "100" rows = '40' value = {this.state.desc} 
                onChange = {this.inputFormHandler} ></textarea></p>
                
                <p><input type = "submit" value = "저장" ></input></p>                
                
              </form>
          </article>        
      );
    }
  }

  export default UpdateContent;