import {useState, useEffect} from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {

    return <AppBar position="relative" sx={{mb: '1rem'}}>
    <Toolbar>
      <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h1"
        color="inherit"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        Ameya
      </Typography>

    </Toolbar>
  </AppBar>
}