import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';


export default function BasicSelect(props) {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId={`${props.id}-label`}
          id={props.id}
          value={age}
          label={props.label}
          onChange={handleChange}
          inputProps={{MenuProps: {disableScrollLock: true}}}
        >
          <MenuItem value={props.valueOne}>{props.valueOne}</MenuItem>
          <MenuItem value={props.valueTwo}>{props.valueTwo}</MenuItem>
          <MenuItem value={props.valueThree}>{props.valueThree}</MenuItem>
          <MenuItem value={props.valueFour}>{props.valueFour}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}