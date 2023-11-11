import axios from 'axios';

import { CharacterEntityApi } from 'common';

export const getCharacter = async (i: number): Promise<CharacterEntityApi> => {
  const id = i.toString();
  const response = await axios.get(
    process.env.API_RM_URL + `/character/${id}`
  );
  return response.data;
};
