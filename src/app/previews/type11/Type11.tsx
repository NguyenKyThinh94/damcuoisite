'use client';

import Image from 'next/image';
import { useState } from 'react';
import { DataInterface } from '../data.interface';

interface Type11ClientProps {
  data: DataInterface;
}

export default function Type11({ data }: Type11ClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'bride' | 'groom'>('bride');

  const {
    brideName = "THÚY LINH",
    groomName = "MINH ĐỨC",
    weddingDate = "13 THÁNG 7, 2024",
    location = "Hà Nội, Việt Nam",
    hashtag = "#ThuyLinhMinhDuc",
    heroImage = "/images/img15.jpg",
    howWeMet = { date: "", story: "" },
    proposal = { date: "", story: "" },
    aboutBride = { name: "", image: "", description: "", hobbies: [], favoriteThings: [] },
    aboutGroom = { name: "", image: "", description: "", hobbies: [], favoriteThings: [] },
    galleryImages = [],
    event = { title: "", date: "", time: "", venue: "", address: "", description: "", mapUrl: "", calendarUrl: "" },
    giftRegistry = { bride: { name: "", bankName: "", accountNumber: "", accountName: "", qrCode: "" }, groom: { name: "", bankName: "", accountNumber: "", accountName: "", qrCode: "" } },
  } = data;

  return (
    <div className="min-h-screen bg-white">
      {/* Full Width Hero - Mobile Optimized */}
      <section className="relative w-full h-96 md:h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage}
          alt="Wedding"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-xs md:text-sm tracking-widest mb-4 opacity-90">{location}</p>
          <h1 className="text-3xl md:text-6xl font-bold mb-3">{groomName}</h1>
          <h2 className="text-3xl md:text-6xl font-bold mb-4">& {brideName}</h2>
          <p className="text-sm md:text-lg font-light">{weddingDate}</p>
        </div>
      </section>

      {/* About - Tabs */}
      <section className="bg-gray-50 py-8 md:py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Tab Buttons */}
          <div className="flex gap-0 mb-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('bride')}
              className={`flex-1 py-4 px-4 text-center font-medium transition-all ${
                activeTab === 'bride'
                  ? 'text-pink-600 border-b-2 border-pink-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              💍 {aboutBride.name || brideName}
            </button>
            <button
              onClick={() => setActiveTab('groom')}
              className={`flex-1 py-4 px-4 text-center font-medium transition-all ${
                activeTab === 'groom'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🤍 {aboutGroom.name || groomName}
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
            {activeTab === 'bride' ? (
              <div className="text-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={aboutBride.image || "/images/img2.jpg"}
                    alt={brideName}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{aboutBride.name || brideName}</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">{aboutBride.description}</p>
                {aboutBride.hobbies && aboutBride.hobbies.length > 0 && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-gray-500 uppercase mb-3">Sở thích</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {aboutBride.hobbies.map((hobby, idx) => (
                        <span key={idx} className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={aboutGroom.image || "/images/img3.jpg"}
                    alt={groomName}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{aboutGroom.name || groomName}</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">{aboutGroom.description}</p>
                {aboutGroom.hobbies && aboutGroom.hobbies.length > 0 && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-gray-500 uppercase mb-3">Sở thích</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {aboutGroom.hobbies.map((hobby, idx) => (
                        <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Love Stories */}
      {(howWeMet?.story || proposal?.story) && (
        <section className="py-8 md:py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Câu Chuyện Tình Yêu</h2>
            
            <div className="space-y-8">
              {/* How We Met */}
              {howWeMet?.story && (
                <div className="relative">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                      <div className="w-1 h-20 bg-gray-200 my-2"></div>
                    </div>
                    <div className="pb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Chúng Ta Gặp Nhau</h3>
                      <p className="text-sm text-gray-500 mb-3">{howWeMet.date}</p>
                      <p className="text-gray-700 leading-relaxed">{howWeMet.story}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Proposal */}
              {proposal?.story && (
                <div className="relative">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div className="w-1 h-20 bg-gray-200 my-2"></div>
                    </div>
                    <div className="pb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Lời Cầu Hôn</h3>
                      <p className="text-sm text-gray-500 mb-3">{proposal.date}</p>
                      <p className="text-gray-700 leading-relaxed">{proposal.story}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Event Details */}
      <section id="event" className="py-6 md:py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Sự Kiện</h2>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded border-l-4 border-blue-600">
              <p className="text-xs text-gray-500 mb-1">NGÀY GIỜ</p>
              <p className="font-bold text-gray-900 text-sm md:text-base">{event.date} - {event.time}</p>
            </div>
            <div className="p-4 bg-green-50 rounded border-l-4 border-green-600">
              <p className="text-xs text-gray-500 mb-1">ĐỊA ĐIỂM</p>
              <p className="font-bold text-gray-900 text-sm md:text-base mb-1">{event.venue}</p>
              <p className="text-xs text-gray-600 mb-2">{event.address}</p>
              {event.mapUrl && (
                <a href={event.mapUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs font-medium">
                  Xem bản đồ →
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section id="gallery" className="bg-gray-50 py-6 md:py-8 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Hình Ảnh</h2>
            
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className="relative aspect-square rounded overflow-hidden shadow hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={image}
                    alt={`Photo ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </button>
              ))}
            </div>

            {/* Modal */}
            {selectedImageIndex !== null && (
              <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2" onClick={() => setSelectedImageIndex(null)}>
                <div className="relative w-full h-full max-w-3xl max-h-[90vh]">
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
          </div>
        </section>
      )}

      {/* Footer */}
      <section className="bg-gray-900 text-white py-6 md:py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-center mb-6">Mừng Cưới</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {/* Bride */}
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="font-bold mb-2">{giftRegistry.bride.name || brideName}</h3>
                <p className="text-xs text-gray-400 mb-1">Ngân hàng: {giftRegistry.bride.bankName}</p>
                <p className="text-xs text-gray-400 mb-1">Tài khoản: {giftRegistry.bride.accountName}</p>
                <p className="font-mono text-xs">{giftRegistry.bride.accountNumber}</p>
                {giftRegistry.bride.qrCode && (
                  <div className="mt-3">
                    <Image
                      src={giftRegistry.bride.qrCode}
                      alt="QR"
                      width={100}
                      height={100}
                      className="w-16 h-16 mx-auto"
                    />
                  </div>
                )}
              </div>

              {/* Groom */}
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="font-bold mb-2">{giftRegistry.groom.name || groomName}</h3>
                <p className="text-xs text-gray-400 mb-1">Ngân hàng: {giftRegistry.groom.bankName}</p>
                <p className="text-xs text-gray-400 mb-1">Tài khoản: {giftRegistry.groom.accountName}</p>
                <p className="font-mono text-xs">{giftRegistry.groom.accountNumber}</p>
                {giftRegistry.groom.qrCode && (
                  <div className="mt-3">
                    <Image
                      src={giftRegistry.groom.qrCode}
                      alt="QR"
                      width={100}
                      height={100}
                      className="w-16 h-16 mx-auto"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 text-center">
            <h3 className="text-lg font-bold mb-1">{hashtag}</h3>
            <p className="text-xs text-gray-400">Cảm ơn quý khách</p>
          </div>
        </div>
      </section>
    </div>
  );
}
