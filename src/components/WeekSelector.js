import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LastPageIcon from '@material-ui/icons/LastPage';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function WeekSelector(props) {

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <IconButton aria-label="back" onClick={props.firstWeek} disabled={props.week <= 1}>
              <FirstPageIcon  />
            </IconButton>
          </Col>
          <Col>
            <IconButton aria-label="back" onClick={props.backWeek} disabled={props.week <= 1}>
              <NavigateBeforeIcon />
            </IconButton>
          </Col>
          <Col xs={4}>
            <p>Week {props.week}</p>
          </Col>
          <Col>
            <IconButton aria-label="forward" onClick={props.forwardWeek} disabled={props.week >= 52} >
              <NavigateNextIcon />
            </IconButton>
          </Col>
          <Col>
            <IconButton aria-label="forward" onClick={props.lastWeek} disabled={props.week >= 52} >
              <LastPageIcon />
            </IconButton>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WeekSelector;
