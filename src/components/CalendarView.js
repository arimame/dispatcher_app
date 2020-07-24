import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function CalendarView(props) {

  return (
    <div>
    <Container>
      {props.time.map(hour => (
        <Row className="Black-border">
          <Col className="Black-border" style={{height: 50}}>{hour}</Col>
          {props.days.map(day => (
            <Col className="Black-border"></Col>
          ))}
        </Row>
      ))}
    </Container>
    </div>
  );
}

export default CalendarView;
