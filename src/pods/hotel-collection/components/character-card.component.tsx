import React from 'react';

import { useNavigate } from 'react-router-dom';

import { css } from '@emotion/css';
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

  const cardStyles = css`
    flex: 1;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e3f2fd;
    }
  `;
  return (
    <Card className={cardStyles} onClick={() => navigateToDetail(character.id)}>
      <CardHeader
        avatar={<Avatar aria-label="Character" src={character.image} />}
        title={character.name}
        subheader={`Status: ${character.status}`}
      />
    </Card>
  );
};
