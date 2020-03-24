import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Plaid from './Plaid';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/plaid' component={Plaid} />
                <Route path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
