
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
  Badge,
  InputBase,
  CssBaseline,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginRight: "auto",
    },
    content: {
      padding: theme.spacing(0),
    },
   drawer: {
       width:250,
   }
  }));

const SimpleDrawer = () => {
    const classes = useStyles();
    const [open, setOpen] =useState(false);
    return (
        <div>
          <CssBaseline />
          <Drawer open={open} onClose={() => setOpen(false)}>
            <List disablePadding className={classes.drawer}>
            <ListItem button>
                <ListItemText primary="First Item" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Second Item" />
            </ListItem>
        </List>
          </Drawer>
          <AppBar position="static" color="white">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Fundoo
              </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
         

            </Toolbar>
          </AppBar>
        </div>
      );
    };
    
export default SimpleDrawer;
