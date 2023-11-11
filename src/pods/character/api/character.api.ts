import axios from 'axios';

import { CharacterEntityApi } from 'common/models';

export const getCharacter = async (id: number): Promise<CharacterEntityApi> => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${id.toString()}`
  );
  return response.data;
};

export const saveCharacter = async (
  character: CharacterEntityApi
): Promise<boolean> => {
  return true;
};
