import TimelineImage from './TimelineImage';
import TimelineText from './TimelineText';

interface TimelineItemProps {
  time: number | string;
  image: string;
  alt?: string;
  description: string;
  className?: string;
  dateFormat?: 'time' | 'monthYear' | 'year';
  reverse?: boolean;
}

export default function TimelineItem({
  time,
  image,
  alt = 'Timeline image',
  description,
  className = '',
  dateFormat = 'time',
  reverse = false
}: TimelineItemProps) {
  const imageComponent = (
    <div className="flex-shrink-0 w-48 md:w-64 lg:w-80">
      <TimelineImage 
        image={image} 
        alt={alt}
        tilt={reverse ? "left" : "right"}
        width={300}
      />
    </div>
  );

  const textComponent = (
    <div className="flex-shrink-0 w-48 md:w-64 lg:w-80">
      <TimelineText 
        time={time}
        description={description}
        dateFormat={dateFormat}
        className={ reverse ? 'text-right' : '' }
      />
    </div>
  );

  const connectingLine = (
    <div className="flex-1 min-w-8 md:min-w-12 lg:min-w-16 h-[5px] bg-gray-800">
    </div>
  );

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {reverse ? (
        <>
          {textComponent}
          {connectingLine}
          {imageComponent}
        </>
      ) : (
        <>
          {imageComponent}
          {connectingLine}
          {textComponent}
        </>
      )}
    </div>
  );
}
