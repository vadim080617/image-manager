import React from 'react';
import { Link } from 'react-router-dom';

import makeStyles from '@material-ui/core/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

interface Props {
    children: React.ReactNode;
}

const useStyles = makeStyles(styles);

export const DashboardLayout = ({ children }: Props) => {
    const classes = useStyles();

    return <>
            <CssBaseline />
            <AppBar position="relative">
      <Toolbar>
        <CameraIcon className={classes.icon} />
        <Link to="/" className={classes.link} >
          <Typography variant="h6" color="inherit" noWrap>
            Image Manager
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
    <main>
        {children}
    </main>
    <footer className={classes.footer}>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Image manager, 2020
      </Typography>
    </footer>
    </>
}