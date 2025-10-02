import Image from 'next/image';

interface DecorationCrownProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function DecorationPageType1({ 
  className = "",
  width = 250,
  height = 300
}: DecorationCrownProps) {
  return (
    <div className='hidden lg:block'>
      {/* Top Left Decoration */}
      <div className={`absolute top-0 left-0 z-10 ${className}`}>
        <Image
          src="https://iili.io/KaQmZ4s.png"
          alt="Crown decoration"
          width={width}
          height={height}
          className="object-contain"
        />
      </div>
      
      {/* Bottom Right Decoration */}
      <div className={`absolute bottom-0 right-0 z-10 ${className}`}>
        <Image
          src="https://iili.io/KaQp2n9.png"
          alt="Crown decoration"
          width={width}
          height={height}
          className="object-contain"
        />
      </div>
      
      {/* Right Side Background Decoration */}
      <div className={`absolute right-0 top-1/4 transform -translate-y-1/2 z-10 ${className}`}>
        <Image
          src="https://iili.io/KaQpJZ7.png"
          alt="Crown decoration"
          width={width/2}
          height={height}
          className="object-contain"
        />
      </div>
      
      {/* Left Side Decoration */}
      <div className={`absolute left-0 top-3/4 transform -translate-y-1/2 z-10 ${className}`}>
        <Image
          src="https://iili.io/KaQmbaf.png"
          alt="Left decoration"
          width={width/2}
          height={height}
          className="object-contain"
        />
      </div>
    </div>
  );
}