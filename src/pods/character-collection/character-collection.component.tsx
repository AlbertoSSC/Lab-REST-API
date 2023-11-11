import * as React from 'react';

import { CharacterEntityVm } from 'common';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  onEdit: (id: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onEdit } = props;

  return (
    <div className={classes.root}>
      <h3 style={{ display: 'flex', justifyContent: 'center' }}>
        R&M - Character collection
      </h3>

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id} style={{ display: 'flex' }}>
            <CharacterCard character={character} onEdit={onEdit} />
          </li>
        ))}
      </ul>
    </div>
  );
};
