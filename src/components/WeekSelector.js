import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function WeekSelector(props) {

  return (
    <div>
      <IconButton aria-label="back" onClick={props.backWeek} disabled={props.week <= 1}>
        <ArrowBackIcon />
      </IconButton>
      <p>Week {props.week}</p>
      <IconButton aria-label="forward" onClick={props.forwardWeek} disabled={props.week >= 52} >
        <ArrowForwardIcon />
      </IconButton>
    </div>
  );
}

export default WeekSelector;
