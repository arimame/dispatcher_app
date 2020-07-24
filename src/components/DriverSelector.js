import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


function DriverSelector(props) {

  return (
    <div>
      <Select labelId="label" id="select" value={props.selectedDriver} onChange={props.driverChanged}>
        <MenuItem value="1">Driver 1</MenuItem>
        <MenuItem value="2">Driver 2</MenuItem>
        <MenuItem value="3">Driver 3</MenuItem>
      </Select>
    </div>
  );
}

export default DriverSelector;
