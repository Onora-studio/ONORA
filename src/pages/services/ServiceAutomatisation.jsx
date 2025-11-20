
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Bot, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';

const ServiceAutomatisation = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automatisation, IA & No-Code",
    "description": "Libérez du temps, réduisez les erreurs et scalez votre business grâce à l'automatisation intelligente et aux outils no-code.",
    "provider": { "@type": "Organization", "name": "ONORA" },
    "serviceType": "Automation & No-Code Development",
    "areaServed": { "@type": "Country", "name": "LU" }
  };

  return (
    <>
      <SEO
        title="Service Automatisation, IA & No-Code"
        description="Agence d'automatisation pour PME. Optimisez vos processus, gagnez du temps et réduisez les coûts avec nos solutions d'automatisation, IA et no-code."
        canonical="/services/automatisation"
        schema={schema}
      />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs items={[{ label: 'Services' }, { label: 'Automatisation & IA' }]} />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold mb-6">
            Automatisation, IA & No-Code
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-xl text-gray-300 mb-12">
            Votre ressource la plus précieuse est le temps. Nous le multiplions en automatisant vos tâches répétitives pour que vous puissiez vous concentrer sur la croissance.
          </motion.p>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Vos Avantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: CheckCircle2, text: "Gain de temps massif pour vos équipes" },
                { icon: CheckCircle2, text: "Réduction drastique des erreurs humaines" },
                { iconce: CheckCircle2, text: "Processus scalables pour accompagner votre croissance" },
                { icon: CheckCircle2, text: "Meilleure expérience client grâce à des réponses rapides" },
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg">
                  <item.icon className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Nos Domaines d'Intervention</h2>
            <div className="space-y-8 border-l-2 border-orange-500/30 pl-8">
              {[
                { title: "Automatisation Marketing", description: "Séquences d'e-mails, lead nurturing, scoring... Nous créons des parcours clients personnalisés et automatisés." },
                { title: "Automatisation Commerciale", description: "Gestion des leads, suivi des opportunités, reporting. Votre CRM devient une machine de guerre." },
                { title: "Intégration d'IA", description: "Nous intégrons des intelligences artificielles pour optimiser vos processus, du service client à la création de contenu." },
                { title: "Workflows Opérationnels", description: "De la facturation à la gestion de projet, nous connectons vos outils pour créer des flux de travail fluides et sans friction." },
              ].map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative before:content-[''] before:absolute before:left-[-38px] before:top-1 before:w-4 before:h-4 before:bg-orange-500 before:rounded-full">
                  <h3 className="text-2xl font-bold text-orange-500 mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="text-center bg-slate-900/50 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Prêt à mettre votre business sur pilote automatique ?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Identifions ensemble les tâches qui freinent votre croissance et automatisons-les.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white group">
                Demander un audit d'automatisation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServiceAutomatisation;
