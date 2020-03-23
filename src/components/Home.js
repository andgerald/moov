import React, { Component } from 'react';
import '../App.css';
import DisplayMapClass from './DisplayMapClass'

class Home extends Component {
    render() {
        return (
            <div className='App'>
                <DisplayMapClass />
                <h1>Componente Home</h1>
            </div>
        );
    }
}

export default Home;

