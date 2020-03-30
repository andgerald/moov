import React, { Component } from 'react';
import '../App.css';
import addMarkersToMap from '../components/marks'

class Home extends Component {
    render() {
        return (
            <div className='App'>
                <addMarkersToMap />
                <h1>Componente Home</h1>
            </div>
        );
    }
}

export default Home;

