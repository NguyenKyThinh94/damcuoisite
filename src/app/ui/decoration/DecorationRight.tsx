import Image from 'next/image';

interface DecorationCrownProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function DecorationRight({ 
  className = "",
  width = 300,
  height = 300
}: DecorationCrownProps) {
  return (
    <div className={`absolute right-0 -z-10 ${className}`}>
      <Image
      src="https://iili.io/KaQpJZ7.png"
      alt="Crown decoration"
      width={width}
      height={height}
      className="object-contain"
      />
    </div>
  );
}