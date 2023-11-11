import React from 'react';

import { css } from '@emotion/css';
import { Card, CardContent, Typography } from '@mui/material';

import { EpisodeEntityVm } from 'common';

interface Props {
  episode: EpisodeEntityVm;
}

export const EpisodeCard: React.FC<Props> = (props) => {
  const { episode } = props;

  const cardStyles = css`
    flex: 1;
  `;

  const episodeStyles = css`
    border-radius: 3rem;
    top: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background-color:  #e3f2fd;
    display: flex;
    align-items: center;
    height: 3rem;
  `;

  return (
    <Card className={cardStyles}>
      <CardContent>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div>
            <Typography
              variant="body1"
              color="text.secondary"
              gutterBottom
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingRight:"3.5rem"
              }}
            >
              {episode.name}
            </Typography>
            <Typography
              sx={{ m: '0.2rem 0rem' }}
              variant="body2"
              color="text.secondary"
            >
              <i>Count: </i>
              {episode.id}
            </Typography>
          </div>
          <div className={episodeStyles}>
            <Typography
              sx={{ m: '0.2rem 0rem' }}
              variant="body2"
              color="text.secondary"
            >
              {episode.episode}
            </Typography>
          </div>
        </div>

        <Typography variant="body2" color="text.secondary">
          <i>Loc.: </i>
          {episode.air_date}
        </Typography>
      </CardContent>
    </Card>
  );
};
