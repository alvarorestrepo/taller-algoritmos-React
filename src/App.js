import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import Ejercicio4 from './components/Ejercicio4';
import Ejercicio5 from './components/Ejercicio5';
import Ejercicio6 from './components/Ejercicio6';
import Ejercicio7 from './components/Ejercicio7';
import Ejercicio8 from './components/Ejercicio8';
import Ejercicio9 from './components/Ejercicio9';
import Ejercicio10 from './components/Ejercicio10';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark">
        <NavLink to="/ejercicio1" className='btn btn-primary' activeClassName="active">
          Ejercicio 1
        </NavLink>
        <NavLink to="/ejercicio2" className='btn btn-primary' activeClassName="active">
          Ejercicio 2
        </NavLink>
        <NavLink to="/ejercicio3" className='btn btn-primary' activeClassName="active">
          Ejercicio 3
        </NavLink>
        <NavLink to="/ejercicio4" className='btn btn-primary' activeClassName="active">
          Ejercicio 4
        </NavLink>
        <NavLink to="/ejercicio5" className='btn btn-primary' activeClassName="active">
          Ejercicio 5
        </NavLink>
        <NavLink to="/ejercicio6" className='btn btn-primary' activeClassName="active">
          Ejercicio 6
        </NavLink>
        <NavLink to="/ejercicio7" className='btn btn-primary' activeClassName="active">
          Ejercicio 7
        </NavLink>
        <NavLink to="/ejercicio8" className='btn btn-primary' activeClassName="active">
          Ejercicio 8
        </NavLink>
        <NavLink to="/ejercicio9" className='btn btn-primary' activeClassName="active">
          Ejercicio 9
        </NavLink>
        <NavLink to="/ejercicio10" className='btn btn-primary' activeClassName="active">
          Ejercicio 10
        </NavLink>
      </nav>
      <Switch>
        <Route path="/ejercicio1">
          <Ejercicio1 />
        </Route>
        <Route path="/ejercicio2">
          <Ejercicio2 />
        </Route>
        <Route path="/ejercicio3">
          <Ejercicio3 />
        </Route>
        <Route path="/ejercicio4">
          <Ejercicio4 />
        </Route>
        <Route path="/ejercicio5">
          <Ejercicio5 />
        </Route>
        <Route path="/ejercicio6">
          <Ejercicio6 />
        </Route>
        <Route path="/ejercicio7">
          <Ejercicio7 />
        </Route>
        <Route path="/ejercicio8">
          <Ejercicio8 />
        </Route>
        <Route path="/ejercicio9">
          <Ejercicio9 />
        </Route>
        <Route path="/ejercicio10">
          <Ejercicio10 />
        </Route>


      </Switch>
    </Router>


  );
}

export default App;
