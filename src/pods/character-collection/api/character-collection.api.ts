import axios from 'axios';

import { CharacterEntityApi } from '../../../common/models/character.api-model';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const response = await axios.get('https://rickandmortyapi.com/api/character');
  return response.data.results;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  let characterCollection = await getCharacterCollection();
  characterCollection = characterCollection.filter((c) => c.id !== id);
  return true;
};
