import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Cars from './components/Cars';
import addCar from './components/addCar';
import Home from './components/Home';
import Detail from './components/Detail';
import Update from './components/Update';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavbarMenu from './components/NavbarMenu';
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Router>
          <NavbarMenu />
          <Switch>
            <Route  exact path='/cars' component={Cars}/>
            <Route  exact path='/add_car' component={addCar}/>
            <Route  exact path='/' component={Home}/>
            <Route  exact path='/:id/' component={Detail}/>
            <Route  exact path='/:id/Update/' component={Update}/>

  
 

          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
