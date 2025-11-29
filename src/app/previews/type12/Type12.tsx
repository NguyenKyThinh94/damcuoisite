'use client';

import Image from 'next/image';
import { useState } from 'react';
import { DataInterface } from '../data.interface';

interface Type12ClientProps {
  data: DataInterface;
}

export default function Type12({ data }: Type12ClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const {
    brideName = "THÚY LINH",
    groomName = "MINH ĐỨC",
    weddingDate = "13 THÁNG 7, 2024",
    location = "Hà Nội, Việt Nam",
    hashtag = "#ThuyLinhMinhDuc",
    heroImage = "/images/img16.jpg",
    aboutBride = { name: "", image: "", description: "", hobbies: [], favoriteThings: [] },
    aboutGroom = { name: "", image: "", description: "", hobbies: [], favoriteThings: [] },
    galleryImages = [],
    event = { title: "", date: "", time: "", venue: "", address: "", description: "", mapUrl: "", calendarUrl: "" },
    giftRegistry = { bride: { name: "", bankName: "", accountNumber: "", accountName: "", qrCode: "" }, groom: { name: "", bankName: "", accountNumber: "", accountName: "", qrCode: "" } },
  } = data;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Screen */}
      <section className="relative h-96 md:h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage}
          alt="Wedding"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-light tracking-widest mb-2">{groomName}</h1>
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="w-12 h-0.5 bg-white/60"></div>
            <span className="text-lg md:text-xl font-light">&</span>
            <div className="w-12 h-0.5 bg-white/60"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-light tracking-widest">{brideName}</h2>
          <p className="text-xs md:text-sm mt-6 font-light letter-spacing">{weddingDate}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        
        {/* Couple Section - Side by Side */}
        <section className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Groom */}
            <div className="flex flex-col">
              <div className="relative w-full flex-grow mb-6 rounded-sm overflow-hidden shadow-lg">
                <Image
                  src={aboutGroom.image || "/images/img3.jpg"}
                  alt={groomName}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-light tracking-widest text-gray-900">{aboutGroom.name || groomName}</h3>
              <p className="text-sm md:text-base text-gray-600 mt-3 leading-relaxed">{aboutGroom.description}</p>
            </div>

            {/* Bride */}
            <div className="flex flex-col">
              <div className="relative w-full flex-grow mb-6 rounded-sm overflow-hidden shadow-lg">
                <Image
                  src={aboutBride.image || "/images/img2.jpg"}
                  alt={brideName}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-light tracking-widest text-gray-900">{aboutBride.name || brideName}</h3>
              <p className="text-sm md:text-base text-gray-600 mt-3 leading-relaxed">{aboutBride.description}</p>
            </div>
          </div>
        </section>

        {/* Event Section */}
        {event.date && (
          <section className="mb-16 md:mb-20 py-12 md:py-16 border-t border-b border-gray-200">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 tracking-wider">Sự Kiện</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Date */}
              <div className="text-center">
                <p className="text-5xl md:text-6xl font-light text-gray-900 mb-2">{event.date.split(' ')[0]} {event.date.split(' ')[1]}</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">{event.date.split(' ').slice(2).join(' ')}</p>
                {event.time && <p className="text-sm text-gray-600 mt-2">{event.time}</p>}
              </div>

              {/* Venue */}
              <div className="text-center border-l border-r border-gray-200 px-8">
                <p className="text-gray-500 uppercase tracking-wider text-xs mb-3">Địa Điểm</p>
                <p className="text-xl md:text-2xl font-light text-gray-900 mb-3">{event.venue}</p>
                <p className="text-sm text-gray-600">{event.address}</p>
                {event.mapUrl && (
                  <a 
                    href={event.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm text-gray-600 hover:text-gray-900 border-b border-gray-600 hover:border-gray-900 transition"
                  >
                    Xem bản đồ
                  </a>
                )}
              </div>

              {/* Calendar */}
              <div className="text-center">
                {event.calendarUrl && (
                  <a 
                    href={event.calendarUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition rounded-sm text-sm tracking-wider"
                  >
                    Thêm Lịch
                  </a>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Gallery */}
        {galleryImages.length > 0 && (
          <section className="mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 tracking-wider">Hình Ảnh</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className="relative aspect-square rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
                >
                  <Image
                    src={image}
                    alt={`Photo ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>

            {/* Modal */}
            {selectedImageIndex !== null && (
              <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImageIndex(null)}>
                <div className="relative w-full h-full max-w-4xl max-h-[90vh]">
                  <Image
                    src={galleryImages[selectedImageIndex]}
                    alt="Full"
                    fill
                    className="object-contain"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-white/20 hover:bg-white/40 w-12 h-12 flex items-center justify-center transition"
                  >
                    ❮
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-white/20 hover:bg-white/40 w-12 h-12 flex items-center justify-center transition"
                  >
                    ❯
                  </button>
                </div>
              </div>
            )}
          </section>
        )}
      </div>

      {/* Gift Registry + Footer */}
      <section className="bg-gray-900 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 tracking-wider">Mừng Cưới</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
            {/* Groom Gift */}
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-light tracking-widest mb-6">{giftRegistry.groom.name || groomName}</h3>
              <div className="bg-white/5 p-6 rounded-sm mb-6">
                <div className="space-y-3 text-sm mb-6">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Ngân Hàng</p>
                    <p className="font-light mt-1">{giftRegistry.groom.bankName}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Chủ Tài Khoản</p>
                    <p className="font-light mt-1">{giftRegistry.groom.accountName}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Số Tài Khoản</p>
                    <p className="font-mono font-light mt-1 text-lg">{giftRegistry.groom.accountNumber}</p>
                  </div>
                </div>
              </div>
              {giftRegistry.groom.qrCode && (
                <Image
                  src={giftRegistry.groom.qrCode}
                  alt="QR Code"
                  width={160}
                  height={160}
                  className="w-40 h-40 mx-auto"
                />
              )}
            </div>

            {/* Bride Gift */}
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-light tracking-widest mb-6">{giftRegistry.bride.name || brideName}</h3>
              <div className="bg-white/5 p-6 rounded-sm mb-6">
                <div className="space-y-3 text-sm mb-6">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Ngân Hàng</p>
                    <p className="font-light mt-1">{giftRegistry.bride.bankName}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Chủ Tài Khoản</p>
                    <p className="font-light mt-1">{giftRegistry.bride.accountName}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Số Tài Khoản</p>
                    <p className="font-mono font-light mt-1 text-lg">{giftRegistry.bride.accountNumber}</p>
                  </div>
                </div>
              </div>
              {giftRegistry.bride.qrCode && (
                <Image
                  src={giftRegistry.bride.qrCode}
                  alt="QR Code"
                  width={160}
                  height={160}
                  className="w-40 h-40 mx-auto"
                />
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 pt-8 text-center">
            <h3 className="text-3xl md:text-4xl font-light tracking-widest mb-3">{hashtag}</h3>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              Xin cảm ơn quý khách đã tham dự và chia sẻ những khoảnh khắc đặc biệt cùng chúng tôi
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

