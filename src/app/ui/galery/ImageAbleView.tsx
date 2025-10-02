'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageAbleViewProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  onPrevious?: () => void;
  onNext?: () => void;
}

export default function ImageAbleView({
  src,
  alt = 'Image',
  width = 300,
  height = 300,
  className = '',
  onPrevious,
  onNext
}: ImageAbleViewProps) {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleImageClick = () => {
    setIsEnlarged(true);
  };

  const handleCloseEnlarged = () => {
    setIsEnlarged(false);
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Previous clicked');
    if (onPrevious) {
      onPrevious();
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Next clicked');
    if (onNext) {
      onNext();
    }
  };

  return (
    <>
      {/* Regular Image */}
      <div className={`cursor-pointer ${className}`} onClick={handleImageClick}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-lg object-cover hover:opacity-90 transition-opacity"
        />
      </div>

      {/* Enlarged Modal */}
      {isEnlarged && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          {/* Previous Button */}
          {onPrevious && (
            <button
              onClick={handlePrevious}
              className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-6 rounded-full transition-all z-[60] text-4xl font-bold w-16 h-16 flex items-center justify-center"
            >
              ←
            </button>
          )}

          {/* Next Button */}
          {onNext && (
            <button
              onClick={handleNext}
              className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-6 rounded-full transition-all z-[60] text-4xl font-bold w-16 h-16 flex items-center justify-center"
            >
              →
            </button>
          )}

          {/* Close Button */}
          <button
            onClick={handleCloseEnlarged}
            className="fixed top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all z-[60] text-2xl font-bold leading-none"
          >
            ×
          </button>

          <div className="relative max-w-4xl max-h-4xl w-full h-full flex items-center justify-center p-4">
            {/* Enlarged Image */}
            <div className="relative max-w-full max-h-full">
              <Image
                src={src}
                alt={alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
