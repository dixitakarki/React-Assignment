import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
//--------
import NavHeader from './components/navHeader/navHeader';
//--------
import  Routercomp  from "./router/router";
function App() {
  return (
    <React.Fragment>
      <div className="container">
        <NavHeader/>
      </div>
      <Routercomp></Routercomp>
    </React.Fragment>
  );
}

export default App;
