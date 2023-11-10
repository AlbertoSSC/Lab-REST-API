import * as React from 'react';

import { LoadingSkeleton, LocationEntityVm } from 'common';

import * as classes from '../../common/components/collection.styles';
import { LocationCard } from './components';

interface Props {
  locationList: LocationEntityVm[];
}

export const LocationCollectionComponent: React.FC<Props> = (props) => {
  const { locationList } = props;

  return (
    <>
      {locationList ? (
        <div className={classes.root}>
          <ul className={classes.list}>
            {locationList.map((location) => (
              <li key={location.id} style={{ display: 'flex' }}>
                <LocationCard location={location} />
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
