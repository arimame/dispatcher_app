import React from 'react';

function Task(props) {

  const taskStyle = function(start, end) {
    const height = (end - start) * 60;
     return {
       backgroundColor: "#C8C6D7",
       height: height,
       margin: 0
     }
 }

  return (
    <div style={taskStyle(props.task.start, props.task.end)}>
      <p>{props.task.type}</p>
    </div>
  );
}

export default Task;
