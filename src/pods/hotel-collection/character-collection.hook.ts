import * as React from 'react';

import { getCharacterCollection } from './api';
import { mapFromApiToVm, mapToCollection, CharacterEntityVm } from 'common';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);

  const loadCharacterCollection = () => {
    getCharacterCollection()
      .then((result) => mapToCollection(result, mapFromApiToVm))
      .then((result) => setCharacterCollection(result));
  };

  return { characterCollection, loadCharacterCollection };
};
