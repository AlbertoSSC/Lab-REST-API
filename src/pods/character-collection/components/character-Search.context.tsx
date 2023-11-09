import { CharacterEntityVm } from 'common';
import React from 'react';

interface SearchCharacterContextModel {
  searchCharacter: CharacterEntityVm[][];
  setSearchCharacter: React.Dispatch<React.SetStateAction<CharacterEntityVm[][]>>;
}

export const SearchCharacterContext =
  React.createContext<SearchCharacterContextModel>(null);

interface Props {
  children: React.ReactNode;
}

export const SearchCharacterProvider: React.FC<Props> = (props) => {
  const [searchCharacter, setSearchCharacter] = React.useState([]);

  return (
    <SearchCharacterContext.Provider
      value={{ searchCharacter, setSearchCharacter }}
    >
      {props.children}
    </SearchCharacterContext.Provider>
  );
};
