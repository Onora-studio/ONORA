
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Sparkles, TrendingUp, Target, Zap, CheckCircle, HelpCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

const LocalPage = ({ cityData }) => {
  const { slug, cityName, region, description, offerings, faq, cta } = cityData;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `ONORA - Agence Growth & IA à ${cityName}`,
    "description": `Agence de croissance digitale et IA pour PME à ${cityName}. Services de création de site, SEO, automatisation et stratégie.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressRegion": region
    },
    "provider": { "@type": "Organization", "name": "ONORA" },
    "telephone": "+352 123 456 789",
    "url": `https://onora.studio/local/${slug}`
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const studios = [
    { name: 'Skriib', desc: 'Création & Tech', icon: Sparkles },
    { name: 'Hacking', desc: 'Growth & Acq.', icon: TrendingUp },
    { name: 'Siion', desc: 'Stratégie & Offre', icon: Target },
    { name: 'Cliip', desc: 'Contenu & Vidéo', icon: Zap },
  ];

  const whyUs = [
    "Approche sur-mesure",
    "Experts multidisciplinaires",
    "Focus sur le ROI",
    "Proximité et réactivité"
  ];

  return (
    <>
      <SEO
        title={`Agence Growth & IA à ${cityName}`}
        description={`ONORA, votre agence Growth & IA à ${cityName}. Experts en création de site, SEO, automatisation pour booster la croissance des PME locales.`}
        canonical={`/local/${slug}`}
        schemas={[localBusinessSchema, faqSchema]}
      />
      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs items={[{ label: 'Agences Locales', href: '#' }, { label: cityName }]} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="flex items-center gap-2 text-orange-500 mb-4 font-semibold"><MapPin className="w-5 h-5" /> Agence locale</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Agence Growth & IA à <span className="text-orange-500">{cityName}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl">
              {description}
            </p>
          </motion.div>
          
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Ce que ONORA vous apporte à {cityName}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {offerings.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-slate-900/70 border border-orange-500/10 rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Nos Studios à votre service</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              {studios.map((studio, index) => (
                <motion.div 
                  key={studio.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center border-2 border-orange-500/20">
                      <studio.icon className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{studio.name}</h3>
                  <p className="text-gray-400 text-sm">{studio.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Pourquoi travailler avec nous ?</h2>
              <p className="text-gray-400 mb-6">Nous ne sommes pas de simples exécutants. Nous sommes des partenaires stratégiques investis dans votre réussite, alliant expertise technique et compréhension fine de votre marché local.</p>
              <ul className="space-y-3">
                {whyUs.map((reason, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-lg">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img class="rounded-xl shadow-2xl shadow-orange-500/10" alt="Équipe ONORA en collaboration" src="https://images.unsplash.com/photo-1627599936744-51d288f89af4" />
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Questions fréquentes à {cityName}</h2>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <details key={index} className="bg-slate-900/70 border border-orange-500/10 rounded-lg p-6 group transition-all duration-300 open:bg-slate-900">
                  <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center list-none">
                    {item.question}
                    <HelpCircle className="w-6 h-6 text-orange-500 group-open:rotate-180 transition-transform duration-300" />
                  </summary>
                  <div className="pt-4 text-gray-400">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

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
            <a href="/contact">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-orange-500 text-white hover:bg-orange-600 h-12 px-8 group">
                {cta.buttonText}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default LocalPage;
