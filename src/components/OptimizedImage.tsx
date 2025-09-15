import React, { useState } from 'react';
import { Package } from 'lucide-react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = ''
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (!src || hasError) {
    return (
      <div className={`bg-neutral-200 flex items-center justify-center ${className}`}>
        <Package className="w-8 h-8 text-neutral-400" />
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className={`bg-neutral-200 animate-pulse flex items-center justify-center ${className} absolute inset-0`}>
          <Package className="w-8 h-8 text-neutral-400" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      />
    </div>
  );
};

export default OptimizedImage;