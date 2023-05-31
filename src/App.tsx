import React from 'react';
import {Provider} from 'react-redux';

import './App.css';

import {Lesson10} from './Wednesday/Todolist10/Lesson10';
import {Lesson10WithReducers} from './Wednesday/Todolist10/Lesson10WithReducers';
import {Lesson10WithRedux} from './Wednesday/Todolist10/Lesson10WithRedux';
import {store} from './Wednesday/Todolist10/state/store';

function App() {

    return (
        <div>
            <Provider store={store}>
                <Lesson10WithRedux/>
            </Provider>
        </div>
    );
}

export default App;
