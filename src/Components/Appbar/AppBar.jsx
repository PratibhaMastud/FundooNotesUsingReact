import React, { useState } from "react";
import {
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
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import "./Appbar.css";
import { withRouter } from "react-router-dom";

const Appbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="appbar-main">
      <CssBaseline />
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Toolbar />
        <List disablePadding className="drawer">
          <ListItem button>
            <ListItemText primary="First Item" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Second Item" />
          </ListItem>
        </List>
      </Drawer>
      <div className="appbar">
        <AppBar position="fixed" color="transparent">
          <Toolbar>
            <div className="div-first">
              <IconButton
                edge="start"
                className="menuButton"
                color="inherit"
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h5">fundooNotes</Typography>
            </div>
            <div className="search-icon">
              <div className="searchIcon">
                <SearchIcon />
                <InputBase placeholder="Search.." className="input-search" />
              </div>
            </div>
            <div className="icons-div">
              <RefreshIcon />
              <ViewStreamIcon />
              <AppsIcon />
              <Avatar />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default withRouter(Appbar);
