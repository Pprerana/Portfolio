import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';


function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
      <Navbar.Brand href="/" >Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/blogs">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header