import React from 'react';

function TaskItem(props) {
  return (
    <React.Fragment>
      <li className='list-group-item d-flex justify-content-around align-items-center'>
        <span>{ props.title }</span>
        <button className="btn btn-danger" onClick={() => props.removeTask()}>Delete</button>
      </li>
    </React.Fragment>
  );
}

export default TaskItem;