import React from 'react';
import { Container, Navbar, Nav, NavItem, NavLink } from 'reactstrap';

export default function Navigation() {
  return (
    <Navbar expand="md" className="p-3 bg-customDark">
      <Container className="d-flex justify-content-center">
        <Nav navbar>
        <NavItem>
            <NavLink href="#" className="text-white">CM</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="text-white">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="text-white">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="text-white">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="text-white">Contact</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
