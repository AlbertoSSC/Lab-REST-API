import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Avatar, CardHeader, Card } from '@mui/material';

import { linkRoutes } from 'core';
import { CharacterEntityVm } from 'common';

interface Props {
  character: CharacterEntityVm;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  const navigate = useNavigate();

  const navigateToDetail = (id: number) => {
    navigate(linkRoutes.characterDetail(id));
  };

  return (
    <Card
      sx={{
        flex: 1,
        cursor: 'pointer',
        backgroundColor: 'transparent',
        transition: 'background-color 0.3s',
      }}
      onClick={() => navigateToDetail(character.id)}
    >
      <CardHeader
        avatar={<Avatar aria-label="Character" src={character.image} />}
        title={character.name}
        subheader={`Status: ${character.status}`}
      />
    </Card>
  );
};
