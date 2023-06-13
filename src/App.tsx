import React from 'react';
import {Provider} from 'react-redux';

import './App.css';

import {store} from './Wednesday/Todolist12/state/store';

import AppWithRedux from './Wednesday/Todolist12/AppWithRedux';

function App() {

    return (
        <div>
            <Provider store={store}>
                <AppWithRedux/>
            </Provider>
        </div>
    );
}

export default App;
