import axios from 'axios';

import { LocationEntityApi } from 'common';

export const getLocationCollection = async (
  page: number
): Promise<LocationEntityApi[]> => {
  const response = await axios.get(
    process.env.API_RM_URL + `/location?page=${page}`
  );
  return response.data.results;
};

export const getLocationTotalPages = async (): Promise<number> => {
  const response = await axios.get(process.env.API_RM_URL + '/location/');
  return response.data.info.pages;
};
