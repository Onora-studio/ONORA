
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getArticleBySlug, blogArticles } from '@/data/blogArticles';
import { Button } from '@/components/ui/button';

const BlogArticle = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
          <p className="text-gray-400 mb-8">Désolé, cet article n'existe pas ou a été supprimé.</p>
          <Link to="/blog">
            <Button className="bg-orange-500 hover:bg-orange-600">
              Retour au blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = blogArticles
    .filter(a => a.slug !== slug && a.category === article.category)
    .slice(0, 2);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "ONORA",
      "logo": {
        "@type": "ImageObject",
        "url": "https://onora.studio/logo.png"
      }
    }
  };

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        canonical={`/blog/${slug}`}
        ogImage={article.image}
        ogType="article"
        schema={schema}
      />

      <article className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumbs items={[
            { label: 'Blog', href: '/blog' },
            { label: article.title }
          ]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <span className="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                {article.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{article.readTime}</span>
              </div>
              <span>Par {article.author}</span>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-orange-500 prose-strong:text-white prose-ul:text-gray-300 prose-ol:text-gray-300">
              {article.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return <h1 key={index} className="text-4xl font-bold mt-12 mb-6">{paragraph.replace('# ', '')}</h1>;
                } else if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-3xl font-bold mt-10 mb-4">{paragraph.replace('## ', '')}</h2>;
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-2xl font-bold mt-8 mb-3">{paragraph.replace('### ', '')}</h3>;
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={index} className="font-bold text-lg mt-4">{paragraph.replace(/\*\*/g, '')}</p>;
                } else if (paragraph.startsWith('- ')) {
                  return <li key={index} className="ml-6">{paragraph.replace('- ', '')}</li>;
                } else if (paragraph.trim() !== '') {
                  return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
                }
                return null;
              })}
            </div>
          </motion.div>

          <div className="mt-16 pt-8 border-t border-orange-500/10">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Besoin d'aide pour votre projet ?</h2>
              <p className="text-gray-400 mb-6">
                Discutons de vos objectifs et trouvons ensemble les solutions adaptées
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Contactez-nous
                </Button>
              </Link>
            </div>
          </div>

          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8">Articles similaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((related) => (
                  <Link key={related.slug} to={`/blog/${related.slug}`}>
                    <div className="group bg-slate-900/50 backdrop-blur-sm border border-orange-500/10 rounded-xl overflow-hidden hover:border-orange-500/30 transition-all">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">{related.excerpt}</p>
                        <div className="flex items-center text-orange-500 font-medium mt-4 group-hover:gap-2 transition-all">
                          Lire l'article
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 flex justify-between items-center">
            <Link to="/blog">
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au blog
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogArticle;
