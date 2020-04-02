import React from "react";
import logo from '../assets/img/moov.png';
import '../assets/css/nav.css';
import Home from '../pages/Home';
import Maps from './Maps';
import Services from './Services';
import Transport from './Transport';
import Favorities from './Favorites';
import About from './About';
import MenuIcon from '../assets/img/white-menu-button.png';
import Map from '../assets/img/map-icon.png';
import iconMapa from '../assets/img/iconMapa.svg';
import iconServicios from '../assets/img/iconServicios.svg';
import iconFavoritos from '../assets/img/iconFavoritos.svg';
import iconAcercaDe from '../assets/img/iconAcercaDe.svg';
import iconHome from '../assets/img/iconHome.svg';
import iconBack from '../assets/img/iconBack.svg';

import Footer from '../components/Footer';


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
				return <Home changeState={this.changeState.bind(this)}/>			
			case 1:
				return <Maps/>
			case 2:
				return <Services />
			case 3:
				return <Transport/>
			case 4:
          return <Favorities/>
      case 5:
          return <About/>  
			default:
				return <Home/>
		}
		
	}
  
  render() {
    return (
      <div> 
      <header>
        <div>
        <img className="logo" alt="logoMoov" onClick={()=> this.changeState(0)} src={logo} href="#"/>
        </div>
        <label htmlFor="toggle"><img alt="menuIcon" src={MenuIcon}/></label>
        <input type="checkbox" id="toggle" />
        <img className="navMapIcon" alt="mapIcon" src={Map} onClick={()=> this.changeState(1)} href="#Maps" />
          <nav className="nav-links">
            <ul>
              <div className='containerElemt_'>
              <img alt="icon" onClick={()=> this.changeState(0)} className='iconElem_' src={iconHome}/>
              <img alt="icon" className='iconElem__' src={iconBack}/>
              </div>
              <div className='containerElemt'>
              <img alt="icon" className='iconElem' src={iconMapa}/>
              <div onClick={()=> this.changeState(1)} href="#Maps"><li>Mapa</li></div>
              </div>
              <div className='containerElemt'>
              <img alt="icon" className='iconElem' src={iconServicios}/>  
              <div onClick={()=> this.changeState(2)} href="#Services"><li>Servicios</li></div>
              </div>
              <div className='containerElemt'>
              <img alt="icon" className='iconElem' src={iconFavoritos}/>  
              <div onClick={()=> this.changeState(3)} ><li>Transportes</li></div>
              </div>
              <div className='containerElemt'>
              <img alt="icon" className='iconElem' src={iconFavoritos}/>  
              <div onClick={()=> this.changeState(4)} href="#Favorities"><li>Favoritos</li></div>
              </div>
              <div className='containerElemt'>
              <img alt="icon" className='iconElem' src={iconAcercaDe}/> 
              <div onClick={()=> this.changeState(5)} href="#About"><li>Acerca de</li></div>
              </div>
            </ul>
          </nav>
      </header>
      <div>{this.getActivePage()}</div>
      {/* Pasamos la funcion changeState por props a este components por eso bindeamos */}
      <Footer changeState={this.changeState.bind(this)}/>
      </div>
    );
  }
}

export default MyNavBar;
