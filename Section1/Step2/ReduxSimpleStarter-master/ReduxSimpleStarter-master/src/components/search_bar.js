//import React from 'react';
import React,{Component} from 'react';

/**  Functional Component
const SearchBar = () =>{
  return <input />
};

**/

/**
//Class component
class SearchBar extends React.Component {
  render() {
    return <input />;
  }
}

**/

/**
class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange} />;
  }

  onInputChange(event){
    console.log(event.target.value);

  }
}

**/

//Refactoring
class SearchBar extends Component {
  render() {
    return <input onChange={(event) => console.log(event.target.value)} />;
  }


}


export default SearchBar;
