import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo  from './img/tom.png';

function Header(){

    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} height="50" width="50"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={'meu'}>
                       <span className={'btn_menu'}>Home</span>
                    </Nav.Link>
                    <Nav.Link href="#features" className={'meu'}>
                        <span className={'btn_menu'}>Home</span>
                    </Nav.Link>
                    <Nav.Link href="#pricing" className={'meu'}>
                        <span className={'btn_menu'}>Home</span>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}
export default Header;
