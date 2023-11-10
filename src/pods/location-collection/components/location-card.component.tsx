import React from 'react';

import { css } from '@emotion/css';
import { Card, CardContent, Typography, Divider } from '@mui/material';

import { LocationEntityVm } from 'common';
import { ImageMapping } from './Image-mapping';

interface Props {
  location: LocationEntityVm;
}

export const LocationCard: React.FC<Props> = (props) => {
  const { location } = props;

  const cardStyles = css`
    flex: 1;
  `;

  return (
    <Card className={cardStyles}>
      <CardContent >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Typography
              variant="body1"
              color="text.secondary"
              gutterBottom
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {location.name}
            </Typography>
            <Typography
              sx={{ m: '0.2rem 0rem' }}
              variant="body2"
              color="text.secondary"
            >
              <i>Type: </i>
              {location.type}
            </Typography>
          </div>

          <ImageMapping type={location.type} />
        </div>

        <Typography variant="body2" color="text.secondary">
          <i>Loc.: </i>
          {location.dimension}
        </Typography>
      </CardContent>
    </Card>
  );
};
