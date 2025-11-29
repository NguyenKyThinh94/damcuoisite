'use client';

import Image from 'next/image';
import { useState } from 'react';
import { DataInterface } from '../data.interface';

interface Type10ClientProps {
  data: DataInterface;
}

export default function Type10({ data }: Type10ClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const {
    brideName = "THÚY LINH",
    groomName = "MINH ĐỨC",
    weddingDate = "13 THÁNG 7, 2024",
    location = "Hà Nội, Việt Nam",
    hashtag = "#ThuyLinhMinhDuc",
    heroImage = "/images/img14.jpg",
    aboutBride = { name: "", image: "", description: "", hobbies: [], favoriteThings: [] },
    aboutGroom = { name: "", image: "", description: "", hobbies: [], favoriteThings: [] },
    galleryImages = [],
    event = { title: "", date: "", time: "", venue: "", address: "", description: "", mapUrl: "", calendarUrl: "" },
    giftRegistry = { bride: { name: "", bankName: "", accountNumber: "", accountName: "", qrCode: "" }, groom: { name: "", bankName: "", accountNumber: "", accountName: "", qrCode: "" } },
  } = data;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Minimal */}
      <section className="relative h-80 md:h-96 flex items-end justify-center overflow-hidden bg-gradient-to-b from-gray-100 to-white">
        <Image
          src={heroImage}
          alt="Wedding"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        
        <div className="relative z-10 pb-6 md:pb-8 text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{groomName} & {brideName}</h1>
          <p className="text-gray-600 text-sm md:text-base">{weddingDate}</p>
        </div>
      </section>

      {/* Event Card - Compact */}
      <section className="max-w-2xl mx-auto px-4 py-6 md:py-8">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="text-2xl">📅</span>
            <div>
              <p className="font-bold text-gray-900">{event.date}</p>
              <p className="text-sm text-gray-600">{event.time}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="text-2xl">📍</span>
            <div>
              <p className="font-bold text-gray-900">{event.venue}</p>
              <p className="text-sm text-gray-600">{event.address}</p>
              {event.mapUrl && (
                <a href={event.mapUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">
                  Xem bản đồ →
                </a>
              )}
            </div>
          </div>

          {event.calendarUrl && (
            <a href={event.calendarUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-blue-600 text-white py-3 rounded font-medium hover:bg-blue-700">
              Thêm vào Lịch
            </a>
          )}
        </div>
      </section>

      {/* Couple Section */}
      <section className="bg-gray-50 py-8 md:py-10">
        <div className="max-w-2xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Bride */}
            <div>
              <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow mb-3">
                <Image
                  src={aboutBride.image || "/images/img2.jpg"}
                  alt={brideName}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-sm md:text-base text-gray-900">{aboutBride.name || brideName}</h3>
              <p className="text-xs text-gray-600 line-clamp-2 mt-1">{aboutBride.description}</p>
            </div>

            {/* Groom */}
            <div>
              <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow mb-3">
                <Image
                  src={aboutGroom.image || "/images/img3.jpg"}
                  alt={groomName}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-sm md:text-base text-gray-900">{aboutGroom.name || groomName}</h3>
              <p className="text-xs text-gray-600 line-clamp-2 mt-1">{aboutGroom.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="max-w-2xl mx-auto px-4 py-8 md:py-10">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">Hình Ảnh</h2>
          
          <div className="space-y-3 md:space-y-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow group"
              >
                <Image
                  src={image}
                  alt={`Photo ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </button>
            ))}
          </div>

          {/* Modal */}
          {selectedImageIndex !== null && (
            <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2" onClick={() => setSelectedImageIndex(null)}>
              <div className="relative w-full h-full max-w-2xl max-h-[90vh]">
                <Image
                  src={galleryImages[selectedImageIndex]}
                  alt="Full size"
                  fill
                  className="object-contain"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-2xl bg-black/50 w-10 h-10 flex items-center justify-center rounded hover:bg-black/80"
                >
                  ❮
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-2xl bg-black/50 w-10 h-10 flex items-center justify-center rounded hover:bg-black/80"
                >
                  ❯
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Footer */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 md:py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-6">Mừng Cưới</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* Bride */}
              <div className="bg-white/10 p-4 rounded">
                <h3 className="font-bold mb-3 text-center">{giftRegistry.bride.name || brideName}</h3>
                <div className="text-xs md:text-sm space-y-2">
                  <p><strong>Ngân hàng:</strong> {giftRegistry.bride.bankName}</p>
                  <p><strong>Tài khoản:</strong> {giftRegistry.bride.accountName}</p>
                  <p><strong>STK:</strong> <span className="font-mono">{giftRegistry.bride.accountNumber}</span></p>
                </div>
                {giftRegistry.bride.qrCode && (
                  <div className="mt-3 flex justify-center">
                    <Image
                      src={giftRegistry.bride.qrCode}
                      alt="QR"
                      width={80}
                      height={80}
                      className="w-20 h-20"
                    />
                  </div>
                )}
              </div>

              {/* Groom */}
              <div className="bg-white/10 p-4 rounded">
                <h3 className="font-bold mb-3 text-center">{giftRegistry.groom.name || groomName}</h3>
                <div className="text-xs md:text-sm space-y-2">
                  <p><strong>Ngân hàng:</strong> {giftRegistry.groom.bankName}</p>
                  <p><strong>Tài khoản:</strong> {giftRegistry.groom.accountName}</p>
                  <p><strong>STK:</strong> <span className="font-mono">{giftRegistry.groom.accountNumber}</span></p>
                </div>
                {giftRegistry.groom.qrCode && (
                  <div className="mt-3 flex justify-center">
                    <Image
                      src={giftRegistry.groom.qrCode}
                      alt="QR"
                      width={80}
                      height={80}
                      className="w-20 h-20"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 text-center">
            <h3 className="text-lg font-bold mb-2">{hashtag}</h3>
            <p className="text-xs md:text-sm text-gray-200">Cảm ơn quý khách đã tham dự</p>
          </div>
        </div>
      </section>
    </div>
  );
}
