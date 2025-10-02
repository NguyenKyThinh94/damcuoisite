'use client';

import { useState } from 'react';
import ImageAbleView from './ImageAbleView';

interface BrickWallImage {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface BrickWallProps {
  images: BrickWallImage[];
  className?: string;
  columns?: number;
}

export default function BrickWall({
  images,
  className = '',
  columns = 3
}: BrickWallProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Generate column classes based on columns prop
  const getColumnClass = () => {
    switch (columns) {
      case 2:
        return 'columns-1 sm:columns-2';
      case 3:
        return 'columns-1 sm:columns-2 md:columns-3';
      case 4:
        return 'columns-1 sm:columns-2 md:columns-3 lg:columns-4';
      case 5:
        return 'columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5';
      default:
        return 'columns-1 sm:columns-2 md:columns-3';
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Brick Wall Layout */}
      <div className={`${getColumnClass()} gap-4 space-y-4`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="break-inside-avoid mb-4"
            onClick={() => handleImageClick(index)}
          >
            <ImageAbleView
              src={image.src}
              alt={image.alt || `Image ${index + 1}`}
              width={image.width || 300}
              height={image.height || 200}
              className="w-full"
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
