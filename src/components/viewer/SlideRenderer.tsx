import React from 'react';

interface SlideRendererProps {
  slideId: number;
  customUrl?: string;
  isPriority?: boolean;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({ 
  slideId, 
  customUrl,
  isPriority = true 
}) => {
  if (customUrl) {
    return (
      <iframe
        src={customUrl}
        title={`Слайд ${slideId}`}
        className="w-full h-full border-0 select-none"
      />
    );
  }

  // Modern <picture> with ultra-fast optimized WebP (~200KB) and original PNG fallback
  return (
    <picture className="w-full h-full flex items-center justify-center">
      <source srcSet={`/slide-${slideId}.webp`} type="image/webp" />
      <source srcSet={`/slide-${slideId}.png`} type="image/png" />
      <img
        src={`/slide-${slideId}.webp`}
        alt={`Слайд ${slideId}`}
        className="w-full h-full object-contain select-none pointer-events-none transition-opacity duration-200"
        loading={isPriority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  );
};
