import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavBar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/resource/home">Awaken Yourself Within You</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/resource/book" to="/resource/book">
              Book
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/resource/video" to="/resource/video">
              Video
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/resource/audio" to="/resource/audio">
              Audio
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/security-question" to="/security-question">
              Security Question
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}