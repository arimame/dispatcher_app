import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DriverSelector from './components/DriverSelector.js';
import WeekSelector from './components/WeekSelector.js';
import CalendarView from './components/CalendarView.js';

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const time = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

function App() {
  const [selectedDriver, setSelectedDriver] = React.useState("1");
  const [week, setWeek] = React.useState(1);

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

  return (
    <div className="App">
      <DriverSelector selectedDriver={selectedDriver} driverChanged={driverChanged}/>
      <WeekSelector week={week} backWeek={backWeek} forwardWeek={forwardWeek}/>
      <CalendarView days={days} time={time}/>
    </div>
  );
}

export default App;
