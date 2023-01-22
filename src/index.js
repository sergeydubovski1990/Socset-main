import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Message} from "./components/Dialogs/Message/Message";
import {DialogItem} from "./components/Dialogs/DialogItem/DialogsItem"

let dialogs = [
    {id: 1, name: 'Sergey'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Ania'},
    {id: 5, name: 'Djoni'},
    {id: 6, name: 'Liza'}
];

let messages = [
    {id: 1, name: 'Dzick-pick'},
    {id: 2, name: 'What are you wont?'},
    {id: 3, name: 'Eto ne nashi problemi'},
    {id: 4, name: 'Ne pishi mne bolshe'},
    {id: 5, name: 'show me your boobs'}
]



let posts = [
    {id: 1, name: 'Hi, how are you', likesCount: 12},
    {id: 2, name: 'It is my first post', likesCount: 11},
    {id: 3, name: 'It is my second post', likesCount: 1}
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
