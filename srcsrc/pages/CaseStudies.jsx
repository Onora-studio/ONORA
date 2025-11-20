
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Zap, Sparkles, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const studies = [
    {
      client: "E-commerce Premium",
      industry: "Mode & Luxe",
      challenge: "Augmenter le taux de conversion et le panier moyen d'un site Shopify.",
      solution: "Refonte du tunnel de vente, mise en place d'upsells intelligents et d'une stratégie de relance par email automatisée.",
      results: "+40% de taux de conversion, +25% de panier moyen.",
      studio: "Skriib & Tunnels",
      icon: Sparkles
    },
    {
      client: "Cabinet de Conseil B2B",
      industry: "Services aux entreprises",
      challenge: "Générer des leads qualifiés de manière prévisible.",
      solution: "Création d'un livre blanc premium, d'une landing page optimisée et d'une campagne de pub LinkedIn ciblée.",
      results: "150+ leads qualifiés en 3 mois, coût par lead divisé par 2.",
      studio: "Hacking",
      icon: TrendingUp
    },
    {
      client: "Artisan Local",
      industry: "Bâtiment",
      challenge: "Dominer la visibilité locale face à la concurrence.",
      solution: "Optimisation complète du SEO local (Google Business Profile, citations, contenu géolocalisé) et campagne Google Ads locale.",
      results: "Top 3 sur les mots-clés stratégiques, +200% d'appels entrants via Google.",
      studio: "Siion & SEO",
      icon: Target
    },
    {
      client: "Startup SaaS",
      industry: "Technologie",
      challenge: "Booster la notoriété et l'engagement sur les réseaux sociaux.",
      solution: "Lancement d'une stratégie de contenu vidéo courte (Reels/TikToks) avec un mix de formats éducatifs et divertissants.",
      results: "+500% de portée en 6 mois, taux d'engagement de 8%.",
      studio: "Cliip",
      icon: Zap
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Études de Cas ONORA",
    "itemListElement": studies.map((study, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "name": `Étude de cas : ${study.client}`,
        "abstract": study.challenge
      }
    }))
  };

  return (
    <>
      <SEO
        title="Études de Cas - Nos résultats"
        description="Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs de croissance grâce à nos expertises en création de site, SEO, et stratégie digitale."
        canonical="/case-studies"
        schema={schema}
      />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: 'Études de Cas' }]} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nos Résultats</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Les stratégies sont belles, mais les résultats sont rois. Découvrez comment nous transformons les défis de nos clients en succès mesurables.
            </p>
          </motion.div>

          <div className="space-y-12">
            {studies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-3 mb-4">
                      <study.icon className="w-8 h-8 text-orange-500" />
                      <h2 className="text-2xl font-bold">{study.client}</h2>
                    </div>
                    <p className="text-gray-400">{study.industry}</p>
                    <span className="inline-block mt-4 bg-orange-500/10 text-orange-500 text-sm font-medium px-3 py-1 rounded-full">
                      Studio : {study.studio}
                    </span>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="font-semibold text-lg mb-2">Le Défi</h3>
                    <p className="text-gray-400 mb-6">{study.challenge}</p>
                    <h3 className="font-semibold text-lg mb-2">La Solution</h3>
                    <p className="text-gray-400 mb-6">{study.solution}</p>
                    <h3 className="font-semibold text-lg mb-2 text-orange-500">Les Résultats</h3>
                    <p className="text-white font-bold text-xl">{study.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 text-center bg-slate-900/50 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Prêt à être notre prochaine success story ?</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Chaque success story commence par une simple conversation. Parlons de vos objectifs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Démarrer mon projet
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
