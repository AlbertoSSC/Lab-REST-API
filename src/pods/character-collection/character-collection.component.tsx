import * as React from 'react';

import { CharacterEntityVm, LoadingSkeleton } from 'common';

import * as classes from '../../common/components/collection.styles';
import { CharacterCard } from './components/character-card.component';

interface Props {
  characterList: CharacterEntityVm[] | CharacterEntityVm[][];
}

export const CharacterCollectionComponent: React.FC<Props> = (props) => {
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
