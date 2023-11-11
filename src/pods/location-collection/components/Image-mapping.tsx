import React from 'react';

import dreamImage from '@images/dream.png';
import fantasyImage from '@images/fantasy.png';
import planetImage from '@images/planet.png';
import clusterImage from '@images/planets-cluster.png';
import resortImage from '@images/resort.png';
import spaceImage from '@images/space-station.png';
import unknownImage from '@images/unknown.png';

import boxImage from '@images/box.png';
import diegesisImage from '@images/diegesis.png';
import dimensionImage from '@images/dimension.png';
import microImage from '@images/microverse.png';
import miniImage from '@images/miniversee.png';
import spacecraftImage from '@images/spacecraft.png';

import genericImage from '@images/generic.png';

const typeToImage = {
  Dream: dreamImage,
  Fantasy: fantasyImage,
  Planet: planetImage,
  Cluster: clusterImage,
  Resort: resortImage,
  'Space station': spaceImage,
  'Fantasy town': fantasyImage,
  unknown: unknownImage,
  Box: boxImage,
  Diegesis: diegesisImage,
  Dimension: dimensionImage,
  Microverse: microImage,
  Miniverse: miniImage,
  Spacecraft: spacecraftImage,
};

export const ImageMapping = ({ type }) => {
  const imageUrl = typeToImage[type] || genericImage;

  return (
    <img
      src={imageUrl}
      alt={`Image: ${type}`}
      style={{ width: '50px', height: '50px' }}
    />
  );
};
