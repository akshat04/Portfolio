import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { DeckRounded } from '@mui/icons-material';




export default function NavBar() {
    const navBarStyle = {
        backgroundColor: '#2B2929',
        color: '#FFFFFF',
        
    }
    const ButtonStyle = {
        backgroundColor: '#2B2929',
        color: '#FFFFFF',
        borderColor: '#FFFFFF',
    }

  return (
    <AppBar position="static" style= {navBarStyle}>
        <Toolbar sx ={{alignItems: 'stretch', justifyContent: 'space-between'}}>
            <Button variant='rounded' style={{...ButtonStyle, marginRight:'60%'}} size='xl'>
                <DeckRounded />
            </Button>
            <Button style={ButtonStyle} size='xl'>
                Projects
            </Button>
            <Button style={ButtonStyle} size='xl'>
                About
            </Button>
            <Button style={ButtonStyle} size='xl'>
                Contact
            </Button>
        </Toolbar>
    </AppBar>
  );
}

