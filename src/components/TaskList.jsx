import React from 'react';
import TaskItem from './TaskItem';
import { useDispatch } from 'react-redux';
import { removeTask } from '../features/task';

function TaskList(props) {
  const dispatch = useDispatch();
  let taskItems = props.tasks.map((task, index) => {
    console.log(task);
    return <TaskItem title={task.title} key={index} removeTask={() => dispatch(removeTask(index))}/>;
  });
  return (
    <ul className="list-group">
      { taskItems }
    </ul>
  );
}

export default TaskList;