
import React from 'react';
import ServicePage from './ServicePage';
import servicesData from '@/data/services.json';

const CreationSitePage = () => {
  const service = servicesData.find(s => s.slug === 'creation-site');
  return <ServicePage service={service} />;
};

export default CreationSitePage;
