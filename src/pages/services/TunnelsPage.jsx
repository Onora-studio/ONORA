
import React from 'react';
import ServicePage from './ServicePage';
import servicesData from '@/data/services.json';

const TunnelsPage = () => {
  const service = servicesData.find(s => s.slug === 'tunnels');
  return <ServicePage service={service} />;
};

export default TunnelsPage;
