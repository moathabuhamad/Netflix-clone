import React from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navibar() {
    return (
        <Navbar bg="danger" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/favorite'}>Favorite List</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navibar;