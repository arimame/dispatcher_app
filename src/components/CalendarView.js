import React from 'react';
import moment from 'moment'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Task from './Task.js';

function CalendarView(props) {

  return (
    <div>
    <Container className="Calendar-container">
      <Row className="Days-header">
        <Col>
        </Col>
        {props.days.map(day => (
          <Col>{day}</Col>
        ))}
      </Row>
      {props.time.map(hour => (
        <Row className="Grid-row">
          <Col className="Time-col">{moment(hour,'HH').format('hh:mm a')}</Col>
          {props.days.map(day => (
            <Col className="Grid-col" onClick={() => props.addTask(day, hour)}>
            {props.weekData[day].tasks.map(task =>
              task.start === hour ? (<Task task={task}/>) : (null))}
            </Col>
          ))}
        </Row>
      ))}
    </Container>
    </div>
  );
}

export default CalendarView;
