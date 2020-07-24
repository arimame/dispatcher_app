import React from 'react';
import './App.css';
import DriverSelector from './components/DriverSelector.js'
import WeekSelector from './components/WeekSelector.js';


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
    </div>
  );
}

export default App;
