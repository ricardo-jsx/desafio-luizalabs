import React from 'react';
import ContentLoader from 'react-content-loader';
import { useMediaLayout } from 'use-media';

import { SmallLoader } from './MapsLoader.styled';

const MapsLoader = () => {
  const isWide = useMediaLayout({ minWidth: 500 });

  return isWide ? (
    <ContentLoader
      data-testid="maps-rect"
      height={300}
      width={500}
      speed={2}
      primaryColor="#e5e3df"
      secondaryColor="#f2f1ef"
    />
  ) : (
    <SmallLoader>The map is loading...</SmallLoader>
  );
};

export default MapsLoader;
