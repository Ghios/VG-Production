import React, { Component } from 'react';
import './App.css';
import Searchbar from './containers/Searchbar/Searchbar.js';

class App extends Component {
    render(){
      return (
        <div className="App">
            <Searchbar/>
        </div>
      );
  };
}

export default App;
