import React from 'react';
import moment from 'moment'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const time = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

function TaskForm(props) {
  const [taskInputs, setTaskInputs] = React.useState({
    type: "pickup",
    location: "",
    description: "",
    start: 0,
    end: 0
  })

  React.useEffect(() => {
    setTaskInputs({...taskInputs, start: props.time, end: props.time + 1});
    // eslint-disable-next-line
  }, [props.time])

  return (
      <Form>
        <Form.Group controlId="type">
          <Form.Label>Task Type</Form.Label>
          <Form.Control as="select" value={taskInputs.type} onChange={(event) => setTaskInputs({...taskInputs, type: event.target.value})}>
            <option value="pickup">Pick Up</option>
            <option value="dropoff">Drop Off</option>
            <option value="other">Other</option>
          </Form.Control>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="start">
              <Form.Label>Start Time</Form.Label>
              <Form.Control as="select" value={taskInputs.start} onChange={(event) => setTaskInputs({...taskInputs, start: Number(event.target.value)})}>
                {time.map(hour => (
                  <option value={hour} key={hour}>{moment(hour,'HH').format('hh:mm a')}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="end">
              <Form.Label>End Time</Form.Label>
              <Form.Control as="select" value={taskInputs.end} onChange={(event) => setTaskInputs({...taskInputs, end: Number(event.target.value)})}>
              {time.map(hour => (
                <option value={hour} key={hour}>{moment(hour,'HH').format('hh:mm a')}</option>
              ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="location" value={taskInputs.location} onChange={(event) => setTaskInputs({...taskInputs, location: event.target.value})}/>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="description" value={taskInputs.description} onChange={(event) => setTaskInputs({...taskInputs, description: event.target.value})}/>
        </Form.Group>
        <Button variant="primary" onClick={() => props.validateForm(taskInputs, props.day)}>
          Submit
        </Button>
      </Form>
  );
}

export default TaskForm;