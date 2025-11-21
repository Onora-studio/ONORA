import React from "react";

const HeroImage = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Vidéo de fond ONORA */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src="https://ik.imagekit.io/bupjuxqi6/u9276462317_white_glowing_head_blue_body_with_black_backgroun_10214f12-da22-4ece-bc52-23c3a7bfb331_0.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay pour lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Contenu texte */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
          ONORA · IA · No-Code · Web
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          L’IA qui travaille,<br className="hidden md:block" />
          pendant que toi tu fais du business.
        </h1>

        <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
          Studio ONORA : sites qui convertissent, visibilité locale,
          automatisations IA et tunnels qui tournent vraiment.  
          Tu viens avec un projet flou, tu repars avec un système qui encaisse.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <a
            href="/studios"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-orange-500 hover:bg-orange-600 transition"
          >
            Découvrir les studios
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium border border-white/30 text-white/80 hover:bg-white/10 transition"
          >
            Parler d’un projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
