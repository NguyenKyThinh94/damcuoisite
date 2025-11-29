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
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header - Compact */}
      <section className="relative h-72 md:h-80 flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage}
          alt="Wedding"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-pink-600/40"></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-bold">{groomName} & {brideName}</h1>
          <p className="text-xs md:text-sm mt-2 font-light">{weddingDate}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6 md:py-8">
        
        {/* Couple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
          {/* Bride */}
          <div className="text-center">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg mb-3">
              <Image
                src={aboutBride.image || "/images/img2.jpg"}
                alt={brideName}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">{aboutBride.name || brideName}</h3>
            <p className="text-xs md:text-sm text-gray-600 mt-2 line-clamp-3">{aboutBride.description}</p>
          </div>

          {/* Groom */}
          <div className="text-center">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg mb-3">
              <Image
                src={aboutGroom.image || "/images/img3.jpg"}
                alt={groomName}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">{aboutGroom.name || groomName}</h3>
            <p className="text-xs md:text-sm text-gray-600 mt-2 line-clamp-3">{aboutGroom.description}</p>
          </div>
        </div>

        {/* Event Info - Card Style */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6">Chi Tiết Sự Kiện</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📅</span>
              <div>
                <p className="text-xs text-gray-500">Ngày Giờ</p>
                <p className="font-bold text-gray-900">{event.date}</p>
                <p className="text-sm text-gray-600">{event.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-3xl">📍</span>
              <div>
                <p className="text-xs text-gray-500">Địa Điểm</p>
                <p className="font-bold text-gray-900">{event.venue}</p>
                <p className="text-sm text-gray-600">{event.address}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            {event.mapUrl && (
              <a 
                href={event.mapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 text-center py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition font-medium text-sm"
              >
                Xem Bản Đồ
              </a>
            )}
            {event.calendarUrl && (
              <a 
                href={event.calendarUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 text-center py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition font-medium text-sm"
              >
                Thêm Lịch
              </a>
            )}
          </div>
        </div>

        {/* Gallery */}
        {galleryImages.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-6">Hình Ảnh Đám Cưới</h2>
            
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className="relative aspect-square rounded-xl overflow-hidden shadow hover:shadow-xl transition-all group"
                >
                  <Image
                    src={image}
                    alt={`Photo ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>

            {/* Modal */}
            {selectedImageIndex !== null && (
              <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImageIndex(null)}>
                <div className="relative w-full h-full max-w-2xl max-h-[85vh]">
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
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-2xl bg-white/20 hover:bg-white/40 w-10 h-10 flex items-center justify-center rounded-full transition"
                  >
                    ❮
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-2xl bg-white/20 hover:bg-white/40 w-10 h-10 flex items-center justify-center rounded-full transition"
                  >
                    ❯
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Gift Registry + Footer */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-8 md:py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-center mb-6">Mừng Cưới</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Bride */}
              <div className="bg-white/10 p-5 rounded-xl">
                <h3 className="font-bold mb-3 text-lg">{giftRegistry.bride.name || brideName}</h3>
                <div className="text-xs md:text-sm text-pink-100 space-y-2 mb-3">
                  <p><strong>Ngân hàng:</strong> {giftRegistry.bride.bankName}</p>
                  <p><strong>Tài khoản:</strong> {giftRegistry.bride.accountName}</p>
                  <p><strong>STK:</strong> <span className="font-mono">{giftRegistry.bride.accountNumber}</span></p>
                </div>
                {giftRegistry.bride.qrCode && (
                  <Image
                    src={giftRegistry.bride.qrCode}
                    alt="QR"
                    width={100}
                    height={100}
                    className="w-20 h-20 mx-auto"
                  />
                )}
              </div>

              {/* Groom */}
              <div className="bg-white/10 p-5 rounded-xl">
                <h3 className="font-bold mb-3 text-lg">{giftRegistry.groom.name || groomName}</h3>
                <div className="text-xs md:text-sm text-pink-100 space-y-2 mb-3">
                  <p><strong>Ngân hàng:</strong> {giftRegistry.groom.bankName}</p>
                  <p><strong>Tài khoản:</strong> {giftRegistry.groom.accountName}</p>
                  <p><strong>STK:</strong> <span className="font-mono">{giftRegistry.groom.accountNumber}</span></p>
                </div>
                {giftRegistry.groom.qrCode && (
                  <Image
                    src={giftRegistry.groom.qrCode}
                    alt="QR"
                    width={100}
                    height={100}
                    className="w-20 h-20 mx-auto"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 text-center">
            <h3 className="text-2xl font-bold mb-2">{hashtag}</h3>
            <p className="text-sm text-pink-100">Cảm ơn quý khách đã tham dự và chia sẻ những khoảnh khắc đặc biệt</p>
          </div>
        </div>
      </section>
    </div>
  );
}
