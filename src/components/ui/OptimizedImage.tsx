import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  onClick?: () => void;
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  onClick
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');
  const [error, setError] = useState(false);

  useEffect(() => {
    // Try to load WebP version first
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const img = new Image();
    
    img.onload = () => {
      setImageSrc(webpSrc);
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      // Fallback to original format
      setImageSrc(src);
      setIsLoaded(true);
    };
    
    // Check if WebP is supported
    const canvas = document.createElement('canvas');
    if (canvas.getContext && canvas.getContext('2d')) {
      // Browser supports canvas, try WebP
      img.src = webpSrc;
    } else {
      // Fallback to original
      setImageSrc(src);
      setIsLoaded(true);
    }
  }, [src]);

  const handleError = () => {
    if (!error) {
      setError(true);
      setImageSrc(src); // Fallback to original on error
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blur placeholder while loading */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-800 animate-pulse"
          style={{ 
            filter: 'blur(10px)',
            transform: 'scale(1.1)'
          }}
        />
      )}
      
      {/* Actual image */}
      <motion.img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};
