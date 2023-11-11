import * as React from 'react';

import { Pagination } from '@mui/material';

import {
  LocationCollectionComponent,
  getLocationCollection,
  getLocationTotalPages,
} from 'pods';

import locationImage from 'assets/images/RMtext/locations.png';

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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}
      >
        <img src={locationImage} width="200px"/>
      </div>

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
