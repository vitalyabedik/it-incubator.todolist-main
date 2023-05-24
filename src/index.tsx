import React from 'react';
import './index.css';
import App from './App';

import {createRoot} from 'react-dom/client';

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container);
root.render(<App/>);

/*
1. старт HTML -> script
2. Запуск компонент (срабатывание функций)
3. Babel
4. Virtual Dom
5. DOM на основе VD
 */

/*
После того как пользователь что-то сделает на UI:
1. Данные меняются (state) -> ререндер компонента (вызов функции снова)
2. Получаем JSX -> срабатывает Babel
3. в VD попадают ссылки новых (если изменялся) и старых объектов (если не изменялся)
4. Происходит сравнение двух VD (старый VD и новый VD)
5. В результате сравнения -> происходит ререндер измененных узлов
6. Старый VD очистит сборщик мусора из оперативной памяти
 */

