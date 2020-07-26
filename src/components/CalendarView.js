import React from 'react';
import moment from 'moment'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Task from './Task.js';
import TaskModal from './TaskModal.js';

function CalendarView(props) {
  const [formProps, setFormProps] = React.useState({
    modalShow: false,
    day: "",
    hour: ""
  });

  const launchTaskFormModal = (day, hour) => {
    setFormProps({
      modalShow: true,
      day: day,
      hour: hour
    })
  }

  return (
    <div>
      <Container className="Calendar-container">
        <Row className="Days-header">
          <Col>
          </Col>
          {props.days.map(day => (
            <Col key={day}>{day}</Col>
          ))}
        </Row>
        {props.time.map(hour => (
          <Row className="Grid-row" key={hour}>
            <Col className="Time-col" key={hour}>{moment(hour,'HH').format('hh:mm a')}</Col>
            {props.days.map(day => (
              <Col className="Grid-col" key={day} onClick={() =>launchTaskFormModal(day, hour)}>
              {props.weekData[day].tasks.map(task =>
                task.start === hour ? (<Task key={task} task={task}/>) : (null))}
              </Col>
            ))}
          </Row>
        ))}
      </Container>
      <TaskModal {...formProps} addTask={props.addTask} weekData={props.weekData} onHide={() => setFormProps({...formProps, modalShow: false})}/>
    </div>
  );
}

export default CalendarView;
