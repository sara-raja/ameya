import * as React from 'react';
import Switch from '@mui/material/Switch';
import { useState } from 'react';

export default function SwitchToggle() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}