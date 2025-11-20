
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';

const ServicePage = ({ service }) => {
  const { title, slug, description, benefits, method, caseStudies, cta } = service;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "ONORA"
    },
    "serviceType": title,
    "url": `https://onora.studio/services/${slug}`,
    "areaServed": {
      "@type": "Country",
      "name": "LU"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical={`/services/${slug}`}
        schema={schema}
      />
      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs items={[{ label: 'Services', href: '#' }, { label: title }]} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl">
              {description}
            </p>
          </motion.div>
          
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Vos Avantages</h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-6 bg-slate-900/70 border border-orange-500/10 rounded-xl"
                >
                  <CheckCircle2 className="w-8 h-8 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Notre Méthode</h2>
            <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-orange-500/20 hidden md:block"></div>
                {method.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className={`flex md:items-center mb-12 flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                    >
                        <div className="flex-1 md:px-8">
                            <div className={`text-left ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <p className="text-sm text-orange-500 font-semibold mb-2">Étape {step.step}</p>
                                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-400">{step.description}</p>
                            </div>
                        </div>
                        <div className="w-16 h-16 bg-slate-900 border-2 border-orange-500/30 rounded-full flex items-center justify-center text-orange-500 font-bold text-xl my-4 md:my-0 flex-shrink-0 mx-auto md:mx-0">
                            {step.step}
                        </div>
                        <div className="flex-1 hidden md:block"></div>
                    </motion.div>
                ))}
            </div>
          </section>

          {caseStudies && caseStudies.length > 0 && (
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Études de Cas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 bg-slate-900/70 border border-orange-500/10 rounded-xl"
                  >
                    <Award className="w-8 h-8 text-orange-500 mb-3" />
                    <h3 className="text-lg font-semibold text-white">{study.title}</h3>
                    <p className="text-2xl font-bold text-orange-400 mt-2">{study.result}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-center bg-gradient-to-r from-orange-500/10 to-orange-500/0 border border-orange-500/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4">{cta.title}</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              {cta.description}
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white group text-lg px-8 py-6">
                {cta.buttonText}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
