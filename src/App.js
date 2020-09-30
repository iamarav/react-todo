import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskAppComponent from './components/TaskAppComponent/TaskAppComponent';

function App() {
  return (
    <div className="App">
        <div 
          className="heading"
          >
            <h1>
              TODO List - React App
            </h1>
          </div>
        <hr />
        <div className="todo-list">
          <TaskAppComponent/>
        </div>
    </div>
  );
}

export default App;
