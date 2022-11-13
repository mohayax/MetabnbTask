import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import infoimg from '../assets/images/infoimg.png';
import './Info.css';


function Info() {
return (
    <div className='InfoContainer'>
        <div className="innerContainer">
            <Row>
                <Col>
                    <div className="info-text">
                        <div className='title'>
                            <p>Metabnb NFTs</p>
                        </div>
                        <div className="info">
                            <p>
                                Discover our NFT gift cards collection.
                                Loyal customers gets amazing gift
                                cards which are traded as NFTs.
                                These NFTs gives our cutomer access to
                                loads of our exclusive services.
                            </p>
                        </div>
                        <div className="info-btn">
                            <button>Learn more</button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="info-img">
                        <img src={infoimg} alt="infoimg" />
                    </div>
                </Col>
            </Row>
        </div>
        
    </div>
)
}

export default Info