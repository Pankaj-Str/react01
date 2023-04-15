import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from "./Item";

function Centercop() {
    return (
        <Container>
            <Row>
                <Col sm={3} md={3}>
                    <Item></Item>
                </Col>
                <Col sm={3}>
                    <Item></Item>
                </Col>
                <Col sm={3}>
                    <Item></Item>
                </Col>
                <Col sm={3}>
                    <Item></Item>
                </Col>
            </Row>
        </Container>
    );
}

export default Centercop;