interface BannerTextWithAddressProps {
  brideName: string;
  groomName: string;
  groomWeddingDate: string;
  brideWeddingDate: string;
  className?: string;
}

export default function BannerTextWithAddress({
  brideName,
  groomName,
  groomWeddingDate,
  brideWeddingDate,
  className = ""
}: BannerTextWithAddressProps) {
  return (
    <div className={`text-center text-white ${className}`}>
      {/* Happy Wedding */}
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-light tracking-widest uppercase text-yellow-200">
          Happy Wedding
        </h2>
      </div>

      {/* Tên cô dâu và chú rể */}
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-2">
          {brideName}
        </h1>
        <div className="flex items-center justify-center mb-2">
          <div className="h-px bg-white/50 flex-1 max-w-20"></div>
          <span className="mx-4 text-2xl sm:text-3xl md:text-4xl font-light">
            &
          </span>
          <div className="h-px bg-white/50 flex-1 max-w-20"></div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold">
          {groomName}
        </h1>
      </div>

      {/* Thông tin ngày cưới */}
      <div className="space-y-4 sm:space-y-6">
        {/* Ngày cưới nhà trai */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-yellow-200">
            Lễ Cưới Nhà Trai
          </h3>
          <p className="text-sm sm:text-base md:text-lg font-light">
            {groomWeddingDate}
          </p>
        </div>

        {/* Ngày cưới nhà gái */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-pink-200">
            Lễ Cưới Nhà Gái
          </h3>
          <p className="text-sm sm:text-base md:text-lg font-light">
            {brideWeddingDate}
          </p>
        </div>
      </div>
    </div>
  );
}