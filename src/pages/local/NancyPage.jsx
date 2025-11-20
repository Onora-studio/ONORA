
import React from 'react';
import LocalPage from './LocalPage';
import locationsData from '@/data/locations.json';

const NancyPage = () => {
  const cityData = locationsData.find(loc => loc.slug === 'nancy');
  return <LocalPage cityData={cityData} />;
};

export default NancyPage;
