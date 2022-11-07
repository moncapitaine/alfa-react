import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { MainNavigation } from './components/MainNavigation/MainNavigation';
import ToDoList, { ToDoListProps } from './components/ToDoList/ToDoList';
import { TestForm } from './components/TestForm/testForm';
import { PokemonList } from './components/Pokemons/pokemonList';
import { PromisePlayground } from './components/PromisePlayground/promisePlayground';

function App() {
  const todoItems = [
    'Gassi gehen',
    'Kinder abholen',
    'Essen kochen']

    const todoListProps: ToDoListProps = {
      itemList: todoItems,
      title: 'Hallo aus einer const'
    }


  return (
    <div className="App">
      <h2>Promise Playground</h2>
      <PromisePlayground />
      <hr></hr>
      <img className="App-logo" src={logo} alt="Logo" />
      <h1>Welcome to Alfa2</h1>
      <PokemonList />
      <TestForm />
      <MainNavigation />
      <ToDoList itemList={todoItems} title="Meine Items" />
      <ToDoList {...todoListProps} />
    </div>
  );
}

export default App;
