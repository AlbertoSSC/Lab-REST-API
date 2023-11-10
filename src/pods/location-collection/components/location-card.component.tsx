import React from 'react';

import { css } from '@emotion/css';
import { Card, CardContent, Typography, Divider } from '@mui/material';

import { LocationEntityVm } from 'common';

interface Props {
  location: LocationEntityVm;
}

export const LocationCard: React.FC<Props> = (props) => {
  const { location } = props;

  const cardStyles = css`
    flex: 1;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e3f2fd;
    }
  `;
  return (
    <Card className={cardStyles}>
      <CardContent>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {location.name}
          <img src=""/>
        </Typography>
        <Divider />
        <Typography
          sx={{ m: '0.2rem 0rem' }}
          variant="body2"
          color="text.secondary"
        >
          <i>Type: </i>
          {location.type}
        </Typography>
        <Typography sx={{ mb: 0.2 }} variant="body2" color="text.secondary">
          <i>Loc.: </i>
          {location.dimension}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <i>Num of residents: </i>
          {location.residents.length}
        </Typography>
      </CardContent>
    </Card>
  );
};
