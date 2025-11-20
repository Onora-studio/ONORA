
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, Target, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';

const ServiceStrategie = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Stratégie & Positionnement",
    "description": "Définissez une trajectoire de croissance claire avec une stratégie digitale sur-mesure, un positionnement différenciant et des offres irrésistibles.",
    "provider": { "@type": "Organization", "name": "ONORA" },
    "serviceType": "Business Strategy Consulting",
    "areaServed": { "@type": "Country", "name": "LU" }
  };

  return (
    <>
      <SEO
        title="Service Stratégie & Positionnement"
        description="Conseil en stratégie digitale pour PME. Définissez votre positionnement, vos offres et votre roadmap de croissance pour dominer votre marché."
        canonical="/services/strategie"
        schema={schema}
      />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs items={[{ label: 'Services' }, { label: 'Stratégie & Positionnement' }]} />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold mb-6">
            Stratégie & Positionnement
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-xl text-gray-300 mb-12">
            Le succès n'est pas un accident. C'est le résultat d'une stratégie claire. Nous vous aidons à construire la vôtre pour une croissance durable et rentable.
          </motion.p>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Vos Avantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: CheckCircle2, text: "Une vision claire et une roadmap actionnable" },
                { icon: CheckCircle2, text: "Un positionnement unique qui vous démarque" },
                { icon: CheckCircle2, text: "Des offres qui répondent parfaitement aux besoins du marché" },
                { icon: CheckCircle2, text: "Une allocation optimisée de vos ressources et budgets" },
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg">
                  <item.icon className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Notre Processus Stratégique</h2>
            <div className="space-y-8 border-l-2 border-orange-500/30 pl-8">
              {[
                { title: "Diagnostic 360°", description: "Nous auditons votre business, votre marché et votre concurrence pour établir un diagnostic complet et identifier les axes de croissance." },
                { title: "Définition du Positionnement", description: "Ensemble, nous définissons votre 'Brand DNA' : mission, vision, valeurs, et proposition de valeur unique." },
                { title: "Design d'Offres", description: "Nous structurons ou restructurons vos offres pour maximiser la valeur perçue, la rentabilité et la scalabilité." },
                { title: "Roadmap de Croissance", description: "Nous élaborons un plan d'action trimestriel avec des objectifs clairs, des KPIs et des initiatives priorisées." },
              ].map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative before:content-[''] before:absolute before:left-[-38px] before:top-1 before:w-4 before:h-4 before:bg-orange-500 before:rounded-full">
                  <h3 className="text-2xl font-bold text-orange-500 mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="text-center bg-slate-900/50 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Prêt à construire votre avenir ?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              La meilleure stratégie est celle que l'on exécute. Commençons par définir la vôtre.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white group">
                Planifier un workshop stratégique
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServiceStrategie;
