import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainNavigation } from './components/MainNavigation/MainNavigation';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <img className="App-logo" src={logo} alt="Logo" />
      <h1>Welcome to Alfa2</h1>
      <MainNavigation />
      <ToDoList />
    </div>
  );
}

export default App;
