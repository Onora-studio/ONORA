
import React from 'react';
import LocalPage from './LocalPage';
import locationsData from '@/data/locations.json';

const EschPage = () => {
  const cityData = locationsData.find(loc => loc.slug === 'esch');
  return <LocalPage cityData={cityData} />;
};

export default EschPage;
