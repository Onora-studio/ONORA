
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page non trouvée (404)"
        description="La page que vous recherchez n'existe pas ou a été déplacée."
        noIndex={true}
      />
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-9xl font-bold text-orange-500">404</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Page non trouvée</h1>
          <p className="text-xl text-gray-400 mb-8 max-w-lg mx-auto">
            Désolé, la page que vous essayez d'atteindre n'existe pas ou a été déplacée.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Retour à l'accueil
            </Button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
