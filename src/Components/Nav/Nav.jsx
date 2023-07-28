import { NavLink } from "react-router-dom";
import { useState } from "react";
import styled from 'styled-components'
import {
      AppBar, 
      Box ,
      CssBaseline ,
      Divider ,
      Drawer,
      IconButton,
      List ,
      ListItem ,
      ListItemButton,
      ListItemText,
      Toolbar,
      Typography,
      Button ,
    } from "@mui/material";
    import MenuIcon from '@mui/icons-material/Menu';

    const StyledNavLink = styled(NavLink)`
    color: #ffffff;
    text-decoration:none;
    @media(max-width:599px){
      color:#333;
      text-aline:center;
    }
    `
const drawerWidth = 240;
// const navItems = ['Home', 'Add Employee', 'Employee List','Logout'];
const navItems = [
  {
    key:"Home",
    path:"/home"
  },
  {
    key:"Add-Employee",
    path:"/add-employee"
  },
  {
    key:"Employee-List",
    path:"/employee-list"
  },
  {
    key:"Logout",
    path:"/home"
  },
];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Employee App
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <StyledNavLink to={item.path}>
              <ListItemText primary={item.key} />
              </StyledNavLink>

            </ListItemButton>
          </ListItem>
        ))}
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
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Employee App
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.key} sx={{ color: '#fff' }}>
                <StyledNavLink to={item.path}>{item.key} </StyledNavLink>
              </Button>
            ))}
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
    </Box>
  );
}
export default NavBar;
