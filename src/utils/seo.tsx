import { Helmet } from 'react-helmet-async';
import type { SEOMetadata } from '../types/common';

interface SEOProps extends SEOMetadata {
  article?: {
    publishedTime: string;
    author: string;
    tags: string[];
  };
}

export const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  canonicalUrl,
  article
}: SEOProps) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://yourportfolio.com';
  const fullTitle = `${title} | Portfolio`;
  const imageUrl = ogImage || `${siteUrl}/og-default.jpg`;
  const url = canonicalUrl || siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Article Meta (for blog posts) */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:author" content={article.author} />
          {article.tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
    </Helmet>
  );
};
