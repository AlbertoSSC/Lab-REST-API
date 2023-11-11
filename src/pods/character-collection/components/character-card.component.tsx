import React from 'react';

import { useNavigate } from 'react-router-dom';

import { css } from '@emotion/css';
import {
  Avatar,
  CardHeader,
  Card,
  Typography,
  CardContent,
} from '@mui/material';

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
      <CardContent>
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
              {character.name}
            </Typography>
            <Typography
              sx={{ m: '0.2rem 0rem' }}
              variant="body2"
              color="text.secondary"
            >
              <i>Status: </i>
              {character.status}
            </Typography>
          </div>

          <Avatar src={character.image} />
        </div>

        <Typography variant="body2" color="text.secondary">
          <i>Species: </i>
          {character.species}
        </Typography>
      </CardContent>
    </Card>
  );
};
