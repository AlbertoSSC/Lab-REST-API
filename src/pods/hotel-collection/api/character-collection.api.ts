import axios from 'axios';

import { CharacterEntityApi } from '../../../common/models/character.api-model';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const response = await axios.get('http://localhost:3000/characters');
  return response.data;
};