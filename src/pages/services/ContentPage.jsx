
import React from 'react';
import ServicePage from './ServicePage';
import servicesData from '@/data/services.json';

const ContentPage = () => {
  const service = servicesData.find(s => s.slug === 'contenu');
  return <ServicePage service={service} />;
};

export default ContentPage;
