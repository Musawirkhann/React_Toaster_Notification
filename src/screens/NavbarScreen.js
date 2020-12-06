import React from 'react';
import {Navbar} from 'react-bootstrap';



const NavbarScreen = () => {
    return (
        <Navbar bg="danger" variant="dark">
            <Navbar.Brand href="#home">
            React Toasters Demo
            </Navbar.Brand>
        </Navbar>
    );
}

export default NavbarScreen;