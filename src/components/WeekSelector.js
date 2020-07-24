import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function WeekSelector(props) {

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <IconButton aria-label="back" onClick={props.backWeek} disabled={props.week <= 1}>
              <ArrowBackIcon />
            </IconButton>
          </Col>
          <Col xs={6}>
            <p>Week {props.week}</p>
          </Col>
          <Col>
            <IconButton aria-label="forward" onClick={props.forwardWeek} disabled={props.week >= 52} >
              <ArrowForwardIcon />
              </IconButton>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WeekSelector;
