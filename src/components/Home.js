import React, { Component } from 'react';
import '../App.css';
import {DisplayMap} from './DisplayMap';

class Home extends Component {
    render() {
        return (
            <div className='App'>
                <h1>Componente Home</h1>
                <DisplayMap/>
            </div>
        );
    }
}

export default Home;