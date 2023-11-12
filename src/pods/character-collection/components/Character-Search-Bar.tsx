import React from 'react';

import { Button, TextField } from '@mui/material';

import { SearchCharacterContext, paginateArray } from 'pods';
import {
  CharacterEntityApi,
  getRMCollection,
  mapFromApiToVm,
  mapToCollection,
} from 'common';

interface Props {
  setSearching: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchCharacterTotalPages: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}
export const SearchBar: React.FC<Props> = (props) => {
  const { totalPages, setSearchCharacterTotalPages, setSearching } = props;

  const { searchCharacter, setSearchCharacter } = React.useContext(
    SearchCharacterContext
  );

  const [wordToSearch, setWordToSearch] = React.useState('');
  const [searched, setSearched] = React.useState(false);
  const [inputErrorClass, setInputErrorClass] = React.useState(false);

  const handleReset = () => {
    setWordToSearch('');
    setSearchCharacter([]);
    setSearched(false);
    setSearching(false);

    const input = document.querySelector(
      "input[type='text']"
    ) as HTMLInputElement;
    input.value = '';
  };

  const handleSearchCharacter = async () => {
    const filteredChars = [];
    await setSearching(true);

    if (wordToSearch !== '') {
      for (let i = 1; i <= totalPages; i++) {
        const gettingChars = await getRMCollection(i, 'character')
          .then((result: CharacterEntityApi[]) =>
            mapToCollection(result, mapFromApiToVm)
          )
          .then((result) => {
            return result;
          });

        const searchedCharsPerPage = gettingChars.filter((c) => {
          return Object.values(c).some((value) => {
            return value
              ?.toString()
              .toLowerCase()
              .includes(wordToSearch.toLowerCase());
          });
        });

        filteredChars.push(...searchedCharsPerPage);
      }

      setSearchCharacter(
        paginateArray(filteredChars, setSearchCharacterTotalPages)
      );
    } else {
      setSearched(false);
    }
    setSearching(false);
    setSearched(true);

    filteredChars.length === 0
      ? setInputErrorClass(true)
      : setInputErrorClass(false);
  };

  return (
    <>
      <div style={{ marginBottom: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1rem',
          }}
          className="searchBarContainer"
        >
          {!inputErrorClass ? (
            <TextField
              size="small"
              label="Introduzca su búsqueda"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setWordToSearch(event.target.value);
              }}
            ></TextField>
          ) : (
            <TextField
              error
              size="small"
              defaultValue={wordToSearch}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setWordToSearch(event.target.value);
              }}
            ></TextField>
          )}
          <Button variant="outlined" onClick={handleSearchCharacter}>
            Search
          </Button>
          <Button variant="outlined" onClick={handleReset}>
            Reset
          </Button>
        </div>
        {searched && searchCharacter.length === 0 && (
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              color: 'lightcoral',
              marginBottom: '0',
            }}
          >
            No hemos encontrado la búsqueda
          </p>
        )}
      </div>
    </>
  );
};
