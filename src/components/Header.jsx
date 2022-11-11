import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderImg from './HeaderImg';
import './Header.css';
import img1 from '../assets/images/headerImh1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';

function Header() {
    return (
        <Container className='HeaderContainer'>
            <Row>
                <Col>
                    <div className='item-1'>
                        <p>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span> </p>
                    </div>
                    <div className="item-2">
                        <p>
                            we provide you access to luxury and affordable houses in the metaverse,
                            get a chance to turn your imagination to reality at your comfort zone
                        </p>
                    </div>
                    <div className="item-3">
                        <div className="input">
                            <input type="text" placeholder='Search for a location'/>
                        </div>
                        <div className="search">
                            <button>Search</button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="main-container">
                        <div className='container-1'>
                            <HeaderImg img={img1} alt='img1' />
                            <HeaderImg img={img4} alt='img2' />
                        </div>
                        <div className='container-2'>
                            <HeaderImg img={img2} alt='img3' />
                            <HeaderImg img={img3} alt='img4' />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;