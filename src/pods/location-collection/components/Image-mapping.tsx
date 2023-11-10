import React from 'react';

import planetImage from '../../../images/planet.png';
import spaceStationImage from '../../../images/spaceStation.png';
import unknownImage from '../../../images/unknown.png';
import clusterImage from '../../../images/cluster.png';
import dreamImage from '../../../images/dream.png';
import fantasyImage from '../../../images/fantasy.png';

import generic from '../../../images/generic.png';

const typeToImage = {
  planet: planetImage,
  spaceStation: spaceStationImage,
  unknown: unknownImage,
  cluster: clusterImage,
  dream: dreamImage,
  fantasy: fantasyImage,
};

const YourComponent = ({ type }) => {
  const imageUrl = typeToImage[type] || generic;

  return <img src={imageUrl} alt={`Image: ${type}`} />;
};

export default YourComponent;
