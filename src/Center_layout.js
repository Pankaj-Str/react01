import {Container,Row ,Col} from "react-bootstrap";
import Food_List from "./Food_List";
import Multi_Product from "./Multi_Product";

function Center_layout(){

    return(
        <Container>
            <Row>
                <Col sm={6} className={'p-3'}>
                    <Food_List></Food_List>
                </Col>
                <Col sm={6} className={'p-3'}>
                    <Multi_Product></Multi_Product>
                </Col>
            </Row>
        </Container>
    );
}

export  default  Center_layout;
