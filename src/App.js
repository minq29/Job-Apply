import React, { Component, Fragment } from 'react';
//import Movie from './Movie';
//import TOP from './TOP';
import "./App.css";
import SelfIntroduce from './components/selfIntroduce';
import MainPage from './components/mainPage.js';
import TopBar from './components/TopBar.js';
import MySchedule from './components/MySchedule';

class App extends Component {
  constructor(props){
		super(props);
		this.state={
      movies:[
        {
          title: "Matrix",
          poster: "http://files.itworld.co.kr/archive/image/2017/12/GettyImages-889581518.jpg"
        },
        {
          title: "Full metal Jacket",
          poster: "http://www.bloter.net/wp-content/uploads/2016/08/%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%8F%B0-%EC%82%AC%EC%A7%84-765x519.jpg"
        },
        {
          title: "Oldboy",
          poster: "http://www.bloter.net/wp-content/uploads/2016/08/13239928_1604199256575494_4289308691415234194_n-765x510.jpg"
        },
        {
          title: "Star Wars",
          poster: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2645E542537A38EE1D"
        }
      ],
			mode:'welcome',
			selected_content_id:2,
			subject:{title:'WEB', sub:'World wide web!'},
			welcome:{title:'Welcome', desc:'Hello, React!'},
			contents:[
				{id:1, title:'HTML', desc:'HTML is for information2'},
				{id:2, title:'CSS', desc:'CSS is for design'},
				{id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
			]
		}
	}

  componentWillMount(){

  }

  // componentDidMount(){
  //   setTimeout(()=>{
  //     this.setState({
  //       greeting: 'Hello again!'
  //     })
  //   }, 5000)

  // }

  // state={
  //   greeting: 'Hello!'
  // }

  getContents(){
    if(this.state.mode === 'welcome'){
      var _Page = <MainPage></MainPage>
      return _Page;
    }
    else if(this.state.mode === 'selfIntroduce'){
      var _Page = <SelfIntroduce></SelfIntroduce>
      return _Page;
    }
    else if(this.state.mode === 'mySchedule'){
      var _Page = <MySchedule></MySchedule>
      return _Page;
    }
  }

  render() {
    return (
      <div className="App">
        
        <TopBar onChangeMode = {function(_mode){
          this.setState({
            mode : _mode
          })
        }.bind(this)}></TopBar>
        

        {this.getContents()}

        
        {/* <div>
          <Fragment>
            <button className="button button--success">Hello</button>
          </Fragment>
        </div> */}

      </div>
    );
  }
}

export default App;