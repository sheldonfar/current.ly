import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles';

import './App.css';
import TopBar from './components/TopBar';
import Applications from './constants/applications'

const DEFAULT_APPLICATION = Applications.wykop

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <CssBaseline>
        <TopBar></TopBar>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
          {Object.values(Applications).map(application => (
            <Route component={application.component} key={`app-${application.route}`} path={`${application.route}/`}>
            </Route>
          ))}
          <Redirect to={DEFAULT_APPLICATION.route}></Redirect>
        </Switch>
        </main>
      </CssBaseline>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
