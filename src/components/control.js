import React, {Component} from 'react';

class Control extends Component{
    render(){
        return(
        <ul>         
          
          <input type = "button" value = "추가" onClick = {function(e){
              e.preventDefault();
              this.props.onChangeMode('create');
          }.bind(this)}></input>
          <input type = "button" value = "수정" onClick = {function(e){
              e.preventDefault();
              this.props.onChangeMode('update');
          }.bind(this)}></input>
          <input type = "button" value = "삭제" onClick = {function(e){
              e.preventDefault();
              this.props.onChangeMode('delete');
          }.bind(this)}></input>
        </ul>

        );
    }
}

export default Control;