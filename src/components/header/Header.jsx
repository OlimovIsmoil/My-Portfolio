import React from 'react'
import Nav from 'react-bootstrap/Nav';
import styleHeader from './Header.module.css'
function Header() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Log in</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Header;