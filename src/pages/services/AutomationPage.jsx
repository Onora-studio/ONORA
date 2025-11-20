
import React from 'react';
import ServicePage from './ServicePage';
import servicesData from '@/data/services.json';

const AutomationPage = () => {
  const service = servicesData.find(s => s.slug === 'automatisation');
  return <ServicePage service={service} />;
};

export default AutomationPage;
