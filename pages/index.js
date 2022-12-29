import * as React from 'react';
import Head from 'next/head'

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material'
import Box from '@mui/material/Box';

import Navbar from '../components/Navbar'
import SwitchToggle from '../components/SwitchToggle';
import BasicButton from'../components/BasicButtons'
import BasicSelect from '../components/BasicSelect'

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Box sx={{backgroundColor:"#EEEDF6", padding:2}}>
        <Typography variant="h1" align="center">Create/Edit a Participant Profile</Typography>
      </Box>
      <Container sx={{my:2, maxWidth:'900px', mx:'auto' }}>
        <Grid container spacing={2} direction="row" alignItems="center" justifyContent="center">
          <Grid item xs={10}>
            <Typography variant="h2" sx={{my:2 }}>Participant Information</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body1">Ameya ID <span style={{fontWeight:'bold', marginLeft:8}}>ABC123</span></Typography>
          </Grid>
          <Grid item xs={10} sm={5}>
            <TextField fullWidth id="first-name" label="First Name" variant="outlined" />
          </Grid>
          <Grid item xs={10} sm={5}>
            <TextField fullWidth id="last-name" label="Last Name" variant="outlined" />
          </Grid>
          <Grid item xs={10} sm={10}>
            <TextField fullWidth id="email" label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={10} sm={4}>
            <TextField fullWidth id="birth-date" label="Date of Birth" variant="outlined" />
          </Grid>
          <Grid item xs={4} sm={2}>
            <BasicSelect
            valueOne='+1'
            valueTwo='+2'
            valueThree='+3'
            id='country-code'
            label="Country Code"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField fullWidth id="phone-number" label="Phone Number" variant="outlined" />
          </Grid>
          <Grid item xs={10} sm={10}>
            <TextField fullWidth id="city" label="City" variant="outlined" />
          </Grid>
          <Grid item xs={5}>
            <BasicSelect
              valueOne='male'
              valueTwo='female'
              valueThree='other'
              id='assigned-sex'
              label="Sex Assigned at Birth"
            />
          </Grid>
          <Grid item xs={5}>
            <BasicSelect
              valueOne='he/him'
              valueTwo='she/her'
              valueThree='they/them'
              valueFour="other"
              id='pronoun'
              label="Preferred Pronoun"
            />
          </Grid>
          <Grid item xs={10} sm={4}>
            <Typography>Enable 2 factor authentication <SwitchToggle/> </Typography>
          </Grid>
          <Grid item xs={4} sm={2}>
            <BasicSelect
              valueOne='+1'
              valueTwo='+2'
              valueThree='+3'
              id='twof-country-code'
              label="Country Code"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField fullWidth id="phone-number" label="Phone Number" variant="outlined" />
          </Grid>
          <Grid item xs={10} sm={10}>
          <TextField
            fullWidth
            id="healt-condition-notes"
            label="Health conditions and other notes..."
            multiline
            rows={4}
            />
          </Grid>
          <Grid item>
            <BasicButton/>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{mt:8, p:4, backgroundColor:"#1F1769"}}></Box>
    </>
  )
}