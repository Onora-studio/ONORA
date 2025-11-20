
import React from 'react';
import LocalPage from './LocalPage';
import locationsData from '@/data/locations.json';

const KirchbergPage = () => {
  const cityData = locationsData.find(loc => loc.slug === 'kirchberg');
  return <LocalPage cityData={cityData} />;
};

export default KirchbergPage;
