import React from 'react';
import {Provider} from 'react-redux';

import './App.css';

import {store} from './Wednesday/Todolist10/state/store';
import {Lesson11} from './Wednesday/Todolist11/Lesson11';

function App() {

    return (
        <div>
            <Provider store={store}>
                <Lesson11/>
            </Provider>
        </div>
    );
}

export default App;
