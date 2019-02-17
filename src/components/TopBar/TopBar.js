import React from 'react';
import { Route, Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Applications from '../../constants/applications'

const drawerWidth = 150;

const styles = theme => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing.unit * 7 + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 9 + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    }
  });

const TopBar = (props) => {
    const [sideMenuOpen, setSideMenuOpen] = React.useState(false)

    const { classes } = props;

    return (
        <>
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: sideMenuOpen,
          })}
        >
          <Toolbar disableGutters={!sideMenuOpen}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => setSideMenuOpen(!sideMenuOpen)}
              className={classNames(classes.menuButton, {
                [classes.hide]: sideMenuOpen,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Current.ly
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: sideMenuOpen,
            [classes.drawerClose]: !sideMenuOpen,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: sideMenuOpen,
              [classes.drawerClose]: !sideMenuOpen,
            }),
          }}
          open={sideMenuOpen}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={() => setSideMenuOpen(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
              <Route children={({ location }) => 
              Object.values(Applications).map(application => (
                <Link to={application.route} key={application.label}>
                    <ListItem button >
                        <img src={application.logo} width={40} height={35} alt={application.label} />
                        <ListItemText primary={application.label} />
                    </ListItem>
                </Link>
            ))
                }/>
            
          </List>
        </Drawer>
        </>
       
    );
};

export default withStyles(styles)(TopBar);