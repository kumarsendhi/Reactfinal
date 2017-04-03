import React from 'react';
import ReactDOM from 'react-dom';
//Create a new component. this component should produce some HTML.
//const is ES6 piece of syntax -

/**
const App = function(){
  return <div>Hi!</div>;
}

**/

const App = ()=>{
  return <div>Hi!</div>;
}


//Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App/>,document.querySelector('.container'));
