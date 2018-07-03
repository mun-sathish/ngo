import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavBar.css'
import { BACKEND } from '../../util/Constant';

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={BACKEND.RESOURCE_URL}>Awaken Yourself Within You</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={6} componentClass={Link} href={BACKEND.USER_URL} to={BACKEND.USER_URL}>
              User
            </NavItem>
            <NavItem eventKey={1} componentClass={Link} href={BACKEND.BOOK_URL} to={BACKEND.BOOK_URL}>
              Book
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href={BACKEND.VIDEO_URL} to={BACKEND.VIDEO_URL}>
              Video
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href={BACKEND.AUDIO_URL} to={BACKEND.AUDIO_URL}>
              Audio
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href={BACKEND.TASK_URL} to={BACKEND.TASK_URL}>
              Task
            </NavItem>
            <NavItem eventKey={5} componentClass={Link} href={BACKEND.SQ_URL} to={BACKEND.SQ_URL}>
              Security Question
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}


export { CustomNavbar };