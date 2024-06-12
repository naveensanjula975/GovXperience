import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        // <footer className="footer">
        <footer className="">
            <Container fluid>
                <Row>
                    <Col md={6}>
                        {/* {new Date().getFullYear()} &copy; TransferEase by <Link to="#">CodeVerse</Link> */}
                    </Col>
                    <Col md={6}>
                        {/* <div className="text-md-end footer-links d-none d-md-block">
                            <Link to="#">About Us</Link>
                            <Link to="#">Help</Link>
                            <Link to="#">Contact Us</Link>
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
