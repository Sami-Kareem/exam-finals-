import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../assets/style/header.css';

export const Head = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark navbar"> 
        <Container fluid>
          <Navbar.Brand href="#"><img className="img-fluid logo" src={logo} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '300px' }} navbarScroll>
              <Nav.Link><Link className="links-header" to={"/"}>Web3Mkr</Link></Nav.Link>
              <Nav.Link><Link className="links-header" to={"/About"}>WhitePaper</Link></Nav.Link>
              <Nav.Link><Link className="links-header" to={"/Services"}>Servicec</Link></Nav.Link>
              <Nav.Link><Link className="links-header" to={"/Tool"}>Tool</Link></Nav.Link>
              <Nav.Link><Link className="links-header" to={"/Contact"}>ContactUs</Link></Nav.Link>
            </Nav>
            {/* Button with inline styles */}
            <button style={{ backgroundColor: 'black', border: '2px solid #18ADE4', color: '#18ADE4', padding: '8px 16px', borderRadius: '5px', marginLeft: '10px' }}>
              Start here
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
