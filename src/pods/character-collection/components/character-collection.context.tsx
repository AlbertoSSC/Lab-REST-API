import { CharacterEntityVm } from 'common';
import React from 'react';

interface CharacterCollectionContextModel {
  characterCollection: CharacterEntityVm[];
  setCharacterCollection: React.Dispatch<
    React.SetStateAction<CharacterEntityVm[]>
  >;
}

export const CharacterCollectionContext =
  React.createContext<CharacterCollectionContextModel>(null);

interface Props {
  children: React.ReactNode;
}

export const CharacterCollectionProvider: React.FC<Props> = (props) => {
  const [characterCollection, setCharacterCollection] = React.useState([]);

  return (
    <CharacterCollectionContext.Provider
      value={{ characterCollection, setCharacterCollection }}
    >
      {props.children}
    </CharacterCollectionContext.Provider>
  );
};
