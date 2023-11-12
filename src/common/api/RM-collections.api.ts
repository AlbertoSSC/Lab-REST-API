import axios from 'axios';

import {
  EpisodeEntityApi,
  LocationEntityApi,
  CharacterEntityApi,
} from 'common';

type Collection = 'character' | 'location' | 'episode';

type RMCollectionEntityApi =
  | EpisodeEntityApi[]
  | LocationEntityApi[]
  | CharacterEntityApi[];

export const getRMCollection = async (
  page: number,
  collection: Collection
): Promise<RMCollectionEntityApi> => {
  const response = await axios.get(
    process.env.API_RM_URL + `/${collection}?page=${page}`
  );
  return response.data.results;
};

export const getRMCollectionTotalPages = async (
  collection: Collection
): Promise<number> => {
  const response = await axios.get(process.env.API_RM_URL + `/${collection}/`);
  return response.data.info.pages;
};
