import React, { Component,useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import "./Login.scss";
const  Login=()=>{
    const [key, setKey] = useState('login');
    return (
      <Container id="login">
        <div id="bg-bottom"></div>
        <Card>
              <Card.Body>
                <h3 className="mb-4 text-center"><b>Login</b></h3>
                  <Form.Label htmlFor="username">Username</Form.Label>
                  <Form.Control className="mb-3"
                    type="text"
                    id="username"
                  />
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                  />
                
                  <div class="d-grid gap-3 mt-5">
                    <Button variant="success">Login</Button>
                  </div>
              </Card.Body>
        </Card>
        
        
      </Container>
    );
  
}

export default Login;