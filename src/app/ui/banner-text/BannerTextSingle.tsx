interface BannerTextSingleProps {
  brideName: string;
  groomName: string;
  weddingDate: string;
  className?: string;
}

export default function BannerTextSingle({
  brideName,
  groomName,
  weddingDate,
  className = ""
}: BannerTextSingleProps) {
  return (
    <div className={`text-center text-white ${className}`}>
      {/* Happy Wedding - To hơn */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-wide uppercase text-yellow-300 drop-shadow-lg">
          Happy Wedding
        </h2>
      </div>

      {/* Tên cô dâu và chú rể - Cùng một dòng */}
      <div className="mb-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold">
          {brideName} & {groomName}
        </h1>
      </div>

      {/* Ngày cưới duy nhất */}
      <div>
        <p className="text-sm sm:text-base md:text-lg font-light text-gray-200">
          {weddingDate}
        </p>
      </div>
    </div>
  );
}
