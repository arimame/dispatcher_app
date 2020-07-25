import React from 'react';
import './App.css';
import DriverSelector from './components/DriverSelector.js';
import WeekSelector from './components/WeekSelector.js';
import CalendarView from './components/CalendarView.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import createEmptyCalendar from './helpers/emptyCalendar.js';

//initalize empty calendar objects
const calendar1 = createEmptyCalendar();
const calendar2 = createEmptyCalendar();
const calendar3 = createEmptyCalendar();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const time = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

function App() {
  const [selectedDriver, setSelectedDriver] = React.useState("1");
  const [selectedCalendar, setSelectedCalendar] = React.useState("1");
  const [week, setWeek] = React.useState(1);
  const [calendars, setCalendars] = React.useState({
    1: calendar1,
    2: calendar2,
    3: calendar3
  });

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

  const addTask = (day, hour) => {
    //updated tasks array
    const task = {
      type: "pick up",
      location: "123 Fake Street",
      description: "this is a comment",
      start: hour,
      end: hour + 1
    }
    const tasks = calendars[selectedDriver][week][day].tasks;
    tasks.push(task);

    //copy selected calendar object and update state
    const updatedCalendar = calendars[selectedDriver];
    updatedCalendar[week][day].tasks = tasks;
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
      <CalendarView days={days} time={time} addTask={addTask}/>
    </div>
  );
}

export default App;
