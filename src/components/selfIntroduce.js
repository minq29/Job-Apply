import React, { Component } from 'react';
import Questions from "./questions.js"
import Control from "./control.js";
import ReadContent from "./ReadContent.js";
import CreateContent from "./CreateContent.js";
import UpdateContent from './UpdateContent.js';

class SelfIntroduce extends Component{
    constructor(props){
        super(props);
        this.max_content_id = 1; 
        this.state = {
            mode:'welcome',
            selected_content_id : 1,
            contents : [
                        {id : 1, title : "문항 예: 지원동기", desc : "자소서 내용"}
            ]
        }
    }
    getReadContent(){
        var i = 0;
          while(i < this.state.contents.length){
            var data = this.state.contents[i];
            if(data.id === this.state.selected_content_id){          
              return data;
              break;
            }
            i++; 
          }
      }
    getContents(){        
        if(this.state.mode === 'read'){
            var _content = this.getReadContent();
            return <ReadContent title = {_content.title} desc = {_content.desc}></ReadContent>;
        }
        else if(this.state.mode === 'create'){
            var _article = _article = <CreateContent onSubmit = {function(_title, _desc){
                this.max_content_id = this.max_content_id + 1;                
                var newContents = Array.from(this.state.contents);
                newContents.push({id:this.max_content_id, title:_title, desc:_desc})
                this.setState({
                  contents : newContents,
                  mode : 'welcome',
                  selected_content_id : this.max_content_id
                })        
              }.bind(this)}></CreateContent>
            return _article;
        }
        else if(this.state.mode === "update"){
          _content = this.getReadContent();
          _article = <UpdateContent 
          data = {_content} onSubmit = {function(_id, _title, _desc){                  
            var _contents = Array.from(this.state.contents); //복제한 새로운 배열
            var i = 0;
            while(i < _contents.length){
              if(_contents[i].id === _id){
                _contents[i] = {id : _id, title : _title, desc : _desc};
                break;
              }
              i = i+1; 
            }
            this.setState({
              contents : _contents,
              mode : 'welcome'
            })        
          }.bind(this)}></UpdateContent>      
          
          return _article;
        }
    }
    render(){      
        return(
          <div classname = "container">
            <body>
                
              <Questions data = {this.state.contents} 
                onChangePage = {function(id){          
                    this.setState({
                        mode : 'read',
                        selected_content_id : Number(id)
                    });  
                }.bind(this)}></Questions>
              
              {this.getContents()} 
              
              <Control onChangeMode = {function(_mode){
                if(_mode === 'delete'){
                    if(window.confirm('정말 삭제하시겠습니까?')){
                    var _contents = Array.from(this.state.contents);
                    var i = 0;
                    while(i < _contents.length){
                        if(_contents[i].id === this.state.selected_content_id){
                        _contents.splice(i, 1);  
                        break;
                        }
                        i = i+1;
                    }
                    this.setState({
                    mode : 'welcome',
                    contents : _contents,
                    selected_content_id : 1
                    });
                    alert("삭제되었습니다!");
                    }
                }
                else{
                    this.setState({
                    mode : _mode
                })
                } 
            }.bind(this)}></Control>


          </body>        
          </div>
        );
    }
}

export default SelfIntroduce;