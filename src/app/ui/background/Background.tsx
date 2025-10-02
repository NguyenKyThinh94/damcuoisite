import Image from 'next/image';

interface BackgroundProps {
  src: string;
  alt?: string;
  priority?: boolean;
  className?: string;
  size?: string;
}

export default function Background({ 
  src, 
  alt = "Background image", 
  priority = true,
  className = "",
  size = "100vw"
}: BackgroundProps) {
  return (
    <div className={`inset-0 w-full h-full -z-10 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover sm:object-contain md:object-cover" // Responsive
        sizes={size}
      />
    </div>
  );
}