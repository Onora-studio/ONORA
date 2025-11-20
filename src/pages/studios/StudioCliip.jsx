
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Video, Users, Scissors, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';

const StudioCliip = () => {
  const services = [
    {
      icon: Video,
      title: 'Vidéos courtes',
      description: 'Reels, TikToks, Shorts optimisés pour maximiser l\'engagement et la viralité'
    },
    {
      icon: Users,
      title: 'UGC & Témoignages',
      description: 'Contenu authentique généré par les utilisateurs pour renforcer la crédibilité'
    },
    {
      icon: Scissors,
      title: 'Montage professionnel',
      description: 'Editing rapide et percutant avec effets modernes et transitions fluides'
    },
    {
      icon: Zap,
      title: 'Formats sociaux',
      description: 'Adaptation multi-plateformes : Instagram, TikTok, YouTube, LinkedIn'
    }
  ];

  const benefits = [
    'Vidéos impactantes et virales',
    'Production rapide et efficace',
    'Formats adaptés à chaque plateforme',
    'UGC authentique et crédible',
    'Montage professionnel',
    'Stratégie de contenu incluse'
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cliip - Studio de production vidéo courte",
    "description": "Production de vidéos courtes, UGC, montage professionnel et formats sociaux pour maximiser votre engagement",
    "provider": {
      "@type": "Organization",
      "name": "ONORA"
    },
    "areaServed": ["LU", "FR", "BE"],
    "serviceType": "Video Production & Social Media Content"
  };

  return (
    <>
      <SEO
        title="Cliip - Studio de production vidéo courte"
        description="Cliip produit des vidéos courtes percutantes, du contenu UGC authentique et des formats sociaux optimisés pour maximiser votre engagement."
        canonical="/studios/cliip"
        schema={schema}
      />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumbs items={[
            { label: 'Studios', href: '/studios' },
            { label: 'Cliip' }
          ]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <Zap className="w-16 h-16 text-orange-500" />
              <div>
                <h1 className="text-5xl md:text-6xl font-bold">Cliip</h1>
                <p className="text-xl text-orange-500 font-medium">Ton contenu qui cartonne</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              Cliip crée des vidéos courtes qui captivent, engagent et convertissent. Du contenu UGC authentique aux formats sociaux optimisés, nous maximisons ton impact sur toutes les plateformes.
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
              <h2 className="text-3xl font-bold mb-6">Pourquoi choisir Cliip ?</h2>
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
            <div className="bg-gradient-to-br from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Notre approche</h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Chez Cliip, nous savons que l'attention est la ressource la plus précieuse sur les réseaux sociaux. Nos vidéos sont conçues pour capter l'attention dès les premières secondes et maintenir l'engagement jusqu'à la fin.
                </p>
                <p className="text-lg leading-relaxed">
                  Nous combinons storytelling percutant, montage dynamique et formats optimisés pour chaque plateforme. Que ce soit pour des Reels Instagram, des TikToks viraux ou des Shorts YouTube, nous adaptons notre approche pour maximiser ta portée.
                </p>
                <p className="text-lg leading-relaxed">
                  Notre expertise en UGC nous permet de créer du contenu authentique qui résonne avec ton audience et renforce la crédibilité de ta marque. Chaque vidéo est pensée pour générer de l'engagement et des conversions.
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
              Prêt à créer du contenu viral ?
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Parlons de ta stratégie de contenu et créons ensemble des vidéos qui cartonnent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Démarrer un projet
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/services/contenu">
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

export default StudioCliip;
