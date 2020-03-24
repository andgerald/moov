import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/img/moov.png';
import '../assets/css/nav.css';
import Home from '../pages/Home';

import Maps from './Maps';
import Services from './Services';
import Favorities from './Favorites';
import About from './About';
import Accessibility from './Accessibility';


class MyNavBar extends React.Component {

  constructor() {
    super()
    this.state = {
      activePage: 0
    }
  }

  changeState = (numero) => { 
    this.setState({
      activePage: numero
    })
  }
  getActivePage = () => {

		// evaluamos el estado que recibimos por props, si cambia se vuelve a evaluar
		switch (this.state.activePage) {
			case 0:
				return <Home/>			
			case 1:
				return <Maps/>
			case 2:
				return <Services/>
			case 3:
				return <Favorities/>
			case 4:
          return <About/>
      case 5:
          return <Accessibility/>  	
			default:
				return <Home/>
		}
		
	}


  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" >
          <img className='logo' onClick={()=> this.changeState(0)} src={logo} href="#home"/>
          <Nav className="mr-auto">
            <Nav.Link onClick={()=> this.changeState(1)} href="#Maps">Mapa</Nav.Link>
            <Nav.Link onClick={()=> this.changeState(2)} href="#Services">Servicios</Nav.Link>
            <Nav.Link onClick={()=> this.changeState(3)} href="#Favorities">Favoritos</Nav.Link>
            <Nav.Link onClick={()=> this.changeState(4)} href="#About">Acerca de</Nav.Link>
            <Nav.Link onClick={()=> this.changeState(5)} href="#Accessibility">Accesibilidad</Nav.Link>
          </Nav>
        </Navbar>
        <div>{this.getActivePage()}</div>
      </div>
    );
  }
}

export default MyNavBar;
