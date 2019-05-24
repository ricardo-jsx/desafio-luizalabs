import React from 'react';
import ContentLoader from 'react-content-loader';
import { useMediaLayout } from 'use-media';

import { SmallLoader } from './MapsLoader.styled';

const MapsLoader = () => {
  const isWide = useMediaLayout({ minWidth: 500 });

  return isWide ? (
    <ContentLoader height={400} width={400} speed={2} primaryColor="#b6b6b6" secondaryColor="#c0bcbc">
      <rect data-testid="maps-rect" x="0" y="0" rx="0" ry="0" width="180" height="100" />
    </ContentLoader>
  ) : (
    <SmallLoader>The map is loading...</SmallLoader>
  );
};

export default MapsLoader;
