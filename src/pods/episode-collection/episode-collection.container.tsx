import * as React from 'react';

import { Pagination } from '@mui/material';

import {
  EpisodeCollectionComponent,
  getEpisodeCollection,
  getEpisodeTotalPages,
} from 'pods';

import episodeImage from 'assets/images/RMtext/episodes.png';


export const EpisodeCollectionContainer = () => {
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [episodeList, setEpisodeList] = React.useState([]);

  const settingTotalPages = async () => {
    return setTotalPages(await getEpisodeTotalPages());
  };
  settingTotalPages();

  React.useEffect(() => {
    const gettingEpisodeList = async () => {
      return setEpisodeList(await getEpisodeCollection(page));
    };
    gettingEpisodeList();
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
        <img src={episodeImage} width="200px"/>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <EpisodeCollectionComponent episodeList={episodeList} />
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
