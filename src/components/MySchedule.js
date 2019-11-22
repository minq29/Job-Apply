import React, { Component } from 'react';
import ReadContent from "./ReadContent.js";
import CreateContent from "./CreateContent.js";
import UpdateContent from './UpdateContent.js';

class MySchedule extends Component{
    constructor(props){
        super(props);        
        this.state = {
            mode:'welcome',
            
        }
    }
    getContent(){
        if(this.state.mode === "welcome"){
            return <body>간트 차트 영역</body>
        }            
    }
    render(){      
        return(
          <div classname = "container">
              {this.getContent()}


          </div>
        );
    }
}

export default MySchedule;