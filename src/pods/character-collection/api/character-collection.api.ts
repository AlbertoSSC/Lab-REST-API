import axios from 'axios';

import { CharacterEntityApi } from 'common';

export const getCharacterCollection = async (
  page: number
): Promise<CharacterEntityApi[]> => {
  const response = await axios.get(
    process.env.API_RM_URL + `/character/?page=${page}`
  );
  return response.data.results;
};

export const getTotalPages = async (): Promise<number> => {
  const response = await axios.get(process.env.API_RM_URL + '/character/');
  return response.data.info.pages;
};
