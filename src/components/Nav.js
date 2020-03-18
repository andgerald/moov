import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

class myNavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand onClick={()=> this.props.cambiaEstado(0)} href="#home">LOGO MOOV</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={()=> this.props.cambiaEstado(1)} href="#Category">Categorías</Nav.Link>
            <Nav.Link onClick={()=> this.props.cambiaEstado(2)} href="#Favorites">Favoritos</Nav.Link>
            <Nav.Link onClick={()=> this.props.cambiaEstado(3)} href="#Accessibility">Accesabilidad</Nav.Link>
            <Nav.Link onClick={()=> this.props.cambiaEstado(4)} href="#AboutUs">Nosotros</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default myNavBar;
