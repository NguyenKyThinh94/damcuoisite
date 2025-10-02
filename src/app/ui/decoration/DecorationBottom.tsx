import Image from 'next/image';

interface DecorationCrownProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function DecorationBottom({ 
  className = "",
  width = 300,
  height = 300
}: DecorationCrownProps) {
  return (
    <div className={`absolute bottom-0 right-0 z-10 ${className}`}>
      <Image
      src="https://iili.io/KaQp2n9.png"
      alt="Crown decoration"
      width={width}
      height={height}
      className="object-contain"
      />
    </div>
  );
}