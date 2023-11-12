import * as React from 'react';

import {
  mapFromApiToVm,
  mapToCollection,
  getRMCollection,
  CharacterEntityApi,
} from 'common';
import { CharacterCollectionContext } from './components';

export const useCharacterCollection = () => {
  const { setCharacterCollection } = React.useContext(
    CharacterCollectionContext
  );

  const loadCharacterCollection = async (page: number) => {
    getRMCollection(page, 'character')
      .then((result: CharacterEntityApi[]) =>
        mapToCollection(result, mapFromApiToVm)
      )
      .then((result) => setCharacterCollection(result));
  };

  return { loadCharacterCollection };
};
