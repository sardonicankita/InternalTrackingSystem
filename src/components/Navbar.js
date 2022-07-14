import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar:{
    backgroundColor: "#1c3983",
    alignItems: "Center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}> 
          <img className="PageLogo-img" src="https://cdn.corporate.walmart.com/12/9d/06ecf3584e91acccc37162f09714/logowhite.svg" alt="Walmart Homepage" height="28" />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
