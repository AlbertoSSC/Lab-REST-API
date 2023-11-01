import * as React from 'react';

import {
  Divider,
  Avatar,
  Typography,
  CardContent,
  CardHeader,
  Card,
} from '@mui/material';

import { linkRoutes } from 'core/router';
import { useNavigate } from 'react-router-dom';

import * as classes from './character-card.styles';
import { CharacterEntityVm } from '../../../common/models/character.vm';

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
      <Divider />
      <CardContent>
        <div className={classes.content}>
          <Typography sx={{ fontStyle: 'oblique' }} gutterBottom>
            {character.species}, {character.gender}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Location: <br />· {character.location}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Origin: <br />· {character.origin}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
