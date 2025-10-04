'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { DataInterface } from '../data.interface';

interface Type8ClientProps {
  data: DataInterface;
}

export default function Type8({ data }: Type8ClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [liked, setLiked] = useState(false);

  // Destructure data with fallbacks
  const {
    brideName = "AVIVA",
    groomName = "BENJI",
    weddingDate = "JULY 13, 2024",
    location = "San Francisco, CA",
    hashtag = "#AvivaAndBenji",
    heroImage = "https://images.zola.com/07660b47-0cdb-4c0a-9425-ebcc5525de00?w=1000",
    aboutBride = { name: "", image: "", description: "", hobbies: [], favoriteThings: [] },
    aboutGroom = { name: "", image: "", description: "", hobbies: [], favoriteThings: [] },
    galleryImages = [],
    event = { title: "", date: "", time: "", venue: "", address: "", description: "", mapUrl: "", calendarUrl: "" },
    giftRegistry = { bride: { name: "", bankName: "", accountNumber: "", accountName: "", qrCode: "" }, groom: { name: "", bankName: "", accountNumber: "", accountName: "", qrCode: "" } }
  } = data;

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Gallery functions
  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const openMap = () => {
    if (event.mapUrl) {
      window.open(event.mapUrl, '_blank');
    }
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  if (isMobile) {
    // Mobile Layout - Scrollable with Fixed Buttons
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-violet-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt="Wedding Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50"></div>
          </div>

          <div className="relative z-10 text-center text-white px-6 pb-24">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-wider">
                {groomName}
              </h1>
              
              <div className="flex items-center justify-center space-x-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-white"></div>
                <span className="text-2xl">❤</span>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-white"></div>
              </div>
              
              <h1 className="text-5xl font-bold tracking-wider">
                {brideName}
              </h1>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mt-8">
                <p className="text-xl font-medium mb-2">{weddingDate}</p>
                <p className="text-lg text-purple-100">{location}</p>
                <p className="text-base mt-2 text-pink-200">{hashtag}</p>
              </div>

              {/* Scroll indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-gradient-to-b from-purple-50 to-pink-50 text-gray-900">
          <div className="px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text mb-4">
                Câu chuyện của chúng tôi
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-purple-800 mb-4">Lần đầu gặp nhau</h3>
                <p className="text-gray-700 leading-relaxed">
                  Chúng tôi gặp nhau lần đầu vào một buổi chiều mùa thu tại quán cà phê nhỏ gần trường đại học. 
                  Một cái nhìn, một nụ cười và tất cả bắt đầu từ đó...
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-pink-800 mb-4">Khoảnh khắc định mệnh</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sau 3 năm bên nhau, anh ấy đã cầu hôn tôi tại bãi biển nơi chúng tôi có chuyến du lịch đầu tiên. 
                  Dưới ánh hoàng hôn, với những lời hứa ngọt ngào về tương lai...
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gradient-to-b from-pink-50 to-purple-50">
          <div className="px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-pink-700 to-purple-700 bg-clip-text mb-4">
                Về chúng tôi
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto"></div>
            </div>

            <div className="space-y-8">
              {/* Bride */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={aboutBride.image}
                      alt={aboutBride.name}
                      fill
                      className="object-cover rounded-full shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800">Cô dâu</h3>
                  <h4 className="text-xl font-medium text-pink-700 mb-4">{aboutBride.name}</h4>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  {aboutBride.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-purple-800 mb-3">Sở thích</h5>
                    <div className="flex flex-wrap gap-2">
                      {aboutBride.hobbies.map((hobby, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full"
                        >
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Groom */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={aboutGroom.image}
                      alt={aboutGroom.name}
                      fill
                      className="object-cover rounded-full shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-pink-800">Chú rể</h3>
                  <h4 className="text-xl font-medium text-purple-700 mb-4">{aboutGroom.name}</h4>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  {aboutGroom.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-pink-800 mb-3">Sở thích</h5>
                    <div className="flex flex-wrap gap-2">
                      {aboutGroom.hobbies.map((hobby, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-pink-100 text-pink-800 text-sm font-medium rounded-full"
                        >
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>





        {/* Floating Action Buttons - Right Side */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30 flex flex-col space-y-3">
          {/* Like Button */}
          <button
            onClick={handleLike}
            className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-lg"
          >
            <svg 
              className={`w-5 h-5 ${liked ? 'text-red-500 fill-current' : 'text-white'}`} 
              fill={liked ? 'currentColor' : 'none'} 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          {/* Gallery Button */}
          <button
            onClick={() => galleryImages.length > 0 && openModal(0)}
            className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-lg"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>

          {/* Share Button */}
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: `${groomName} & ${brideName} Wedding`,
                  text: `Join us for our wedding! ${hashtag}`,
                  url: window.location.href,
                });
              }
            }}
            className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-lg"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
        </div>

        {/* Bottom Action Buttons - Fixed */}
        <div className="fixed bottom-4 left-4 right-4 z-40 flex space-x-3">
          {/* Map Button */}
          <button
            onClick={openMap}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-2xl font-semibold flex items-center justify-center space-x-2 transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Địa điểm</span>
          </button>

          {/* Gift Button */}
          <button
            onClick={() => setShowGiftModal(true)}
            className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-4 px-6 rounded-2xl font-semibold flex items-center justify-center space-x-2 transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-1.343 2-3 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            <span>Gửi quà</span>
          </button>
        </div>

        {/* Gift Modal */}
        {showGiftModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end">
            <div className="w-full bg-white rounded-t-3xl p-6 space-y-6 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">Gửi quà cưới</h3>
                <button
                  onClick={() => setShowGiftModal(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                {/* Bride */}
                <div className="bg-pink-50 rounded-2xl p-4">
                  <h4 className="font-semibold text-pink-900 mb-3">{giftRegistry.bride.name}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ngân hàng:</span>
                      <span className="font-medium text-gray-900">{giftRegistry.bride.bankName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">STK:</span>
                      <span className="font-mono text-gray-900">{giftRegistry.bride.accountNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tên:</span>
                      <span className="font-medium text-gray-900">{giftRegistry.bride.accountName}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(giftRegistry.bride.accountNumber);
                      alert('Đã sao chép số tài khoản!');
                    }}
                    className="w-full mt-4 bg-pink-600 text-white py-3 rounded-xl font-semibold"
                  >
                    Sao chép STK
                  </button>
                </div>

                {/* Groom */}
                <div className="bg-blue-50 rounded-2xl p-4">
                  <h4 className="font-semibold text-blue-900 mb-3">{giftRegistry.groom.name}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ngân hàng:</span>
                      <span className="font-medium text-gray-900">{giftRegistry.groom.bankName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">STK:</span>
                      <span className="font-mono text-gray-900">{giftRegistry.groom.accountNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tên:</span>
                      <span className="font-medium text-gray-900">{giftRegistry.groom.accountName}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(giftRegistry.groom.accountNumber);
                      alert('Đã sao chép số tài khoản!');
                    }}
                    className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl font-semibold"
                  >
                    Sao chép STK
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Image Modal */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="relative w-full h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white z-10 bg-black/50 backdrop-blur-sm rounded-full p-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Previous Button */}
              {galleryImages.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Next Button */}
              {galleryImages.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              <Image
                src={galleryImages[selectedImageIndex]}
                alt={`Gallery image ${selectedImageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                {selectedImageIndex + 1} / {galleryImages.length}
              </div>

              {/* Swipe Area for Touch Navigation */}
              <div 
                className="absolute inset-0 z-0"
                onClick={closeModal}
                onTouchStart={(e) => {
                  const touch = e.touches[0];
                  e.currentTarget.dataset.startX = touch.clientX.toString();
                }}
                onTouchEnd={(e) => {
                  const startX = parseFloat(e.currentTarget.dataset.startX || '0');
                  const endX = e.changedTouches[0].clientX;
                  const diff = startX - endX;
                  
                  if (Math.abs(diff) > 50) { // minimum swipe distance
                    if (diff > 0 && galleryImages.length > 1) {
                      nextImage(); // swipe left = next
                    } else if (diff < 0 && galleryImages.length > 1) {
                      prevImage(); // swipe right = previous
                    }
                  }
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop Layout - Normal Website
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Wedding Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/60 via-purple-900/40 to-pink-900/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-8xl md:text-9xl font-bold tracking-wider uppercase bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                {groomName}
              </h1>
              
              <div className="flex items-center justify-center space-x-8">
                <div className="w-24 h-px bg-gradient-to-r from-transparent to-white"></div>
                <span className="text-3xl font-light">❤</span>
                <div className="w-24 h-px bg-gradient-to-l from-transparent to-white"></div>
              </div>
              
              <h1 className="text-8xl md:text-9xl font-bold tracking-wider uppercase bg-gradient-to-r from-pink-100 via-purple-100 to-white bg-clip-text text-transparent">
                {brideName}
              </h1>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <p className="text-3xl font-medium mb-4">{weddingDate}</p>
              <p className="text-xl text-purple-100">{location}</p>
              <p className="text-lg mt-4 text-pink-200">{hashtag}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-purple-700 via-pink-600 to-violet-700 bg-clip-text mb-8">
              About Us
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Bride */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-200/50 hover:shadow-2xl transition-all duration-500">
                <div className="text-center mb-8">
                  <div className="relative w-80 h-80 mx-auto mb-8">
                    <Image
                      src={aboutBride.image}
                      alt={aboutBride.name}
                      fill
                      className="object-cover rounded-full shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-4xl font-bold text-purple-800 mb-2">Cô dâu</h3>
                  <h4 className="text-3xl font-medium text-pink-700 mb-6">{aboutBride.name}</h4>
                  <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                  {aboutBride.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-semibold text-purple-800 mb-4">Sở thích</h5>
                    <div className="flex flex-wrap gap-3">
                      {aboutBride.hobbies.map((hobby, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-purple-100 text-purple-800 text-sm font-medium rounded-full hover:bg-purple-200 transition-colors"
                        >
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-purple-800 mb-4">Điều yêu thích</h5>
                    <div className="flex flex-wrap gap-3">
                      {aboutBride.favoriteThings.map((thing, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-pink-100 text-pink-800 text-sm font-medium rounded-full hover:bg-pink-200 transition-colors"
                        >
                          {thing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Groom */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-200/50 hover:shadow-2xl transition-all duration-500">
                <div className="text-center mb-8">
                  <div className="relative w-80 h-80 mx-auto mb-8">
                    <Image
                      src={aboutGroom.image}
                      alt={aboutGroom.name}
                      fill
                      className="object-cover rounded-full shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-4xl font-bold text-pink-800 mb-2">Chú rể</h3>
                  <h4 className="text-3xl font-medium text-purple-700 mb-6">{aboutGroom.name}</h4>
                  <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto"></div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                  {aboutGroom.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-semibold text-pink-800 mb-4">Sở thích</h5>
                    <div className="flex flex-wrap gap-3">
                      {aboutGroom.hobbies.map((hobby, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-pink-100 text-pink-800 text-sm font-medium rounded-full hover:bg-pink-200 transition-colors"
                        >
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-pink-800 mb-4">Điều yêu thích</h5>
                    <div className="flex flex-wrap gap-3">
                      {aboutGroom.favoriteThings.map((thing, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-purple-100 text-purple-800 text-sm font-medium rounded-full hover:bg-purple-200 transition-colors"
                        >
                          {thing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-pink-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-pink-700 via-purple-600 to-violet-700 bg-clip-text mb-8">
              Gallery
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => openModal(index)}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <svg className="w-6 h-6 text-purple-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section className="py-24 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-violet-700 via-purple-600 to-pink-700 bg-clip-text mb-8">
              Wedding Details
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-12 text-center text-white">
              <h3 className="text-4xl font-bold mb-4">{event.date}</h3>
              <h4 className="text-2xl font-medium">{event.title}</h4>
            </div>
            
            <div className="p-12">
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h5 className="text-xl font-bold text-violet-800 mb-4">Thời gian</h5>
                  <p className="text-lg text-gray-700">{event.time}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h5 className="text-xl font-bold text-purple-800 mb-4">Địa điểm</h5>
                  <p className="text-lg text-gray-700 font-medium">{event.venue}</p>
                  <p className="text-gray-600">{event.address}</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8 mb-12">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  {event.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V3m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Xem bản đồ
                </a>
                
                <a
                  href={event.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-violet-50 text-violet-600 font-semibold rounded-2xl border-2 border-violet-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Thêm vào lịch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Registry Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-purple-700 via-pink-600 to-violet-700 bg-clip-text mb-8">
              Gift Registry
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bride's Gift Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center py-10">
                <h3 className="text-3xl font-bold">{giftRegistry.bride.name}</h3>
              </div>
              
              <div className="p-8">
                <div className="space-y-6 mb-8">
                  <div className="bg-pink-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-pink-700 font-semibold">Ngân hàng</span>
                      <span className="text-pink-900 font-bold">{giftRegistry.bride.bankName}</span>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-700 font-semibold">Số tài khoản</span>
                      <span className="text-purple-900 font-bold font-mono">{giftRegistry.bride.accountNumber}</span>
                    </div>
                  </div>
                  
                  <div className="bg-pink-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-pink-700 font-semibold">Tên tài khoản</span>
                      <span className="text-pink-900 font-bold">{giftRegistry.bride.accountName}</span>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <Image
                    src={giftRegistry.bride.qrCode}
                    alt={`QR Code for ${giftRegistry.bride.name}`}
                    width={160}
                    height={160}
                    className="mx-auto rounded-xl border border-pink-200"
                  />
                </div>

                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(giftRegistry.bride.accountNumber);
                    alert('Số tài khoản đã được sao chép!');
                  }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Sao chép số tài khoản
                </button>
              </div>
            </div>

            {/* Groom's Gift Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-violet-500 text-white text-center py-10">
                <h3 className="text-3xl font-bold">{giftRegistry.groom.name}</h3>
              </div>
              
              <div className="p-8">
                <div className="space-y-6 mb-8">
                  <div className="bg-purple-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-700 font-semibold">Ngân hàng</span>
                      <span className="text-purple-900 font-bold">{giftRegistry.groom.bankName}</span>
                    </div>
                  </div>
                  
                  <div className="bg-violet-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-violet-700 font-semibold">Số tài khoản</span>
                      <span className="text-violet-900 font-bold font-mono">{giftRegistry.groom.accountNumber}</span>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-700 font-semibold">Tên tài khoản</span>
                      <span className="text-purple-900 font-bold">{giftRegistry.groom.accountName}</span>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <Image
                    src={giftRegistry.groom.qrCode}
                    alt={`QR Code for ${giftRegistry.groom.name}`}
                    width={160}
                    height={160}
                    className="mx-auto rounded-xl border border-purple-200"
                  />
                </div>

                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(giftRegistry.groom.accountNumber);
                    alert('Số tài khoản đã được sao chép!');
                  }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Sao chép số tài khoản
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-gradient-to-br from-purple-800 via-violet-800 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold mb-6">
            {groomName} & {brideName}
          </h3>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl mb-4">{hashtag}</p>
          <p className="text-xl font-medium mb-8">{weddingDate}</p>
          <div className="space-y-2">
            <p className="text-lg font-light italic">
              "Tình yêu đích thực không bao giờ kết thúc"
            </p>
          </div>
        </div>
      </footer>

      {/* Desktop Image Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
          <div className="relative max-w-5xl max-h-[90vh] w-full mx-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-purple-300 z-10 bg-black bg-opacity-60 rounded-full p-3 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-purple-300 z-10 bg-black bg-opacity-60 rounded-full p-3 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-purple-300 z-10 bg-black bg-opacity-60 rounded-full p-3 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="relative w-full h-[80vh]">
              <Image
                src={galleryImages[selectedImageIndex]}
                alt={`Gallery image ${selectedImageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-60 px-6 py-3 rounded-full">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
          </div>

          <div 
            className="absolute inset-0 -z-10"
            onClick={closeModal}
          ></div>
        </div>
      )}
    </div>
  );
}
