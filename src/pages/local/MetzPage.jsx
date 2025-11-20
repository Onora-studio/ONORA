
import React from 'react';
import LocalPage from './LocalPage';
import locationsData from '@/data/locations.json';

const MetzPage = () => {
  const cityData = locationsData.find(loc => loc.slug === 'metz');
  return <LocalPage cityData={cityData} />;
};

export default MetzPage;
