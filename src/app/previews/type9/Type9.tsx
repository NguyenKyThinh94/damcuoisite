'use client';

import Image from 'next/image';
import { useState } from 'react';
import { DataInterface } from '../data.interface';

interface Type9ClientProps {
  data: DataInterface;
}

export default function Type9({ data }: Type9ClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const {
    brideName = "THÚY LINH",
    groomName = "MINH ĐỨC",
    weddingDate = "13 THÁNG 7, 2024",
    location = "Hà Nội, Việt Nam",
    hashtag = "#ThuyLinhMinhDuc",
    heroImage = "/images/img13.jpg",
    aboutBride = { name: "", image: "", description: "", hobbies: [], favoriteThings: [] },
    aboutGroom = { name: "", image: "", description: "", hobbies: [], favoriteThings: [] },
    galleryImages = [],
    event = { title: "", date: "", time: "", venue: "", address: "", description: "", mapUrl: "", calendarUrl: "" },
    giftRegistry = { bride: { name: "", bankName: "", accountNumber: "", accountName: "", qrCode: "" }, groom: { name: "", bankName: "", accountNumber: "", accountName: "", qrCode: "" } },
  } = data;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Compact Hero */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage}
          alt="Wedding Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-sm md:text-base mb-2 tracking-widest">{weddingDate}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{groomName} & {brideName}</h1>
          <p className="text-xs md:text-sm">{location}</p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm md:text-base">
            <div>
              <p className="font-bold text-lg">{weddingDate.split(',')[0]}</p>
              <p className="text-xs opacity-90">Ngày cưới</p>
            </div>
            <div>
              <p className="font-bold">Lễ Cưới</p>
              <p className="text-xs opacity-90">{event.time || "17:30 - 23:00"}</p>
            </div>
            <div>
              <p className="font-bold">Địa Điểm</p>
              <p className="text-xs opacity-90 line-clamp-1">{event.venue || location}</p>
            </div>
            <div>
              <a href={event.calendarUrl} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline text-sm">
                ➕ Thêm Lịch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Couple */}
      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Về Chúng Tôi</h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Bride */}
            <div className="text-center">
              <div className="relative w-full h-80 md:h-96 mx-auto mb-4 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={aboutBride.image || "/images/img2.jpg"}
                  alt={aboutBride.name || brideName}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{aboutBride.name || brideName}</h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-3">{aboutBride.description}</p>
            </div>

            {/* Groom */}
            <div className="text-center">
              <div className="relative w-full h-80 md:h-96 mx-auto mb-4 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={aboutGroom.image || "/images/img3.jpg"}
                  alt={aboutGroom.name || groomName}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{aboutGroom.name || groomName}</h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-3">{aboutGroom.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Mobile Optimized */}
      {galleryImages.length > 0 && (
        <section className="bg-gray-50 py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Hình Ảnh</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className="relative aspect-square rounded overflow-hidden shadow hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Modal */}
          {selectedImageIndex !== null && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImageIndex(null)}>
              <div className="relative max-w-3xl max-h-[80vh] w-full aspect-square">
                <Image
                  src={galleryImages[selectedImageIndex]}
                  alt="Gallery"
                  fill
                  className="object-contain"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300"
                >
                  ❮
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300"
                >
                  ❯
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Event Details */}
      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Chi Tiết Sự Kiện</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-3">{event.title}</h3>
            <p className="mb-2"><strong>Thời Gian:</strong> {event.date} {event.time}</p>
            <p className="mb-3"><strong>Địa Điểm:</strong> {event.venue}</p>
            <p className="text-sm text-gray-700 mb-4">{event.address}</p>
            {event.mapUrl && (
              <a href={event.mapUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-medium">
                📍 Xem trên bản đồ
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Gift Registry */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Mừng Cưới</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Bride Gift */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-center text-pink-600">{giftRegistry.bride.name || brideName}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600">Ngân hàng</p>
                  <p className="font-bold">{giftRegistry.bride.bankName}</p>
                </div>
                <div>
                  <p className="text-gray-600">Chủ tài khoản</p>
                  <p className="font-bold">{giftRegistry.bride.accountName}</p>
                </div>
                <div>
                  <p className="text-gray-600">Số tài khoản</p>
                  <p className="font-bold font-mono">{giftRegistry.bride.accountNumber}</p>
                </div>
              </div>
              {giftRegistry.bride.qrCode && (
                <div className="mt-6 flex justify-center">
                  <Image
                    src={giftRegistry.bride.qrCode}
                    alt="QR Code"
                    width={160}
                    height={160}
                    className="w-40 h-40"
                  />
                </div>
              )}
            </div>

            {/* Groom Gift */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-center text-blue-600">{giftRegistry.groom.name || groomName}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600">Ngân hàng</p>
                  <p className="font-bold">{giftRegistry.groom.bankName}</p>
                </div>
                <div>
                  <p className="text-gray-600">Chủ tài khoản</p>
                  <p className="font-bold">{giftRegistry.groom.accountName}</p>
                </div>
                <div>
                  <p className="text-gray-600">Số tài khoản</p>
                  <p className="font-bold font-mono">{giftRegistry.groom.accountNumber}</p>
                </div>
              </div>
              {giftRegistry.groom.qrCode && (
                <div className="mt-6 flex justify-center">
                  <Image
                    src={giftRegistry.groom.qrCode}
                    alt="QR Code"
                    width={160}
                    height={160}
                    className="w-40 h-40"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-3">{hashtag}</h3>
          <p className="text-sm text-gray-400 mb-4">Cảm ơn quý khách đã tham dự ngày trọng đại của chúng tôi</p>
          <p className="text-xs text-gray-500">© 2024 damcuoi.site</p>
        </div>
      </section>
    </div>
  );
}
