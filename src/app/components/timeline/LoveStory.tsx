import TimelineItem from '../../ui/timeline/TimelineItem';
import TimelineItemMobile from '../../ui/timeline/TimelineItemMobile';

interface TimelineData {
  time: number | string;
  image: string;
  alt?: string;
  description: string;
  dateFormat?: 'time' | 'monthYear' | 'year';
}

interface TimelineProps {
  items: TimelineData[];
  className?: string;
}

export default function Timeline({
  items,
  className = ''
}: TimelineProps) {
  return (
    <div className={`${className}`}>
      {/* Title */}
      <div className="text-center m-5">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 tracking-wide">
          LOVE STORY
        </h1>
      </div>

      {/* Desktop Timeline - Hidden on mobile */}
      <div className="relative hidden md:block">
        {/* Vertical center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[5px] bg-gray-800 transform -translate-x-1/2 z-0"></div>
        
        {/* Timeline items */}
        <div className="space-y-8 relative z-10">
          {items.map((item, index) => (
            <TimelineItem
              key={index}
              time={item.time}
              image={item.image}
              alt={item.alt}
              description={item.description}
              dateFormat={item.dateFormat}
              reverse={items.length > 1 ? index % 2 === 1 : false}
            />
          ))}
        </div>
      </div>

      {/* Mobile Timeline - Hidden on desktop */}
      <div className="block md:hidden">
        <div className="space-y-6 px-5">
          {items.map((item, index) => (
            <TimelineItemMobile
              key={index}
              time={item.time}
              image={item.image}
              alt={item.alt}
              description={item.description}
              dateFormat={item.dateFormat}
              reverse={items.length > 1 ? index % 2 === 1 : false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
