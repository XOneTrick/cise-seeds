import './App.css';
import React from "react";
import { Link, withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation(props) {
  return (
    <Navbar className="navbar-color" variant="light">
        <Navbar.Brand href="/">SEED</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav className="mr-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <li class={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`} />
                <Link class="nav-link" to="/">Home</Link>
            {/* <Nav.Link href="#getting-started">Getting Started</Nav.Link>
            <Nav.Link href="#faq-and-help">FAQ & Help</Nav.Link> */}
            <li class={`nav-item  ${props.location.pathname === "/getting-started" ? "active" : ""}`} />
                <Link class="nav-link" to="/getting-started">Getting Started</Link>
                <li class={`nav-item  ${props.location.pathname === "/faqandhelp" ? "active" : ""}`} />
                <Link class="nav-link" to="/faqandhelp">FAQ & Help</Link>
            {/* <Nav.Link href="About">About Us</Nav.Link> */}
            <li class={`nav-item  ${props.location.pathname === "/about" ? "active" : ""}`} />
                <Link class="nav-link" to="/about">About Us</Link>
            {/* <Nav.Link href="Contact">Contact Us</Nav.Link> */}
            <li class={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""}`} />
                <Link class="nav-link" to="/contact">Contact</Link>
            <NavDropdown title="Dropdown">
                <NavDropdown.Item href="#item/1">Item 1</NavDropdown.Item>
                <NavDropdown.Item href="#item/2">Item 2</NavDropdown.Item>
                <NavDropdown.Item href="#item/3">Item 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#item/4">Item 4</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="search" className="mr-sm-2" />
                <Button className="navbar-button-color" onClick={ searchButtonClicked }>search</Button>
            </Form>
                <Button className="navbar-button-color" onClick={ loginButtonClicked }>Login</Button>
                <Button className="navbar-button-color" onClick={ signUpButtonClicked }>Sign Up</Button>
        </Navbar.Collapse>
    </Navbar>
    
    // <div className="navigation">
    //   <nav class="navbar navbar-expand navbar-dark bg-dark">
    //     <div class="container">
    //       <Link class="navbar-brand" to="/">
    //         React Multi-Page Website
    //       </Link>

    //       <div>
    //         <ul class="navbar-nav ml-auto">
    //           <li
    //             class={`nav-item  ${
    //               props.location.pathname === "/" ? "active" : ""
    //             }`}
    //           >
    //             <Link class="nav-link" to="/">
    //               Home
    //               <span class="sr-only">(current)</span>
    //             </Link>
    //           </li>
    //           <li
    //             class={`nav-item  ${
    //               props.location.pathname === "/about" ? "active" : ""
    //             }`}
    //           >
    //             <Link class="nav-link" to="/about">
    //               About
    //             </Link>
    //           </li>
    //           <li
    //             class={`nav-item  ${
    //               props.location.pathname === "/contact" ? "active" : ""
    //             }`}
    //           >
    //             <Link class="nav-link" to="/contact">
    //               Contact
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
}

function searchButtonClicked()
{
  alert("Search button pressed, will take input from search field and search (future).");
}

function signUpButtonClicked()
{
  alert("Sign up button pressed, will show overlayed form of the sign up (future).");
}

function loginButtonClicked()
{
  alert("Log in button pressed, will show overlayed form for the login (future).");
}

export default withRouter(Navigation);