import * as React from 'react';

import { AppLayout } from 'layouts';
import {
  CharacterCollectionContainer,
  CharacterCollectionProvider,
} from 'pods';

export const CharacterCollectionScene = () => (
  <AppLayout>
    <CharacterCollectionProvider>
      <CharacterCollectionContainer />
    </CharacterCollectionProvider>
  </AppLayout>
);
