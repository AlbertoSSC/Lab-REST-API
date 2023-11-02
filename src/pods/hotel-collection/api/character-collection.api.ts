import axios from 'axios';

import { CharacterEntityApi } from 'common';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const response = await axios.get(process.env.API_BASE_URL + '/characters/');
  return response.data;
};
