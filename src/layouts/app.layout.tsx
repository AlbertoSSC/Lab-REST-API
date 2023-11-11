import React from 'react';

import { NavLink } from 'react-router-dom';

import { AppBar, Toolbar } from '@mui/material/';

import * as classes from './app.layout.styles';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ justifyContent: 'center' }}>
          <NavLink
            to="/character"
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.inactiveLink
            }
          >
            CHARACTERS
          </NavLink>
          <NavLink
            to="/location"
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.inactiveLink
            }
          >
            LOCATIONS
          </NavLink>
          <NavLink
            to="/episode"
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.inactiveLink
            }
          >
            EPISODES
          </NavLink>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
