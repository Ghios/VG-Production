import React, { Component } from 'react';
import './App.css';
import Searchbar from './containers/Searchbar/Searchbar.js';
import Main from './containers/Main/Main.js';

class App extends Component {
    render(){
      return (
        <div className="App">
            <Searchbar/>
            <Main/>
        </div>
      );
  };
}

export default App;
