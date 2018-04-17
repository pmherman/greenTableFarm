import React, {Component} from "react";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./CustomNav.css";

class CustomNav extends Component {
  render() {
    return (
      <Navbar className="navbar" default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Green Table Farm</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/farmfresh" to="/farmfresh">
              Farm Fresh
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
  // ------------------------------------------------------------------------------
  // <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
  //   <div className="container">

  //     {/* Brand  */}
  //     <a className="navbar-brand js-scroll-trigger waves-effect waves-light" href="/">
  //       <strong>Green Table Farm</strong>
  //     </a>

  //     {/* Collapse  */}
  //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
  //       aria-expanded="false" aria-label="Toggle navigation">
  //       <span className="navbar-toggler-icon"></span>
  //     </button>

  //     {/* Links  */}
  //     <div className="collapse navbar-collapse" id="navbarSupportedContent">

  //       {/* Left  */}
  //       <ul className="navbar-nav mr-auto">
  //         <li className="nav-item">
  //           <a className="nav-link js-scroll-trigger" href="#page-top">Home</a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link js-scroll-trigger" href="#about">About</a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link js-scroll-trigger" href="#farmFresh">Farm Fresh</a>          
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>              
  //         </li>
  //       </ul>

  //       {/* Right  */}
  //       <ul className="navbar-nav nav-flex-icons">
  //         <li className="nav-item">
  //           <a href="https://www.facebook.com/greentablefarm/" className="nav-link" target="_blank">
  //             <i className="fa fa-facebook"></i>
  //           </a>
  //         </li>
  //         <li className="nav-item">
  //           <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="nav-link rounded waves-effect waves-light"
  //             target="_blank">
  //             <i className="fa fa-github mr-2"></i>
  //           </a>
  //         </li>
  //       </ul>

  //     </div>

  //   </div>
  // </nav>
  // ---------------------------------------------------------------
  // <nav className="navbar navbar-inverse navbar-top">
  //   <div className="container-fluid">
  //     <div className="navbar-header">
  //       <button type="button" className="collapsed navbar-toggle">
  //         <span className="sr-only">Toggle navigation</span>
  //         <span className="icon-bar" /> <span className="icon-bar" />
  //         <span className="icon-bar" />
  //       </button>
  //       <a href="/" className="navbar-brand">
  //         React Reading List
  //       </a>
  //     </div>
  //   </div>
  // </nav>
// );

export default CustomNav;
