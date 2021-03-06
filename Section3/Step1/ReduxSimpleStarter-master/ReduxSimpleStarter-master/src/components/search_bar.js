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
  constructor(props){
    super(props);

    this.state ={term:''};
  }
  render() {
    return (
      <div className='search-bar'>
      <input
      value={this.state.term}
      onChange={(event) => this.onInputChange(event.target.value)} />

      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }


}


export default SearchBar;
