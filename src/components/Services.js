import React, { Component } from 'react';
import '../assets/css/services.css';

class Category extends Component {
    render() {
        return (
            <div>
                <p className='titleServices'>Services</p>
                <div className='sectionServices'>
                    <div className='itemServices'>Restaurantes</div>
                    <div className='itemServices'>Hoteles</div>
                    <div className='itemServices'>Museos</div>
                    <div className='itemServices'>Turismo Aventura</div>
                    <div className='itemServices'>Playas y Balnearios</div>
                    <div className='itemServices'>Parques</div>
                    <div className='itemServices'>Otros</div>
                </div>
            </div>
        );
    }
}

export default Category;