import axios from 'axios';

import { CharacterEntityApi } from 'common/models';

export const getCharacter = async (id: number): Promise<CharacterEntityApi> => {
  const response = await axios.get(
    `http://localhost:3000/characters/${id.toString()}`
  );
  return response.data;
};