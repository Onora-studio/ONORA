
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Target, Zap, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';

const Studios = () => {
  const studios = [
    {
      name: 'Skriib',
      tagline: 'Ton site qui convertit',
      description: 'Création de sites web sur-mesure, branding percutant, funnels de conversion optimisés et automatisations no-code/IA pour digitaliser ton business.',
      icon: Sparkles,
      href: '/studios/skriib',
      color: 'from-orange-500 to-red-500',
      benefits: [
        'Sites web performants et SEO-friendly',
        'Identité visuelle unique',
        'Funnels de conversion optimisés',
        'Automatisations intelligentes'
      ]
    },
    {
      name: 'Hacking',
      tagline: 'Ta croissance accélérée',
      description: 'Stratégies d\'acquisition innovantes, growth hacking, création de contenu viral et campagnes publicitaires ROI-positives pour booster ta visibilité.',
      icon: TrendingUp,
      href: '/studios/hacking',
      color: 'from-orange-500 to-amber-500',
      benefits: [
        'Stratégies d\'acquisition testées',
        'Contenu viral et engageant',
        'Campagnes publicitaires optimisées',
        'Growth hacking sur-mesure'
      ]
    },
    {
      name: 'Siion',
      tagline: 'Ta stratégie gagnante',
      description: 'Positionnement stratégique, design d\'offres irrésistibles, business model innovant et conseil en transformation digitale pour structurer ta croissance.',
      icon: Target,
      href: '/studios/siion',
      color: 'from-orange-500 to-yellow-500',
      benefits: [
        'Positionnement différenciant',
        'Offres à forte valeur ajoutée',
        'Business design innovant',
        'Stratégie de croissance claire'
      ]
    },
    {
      name: 'Cliip',
      tagline: 'Ton contenu qui cartonne',
      description: 'Production de vidéos courtes percutantes, UGC authentique, montage professionnel et formats sociaux optimisés pour maximiser ton engagement.',
      icon: Zap,
      href: '/studios/cliip',
      color: 'from-orange-500 to-pink-500',
      benefits: [
        'Vidéos courtes impactantes',
        'UGC authentique et crédible',
        'Montage professionnel rapide',
        'Formats adaptés à chaque plateforme'
      ]
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": studios.map((studio, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": studio.name,
        "description": studio.description,
        "url": `https://onora.studio${studio.href}`
      }
    }))
  };

  return (
    <>
      <SEO
        title="Nos Studios - Skriib, Hacking, Siion, Cliip"
        description="Découvrez les 4 studios ONORA : Skriib (sites web), Hacking (growth), Siion (stratégie) et Cliip (vidéo). Expertise complète pour votre croissance digitale."
        canonical="/studios"
        schema={schema}
      />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: 'Studios' }]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nos Studios
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quatre expertises complémentaires, une seule mission : propulser ta croissance digitale avec des solutions concrètes et mesurables.
            </p>
          </motion.div>

          <div className="space-y-8">
            {studios.map((studio, index) => (
              <motion.div
                key={studio.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-8 md:p-12 hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${studio.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <studio.icon className="w-12 h-12 text-orange-500" />
                          <div>
                            <h2 className="text-3xl font-bold group-hover:text-orange-500 transition-colors">
                              {studio.name}
                            </h2>
                            <p className="text-orange-500 font-medium">{studio.tagline}</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                          {studio.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                          {studio.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                              <span className="text-gray-400 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        <Link to={studio.href}>
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white group/btn">
                            Découvrir {studio.name}
                            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center bg-slate-900/50 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Besoin d'une approche globale ?
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Nos studios travaillent en synergie pour créer des solutions complètes et cohérentes. Parlons de ton projet.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Démarrer un projet
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Studios;
