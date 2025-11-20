
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';

const ServiceCreation = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Création de Site Web sur-mesure",
    "description": "Nous créons des sites web performants, optimisés SEO et centrés sur la conversion pour les PME. De la vitrine au e-commerce, nous transformons votre présence en ligne.",
    "provider": {
      "@type": "Organization",
      "name": "ONORA"
    },
    "serviceType": "Création de site web",
    "areaServed": {
      "@type": "Country",
      "name": "LU"
    }
  };

  return (
    <>
      <SEO
        title="Création de Site Web - Agence Growth & IA"
        description="Création de sites web sur-mesure, performants et optimisés SEO. Sites vitrines, e-commerce, landing pages. Contactez ONORA pour votre projet."
        canonical="/services/creation-site"
        schema={schema}
      />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs items={[{ label: 'Services' }, { label: 'Création de Site' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Création de Site Web Sur-Mesure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 mb-12"
          >
            Un site web n'est pas une simple vitrine. C'est votre principal outil de croissance, de vente et de communication. Nous le concevons pour qu'il soit performant, mémorable et qu'il convertisse.
          </motion.p>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Vos Avantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: CheckCircle2, text: "Site ultra-rapide et optimisé pour le SEO" },
                { icon: CheckCircle2, text: "Design unique qui reflète votre marque" },
                { icon: CheckCircle2, text: "Expérience utilisateur (UX) centrée sur la conversion" },
                { icon: CheckCircle2, text: "Autonomie complète pour gérer votre contenu" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg"
                >
                  <item.icon className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Notre Méthode</h2>
            <div className="space-y-8 border-l-2 border-orange-500/30 pl-8">
              {[
                { number: "01", title: "Stratégie & Conception", description: "Nous définissons ensemble vos objectifs, votre cible et l'architecture du site. On crée ensuite les maquettes UX/UI." },
                { number: "02", title: "Développement & Intégration", description: "Nos développeurs donnent vie aux maquettes avec un code propre, performant et sécurisé, en utilisant les dernières technologies." },
                { number: "03", title: "Contenu & SEO", description: "Nous intégrons vos contenus en les optimisant pour les moteurs de recherche pour vous garantir une visibilité maximale dès le lancement." },
                { number: "04", title: "Lancement & Formation", description: "Après des tests rigoureux, nous mettons le site en ligne et nous vous formons pour que vous soyez 100% autonome." },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative before:content-[''] before:absolute before:left-[-38px] before:top-1 before:w-4 before:h-4 before:bg-orange-500 before:rounded-full"
                >
                  <h3 className="text-2xl font-bold text-orange-500 mb-2">{step.number}. {step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="text-center bg-slate-900/50 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Prêt à lancer un site qui génère des résultats ?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Chaque projet est unique. Discutons du vôtre et voyons comment nous pouvons donner vie à votre vision.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white group">
                Obtenir un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServiceCreation;
