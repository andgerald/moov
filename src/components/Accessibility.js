import React, { Component } from 'react';
import '../App.css';
import Map from '../components/Map'
import Apps from '../components/Apps'
import ThemeSelector from './ThemeSelector';
class Accessibility extends Component {
    render() {
        return (
            <div className='App'>
                <h1>Componente de Accessibility</h1>
< Map  app_id = "nwZzNNTapBgKyuhv56Fs"  app_code = "z3UKaiSpUL3gesc0WOQjXg" />
<Apps ></Apps>
<ThemeSelector></ThemeSelector>
            </div>

        );
    }
}

export default Accessibility;