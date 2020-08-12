import React from 'react';
import './App.css'
import './Todo.scss'
import NewTaskForm from './NewTaskForm'
import TaskList from './TaskList'

function App() {
  return (
    <div className="container">
      <h1 className="title">Lista de Compras</h1>
      <NewTaskForm />
      <TaskList />
      <h3 className="sub-title">Nunca mais vai esquecer a lista</h3>
      <h4 className="sub-title-footer">[By Coquinho ;)]</h4>
    </div>
  );
}

export default App;
