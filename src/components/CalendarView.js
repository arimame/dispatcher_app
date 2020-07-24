import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
          <Col className="Time-col">{hour}</Col>
          {props.days.map(day => (
            <Col className="Grid-col"></Col>
          ))}
        </Row>
      ))}
    </Container>
    </div>
  );
}

export default CalendarView;
