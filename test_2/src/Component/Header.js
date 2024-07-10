import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/erp.png';
const Header=()=> {
  const [colorChange, setColorchange] = useState(false)

  const changeNavbarColor = () => {
        if (window.scrollY >= 90) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return(
    <Navbar  expand="lg" fixed="top" className={colorChange?"grad":""}>
    <Container>
      <NavLink className="navbar-brand text-light" to="/">
       <img src={logo} id="logo" alt=""/><b>ERP</b>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className={"nav-link"} to="/">About</NavLink>
          <NavLink className={"nav-link"} to="/princing">Princing</NavLink>
          <NavLink className={"nav-link"} to="/contact">Contact</NavLink>
          <NavLink className={"btn btn-outline-info"} to="/login">Login</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
  
}
export default Header;