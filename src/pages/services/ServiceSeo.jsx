
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, FileText, Link2, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';

const ServiceSeo = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO & Croissance Organique",
    "description": "Augmentez votre visibilité sur Google et générez un flux constant de prospects qualifiés grâce à nos stratégies de SEO sur-mesure.",
    "provider": { "@type": "Organization", "name": "ONORA" },
    "serviceType": "Search Engine Optimization",
    "areaServed": { "@type": "Country", "name": "LU" }
  };

  return (
    <>
      <SEO
        title="Service SEO & Croissance Organique"
        description="Agence SEO au Luxembourg. Augmentez votre trafic organique et vos conversions avec nos stratégies de référencement naturel, contenu et netlinking."
        canonical="/services/seo"
        schema={schema}
      />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs items={[{ label: 'Services' }, { label: 'SEO & Croissance Organique' }]} />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold mb-6">
            SEO & Croissance Organique
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-xl text-gray-300 mb-12">
            Être premier sur Google n'est pas une vanité, c'est une stratégie. Nous transformons votre site en un aimant à clients qualifiés grâce à un SEO durable et efficace.
          </motion.p>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Vos Avantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: CheckCircle2, text: "Trafic qualifié et constant sur votre site" },
                { icon: CheckCircle2, text: "Domination des positions sur vos mots-clés stratégiques" },
                { icon: CheckCircle2, text: "Augmentation durable de vos prospects et ventes" },
                { icon: CheckCircle2, text: "Autorité et crédibilité renforcées dans votre secteur" },
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg">
                  <item.icon className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Nos Piliers SEO</h2>
            <div className="space-y-8 border-l-2 border-orange-500/30 pl-8">
              {[
                { title: "Audit Technique & Stratégique", description: "Analyse complète de votre site et de votre marché pour identifier les opportunités et les freins à votre croissance." },
                { title: "Stratégie de Contenu", description: "Création de contenus à forte valeur ajoutée qui répondent aux intentions de recherche de votre audience et attirent des liens." },
                { title: "Optimisation On-Page", description: "Optimisation de chaque page de votre site (structure, balises, maillage interne) pour maximiser leur pertinence." },
                { title: "Netlinking & Autorité", description: "Développement d'un profil de liens de qualité pour renforcer l'autorité de votre domaine et la confiance de Google." },
              ].map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative before:content-[''] before:absolute before:left-[-38px] before:top-1 before:w-4 before:h-4 before:bg-orange-500 before:rounded-full">
                  <h3 className="text-2xl font-bold text-orange-500 mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="text-center bg-slate-900/50 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Prêt à dominer les résultats de recherche ?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Obtenez un audit SEO gratuit et découvrez le potentiel inexploité de votre site.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white group">
                Demander mon audit SEO
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServiceSeo;
