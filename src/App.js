import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

function App(props){
  const tasks = useSelector((state) => state.tasks.value);

  return (
    <div className="App">
      <TaskInput/>
      <TaskList
        tasks={tasks}
      />
    </div>
  );
}

export default App;
