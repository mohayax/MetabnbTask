import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/logo.png';
import {
    Link
} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

import './Navbar.css';
import Modalbox from './Modalbox';

import OrangeLogo from '../assets/images/orangeLogo.png';
import BlueLogo from '../assets/images/blueLogo.png';
import ArrowIcon from '../assets/images/arrowIcon.png';

const NavigationBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar className="section" expand="lg">
            <Container fluid className="container">
                <div className='logo'>
                    <img src={Logo} alt='logo_' />
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 nav_items"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='n-link' to={'/'} href="#action1">Home</Link>
                        <Link className='n-link' to={'/placetostay'} href="#action2">Place to stay</Link>
                        <Nav.Link className='navText' href="#action2">NFTs</Nav.Link>
                        <Nav.Link className='navText' href="#action2">Community</Nav.Link>
                    </Nav>
                    <Button onClick={handleShow} className="navButton" variant="success"><span>Connect wallet</span></Button>
                </Navbar.Collapse>

                <Modal 
                    show={show} 
                    onHide={handleClose} 
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="modalTitle">Connect Wallet</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='modalHeader'>Choose your preferred wallet:</div>
                        <Modalbox logo={OrangeLogo} icon={ArrowIcon} name="Metamask" />
                        <Modalbox logo={BlueLogo} icon={ArrowIcon} name="WalletConnect" />
                    </Modal.Body>
                </Modal>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;