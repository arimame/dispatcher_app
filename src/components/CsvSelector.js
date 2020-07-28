import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from 'react-bootstrap/Button';
import { CSVLink} from "react-csv";

function CsvSelector(props) {

  return (
    <div>
      <Select labelId="label" id="select" value={props.selectedReport} onChange={props.reportChanged}>
        <MenuItem value="2">2 Days</MenuItem>
        <MenuItem value="4">4 Days</MenuItem>
        <MenuItem value="7">7 Days</MenuItem>
        <MenuItem value="14">14 Days</MenuItem>
        <MenuItem value="28">28 Days</MenuItem>
      </Select>
       <CSVLink style={{marginLeft:10}} filename={"Driver-Report.csv"} data={props.csvGenerator()}>
          <Button variant="success">Download Schedule</Button>
       </CSVLink>
    </div>
  );
}

export default CsvSelector;
