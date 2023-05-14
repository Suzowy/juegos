import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import TicTacToe from './juegos/Tres';
import Sudoku from './juegos/Sudoku'
//import Hangman from './juegos/Ahorcado';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TicTacToe />
   <Sudoku />
  </React.StrictMode>
);

