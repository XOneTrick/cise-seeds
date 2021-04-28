// import logo from './logo.svg';
import './App.css';
import hcbgImage from "./books-1655783.jpg";

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <div className = "App">
//         <header>CISE SEEDS</header>
//         <p className="Sub-header">Welcome to our home page.</p>
//         <Navbar>

//         </Navbar>
//     </div>
//   );
// }

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function App() {
  return (
    <>
      {/* <Navbar bg="dark" expand="lg"> */}
      <Navbar className="navbar-color" variant="light">
        <Navbar.Brand href="#home">SEED</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#getting-started">Getting Started</Nav.Link>
            <Nav.Link href="#faq-and-help">FAQ & Help</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
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
      <div 
        class="bg_img"
        style={{
          backgroundImage: 'url('+hcbgImage+')',
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5"
        }}
      >
      <h1 className="welcome-header-home">Welcome to SEED</h1>
      <p className="Purpose-p"><b>Purpose: </b>The purpose of this website it to allow for practitionars to look up articles from
      our database. <br />First off you should vist the "Getting Started" page. This will walk you through
      how to use our services. <br />If you are still stuck please vist our "FAQ & Help" page.
      </p>
      </div>
      {/* <Nav variant="tabs" defaultActiveKey="/home"> */}
        {/* navbar using tabs */}
  {/* <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item> */}
  {/* <Nav.Item>
    <Nav.Link eventKey="link-1">Option 1</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Option 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3">Option 3</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-4">Option 4</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-5">Option 5</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-6">Option 6</Nav.Link>
  </Nav.Item> */}
  {/* <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item> */}
{/* </Nav> */}
    </>
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