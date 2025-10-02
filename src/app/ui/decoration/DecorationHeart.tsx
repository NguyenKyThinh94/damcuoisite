interface DecorationHeartProps {
  className?: string;
}

export default function DecorationHeart({ 
  className = "" 
}: DecorationHeartProps) {
  return (
    <div className={`mt-8 flex justify-center space-x-4 text-pink-300 ${className}`}>
      <span className="text-xl sm:text-2xl animate-pulse">💕</span>
      <span className="text-2xl sm:text-3xl">💖</span>
      <span className="text-xl sm:text-2xl animate-pulse">💕</span>
    </div>
  );
}