
import React, { useState } from "react";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  InputBase,
  CssBaseline,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import './Drawer.css';
import { withRouter } from 'react-router-dom';



const SimpleDrawer = () => {
    const [open, setOpen] =useState(false);
    return (
        <div>
          <CssBaseline />
          <Drawer open={open} onClose={() => setOpen(false)} >
            <Toolbar/>
            <List disablePadding className="drawer">
            <ListItem button>
                <ListItemText primary="First Item" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Second Item" />
            </ListItem>
        </List>
          </Drawer>
          <div className="Navbar">
          <AppBar position="fixed" color="secondary">
            <Toolbar>
              <IconButton
                edge="start"
                className="menuButton"
                color="inherit"
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h5" className="title">
                fundooNotes
              </Typography>
          <div className="search">
              <div className="searchIcon">
              <SearchIcon />
              <InputBase placeholder="Search.." className="inputSearch" />
              </div>
          </div>
          <div className="refresh">
            <RefreshIcon />
          </div>
          <div className="list">
          <ViewStreamIcon />
          </div>
          <div className="setting">
            <SettingsIcon />
          </div>
          <div className="app">
          <AppsIcon />
          </div>
          <div className="setting">
            <Avatar />
          </div>
            </Toolbar>
          </AppBar>
        </div>
        </div>
      );
    };
    
export default withRouter(SimpleDrawer);
