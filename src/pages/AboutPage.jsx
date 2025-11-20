
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Zap, Sparkles, TrendingUp, Target, Check, Heart, BrainCircuit, ArrowRight } from 'lucide-react';

const AboutPage = () => {
    const values = [
        { icon: Heart, title: "Partenariat", description: "Nous ne sommes pas des prestataires, mais des partenaires engagés dans votre succès." },
        { icon: BrainCircuit, title: "Excellence", description: "Nous visons l'excellence dans chaque détail, du code à la stratégie." },
        { icon: Zap, title: "Action", description: "Nous privilégions l'action et les résultats concrets aux longs discours." },
        { icon: Check, title: "Transparence", description: "Une communication claire, honnête et des reportings compréhensibles." }
    ];

    const studios = [
        { icon: Sparkles, name: 'Skriib', desc: 'Création & Tech' },
        { icon: TrendingUp, name: 'Hacking', desc: 'Growth & Acq.' },
        { icon: Target, name: 'Siion', desc: 'Stratégie & Offre' },
        { icon: Zap, name: 'Cliip', desc: 'Contenu & Vidéo' },
    ];

    return (
        <>
            <SEO
                title="À Propos d'ONORA"
                description="Découvrez la mission, les valeurs et l'équipe d'ONORA, votre studio Growth & IA dédié à la croissance des PME."
                canonical="/about"
            />
            <div className="pt-8 pb-16">
                <Breadcrumbs items={[{ label: 'À Propos' }]} />
                
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        À propos d'ONORA
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-orange-500 font-semibold"
                    >
                        Coder l'ADN de votre croissance.
                    </motion.p>
                </div>

                <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
                        <p className="text-gray-400 leading-relaxed">
                            ONORA est né d'une conviction : chaque PME mérite une expertise digitale d'élite pour rivaliser et grandir. Nous ne sommes pas juste une agence, nous sommes l'extension de votre équipe, un partenaire stratégique obsédé par vos résultats. Notre mission est de démocratiser l'accès aux stratégies de croissance les plus pointues, en combinant intelligence artificielle et créativité humaine.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="h-80 rounded-xl overflow-hidden"
                    >
                        <img class="w-full h-full object-cover" alt="Équipe ONORA en pleine session de brainstorming" src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
                    </motion.div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Notre Écosystème : Les Studios</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto text-center mb-12">
                        Nous avons structuré notre expertise en quatre studios complémentaires. Chacun est maître en son domaine, mais c'est leur synergie qui crée une croissance exponentielle.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {studios.map((studio, index) => (
                            <motion.div
                                key={studio.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-900 border border-orange-500/10 p-6 rounded-lg"
                            >
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

                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Nos Valeurs Fondamentales</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <motion.div key={value.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start gap-6 p-6 bg-slate-900 border border-orange-500/10 rounded-lg"
                            >
                                <value.icon className="w-12 h-12 text-orange-500 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                    <p className="text-gray-400">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <div className="mt-20 text-center bg-slate-900 border border-orange-500/20 rounded-2xl p-12">
                    <h2 className="text-3xl font-bold mb-4">Prêt à écrire votre futur avec nous ?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">L'ambition est votre moteur, la croissance est notre mission. Parlons de la vôtre.</p>
                    <Link to="/contact">
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white group">
                            Contactez l'équipe ONORA <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
