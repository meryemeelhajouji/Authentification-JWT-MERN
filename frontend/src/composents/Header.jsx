import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(){
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Delivery App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"></Nav.Link>
              <Nav.Link href="#link"></Nav.Link>
            
            </Nav>
            <Nav className="d-flex">
              <Nav.Link href="/">Login</Nav.Link>
              <Nav.Link href="/Register">Register</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;