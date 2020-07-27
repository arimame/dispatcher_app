import React from 'react';

function Task(props) {

  const colors= {
    pickup:"#2a1e5c",
    dropoff: "#55DDE0",
    other: "#E01A4F"
  };

  const taskStyle = function(task) {
    const color = colors[task.type]
    const height = (task.end - task.start) * 60;
    return {
      backgroundColor: color,
      height: height,
      margin: 0,
      color: "white",
      borderRadius: 10,
      marginTop: 1,
      paddingTop: 5,
      position: "relative",
      zIndex: 1
     }
 }

  return (
    <div style={taskStyle(props.task)} onClick={(event) => props.launchEditTaskModal(event, props.task)}>
      <p>{props.task.type}</p>
    </div>
  );
}

export default Task;
