import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import GrainEffect from '@/components/GrainEffect';

const Home = () => {
  const studios = [
    {
      name: 'SkriiB',
      description: 'Sites web, branding, funnels et automatisations no-code/IA',
      icon: Sparkles,
      href: '/studios/skriib',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'HackiinG',
      description: 'Growth, acquisition, stratégie de contenu et campagnes',
      icon: TrendingUp,
      href: '/studios/hacking',
      color: 'from-orange-500 to-amber-500'
    },
    {
      name: 'SiioN',
      description: 'Stratégie, offres, positionnement et business design',
      icon: Target,
      href: '/studios/siion',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      name: 'CliiP',
      description: 'Vidéos courtes, UGC, montage et formats sociaux',
      icon: Zap,
      href: '/studios/cliip',
      color: 'from-orange-500 to-pink-500'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ONORA",
    "description": "Studio Growth & IA pour PME",
    "url": "https://onora.studio",
    "logo": "https://onora.studio/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+352-123-456-789",
      "contactType": "customer service",
      "areaServed": ["LU", "FR", "BE"],
      "availableLanguage": ["French", "English"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/onora",
      "https://twitter.com/onora"
    ]
  };

  return (
    <>
      <SEO
        title="Studio Growth & IA pour PME"
        description="ONORA code l'ADN de ta marque dans ton site, tes contenus et tes automatisations. Studios Skriib, Hacking, Siion et Cliip pour booster ta croissance."
        canonical="/"
        schema={schema}
      />
      
      <div className="relative min-h-screen">
        <GrainEffect />
        
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 text-sm font-medium">
                  Studio Growth & IA
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-orange-100 to-orange-500 bg-clip-text text-transparent">
                  ONORA
                </span>
                <br />
                <span className="text-3xl md:text-5xl lg:text-6xl text-gray-300">
                  studio Growth & IA pour PME
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                On code l'ADN de ta marque dans ton site, tes contenus et tes automatisations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Link to="/studios">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 group">
                    Découvrir les studios ONORA
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/10 text-lg px-8 py-6">
                    Parler de ton projet
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="absolute top-1/4 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Nos Studios</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Quatre expertises complémentaires pour propulser ta croissance digitale
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {studios.map((studio, index) => (
                <motion.div
                  key={studio.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={studio.href}>
                    <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${studio.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <studio.icon className="w-12 h-12 text-orange-500" />
                          <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                          {studio.name}
                        </h3>
                        
                        <p className="text-gray-400 leading-relaxed">
                          {studio.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-slate-900/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Prêt à transformer ta présence digitale ?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Discutons de ton projet et trouvons ensemble les solutions adaptées à tes besoins
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                  Démarrer un projet
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;