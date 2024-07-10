import React, { Component } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from "./Component/Header";

import Princing from "./Pages/Princing/Princing";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";



class App extends Component {
render() {
 
  return (
    <HashRouter>
      <div className="App">
        <Header/>
        <div id="bg-top"></div>
        <div id="content">
          <Routes>
            <Route exact path="/" element={<About />}></Route>
            <Route exact path="/princing" element={<Princing />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/login" element={<Login />}></Route>

          </Routes>
        </div>
      </div>
      
    </HashRouter>
  );
}
}
export default App;