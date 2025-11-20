
import React from 'react';
import LocalPage from './LocalPage';
import locationsData from '@/data/locations.json';

const LuxembourgPage = () => {
  const cityData = locationsData.find(loc => loc.slug === 'luxembourg');
  return <LocalPage cityData={cityData} />;
};

export default LuxembourgPage;
