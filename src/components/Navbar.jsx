import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/logo.png';

import './Navbar.css';

const NavigationBar = () => {
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
                        <Nav.Link className='navText' href="#action1">Home</Nav.Link>
                        <Nav.Link className='navText' href="#action2">Place to stay</Nav.Link>
                        <Nav.Link className='navText' href="#action2">NFTs</Nav.Link>
                        <Nav.Link className='navText' href="#action2">Community</Nav.Link>
                    </Nav>
                    <Button className="navButton" variant="success"><span>Connect wallet</span></Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;