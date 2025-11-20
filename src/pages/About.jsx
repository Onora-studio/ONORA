
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Sparkles, TrendingUp, Target, Check, Heart, BrainCircuit } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';

const About = () => {
  const values = [
    { icon: Heart, title: "Partenariat", description: "Nous ne sommes pas des prestataires, mais des partenaires engagés dans votre succès." },
    { icon: BrainCircuit, title: "Excellence", description: "Nous visons l'excellence dans chaque détail, du code à la stratégie." },
    { icon: Zap, title: "Action", description: "Nous privilégions l'action et les résultats concrets aux longs discours." },
    { icon: Check, title: "Transparence", description: "Une communication claire, honnête et des reportings compréhensibles." }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "À Propos de ONORA",
    "description": "Découvrez la mission, les valeurs et l'équipe d'ONORA, votre studio Growth & IA pour PME. Nous codons l'ADN de votre marque dans votre croissance."
  };

  return (
    <>
      <SEO
        title="À Propos de ONORA - Notre Mission & Vision"
        description="Découvrez l'équipe, la mission et les valeurs d'ONORA. Nous sommes un studio Growth & IA dédié à la croissance des PME."
        canonical="/about"
        schema={schema}
      />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs items={[{ label: 'À Propos' }]} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Coder l'ADN de votre croissance.</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              ONORA est né d'une conviction : chaque PME mérite une expertise digitale d'élite pour rivaliser et grandir. Nous ne sommes pas juste une agence, nous sommes l'extension de votre équipe, dédiée à votre succès.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-16">
            <img class="w-full h-auto rounded-2xl object-cover" alt="Équipe ONORA en pleine session de brainstorming" src="https://images.unsplash.com/photo-1690191886622-fd8d6cda73bd" />
          </motion.div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Notre Écosystème : Les Studios</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto text-center mb-12">
              Nous avons structuré notre expertise en quatre studios complémentaires. Chacun est maître en son domaine, mais c'est leur synergie qui crée une croissance exponentielle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: Sparkles, name: 'Skriib', desc: 'Création & Tech' },
                { icon: TrendingUp, name: 'Hacking', desc: 'Growth & Acq.' },
                { icon: Target, name: 'Siion', desc: 'Stratégie & Offre' },
                { icon: Zap, name: 'Cliip', desc: 'Contenu & Vidéo' },
              ].map((studio, index) => (
                <motion.div key={studio.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center">
                      <studio.icon className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{studio.name}</h3>
                  <p className="text-gray-400">{studio.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Nos Valeurs Fondamentales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div key={value.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start gap-6 p-6 bg-slate-900/50 rounded-lg">
                  <value.icon className="w-12 h-12 text-orange-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Prêt à écrire votre futur avec nous ?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              L'ambition est votre moteur, la croissance est notre mission. Parlons de la vôtre.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Contactez l'équipe ONORA
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
