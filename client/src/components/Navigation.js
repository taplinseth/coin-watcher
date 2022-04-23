import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

export default function Navigation() {

    const navigate = useNavigate();
  
    const routeHome = () =>{ 
      let path = `/`; 
      navigate(path);
    }
  
    const routeLogin = () =>{ 
      let path = `/login`; 
      navigate(path);
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="nav-bar" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Coin Watcher
          </Typography>
          <Button onClick={routeHome} color="inherit">Home</Button>
          <Button onClick={routeLogin} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
