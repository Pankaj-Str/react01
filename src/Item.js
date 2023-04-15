import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo  from './img/tom.png';
import {Cloth , Food} from "./Product";

function getinfo(){

        //alert("welcome");
        window.open("https://p4n.in/");

}


function Item() {
    return (
        <Card className={'m-2 p-3'}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                   <p>
                       <Food></Food>
                       <Cloth></Cloth>
                   </p>
                </Card.Text>
                <Button variant="primary" onClick={ getinfo }>Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;