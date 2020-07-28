import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ErrorModal(props) {

  return (
    <Modal
      show={props.modalShow}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Error
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {props.message}
      </Modal.Body>
      <Modal.Footer>
      {props.conflict ? (
        <div>
          <Button variant="outline-danger" onClick={() => props.confirmOverwrite(props.newTask, props.overlappingTasks, props.day, props.type)}>Overwrite</Button>
          <Button variant="custom" onClick={props.onHide} style={{marginLeft: 5}}>Cancel</Button>
        </div>
      ) : (
        <Button  variant="custom" onClick={props.onHide}>Close</Button>
      )}
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal;
