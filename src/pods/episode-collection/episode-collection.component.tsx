import * as React from 'react';

import { LoadingSkeleton, EpisodeEntityVm } from 'common';

import * as classes from '../../common/components/collection.styles';
import { EpisodeCard } from './components';

interface Props {
  episodeList: EpisodeEntityVm[];
}

export const EpisodeCollectionComponent: React.FC<Props> = (props) => {
  const { episodeList } = props;

  return (
    <>
      {episodeList && episodeList.length !== 0 ? (
        <div className={classes.root}>
          <ul className={classes.list}>
            {episodeList.map((episode) => (
              <li key={episode.id} style={{ display: 'flex' }}>
                <EpisodeCard episode={episode} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <LoadingSkeleton />
      )}
    </>
  );
};
