import React from 'react';
import Modal from 'react-bootstrap/Modal';
import TaskForm from './TaskForm.js';
import ErrorModal from './ErrorModal.js';
import conflictChecker from '../helpers/conflictChecker.js'

function TaskModal(props) {
  const [error, setError] = React.useState({
    modalShow: false,
    message: ""
   });

  const validateForm = (task, day, type) => {
    if(task.start === 24) {
       task.start = 0;
    }

    if(task.end === 0) {
       task.end = 24;
     }

    if(task.start >= task.end) {
       setError({modalShow: true, message: "End time must be after start time"});
    } else {
       //if start and time are good, check for conflicting tasks
       const overlappingTasks = conflictChecker(props.weekData, day, task);

       if(overlappingTasks.length > 0) {
         setError({
           modalShow: true,
           message: "Tasks cannot overlap. Click 'Overwrite' to replace existing task(s).",
           conflict: true,
           newTask: task,
           overlappingTasks: overlappingTasks,
           type: props.type
         });
       } else {
         //if no conflicting tasks, update or add accordingly
          (props.type === "add") ? props.addTask(task, day) : props.updateTask(task, day);
          props.onHide();
       }
     }
  };

  const confirmDelete = (task, day) => {
    props.deleteTask(task, day);
    props.onHide();
  };

  const confirmOverwrite = (newTask, removeTask, day, type) => {
    debugger;
    props.overwriteTask(newTask, removeTask, day, type);
    setError({...error, modalShow: false})
    props.onHide();
  };

  return (
    <div>
    <Modal
      show={props.modalShow}
      onHide={props.onHide}
      size="m"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
      {props.type === "add" ? (
        <Modal.Title id="contained-modal-title-vcenter">Add Task</Modal.Title>) : (
        <Modal.Title id="contained-modal-title-vcenter">Update Task</Modal.Title>
      )}
      </Modal.Header>
      <Modal.Body>
        <TaskForm task={props.task} type={props.type} day={props.day} time={props.hour} validateForm={validateForm} confirmDelete={confirmDelete}/>
      </Modal.Body>
    </Modal>
    <ErrorModal {...error} day={props.day} validateForm={validateForm} confirmOverwrite={confirmOverwrite} onHide={() => setError({...error, modalShow: false})}/>
    </div>
  );
}

export default TaskModal;
