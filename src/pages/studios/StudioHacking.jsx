
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Megaphone, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';

const StudioHacking = () => {
  const services = [
    {
      icon: Target,
      title: 'Stratégies d\'acquisition',
      description: 'Growth hacking, canaux d\'acquisition testés et optimisation du funnel complet'
    },
    {
      icon: Megaphone,
      title: 'Campagnes publicitaires',
      description: 'Google Ads, Meta Ads, LinkedIn Ads avec focus ROI et performance mesurable'
    },
    {
      icon: BarChart3,
      title: 'Création de contenu',
      description: 'Contenu viral, storytelling engageant et stratégie éditoriale data-driven'
    },
    {
      icon: TrendingUp,
      title: 'Optimisation continue',
      description: 'A/B testing, analytics avancés et amélioration constante des performances'
    }
  ];

  const benefits = [
    'Stratégies testées et éprouvées',
    'ROI mesurable et transparent',
    'Acquisition multicanale',
    'Contenu viral et engageant',
    'Reporting détaillé mensuel',
    'Optimisation data-driven'
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hacking - Studio Growth et Acquisition",
    "description": "Stratégies d'acquisition, growth hacking, campagnes publicitaires et création de contenu pour accélérer votre croissance",
    "provider": {
      "@type": "Organization",
      "name": "ONORA"
    },
    "areaServed": ["LU", "FR", "BE"],
    "serviceType": "Growth Marketing & Acquisition"
  };

  return (
    <>
      <SEO
        title="Hacking - Studio Growth et Acquisition"
        description="Hacking accélère votre croissance avec des stratégies d'acquisition innovantes, du growth hacking et des campagnes publicitaires ROI-positives."
        canonical="/studios/hacking"
        schema={schema}
      />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumbs items={[
            { label: 'Studios', href: '/studios' },
            { label: 'Hacking' }
          ]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <TrendingUp className="w-16 h-16 text-orange-500" />
              <div>
                <h1 className="text-5xl md:text-6xl font-bold">Hacking</h1>
                <p className="text-xl text-orange-500 font-medium">Ta croissance accélérée</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              Hacking propulse ta visibilité et ton acquisition avec des stratégies growth innovantes, des campagnes publicitaires performantes et du contenu qui convertit.
            </p>
          </motion.div>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Nos expertises</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-orange-500/10 rounded-xl p-6 hover:border-orange-500/30 transition-all"
                >
                  <service.icon className="w-10 h-10 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Pourquoi choisir Hacking ?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Notre approche</h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Chez Hacking, nous croyons que la croissance n'est pas le fruit du hasard, mais d'une stratégie réfléchie et d'une exécution impeccable. Nous analysons ton marché, ta concurrence et ton audience pour identifier les leviers de croissance les plus efficaces.
                </p>
                <p className="text-lg leading-relaxed">
                  Notre méthodologie combine growth hacking, marketing de contenu et publicité payante pour créer un système d'acquisition scalable. Chaque action est mesurée, testée et optimisée pour maximiser ton ROI.
                </p>
                <p className="text-lg leading-relaxed">
                  Du lancement de campagnes virales à l'optimisation de tes tunnels de conversion, nous mettons en place les stratégies qui génèrent des résultats concrets et durables pour ton business.
                </p>
              </div>
            </div>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-slate-900/50 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Prêt à accélérer ta croissance ?
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Parlons de tes objectifs et mettons en place une stratégie d'acquisition qui génère des résultats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Démarrer un projet
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/10">
                  Voir nos résultats
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default StudioHacking;
