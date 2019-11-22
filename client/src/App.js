import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component{
  constructor (props){
    super(props)
  };

  render() {
    return (
      <Router>
        <section>
          <div className="App">
            <div className="jumbotron">Tester Header</div>
          </div>
        </section>
      </Router>

    )
  }

};

export default App;
