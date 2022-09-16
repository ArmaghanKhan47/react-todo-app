import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/task';

function TaskInput(props) {
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();
  return (
    <div className='row p-3'>
      <div className='col-9'>
        <input
          type="text"
          className='form-control'
          value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}
        ></input>
      </div>
      <div className='col-3'>
        <button className='btn btn-primary' onClick={() => dispatch(addTask({ title: taskTitle }))}>Add Task</button>
      </div>
    </div>
  );
}

export default TaskInput;