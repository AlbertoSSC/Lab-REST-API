import axios from 'axios';

import { EpisodeEntityApi } from 'common';

export const getEpisodeCollection = async (
  page: number
): Promise<EpisodeEntityApi[]> => {
  const response = await axios.get(
    process.env.API_RM_URL + `/episode?page=${page}`
  );
  return response.data.results;
};

export const getEpisodeTotalPages = async (): Promise<number> => {
  const response = await axios.get(process.env.API_RM_URL + '/episode/');
  return response.data.info.pages;
};
