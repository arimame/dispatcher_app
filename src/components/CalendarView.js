import React from 'react';
import moment from 'moment'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Task from './Task.js';
import TaskModal from './TaskModal.js';

const days = {
  1: "Sunday",
  2: "Monday",
  3: "Tuesday",
  4: "Wednesday",
  5: "Thursday",
  6: "Friday",
  7: "Saturday"
}

function CalendarView(props) {
  const [formProps, setFormProps] = React.useState({
    modalShow: false,
    day: "",
    hour: "",
    task: null,
    type: ""
  });

  const launchAddTaskModal = (day, hour) => {
    setFormProps({
      ...formProps,
      modalShow: true,
      day: day,
      hour: hour,
      type: "add"
    });
  };

  const launchEditTaskModal = (event, task, day) => {
    event.stopPropagation()
    setFormProps({
      ...formProps,
      modalShow: true,
      day: day,
      task: task,
      type: "update"
    });
  };

  return (
    <div>
      <Container className="Calendar-container">
        <Row className="Days-header">
          <Col>
          </Col>
          {props.days.map(day => (
            <Col key={day}>{days[day]}</Col>
          ))}
        </Row>
        {props.time.map(hour => (
          <Row className="Grid-row" key={hour}>
            <Col className="Time-col" key={hour}>{moment(hour,'HH').format('hh:mm a')}</Col>
            {props.days.map(day => (
              <Col className="Grid-col" key={day} onClick={() =>launchAddTaskModal(day, hour)}>
              {props.weekData[day].tasks.map(task =>
                task.start === hour ? (<Task key={task} task={task} day={day} launchEditTaskModal={launchEditTaskModal} />) : (null))}
              </Col>
            ))}
          </Row>
        ))}
      </Container>
      <TaskModal
        {...formProps}
        updateTask={props.updateTask}
        addTask={props.addTask}
        deleteTask={props.deleteTask}
        overwriteTask={props.overwriteTask}
        weekData={props.weekData}
        onHide={() => setFormProps({...formProps, modalShow: false})}
      />
    </div>
  );
}

export default CalendarView;
