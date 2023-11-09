import React from 'react';

import { Link } from 'react-router-dom';

import { Avatar, Button, Card, Divider, Typography } from '@mui/material';

import { CharacterEntityVm } from 'common';
import { styles } from './components';

interface Props {
  character: CharacterEntityVm;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  if (character)
    return (
      <>
        <div style={styles.detailCardContainer}>
          <Card sx={styles.cardContainer}>
            <h1>{character.name}</h1>
            <Avatar
              src={character.image}
              alt="avatar image"
              sx={styles.avatar}
            />
            <Typography>
              <b>
                {character.status} · {character.species} · {character.gender}{' '}
              </b>
            </Typography>

            <Typography>
              <i>Org.:</i> {character.origin}
            </Typography>
            <Typography>
              <i>Loc.:</i> {character.location}
            </Typography>

            <Divider sx={{ width: '100%', marginBottom: '0.5rem' }} />

            <Button
              variant="outlined"
              sx={{ width: '100%', marginTop: '1rem' }}
              component={Link}
              to="/"
            >
              Volver
            </Button>
          </Card>
        </div>
      </>
    );
};
