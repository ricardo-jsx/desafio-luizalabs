import React from 'react';
import ContentLoader from 'react-content-loader';
import { useMediaLayout } from 'use-media';

import { SmallLoader } from './MapsLoader.styled';

const MapsLoader = () => {
  const isWide = useMediaLayout({ minWidth: 500 });

  return isWide ? (
    <ContentLoader height={300} width={500} speed={2} primaryColor="#b6b6b6" secondaryColor="#c0bcbc" />
  ) : (
    <SmallLoader>The map is loading...</SmallLoader>
  );
};

export default MapsLoader;
