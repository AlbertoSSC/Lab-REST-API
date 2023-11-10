import * as React from 'react';

import { Pagination } from '@mui/material';

import { getTotalPages } from './api';
import {
  CharacterCollectionContext,
  SearchBar,
  SearchCharacterContext,
  useCharacterCollection,
  CharacterCollectionComponent,
} from 'pods';
import { LoadingSkeleton } from 'common';

export const CharacterCollectionContainer = () => {
  const { loadCharacterCollection } = useCharacterCollection();

  const { characterCollection } = React.useContext(CharacterCollectionContext);
  const { searchCharacter } = React.useContext(SearchCharacterContext);

  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [searchCharacterTotalPages, setSearchCharacterTotalPages] =
    React.useState(0);

  const [searching, setSearching] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  React.useEffect(() => {
    loadCharacterCollection(page);
  }, []);

  React.useEffect(() => {
    setSearchCharacterTotalPages(searchCharacter.length);
    setPage(1);
    setSearching(false);
  }, [searchCharacter]);

  React.useEffect(() => {
    if (searchCharacter.length === 0) {
      loadCharacterCollection(page);
    }
    const gettingTotalPages = async () => {
      return setTotalPages(await getTotalPages());
    };
    gettingTotalPages();
  }, [page]);

  return (
    <>
      <h3 style={{ display: 'flex', justifyContent: 'center' }}>
        Character collection
      </h3>
      <SearchBar
        setSearching={setSearching}
        setSearchCharacterTotalPages={setSearchCharacterTotalPages}
        totalPages={totalPages}
      />

      {searching ? (
        <LoadingSkeleton />
      ) : (
        <CharacterCollectionComponent
          characterList={
            searchCharacter.length === 0
              ? characterCollection
              : searchCharacter[page - 1]
          }
        />
      )}
      <Pagination
        sx={{ m: '2rem', display: 'flex', justifyContent: 'center' }}
        count={
          searchCharacter.length === 0 ? totalPages : searchCharacterTotalPages
        }
        page={page}
        onChange={handleChange}
      />
    </>
  );
};
