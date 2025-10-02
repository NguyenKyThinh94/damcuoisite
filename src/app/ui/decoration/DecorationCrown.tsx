import Image from 'next/image';

interface DecorationCrownProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function DecorationCrown({ 
  className = "",
  width = 300,
  height = 300
}: DecorationCrownProps) {
  return (
    <div className={`mt-8 flex justify-center ${className}`}>
      <Image
        src="https://iili.io/K5YfkYb.png"
        alt="Crown decoration"
        width={width}
        height={height}
        className="object-contain"
      />
    </div>
  );
}