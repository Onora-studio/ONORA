
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { blogArticles, getAllCategories } from '@/data/blogArticles';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const categories = ['Tous', ...getAllCategories()];

  const filteredArticles = selectedCategory === 'Tous'
    ? blogArticles
    : blogArticles.filter(article => article.category === selectedCategory);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog ONORA",
    "description": "Articles sur le growth, l'IA, le SEO, l'automatisation et la stratégie digitale pour PME",
    "url": "https://onora.studio/blog"
  };

  return (
    <>
      <SEO
        title="Blog - Growth, IA, SEO et Stratégie Digitale"
        description="Découvrez nos articles sur le growth marketing, l'intelligence artificielle, le SEO, l'automatisation et la stratégie digitale pour PME."
        canonical="/blog"
        schema={schema}
      />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: 'Blog' }]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Insights, stratégies et guides pratiques pour propulser ta croissance digitale
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-slate-900/50 text-gray-400 hover:bg-slate-900 hover:text-orange-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/blog/${article.slug}`}>
                  <div className="group bg-slate-900/50 backdrop-blur-sm border border-orange-500/10 rounded-xl overflow-hidden hover:border-orange-500/30 transition-all hover:shadow-xl hover:shadow-orange-500/10">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      
                      <p className="text-gray-400 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center text-orange-500 font-medium group-hover:gap-2 transition-all">
                        Lire l'article
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Aucun article dans cette catégorie pour le moment.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
