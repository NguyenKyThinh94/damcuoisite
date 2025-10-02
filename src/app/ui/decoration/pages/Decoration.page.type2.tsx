import Image from 'next/image';

interface DecorationPageType2Props {
  className?: string;
  width?: number;
  height?: number;
}

export default function DecorationPageType2({ 
  className = "",
  width = 250,
  height = 300
}: DecorationPageType2Props) {
  return (
    <div className='hidden lg:block'>
      {/* Top Right Decoration */}
      <div className={`absolute top-1/4 right-0 transform -translate-y-1/2 z-10 ${className}`}>
        <Image
                  src="https://iili.io/KM5WgZF.png"

          alt="Top right decoration"
          width={width}
          height={height}
          className="object-contain"
        />
      </div>
      
      {/* Bottom Left Decoration */}
      <div className={`absolute bottom-1/4 left-0 transform translate-y-1/2 z-10 ${className}`}>
        <Image
                  src="https://iili.io/KM5W6Ga.png"
          alt="Bottom left decoration"
          width={width}
          height={height}
          className="object-contain"
        />
      </div>
    </div>
  );
}
