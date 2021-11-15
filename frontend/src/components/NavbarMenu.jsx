import React from "react";
import { Navbar,Nav } from "react-bootstrap";
const NavbarMenu = () => {
    return (
        <div>

            <Navbar bg="light" expand="lg">
                        <Nav className="me-auto">
                        <Nav.Link className="Nave-link" href="/">Home</Nav.Link>

                        <Nav.Link className="Nave-link" href="/cars"> Cars List </Nav.Link>
                        <Nav.Link  className="Nave-link" href="/add_car"> Add Cars </Nav.Link>
                           
                          
                        </Nav>
            </Navbar>

        </div>
    );

};
export default NavbarMenu;