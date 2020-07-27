import React from 'react';
import './App.css';
import DriverSelector from './components/DriverSelector.js';
import WeekSelector from './components/WeekSelector.js';
import CalendarView from './components/CalendarView.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import cloneDeep from 'lodash/cloneDeep';

import createEmptyCalendar from './helpers/emptyCalendar.js';

//initalize empty calendar objects
const calendar1 = createEmptyCalendar();
const calendar2 = createEmptyCalendar();
const calendar3 = createEmptyCalendar();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const time = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

function App() {
  const [selectedDriver, setSelectedDriver] = React.useState("1");
  const [week, setWeek] = React.useState(1);
  const [calendars, setCalendars] = React.useState({
    1: calendar1,
    2: calendar2,
    3: calendar3
  });

  const weekData = () => {
    const clonedCalendars = cloneDeep(calendars);
    return clonedCalendars[selectedDriver][week];
  }

  //events
  const driverChanged = (event) => {
    setSelectedDriver(event.target.value);
  };

  const backWeek = () => {
    let back = week - 1;
    setWeek(back);
  };

  const forwardWeek = () => {
    let forward = week + 1;
    setWeek(forward);
  };

  const addTask = (task, day) => {
    //clone calendar object
    const allCalendars = cloneDeep(calendars);
    //updated tasks array
    const tasks = allCalendars[selectedDriver][week][day].tasks;
    const updatedTasks = [ ...tasks, task];
    //copy selected calendar object and update state
    const updatedCalendar = allCalendars[selectedDriver];
    updatedCalendar[week][day].tasks = updatedTasks;
    setCalendars({...calendars, [selectedDriver]: updatedCalendar})
  };

  const updateTask = (updatedTask, day) => {
    //clone calendar object
    const allCalendars = cloneDeep(calendars);
    //update tasks array with updated task
    const tasks = allCalendars[selectedDriver][week][day].tasks;
    tasks.forEach((task, i) => {
      if(task.id === updatedTask.id) {
        tasks[i] = updatedTask
      }
    });
    //copy selected calendar object and update state
    const updatedCalendar = allCalendars[selectedDriver];
    updatedCalendar[week][day].tasks = tasks;
    setCalendars({...calendars, [selectedDriver]: updatedCalendar})
  };

  const deleteTask = (taskToRemove, day) => {
    //clone calendar object
    const allCalendars = cloneDeep(calendars);
    //update tasks array with updated task
    const tasks = allCalendars[selectedDriver][week][day].tasks;
    tasks.forEach((task, i) => {
      if(task.id === taskToRemove.id) {
        tasks.splice(i, 1);
      }
    });
    //copy selected calendar object and update state
    const updatedCalendar = allCalendars[selectedDriver];
    updatedCalendar[week][day].tasks = tasks;
    setCalendars({...calendars, [selectedDriver]: updatedCalendar})
  };

  const overwriteTask = (newTask, tasksToRemove, day) => {
    //clone calendar object
    const allCalendars = cloneDeep(calendars);

    //remove tasks
    const tasks = allCalendars[selectedDriver][week][day].tasks;
    tasksToRemove.forEach((taskToRemove) => {
      tasks.forEach((task, i) => {
        if(task.id === taskToRemove) {
          tasks.splice(i, 1);
        }
      });
    });

    //update task array with new task
    const updatedTasks = [ ...tasks, newTask];

    //copy selected calendar object and update state
    const updatedCalendar = allCalendars[selectedDriver];
    updatedCalendar[week][day].tasks = updatedTasks;
    setCalendars({...calendars, [selectedDriver]: updatedCalendar})
  };



  return (
    <div className="App">
      <h1 className="Header">Dispatcher Scheduling App</h1>
      <Container className="Calendar-header">
        <Row>
          <Col className="Driver-container">
            <DriverSelector selectedDriver={selectedDriver} driverChanged={driverChanged}/>
          </Col>
          <Col>
            <WeekSelector week={week} backWeek={backWeek} forwardWeek={forwardWeek}/>
          </Col>
        </Row>
      </Container>
      <CalendarView days={days} time={time} weekData={weekData()} addTask={addTask} updateTask={updateTask} deleteTask={deleteTask} overwriteTask={overwriteTask}/>
    </div>
  );
}

export default App;
