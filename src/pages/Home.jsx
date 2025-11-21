import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import GrainEffect from '@/components/GrainEffect';

const Home = () => {
  console.log('BUILD LOCAL', Date.now());
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

  const heroVideoSrc =
    'https://ik.imagekit.io/bupjuxqi6/u9276462317_white_glowing_head_blue_body_with_black_backgroun_10214f12-da22-4ece-bc52-23c3a7bfb331_0.mp4';

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

        {/* HERO */}
        <section className="relative min-h-[90vh] pt-32 pb-24 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <video
              src={heroVideoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-slate-950/60 to-black/90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.15),_transparent_45%)]" />
          </div>

          <div className="container mx-auto max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10 text-center md:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 px-5 py-3 bg-black/30 backdrop-blur border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium"
              >
                <Sparkles className="w-4 h-4" />
                Studio Growth & IA · Luxembourg & Grand Est
              </motion.div>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-red-600">
                  TEST LOCAL UNIQUEMENT
                </h1>

                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed mx-auto md:mx-0">
                  On code l'ADN de ta marque dans ton site, tes contenus et tes automatisations avec des
                  studios spécialisés qui livrent des assets prêts à scaler.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center items-center pt-2">
                <Link to="/studios">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 group"
                  >
                    Découvrir les studios ONORA
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-orange-300 text-orange-200 hover:bg-orange-500/20 text-lg px-8 py-6"
                  >
                    Parler de ton projet
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                {[
                  { label: 'Studios intégrés', value: '+4 expertises' },
                  { label: 'Projets livrés', value: '120+' },
                  { label: 'Zone d’action', value: 'Luxembourg · Grand Est' }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-black/30 border border-white/10 rounded-2xl p-4 backdrop-blur"
                  >
                    <p className="text-sm uppercase tracking-wide text-gray-400">{item.label}</p>
                    <p className="text-2xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION STUDIOS */}
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
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${studio.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      />
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

        {/* SECTION CTA FINALE */}
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
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6"
                >
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
