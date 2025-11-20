
import React from 'react';
import LocalPage from './LocalPage';
import locationsData from '@/data/locations.json';

const LillePage = () => {
  const cityData = locationsData.find(loc => loc.slug === 'lille');
  return <LocalPage cityData={cityData} />;
};

export default LillePage;
