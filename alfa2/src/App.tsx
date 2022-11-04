import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainNavigation } from './components/MainNavigation/MainNavigation';
import ToDoList, { ToDoListProps } from './components/ToDoList/ToDoList';
import { TestForm } from './components/TestForm/testForm';

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
      <img className="App-logo" src={logo} alt="Logo" />
      <h1>Welcome to Alfa2</h1>
      <TestForm />
      <MainNavigation />
      <ToDoList itemList={todoItems} title="Meine Items" />
      <ToDoList {...todoListProps} />
    </div>
  );
}

export default App;
