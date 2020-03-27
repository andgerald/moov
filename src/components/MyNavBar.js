import React from "react";
// import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/img/moov.png';
import '../assets/css/nav.css';
import Home from '../pages/Home';
import Maps from './Maps';
import Services from './Services';
import Favorities from './Favorites';
import About from './About';
import Accessibility from './Accessibility';
import MenuIcon from '../assets/img/white-menu-button.png'
import { Link } from 'react-router-dom';


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
      <header>
        <div className="divLogo">
          <img className="logo" alt="logoMoov" onClick={()=> this.changeState(0)} src={logo} href="#home"/>
        </div>
        <label for="toggle"><img alt="menuIcon" src={MenuIcon}/></label>
        <input type="checkbox" id="toggle" />
        
          <nav className="nav-links">
            <ul>
              <Link onClick={()=> this.changeState(1)} href="#Maps"><li>Mapa</li></Link>
              <Link onClick={()=> this.changeState(2)} href="#Services"><li>Servicios</li></Link>
              <Link onClick={()=> this.changeState(3)} href="#Favorities"><li>Favoritos</li></Link>
              <Link onClick={()=> this.changeState(4)} href="#About"><li>Acerca de</li></Link>
              <Link onClick={()=> this.changeState(5)} href="#Accessibility"><li>Accesibilidad</li></Link>
            </ul>
          </nav>
      </header>
      <div>{this.getActivePage()}</div>
      </div>
    );
  }
}

export default MyNavBar;
