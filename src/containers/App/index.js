import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from '../pageContainers/About';
import Recipes from '../pageContainers/Recipes';
import Food from '../pageContainers/Food';

import NavBar from '../../components/NavBar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      navActive: 'navItem-about',
    };
  }

  handleClick = event => {
    this.setState({ navActive: event.target.id });
  };

  render() {
    const { navActive } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App-Layout">
            <div className="App-Banner">
              <h1>a couple of gourds</h1>
            </div>
            <div className="App-Content">
              <div className="App-LeftNav" />
              <div className="App-MainArea">
                <NavBar navActive={navActive} onClick={e => this.handleClick(e)} />
                <div className="App-MainContent">
                  <Route path="/" exact component={About} />
                  <Route path="/about" component={About} />
                  <Route path="/recipes" component={Recipes} />
                  <Route path="/food" component={Food} />
                </div>
              </div>
              <div className="App-RightNav" />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
