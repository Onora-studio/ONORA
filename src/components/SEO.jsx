
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, canonical, schema }) => {
  const siteUrl = 'https://onora.studio';
  const fullTitle = `${title} | ONORA`;
  const fullCanonical = `${siteUrl}${canonical}`;
  const metaDescription = description || 'ONORA est un studio Growth & IA pour PME. Création de sites, SEO, automatisation, stratégie digitale et contenu.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="ONORA" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
