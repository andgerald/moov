import React from 'react';
import Home from '././Home';
import Category from '././Category';
import Favorites from '././Favorites';
import Accessibility from '././Accessibility';
import AboutUs from '././AboutUs';



class activePage extends React.Component {

	getActivePage = () => {

		// evaluamos el estado que recibimos por props, si cambia se vuelve a evaluar
		switch (this.props.estado) {
			case 0:
				return <Home/>			
			case 1:
				return <Category/>
			case 2:
				return <Favorites/>
			case 3:
				return <Accessibility/>
			case 4:
					return <AboutUs/>	
			default:
				return <Home/>
		}
		
	}

	render() {
		return (
			<div>{this.getActivePage()}</div>
		)
	}
}
export default activePage;