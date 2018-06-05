import React, {Component} from "react";
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./CustomNav.css";

class CustomNav extends Component {

  render() {
    return (
      <Navbar fluid="true" default collapseOnSelect>
          <Navbar.Header className="container-fluid" >

            {/* Brand  */}
            {/* Set to an image, but could be changed to text. Update alt and src to change picture */}

            <Navbar.Brand xs={4} sm={4} >
              <Link to="/"><Image xs={4} lg={4} className="logo" alt="Computer Logo" src="assets/images/tech/compLogo.jpg" /></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

        {/* To add content in the center of Navbar, add content here */}

        {/* Links on right hand side of navbar, to add more, copy NavItem and update text eventKey, href and to */}
          <Navbar.Collapse>
            <Nav pullRight>

              <NavItem className="text-center waves-effect waves-blue waves-ripple" eventKey={1} componentClass={Link} href="/" to="/">
                Home
              </NavItem>

              <NavItem className="text-center waves-effect waves-blue waves-ripple" eventKey={2} componentClass={Link} href="/about" to="/about">
                About
              </NavItem>
            
              <NavItem className="text-center waves-effect waves-blue waves-ripple" eventKey={3} componentClass={Link} href="/hardware" to="/hardware">
                Hardware
              </NavItem>

              <NavItem className="text-center waves-effect waves-blue waves-ripple" eventKey={4} componentClass={Link} href="/software" to="/software">
                Software
              </NavItem>

              <NavItem className="text-center waves-effect waves-blue waves-ripple" eventKey={5} componentClass={Link} href="/contact" to="/contact">
                Contact Us
              </NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default CustomNav;
