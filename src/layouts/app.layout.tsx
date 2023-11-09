import React from 'react';

import * as classes from './app.layout.styles';

import { AppBar, Toolbar } from '@mui/material/';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense"></Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
