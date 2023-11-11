import React from 'react';

import * as classes from './app.layout.styles';

import { AppBar, Button, Toolbar } from '@mui/material/';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ justifyContent: 'center' }}>
          <Button sx={{ color: 'white' }} component={Link} to="/character">
            Characters
          </Button>
          <Button sx={{ color: 'white' }} component={Link} to="/location">
            Locations
          </Button>
          <Button sx={{ color: 'white' }} component={Link} to="/episode">
            Episodes
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
