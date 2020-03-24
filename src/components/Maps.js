import React, { Component } from 'react';
import DisplayMapClass from './DisplayMapClass';
import '../assets/css/maps.css'

class Maps extends Component {
    render() {
        return (
            <div>
                <p className='titleMaps'>Maps</p>
                <DisplayMapClass/>
            </div>
        );
    }
}

export default Maps;