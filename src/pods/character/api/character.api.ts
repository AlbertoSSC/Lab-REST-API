import axios from 'axios';

import { CharacterEntityApi } from 'common/models';

export const getCharacter = async (i: number): Promise<CharacterEntityApi> => {
  const id = i.toString();
  const response = await axios.get(
    process.env.API_BASE_URL + `/characters/${id}`
  );
  return response.data;
};
