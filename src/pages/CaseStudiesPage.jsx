
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import caseStudiesData from '@/data/caseStudies.json';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { ArrowRight, Tag, Activity, Settings, Film } from 'lucide-react';

const studioIcons = {
    Skriib: <Settings className="w-6 h-6 text-orange-400" />,
    Hacking: <Activity className="w-6 h-6 text-orange-400" />,
    Siion: <Tag className="w-6 h-6 text-orange-400" />,
    Cliip: <Film className="w-6 h-6 text-orange-400" />,
};

const CaseStudiesPage = () => {
    const [filter, setFilter] = useState('Tous');
    const studios = ['Tous', ...new Set(caseStudiesData.map(cs => cs.studio))];

    const filteredStudies = useMemo(() => {
        if (filter === 'Tous') {
            return caseStudiesData;
        }
        return caseStudiesData.filter(cs => cs.studio === filter);
    }, [filter]);

    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Études de Cas ONORA",
        "itemListElement": caseStudiesData.map((study, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Article",
                "name": `Étude de cas : ${study.client}`,
                "abstract": study.challenge,
            }
        }))
    };

    return (
        <>
            <SEO
                title="Cas Clients"
                description="Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs de croissance grâce à nos expertises en création de site, SEO, et stratégie digitale."
                canonical="/case-studies"
                schema={schema}
            />
            <div className="pt-8 pb-16">
                <Breadcrumbs items={[{ label: 'Cas Clients' }]} />
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Nos cas clients
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-gray-400 max-w-3xl mx-auto"
                    >
                        Les stratégies sont belles, mais les résultats sont rois. Découvrez comment nous transformons les défis de nos clients en succès mesurables.
                    </motion.p>
                </div>

                <div className="flex justify-center flex-wrap gap-2 mb-12">
                    {studios.map(studio => (
                        <Button
                            key={studio}
                            variant={filter === studio ? 'default' : 'outline'}
                            onClick={() => setFilter(studio)}
                            className={`transition-all ${filter === studio ? 'bg-orange-500 text-white border-orange-500' : 'text-gray-300 border-gray-600 hover:bg-gray-800 hover:text-white'}`}
                        >
                            {studio}
                        </Button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredStudies.map((study, index) => (
                        <motion.div
                            key={study.client + index}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4 }}
                            className="bg-slate-900 border border-orange-500/10 rounded-xl p-6 flex flex-col"
                        >
                            <div className="flex-grow">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-bold text-orange-400">{study.client}</h2>
                                    <div className="flex items-center gap-2 bg-slate-800 px-2 py-1 rounded-md text-xs">
                                        {studioIcons[study.studio]}
                                        <span>{study.studio}</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mb-4">{study.industry}</p>
                                
                                <h3 className="font-semibold text-gray-300">Défi:</h3>
                                <p className="text-sm text-gray-400 mb-3">{study.challenge}</p>
                                
                                <h3 className="font-semibold text-gray-300">Solution:</h3>
                                <p className="text-sm text-gray-400 mb-3">{study.solution}</p>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-700">
                                <h3 className="font-semibold text-gray-300">Résultats:</h3>
                                <p className="font-bold text-lg text-orange-500">{study.results}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-20 text-center bg-slate-900 border border-orange-500/20 rounded-2xl p-12">
                    <h2 className="text-3xl font-bold mb-4">Prêt à être notre prochaine success story ?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Chaque success story commence par une simple conversation. Parlons de vos objectifs.</p>
                    <Link to="/contact">
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white group">
                            Démarrer mon projet <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CaseStudiesPage;
