import React from 'react';
import './App.css';
import DriverSelector from './components/DriverSelector.js'


function App() {
  const [selectedDriver, setSelectedDriver] = React.useState("1");

  const driverChanged = (event) => {
    setSelectedDriver(event.target.value);
  };

  return (
    <div className="App">
      <DriverSelector selectedDriver={selectedDriver} driverChanged={driverChanged}/>
    </div>
  );
}

export default App;
