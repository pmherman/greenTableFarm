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

          <Navbar.Brand>
            <Link to="/"><Image className=" logo col-lg-6" alt="Green Table Farm Logo" src="http://res.cloudinary.com/aidanclemente/image/upload/c_scale,w_350/v1524004259/Green_Table_Logo.png" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        {/* To add content in the center of Navbar, add content here */}

        {/* Links on right hand side of navbar, to add more, copy NavItem and update eventKey, href and to */}
        <Navbar.Collapse>
          <Nav pullRight>
          
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>

            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
           
            <NavItem eventKey={3} componentClass={Link} href="/cafe" to="/cafe">
              Cafe
            </NavItem>

             <NavItem eventKey={4} componentClass={Link} href="/farmfresh" to="/farmfresh">
              Farm Fresh
            </NavItem>

            <NavItem eventKey={5} componentClass={Link} href="/contact" to="/contact">
              Contact Us
            </NavItem>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default CustomNav;
