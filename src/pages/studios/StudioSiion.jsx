
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Compass, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';

const StudioSiion = () => {
  const services = [
    {
      icon: Compass,
      title: 'Positionnement stratégique',
      description: 'Analyse de marché, différenciation et positionnement unique pour te démarquer'
    },
    {
      icon: Lightbulb,
      title: 'Design d\'offres',
      description: 'Création d\'offres irrésistibles, pricing stratégique et packaging premium'
    },
    {
      icon: Briefcase,
      title: 'Business design',
      description: 'Modèle économique innovant, scalabilité et optimisation de la rentabilité'
    },
    {
      icon: Target,
      title: 'Transformation digitale',
      description: 'Conseil stratégique, roadmap digitale et accompagnement au changement'
    }
  ];

  const benefits = [
    'Positionnement différenciant clair',
    'Offres à forte valeur perçue',
    'Business model scalable',
    'Stratégie de croissance structurée',
    'Accompagnement personnalisé',
    'Vision long terme actionnable'
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Siion - Studio Stratégie et Business Design",
    "description": "Positionnement stratégique, design d'offres, business model et transformation digitale pour PME",
    "provider": {
      "@type": "Organization",
      "name": "ONORA"
    },
    "areaServed": ["LU", "FR", "BE"],
    "serviceType": "Business Strategy & Consulting"
  };

  return (
    <>
      <SEO
        title="Siion - Studio Stratégie et Business Design"
        description="Siion structure votre croissance avec un positionnement stratégique, des offres irrésistibles et un business model innovant."
        canonical="/studios/siion"
        schema={schema}
      />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumbs items={[
            { label: 'Studios', href: '/studios' },
            { label: 'Siion' }
          ]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-16 h-16 text-orange-500" />
              <div>
                <h1 className="text-5xl md:text-6xl font-bold">Siion</h1>
                <p className="text-xl text-orange-500 font-medium">Ta stratégie gagnante</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              Siion structure ta croissance avec un positionnement stratégique clair, des offres irrésistibles et un business model innovant qui maximise ta rentabilité.
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
              <h2 className="text-3xl font-bold mb-6">Pourquoi choisir Siion ?</h2>
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
            <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Notre approche</h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Chez Siion, nous croyons qu'une stratégie claire est la fondation de toute croissance durable. Nous commençons par comprendre en profondeur ton marché, ta concurrence et tes ambitions pour définir un positionnement unique et différenciant.
                </p>
                <p className="text-lg leading-relaxed">
                  Notre expertise en business design nous permet de créer des offres qui maximisent la valeur perçue tout en optimisant ta rentabilité. Nous structurons ton modèle économique pour qu'il soit scalable et résilient.
                </p>
                <p className="text-lg leading-relaxed">
                  De l'audit stratégique à la mise en œuvre opérationnelle, nous t'accompagnons dans ta transformation digitale avec une vision long terme et des actions concrètes qui génèrent des résultats mesurables.
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
              Prêt à structurer ta croissance ?
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Discutons de ta vision et créons ensemble une stratégie qui propulse ton business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Démarrer un projet
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/services/strategie">
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

export default StudioSiion;
