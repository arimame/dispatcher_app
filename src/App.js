import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DriverSelector from './components/DriverSelector.js';
import WeekSelector from './components/WeekSelector.js';
import CsvSelector from './components/CsvSelector.js';
import CalendarView from './components/CalendarView.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import cloneDeep from 'lodash/cloneDeep';
import createEmptyCalendar from './helpers/emptyCalendar.js';
import getCSVData from './helpers/getCSVData.js';
import {addTask, updateTask, deleteTask, overwriteTask} from './helpers/taskRequestHelpers.js';

//initalize empty calendar objects
const calendar1 = createEmptyCalendar();
const calendar2 = createEmptyCalendar();
const calendar3 = createEmptyCalendar();

function App() {
  const [selectedDriver, setSelectedDriver] = React.useState("1");
  const [selectedReport, setSelectedReport] = React.useState("2");
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

  const reportChanged = (event) => {
    setSelectedReport(event.target.value);
  };

  const taskRequest = (type, requestData, day) => {
    const allCalendars = cloneDeep(calendars);
    const tasks = allCalendars[selectedDriver][week][day].tasks;
    let updatedTasks = [];
    switch(type) {
      case "add":
        const newTask = requestData;
        updatedTasks = addTask(tasks, newTask);
        break;
      case "update":
        const updatedTask = requestData;
        updatedTasks = updateTask(tasks, updatedTask)
        break;
      case "delete":
        const taskToRemove = requestData;
        updatedTasks = deleteTask(tasks, taskToRemove);
        break;
      case "overwrite":
        const overwritingTask = requestData.newTask;
        const tasksToRemove = requestData.tasksToRemove;
        const overwriteType = requestData.type;
        updatedTasks = overwriteTask(tasks, overwritingTask, tasksToRemove, overwriteType);
        break;
      default:
        console.log("error")
    }
    const updatedCalendar = allCalendars[selectedDriver];
    updatedCalendar[week][day].tasks = updatedTasks;
    setCalendars({...calendars, [selectedDriver]: updatedCalendar})
  }

  const csvGenerator = () => {
    const allCalendars = cloneDeep(calendars);
    const selectedCalendar = allCalendars[selectedDriver];
    const data  = getCSVData(selectedCalendar, selectedReport);
    return data;
  }

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
          <Col className="Csv-container">
            <CsvSelector selectedReport={selectedReport} reportChanged={reportChanged} csvGenerator={csvGenerator}/>
          </Col>
        </Row>
      </Container>
      <CalendarView weekData={weekData()} taskRequest={taskRequest}/>
    </div>
  );
}

export default App;
