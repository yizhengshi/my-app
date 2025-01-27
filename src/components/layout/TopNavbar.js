import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const TopNavbar = () => {
    const linkStyle = {
        fontWeight: "500",
        color: "#FFFFFF",
        paddingLeft: "20px"
    };

    return ( 
        <Navbar className="nav-top" expand="md">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-center">
                <Nav>
                    <Nav.Link href={process.env.PUBLIC_URL + "/"} className="hoverLink" style={linkStyle}>Home</Nav.Link>
                    <Nav.Link href={process.env.PUBLIC_URL + "/#/about"} className="hoverLink" style={linkStyle}>About</Nav.Link>
                    <Nav.Link href={process.env.PUBLIC_URL + "/#/experience"} className="hoverLink" style={linkStyle}>Work Experience</Nav.Link>
                    <Nav.Link href={process.env.PUBLIC_URL + "/#/education"} className="hoverLink" style={linkStyle}>Education</Nav.Link>
                    <Nav.Link href={process.env.PUBLIC_URL + "/#/projects"} className="hoverLink" style={linkStyle}>Projects</Nav.Link>
                    <Nav.Link href={process.env.PUBLIC_URL + "/#/resume"} className="hoverLink" style={linkStyle}>Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNavbar;