interface TimelineTextProps {
  time: number | string; // timestamp (number) or string
  description: string;
  className?: string;
  dateFormat?: 'time' | 'monthYear' | 'year';
  sizes?: {
    time?: string;
    description?: string;
  };
}

export default function TimelineText({
  time,
  description,
  className = '',
  dateFormat = 'monthYear',
  sizes = {}
}: TimelineTextProps) {
  const formatTime = (timestamp: number | string): string => {
    // If it's already a string, return as is
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

  const getTimeDisplayClass = () => {
    const customTimeSize = sizes.time;
    const baseClass = 'font-black text-gray-800 mb-2';
    
    if (customTimeSize) {
      return `${customTimeSize} ${baseClass}`;
    }
    
    switch (dateFormat) {
      case 'year':
        return `text-6xl ${baseClass}`;
      default:
        return `text-4xl ${baseClass.replace('font-black', 'font-bold text-gray-700')}`;
    }
  };

  const getDescriptionClass = () => {
    const customDescSize = sizes.description;
    const baseClass = 'font-medium text-gray-900 leading-relaxed';
    
    if (customDescSize) {
      return `${customDescSize} ${baseClass}`;
    }
    
    return `text-4xl ${baseClass}`;
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <div className={getTimeDisplayClass()}>
        {displayTime}
      </div>
      <div className={getDescriptionClass()}>
        {description}
      </div>
    </div>
  );
}
