
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Code, Palette, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';

const StudioSkriib = () => {
  const services = [
    {
      icon: Code,
      title: 'Création de sites web',
      description: 'Sites vitrines, e-commerce, landing pages optimisées pour la conversion et le SEO'
    },
    {
      icon: Palette,
      title: 'Branding & Design',
      description: 'Identité visuelle unique, charte graphique, logo et supports de communication'
    },
    {
      icon: Zap,
      title: 'Automatisations',
      description: 'Workflows no-code/IA, intégrations, CRM et outils de productivité'
    },
    {
      icon: Sparkles,
      title: 'Funnels de conversion',
      description: 'Parcours client optimisés, pages de vente et systèmes de génération de leads'
    }
  ];

  const benefits = [
    'Sites web performants et rapides',
    'Design moderne et responsive',
    'Optimisation SEO intégrée',
    'Automatisations intelligentes',
    'Support et maintenance inclus',
    'Formation à la gestion autonome'
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Skriib - Studio de création web et automatisation",
    "description": "Création de sites web, branding, funnels de conversion et automatisations no-code/IA pour PME",
    "provider": {
      "@type": "Organization",
      "name": "ONORA"
    },
    "areaServed": ["LU", "FR", "BE"],
    "serviceType": "Web Development & Automation"
  };

  return (
    <>
      <SEO
        title="Skriib - Studio de création web et automatisation"
        description="Skriib crée des sites web performants, des identités visuelles uniques et des automatisations intelligentes pour digitaliser votre business."
        canonical="/studios/skriib"
        schema={schema}
      />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumbs items={[
            { label: 'Studios', href: '/studios' },
            { label: 'Skriib' }
          ]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <Sparkles className="w-16 h-16 text-orange-500" />
              <div>
                <h1 className="text-5xl md:text-6xl font-bold">Skriib</h1>
                <p className="text-xl text-orange-500 font-medium">Ton site qui convertit</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              Skriib transforme ton identité en expérience digitale performante. Sites web sur-mesure, branding percutant et automatisations intelligentes pour propulser ton business en ligne.
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
              <h2 className="text-3xl font-bold mb-6">Pourquoi choisir Skriib ?</h2>
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
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Notre approche</h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Chez Skriib, nous ne créons pas juste des sites web, nous construisons des outils de croissance. Chaque projet commence par une analyse approfondie de ton business, de tes objectifs et de ton audience.
                </p>
                <p className="text-lg leading-relaxed">
                  Nous combinons design moderne, développement performant et automatisations intelligentes pour créer des solutions digitales qui génèrent des résultats mesurables. Ton site devient un véritable actif commercial qui travaille pour toi 24/7.
                </p>
                <p className="text-lg leading-relaxed">
                  De la conception à la mise en ligne, en passant par l'optimisation SEO et les intégrations, nous t'accompagnons à chaque étape pour garantir le succès de ton projet digital.
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
              Prêt à digitaliser ton business ?
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Discutons de ton projet et créons ensemble une solution digitale qui propulse ta croissance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Démarrer un projet
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/services/creation-site">
                <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/10">
                  Voir nos services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default StudioSkriib;
