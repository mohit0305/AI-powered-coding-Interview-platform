import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import Login from './Login';
import { useState, useEffect } from 'react';
const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [user, setUser] = useState(null)
  // setUser(localStorage?.profile.name)
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile'))?.name)
    // console.log(JSON.parse(user).name);
  }, [user])
  
  const userId=JSON.parse(localStorage.getItem('profile'))?._id;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogout =() => {
    localStorage.removeItem('profile');
    setUser(null);
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Coding Platform
      </Typography>
      <Divider />
      <List>
        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <Link to={'login'} style={{textDecoration:"none"}}>
        <ListItem key={'Login'} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary={'Login'} />
          </ListItemButton>
        </ListItem>
        </Link>
        <Link to={'./signup'} style={{textDecoration:"none"}}>
        <ListItem key={'Signup'} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary={'Sign Up'} />
          </ListItemButton>
        </ListItem>
        </Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block', textAlign: 'left' } }}
          >
            Coding Platform
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}
            {user?<>
            <Link to={`/user/${userId}`}>
            <Button key={'Name'} sx={{ color: '#fff' }}>
              {"Hi "+ user}
            </Button>
            </Link>
              <Button key={'Logout'} variant="contained" color="error" sx={{ color: '#fff' }} onClick={handleLogout}>
                {'Logout'}
              </Button>
            </>:
            <><Link to={'./login'} style={{textDecoration:"none"}}>
                <Button key={'Login'} sx={{ color: '#fff' }}>
                  {'Login'}
                </Button>
              </Link>
              <Link to={'./signup'} style={{textDecoration:"none"}}>
                <Button key={'Signup'} sx={{ color: '#fff' }}>
                  {'Sign Up'}
                </Button>
              </Link></>}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
          fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
          aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
        </Typography>
      </Box> */}

    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;