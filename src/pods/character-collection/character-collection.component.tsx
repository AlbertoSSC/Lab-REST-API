import * as React from 'react';

import { CharacterEntityVm } from 'common';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { LoadingSkeleton } from 'common/components/loading-skeleton';

interface Props {
  characterList: CharacterEntityVm[] | CharacterEntityVm[][];
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterList } = props;

  return (
    <>
      {characterList && characterList.length !== 0 ? (
        <div className={classes.root}>
          <ul className={classes.list}>
            {characterList.map((character) => (
              <li key={character.id} style={{ display: 'flex' }}>
                <CharacterCard character={character} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <LoadingSkeleton />
      )}
    </>
  );
};
