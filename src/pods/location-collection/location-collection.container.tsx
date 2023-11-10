import * as React from 'react';

import { Pagination } from '@mui/material';

import {
  LocationCollectionComponent,
  getLocationCollection,
  getLocationTotalPages,
} from 'pods';

export const LocationCollectionContainer = () => {
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [locationList, setLocationList] = React.useState([]);

  const settingTotalPages = async () => {
    return setTotalPages(await getLocationTotalPages());
  };
  settingTotalPages();

  React.useEffect(() => {
    const gettingLocationList = async () => {
      return setLocationList(await getLocationCollection(page));
    };
    gettingLocationList();
  }, [page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <h3 style={{ display: 'flex', justifyContent: 'center' }}>
        Location collection
      </h3>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <LocationCollectionComponent locationList={locationList} />
      </div>

      <Pagination
        sx={{ m: '2rem', display: 'flex', justifyContent: 'center' }}
        count={totalPages}
        page={page}
        onChange={handleChange}
      />
    </>
  );
};
