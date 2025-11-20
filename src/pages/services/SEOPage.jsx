
import React from 'react';
import ServicePage from './ServicePage';
import servicesData from '@/data/services.json';

const SEOPage = () => {
  const service = servicesData.find(s => s.slug === 'seo');
  return <ServicePage service={service} />;
};

export default SEOPage;
