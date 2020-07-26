import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import TaskForm from './TaskForm.js';
import ErrorModal from './ErrorModal.js';

function TaskModal(props) {
   const [error, setError] = React.useState({
     modalShow: false,
     message: ""
   });

  const validateForm = (task, day) => {
    if(task.start === 24) {
      task.start = 0;
    }
    if(task.end === 0) {
      task.end = 24;
    }
    if(task.start >= task.end) {
      setError({modalShow: true, message: "End time must be after start time"});
    } else {
      props.addTask(task, day);
      props.onHide();
    }
  }
  return (
    <div>
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="m"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TaskForm day={props.day} time={props.time} validateForm={validateForm}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    <ErrorModal show={error.modalShow} message={error.message} onHide={() => setError({...error, modalShow: false})}/>
    </div>
  );
}

export default TaskModal;
