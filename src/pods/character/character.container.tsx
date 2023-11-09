import React from 'react';

import { useParams } from 'react-router-dom';

import * as api from './api';
import { CharacterComponent } from './character.component';
import { mapFromApiToVm, CharacterEntityVm } from 'common';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<CharacterEntityVm>();
  const { id } = useParams<{ id: string }>();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(parseInt(id));
    const mapCharacter = mapFromApiToVm(apiCharacter);
    setCharacter(mapCharacter);
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  return <CharacterComponent character={character} />;
};
