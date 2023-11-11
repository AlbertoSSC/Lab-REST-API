import React from 'react';

import { Link } from 'react-router-dom';

import { Button, Card, CardHeader } from '@mui/material';

import { CharacterEntityVm } from 'common/models';

interface Props {
  character: CharacterEntityVm;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  if (character)
    return (
      <>
        <div
          className="detailCardContainer"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '400px',
            }}
          >
            <h1>{character.name}</h1>
            <img src={character.image} alt="avatar image" />
            <CardHeader title={character.status} />
            <CardHeader title={character.species} />
            <CardHeader title={character.gender} />
            <CardHeader title={character.origin} />
            <CardHeader title={character.location} />
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
