import * as React from 'react';

import { getCharacterCollection } from './api';
import { mapFromApiToVm, mapToCollection, CharacterEntityVm } from 'common';
import { CharacterCollectionContext } from './components';

export const useCharacterCollection = () => {
  const { setCharacterCollection } = React.useContext(
    CharacterCollectionContext
  );

  const loadCharacterCollection = async (page: number) => {
    getCharacterCollection(page)
      .then((result) => mapToCollection(result, mapFromApiToVm))
      .then((result) => setCharacterCollection(result));
  };

  return { loadCharacterCollection };
  
};
