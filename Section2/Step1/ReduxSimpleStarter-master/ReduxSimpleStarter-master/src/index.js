import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyBjx1cISMYdwWaHxZPBtn5BSF0oK0u9SB0";
/**
YTSearch({ key: API_KEY, term: 'surfboards'},function(data){
  console.log(data);
})


//Create a new component. this component should produce some HTML.
//const is ES6 piece of syntax -


const App = function(){
  return <div>Hi!</div>;
}



const App = ()=>{
  return <div>
  <SearchBar />
  </div>;
}

**/

class App extends Component {

  constructor(props) {
    super(props);

    this.state ={videos:[]};
/**
    YTSearch({ key: API_KEY, term: 'surfboards'},(data) =>{
      this.setState({videos:data});
    })

    **/
    YTSearch({ key: API_KEY, term: 'seeman'},(videos) =>{
      this.setState({videos});
    })

  }


  render(){
    return (<div>
    <SearchBar />
    <VideoDetail video ={this.state.videos[0]} />
    <VideoList videos={this.state.videos} />
    </div>);
  }
}


//Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App/>,document.querySelector('.container'));
