
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Edit3, Video, Share2, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';

const ServiceContenu = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Contenu & Distribution",
    "description": "Créez et distribuez du contenu qui attire, engage et convertit. Du blog à la vidéo, nous gérons votre stratégie de contenu de A à Z.",
    "provider": { "@type": "Organization", "name": "ONORA" },
    "serviceType": "Content Marketing",
    "areaServed": { "@type": "Country", "name": "LU" }
  };

  return (
    <>
      <SEO
        title="Service Contenu & Distribution"
        description="Stratégie de contenu pour PME. Création d'articles de blog, vidéos, réseaux sociaux. Nous gérons la production et la distribution pour maximiser votre impact."
        canonical="/services/contenu"
        schema={schema}
      />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs items={[{ label: 'Services' }, { label: 'Contenu & Distribution' }]} />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold mb-6">
            Contenu & Distribution
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-xl text-gray-300 mb-12">
            Le contenu est le carburant de votre marketing. Nous créons le carburant premium et le système de distribution qui propulse votre marque.
          </motion.p>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Vos Avantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: CheckCircle2, text: "Devenir une référence et une autorité sur votre marché" },
                { icon: CheckCircle2, text: "Générer un flux constant de trafic qualifié" },
                { icon: CheckCircle2, text: "Construire une audience engagée et fidèle" },
                { icon: CheckCircle2, text: "Alimenter vos tunnels de vente avec des prospects éduqués" },
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg">
                  <item.icon className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Notre Système de Contenu</h2>
            <div className="space-y-8 border-l-2 border-orange-500/30 pl-8">
              {[
                { title: "Stratégie Éditoriale", description: "Nous définissons vos piliers de contenu, vos formats et votre calendrier éditorial en fonction de vos objectifs et de votre audience." },
                { title: "Création Multi-formats", description: "Articles de blog, études de cas, vidéos courtes (Reels/TikToks), carrousels, newsletters... Nous produisons le contenu adapté." },
                { title: "Optimisation SEO", description: "Chaque contenu est méticuleusement optimisé pour le SEO afin de maximiser sa durée de vie et sa visibilité sur le long terme." },
                { title: "Distribution Intelligente", description: "Nous diffusons votre contenu sur les canaux pertinents (réseaux sociaux, email, communautés) pour maximiser sa portée et son impact." },
              ].map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative before:content-[''] before:absolute before:left-[-38px] before:top-1 before:w-4 before:h-4 before:bg-orange-500 before:rounded-full">
                  <h3 className="text-2xl font-bold text-orange-500 mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="text-center bg-slate-900/50 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Prêt à devenir la référence de votre secteur ?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Arrêtez de créer du contenu dans le vide. Construisons ensemble une machine à contenu qui génère des résultats.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white group">
                Planifier ma stratégie de contenu
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServiceContenu;
