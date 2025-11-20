
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, DollarSign, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';

const ServiceTunnels = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tunnels de Vente & Conversion",
    "description": "Transformez vos visiteurs en clients fidèles grâce à des tunnels de vente optimisés qui guident, persuadent et convertissent.",
    "provider": { "@type": "Organization", "name": "ONORA" },
    "serviceType": "Conversion Rate Optimization",
    "areaServed": { "@type": "Country", "name": "LU" }
  };

  return (
    <>
      <SEO
        title="Service Tunnels de Vente & Conversion"
        description="Création de tunnels de vente à haute conversion. Augmentez vos ventes, qualifiez vos prospects et maximisez votre ROI avec des funnels optimisés."
        canonical="/services/tunnels"
        schema={schema}
      />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs items={[{ label: 'Services' }, { label: 'Tunnels de Vente' }]} />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold mb-6">
            Tunnels de Vente & Conversion
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-xl text-gray-300 mb-12">
            Ne laissez plus vos visiteurs se perdre. Nous construisons des parcours clients qui transforment l'intérêt en action, et l'action en revenu.
          </motion.p>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Vos Avantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: CheckCircle2, text: "Augmentation significative du taux de conversion" },
                { icon: CheckCircle2, text: "Automatisation de la qualification de leads" },
                { icon: CheckCircle2, text: "Maximisation de la valeur vie client (LTV)" },
                { icon: CheckCircle2, text: "ROI prévisible et scalable de vos campagnes" },
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg">
                  <item.icon className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Notre Approche</h2>
            <div className="space-y-8 border-l-2 border-orange-500/30 pl-8">
              {[
                { title: "Cartographie du Parcours Client", description: "Nous analysons le comportement de vos clients pour concevoir un tunnel qui correspond à leur psychologie d'achat." },
                { title: "Copywriting & Offre Irrésistible", description: "Nous créons des messages percutants et structurons votre offre pour la rendre irrésistible à chaque étape du funnel." },
                { title: "Implémentation Technique", description: "Nous construisons le tunnel avec les meilleurs outils (landing pages, emails, paiements) pour une expérience fluide." },
                { title: "Optimisation Continue (CRO)", description: "Nous analysons les données et menons des A/B tests pour améliorer constamment les performances de votre tunnel." },
              ].map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative before:content-[''] before:absolute before:left-[-38px] before:top-1 before:w-4 before:h-4 before:bg-orange-500 before:rounded-full">
                  <h3 className="text-2xl font-bold text-orange-500 mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="text-center bg-slate-900/50 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Prêt à transformer vos visiteurs en clients ?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Discutons de votre processus de vente actuel et construisons un tunnel qui travaille pour vous 24/7.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white group">
                Planifier une session stratégique
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServiceTunnels;
