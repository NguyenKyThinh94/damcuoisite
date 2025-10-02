import Image from 'next/image';
import TimelineText from './TimelineText';

interface TimelineItemMobileProps {
  time: number | string;
  image: string;
  alt?: string;
  description: string;
  className?: string;
  dateFormat?: 'time' | 'monthYear' | 'year';
  reverse?: boolean;
}

export default function TimelineItemMobile({
  time,
  image,
  alt = 'Timeline image',
  description,
  className = '',
  dateFormat = 'time',
  reverse = false
}: TimelineItemMobileProps) {

  const formatTime = (timestamp: number | string): string => {
    if (typeof timestamp === 'string') {
      return timestamp;
    }

    const date = new Date(timestamp);
    
    switch (dateFormat) {
      case 'year':
        return date.getFullYear().toString();
      case 'monthYear':
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${year}`;
      case 'time':
      default:
        return date.toLocaleTimeString('vi-VN', { 
          hour: '2-digit', 
          minute: '2-digit' 
        });
    }
  };

  const displayTime = formatTime(time);

  return (
    <div className={`${reverse ? 'border-r-4 border-gray-800 pr-4 text-right' : 'border-l-4 border-gray-800 pl-4 text-left'} w-full ${className}`}>
      {/* Title */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800">
          {displayTime}
        </h3>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Description */}
        <div className="text-base text-gray-700 leading-relaxed">
          {description}
        </div>
        
        {/* Image */}
        <div className="flex justify-center">
          <Image 
            src={image} 
            alt={alt}
            width={400}
            height={400}
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
