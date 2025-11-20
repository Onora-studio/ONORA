
import React from 'react';
import ServicePage from './ServicePage';
import servicesData from '@/data/services.json';

const StrategyPage = () => {
  const service = servicesData.find(s => s.slug === 'strategie');
  return <ServicePage service={service} />;
};

export default StrategyPage;
