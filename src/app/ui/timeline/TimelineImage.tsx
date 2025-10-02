import Image from 'next/image';

interface TimelineImageProps {
  image: string;
  alt?: string;
  className?: string;
  tilt?: 'left' | 'right';
  width?: number;
}

export default function TimelineImage({
  image,
  alt = 'Timeline image',
  className = '',
  tilt = 'right',
  width = 300
}: TimelineImageProps) {
  const rotateClass = tilt === 'left' ? '-rotate-10' : 'rotate-10';
  
  return (
    <div className="relative">
      <div className={`p-4 pb-15 bg-stone-50 shadow-md rounded-sm transform ${rotateClass} ${className}`} style={{ width: width + 32 }}>
        <Image src={image} alt={alt} width={width} height={width} className="rounded-sm object-cover aspect-square relative z-10" />
      </div>
    </div>
  );
}
