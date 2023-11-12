import React from 'react';

import { LinearProgress, Skeleton } from '@mui/material';

import { list } from 'common';

export const LoadingSkeleton = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <span>Cargando...</span>
        <LinearProgress sx={{ margin: '0.5rem' }} />
        <div className={list}>
          <Skeleton variant="rounded" width={328} height={120} />
          <Skeleton variant="rounded" width={328} height={120} />
          <Skeleton variant="rounded" width={328} height={120} />
          <Skeleton variant="rounded" width={328} height={120} />
          <Skeleton variant="rounded" width={328} height={120} />
          <Skeleton variant="rounded" width={328} height={120} />
          <Skeleton variant="rounded" width={328} height={120} />
          <Skeleton variant="rounded" width={328} height={120} />
          <Skeleton variant="rounded" width={328} height={120} />
        </div>
      </div>
    </>
  );
};
