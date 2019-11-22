import React, {Component} from 'react';
import SelfIntroduce from './selfIntroduce';

class TopBar extends Component{
    render(){
        return(
        
          <section className="top-nav-bar">
            <a href="">
              <img className="name" src="http://www.yuhan-kimberly.co.kr/Areas/Mobile/images/img_slide_talent_recuit01_2.png"></img>
            </a>
            <li className="nav">
              <a className="item" href=" ">   채용 공고   </a>
              <a className="item" href="/자기소개서" onClick = {function(e){
                  e.preventDefault();
                  this.props.onChangeMode('selfIntroduce');
              }.bind(this)} >자기소개서 </a>
              <a className="item" href=" ">   이력서   </a>
              <a className="item" href=" ">   합격소개서   </a>
              <a className="item" href=" ">   데이터랩   </a>
              <a className="item" href="/나의 전형일정 " onClick = {function(e){
                  e.preventDefault();
                  this.props.onChangeMode('mySchedule');
              }.bind(this)} > 나의 전형일정   </a>
            </li>
          </section>
        
        );
    }
}

export default TopBar;
    