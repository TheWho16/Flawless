import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Pasha'},
    {id: 4, name: 'Sveta'},
    {id: 5, name: 'Kostya'},
    {id: 6, name: 'Masha'},
]


let messages = [
    {id: 1, text: 'hi'},
    {id: 2, text: 'man'},
    {id: 3, text: 'i really whant to say'},
    {id: 4, text: 'she wants to do it'},
    {id: 5, text: 'No? Why?'},
    {id: 6, text: 'Honey. Wheres  my supper suit?'},
]



ReactDOM.render(<App messages={messages} dialogs={dialogs}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
