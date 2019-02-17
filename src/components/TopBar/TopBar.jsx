import React from 'react';
import { Route, Link } from 'react-router-dom';

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

import Applications from '../../constants/applications';

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
  },
});

const TopBar = ({ classes }) => {
  const [sideMenuOpen, setSideMenuOpen] = React.useState(false);

  return (
      <>
          <AppBar
              className={classNames(classes.appBar, {
                [classes.appBarShift]: sideMenuOpen,
              })}
              position="fixed"
          >
              <Toolbar disableGutters={!sideMenuOpen}>
                  <IconButton
                      aria-label="Open drawer"
                      className={classNames(classes.menuButton, {
                        [classes.hide]: sideMenuOpen,
                      })}
                      color="inherit"
                      onClick={() => setSideMenuOpen(!sideMenuOpen)}
                  >
                      <MenuIcon />
                  </IconButton>
                  <Typography
                      color="inherit"
                      noWrap
                      variant="h6"
                  >
                    Current.ly
                  </Typography>
              </Toolbar>
          </AppBar>
          <Drawer
              classes={{
                  paper: classNames({
                    [classes.drawerOpen]: sideMenuOpen,
                    [classes.drawerClose]: !sideMenuOpen,
                  }),
                }}
              className={classNames(classes.drawer, {
                  [classes.drawerOpen]: sideMenuOpen,
                  [classes.drawerClose]: !sideMenuOpen,
                })}
              open={sideMenuOpen}
              variant="permanent"
          >
              <div className={classes.toolbar}>
                  <IconButton onClick={() => setSideMenuOpen(false)}>
                      <ChevronLeftIcon />
                  </IconButton>
              </div>
              <Divider />
              <List>
                  <Route children={({ location }) => Object.values(Applications).map(application => (
                      <Link
                          key={application.label}
                          to={application.route}
                      >
                          <ListItem button >
                              <img
                                  alt={application.label}
                                  height={35}
                                  src={application.logo}
                                  width={40}
                              />
                              <ListItemText primary={application.label} />
                          </ListItem>
                      </Link>
                  ))
                }
                  />

              </List>
          </Drawer>
      </>

  );
};

export default withStyles(styles)(TopBar);
