import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
      <Button variant="contained" 
      sx={{borderRadius:50, backgroundColor:"#8F5FCA"}}>
        Save & Continue
      </Button>
  );
}