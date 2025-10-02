'use client';

import Image from 'next/image';
import { useState } from 'react';
import { DataInterface } from '../data.interface';

interface Type4ClientProps {
  data: DataInterface;
}

export default function Type4({ data }: Type4ClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Destructure data with fallbacks
  const {
    brideName = "AVIVA",
    groomName = "BENJI",
    weddingDate = "JULY 13, 2024",
    location = "San Francisco, CA",
    hashtag = "#AvivaAndBenji",
    heroImage = "https://images.zola.com/07660b47-0cdb-4c0a-9425-ebcc5525de00?w=1000",
    howWeMet = { date: "", story: "" },
    proposal = { date: "", story: "" },
    aboutBride = { name: "", image: "", description: "", hobbies: [], favoriteThings: [] },
    aboutGroom = { name: "", image: "", description: "", hobbies: [], favoriteThings: [] },
    galleryImages = [],
    event = { title: "", date: "", time: "", venue: "", address: "", description: "", mapUrl: "", calendarUrl: "" },
    giftRegistry = { bride: { name: "", bankName: "", accountNumber: "", accountName: "", qrCode: "" }, groom: { name: "", bankName: "", accountNumber: "", accountName: "", qrCode: "" } }
  } = data;

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      {/* Hero Section - Modern Minimal Design */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Wedding Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/40 via-pink-900/30 to-red-900/40"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Names with Modern Typography */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <div className="text-right">
                <h1 className="text-6xl md:text-8xl font-thin tracking-wider mb-2">
                  {groomName}
                </h1>
                <div className="w-24 h-px bg-white/60 ml-auto"></div>
              </div>
              
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-white/40 flex items-center justify-center">
                  <svg className="w-8 h-8 md:w-12 md:h-12 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
              
              <div className="text-left">
                <h1 className="text-6xl md:text-8xl font-thin tracking-wider mb-2">
                  {brideName}
                </h1>
                <div className="w-24 h-px bg-white/60"></div>
              </div>
            </div>
          </div>
          
          {/* Wedding Details */}
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl font-light tracking-wide">{weddingDate}</p>
            <p className="text-xl md:text-2xl text-white/90">{location}</p>
            <div className="w-32 h-px bg-white/40 mx-auto mt-8"></div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section - Elegant Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-rose-900 mb-6">Our Story</h2>
            <div className="w-24 h-px bg-rose-300 mx-auto mb-6"></div>
            <p className="text-xl text-rose-700 font-light">Câu chuyện tình yêu của chúng tôi</p>
          </div>

          {/* Story Cards */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* How We Met */}
            <div className="group">
              <div className="relative">
                {/* Image */}
                <div className="relative h-80 md:h-96 overflow-hidden rounded-3xl shadow-2xl mb-8">
                  <Image
                    src={galleryImages[0] || heroImage}
                    alt="How we met"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent"></div>
                  
                  {/* Floating Date */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3">
                    <p className="text-rose-900 font-medium">{howWeMet.date}</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-3xl font-light text-rose-900 mb-6">Lần đầu gặp gỡ</h3>
                  <div className="w-16 h-px bg-rose-300 mx-auto mb-6"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {howWeMet.story}
                  </p>
                </div>
              </div>
            </div>

            {/* The Proposal */}
            <div className="group">
              <div className="relative">
                {/* Image */}
                <div className="relative h-80 md:h-96 overflow-hidden rounded-3xl shadow-2xl mb-8">
                  <Image
                    src={galleryImages[1] || heroImage}
                    alt="The proposal"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent"></div>
                  
                  {/* Floating Date */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3">
                    <p className="text-rose-900 font-medium">{proposal.date}</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-3xl font-light text-rose-900 mb-6">Lời cầu hôn</h3>
                  <div className="w-16 h-px bg-rose-300 mx-auto mb-6"></div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {proposal.story}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Split Layout */}
      <section className="py-24 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-rose-900 mb-6">About Us</h2>
            <div className="w-24 h-px bg-rose-300 mx-auto mb-6"></div>
            <p className="text-xl text-rose-700 font-light">Tìm hiểu thêm về chúng tôi</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* About the Bride */}
            <div className="text-center lg:text-left">
              <div className="relative mb-8">
                <div className="relative w-80 h-80 mx-auto lg:mx-0 overflow-hidden rounded-full shadow-2xl">
                  <Image
                    src={aboutBride.image}
                    alt={aboutBride.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent"></div>
                </div>
                {/* Decorative element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-200 rounded-full opacity-60 hidden lg:block"></div>
              </div>
              
              <div>
                <h3 className="text-4xl font-light text-rose-900 mb-2">Cô dâu</h3>
                <h4 className="text-3xl font-medium text-rose-700 mb-6">{aboutBride.name}</h4>
                <div className="w-20 h-px bg-rose-300 mx-auto lg:mx-0 mb-8"></div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  {aboutBride.description}
                </p>

                <div className="space-y-8">
                  {/* Hobbies */}
                  <div>
                    <h5 className="text-xl font-medium text-rose-900 mb-4">Sở thích</h5>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      {aboutBride.hobbies.map((hobby, index) => (
                        <span
                          key={index}
                          className="px-5 py-3 bg-white text-rose-800 text-sm font-medium rounded-full shadow-sm hover:shadow-md transition-shadow border border-rose-100"
                        >
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Favorite Things */}
                  <div>
                    <h5 className="text-xl font-medium text-rose-900 mb-4">Điều yêu thích</h5>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      {aboutBride.favoriteThings.map((thing, index) => (
                        <span
                          key={index}
                          className="px-5 py-3 bg-rose-100 text-rose-800 text-sm font-medium rounded-full hover:bg-rose-200 transition-colors"
                        >
                          {thing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About the Groom */}
            <div className="text-center lg:text-right">
              <div className="relative mb-8">
                <div className="relative w-80 h-80 mx-auto lg:mx-0 lg:ml-auto overflow-hidden rounded-full shadow-2xl">
                  <Image
                    src={aboutGroom.image}
                    alt={aboutGroom.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent"></div>
                </div>
                {/* Decorative element */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-200 rounded-full opacity-60 hidden lg:block"></div>
              </div>
              
              <div>
                <h3 className="text-4xl font-light text-rose-900 mb-2">Chú rể</h3>
                <h4 className="text-3xl font-medium text-rose-700 mb-6">{aboutGroom.name}</h4>
                <div className="w-20 h-px bg-rose-300 mx-auto lg:ml-auto lg:mr-0 mb-8"></div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  {aboutGroom.description}
                </p>

                <div className="space-y-8">
                  {/* Hobbies */}
                  <div>
                    <h5 className="text-xl font-medium text-rose-900 mb-4">Sở thích</h5>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
                      {aboutGroom.hobbies.map((hobby, index) => (
                        <span
                          key={index}
                          className="px-5 py-3 bg-white text-rose-800 text-sm font-medium rounded-full shadow-sm hover:shadow-md transition-shadow border border-rose-100"
                        >
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Favorite Things */}
                  <div>
                    <h5 className="text-xl font-medium text-rose-900 mb-4">Điều yêu thích</h5>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
                      {aboutGroom.favoriteThings.map((thing, index) => (
                        <span
                          key={index}
                          className="px-5 py-3 bg-pink-100 text-rose-800 text-sm font-medium rounded-full hover:bg-pink-200 transition-colors"
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

      {/* Gallery Section - Grid Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-rose-900 mb-6">Gallery</h2>
            <div className="w-24 h-px bg-rose-300 mx-auto mb-6"></div>
            <p className="text-xl text-rose-700 font-light">Những khoảnh khắc đẹp của chúng tôi</p>
          </div>
          
          {/* Responsive Grid Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(index)}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Image number overlay */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium text-rose-900">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Section - Elegant Card */}
      <section className="py-24 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-rose-900 mb-6">Schedule</h2>
            <div className="w-24 h-px bg-rose-300 mx-auto mb-6"></div>
            <p className="text-xl text-rose-700 font-light">Chương trình ngày cưới của chúng tôi</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-12 text-center text-white">
              <h3 className="text-4xl font-light mb-4">{event.date}</h3>
              <h4 className="text-3xl font-medium">{event.title}</h4>
            </div>
            
            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-rose-900">Thời gian</h5>
                    <p className="text-xl text-gray-700">{event.time}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-rose-900">Địa điểm</h5>
                    <p className="text-xl text-gray-700">{event.venue}</p>
                    <p className="text-gray-600">{event.address}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-rose-50 rounded-2xl p-8 mb-10">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  {event.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Xem bản đồ
                </a>
                
                <a
                  href={event.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-rose-50 text-rose-600 font-medium rounded-full border-2 border-rose-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Thêm vào lịch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Registry Section - Minimalist Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-rose-900 mb-6">Gift Registry</h2>
            <div className="w-24 h-px bg-rose-300 mx-auto mb-6"></div>
            <p className="text-xl text-rose-700 font-light max-w-3xl mx-auto">
              Sự hiện diện của bạn trong đám cưới là món quà tuyệt vời nhất. Tuy nhiên, nếu bạn muốn dành tặng chúng tôi một món quà,
              chúng tôi rất biết ơn sự đóng góp của bạn cho tương lai chung.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bride's Gift Card */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-light text-rose-900 mb-4">{giftRegistry.bride.name}</h3>
                <div className="w-16 h-px bg-rose-300 mx-auto"></div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Ngân hàng</span>
                    <span className="text-rose-900 font-semibold">{giftRegistry.bride.bankName}</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Số tài khoản</span>
                    <span className="text-rose-900 font-semibold font-mono">{giftRegistry.bride.accountNumber}</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Tên tài khoản</span>
                    <span className="text-rose-900 font-semibold">{giftRegistry.bride.accountName}</span>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div className="text-center mb-8">
                <p className="text-sm text-gray-600 mb-4">Quét mã QR để gửi quà</p>
                <div className="inline-block p-6 bg-white rounded-2xl shadow-lg">
                  <Image
                    src={giftRegistry.bride.qrCode}
                    alt={`QR Code for ${giftRegistry.bride.name}`}
                    width={180}
                    height={180}
                    className="rounded-xl"
                  />
                </div>
              </div>

              {/* Copy Button */}
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(giftRegistry.bride.accountNumber);
                  alert('Số tài khoản đã được sao chép vào clipboard!');
                }}
                className="w-full px-6 py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Sao chép số tài khoản
              </button>
            </div>

            {/* Groom's Gift Card */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-light text-rose-900 mb-4">{giftRegistry.groom.name}</h3>
                <div className="w-16 h-px bg-rose-300 mx-auto"></div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Ngân hàng</span>
                    <span className="text-rose-900 font-semibold">{giftRegistry.groom.bankName}</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Số tài khoản</span>
                    <span className="text-rose-900 font-semibold font-mono">{giftRegistry.groom.accountNumber}</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Tên tài khoản</span>
                    <span className="text-rose-900 font-semibold">{giftRegistry.groom.accountName}</span>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div className="text-center mb-8">
                <p className="text-sm text-gray-600 mb-4">Quét mã QR để gửi quà</p>
                <div className="inline-block p-6 bg-white rounded-2xl shadow-lg">
                  <Image
                    src={giftRegistry.groom.qrCode}
                    alt={`QR Code for ${giftRegistry.groom.name}`}
                    width={180}
                    height={180}
                    className="rounded-xl"
                  />
                </div>
              </div>

              {/* Copy Button */}
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(giftRegistry.groom.accountNumber);
                  alert('Số tài khoản đã được sao chép vào clipboard!');
                }}
                className="w-full px-6 py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Sao chép số tài khoản
              </button>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="text-center mt-16 p-12 bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl shadow-lg">
            <div className="max-w-3xl mx-auto">
              <svg className="w-16 h-16 text-rose-500 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <h3 className="text-3xl font-light text-rose-900 mb-6">Cảm ơn</h3>
              <div className="w-20 h-px bg-rose-300 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Tình yêu, tiếng cười và sự hiện diện của bạn trong ngày cưới của chúng tôi là món quà tuyệt vời nhất.
                Cảm ơn bạn đã là một phần của ngày đặc biệt và vì trái tim hào phóng của bạn.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Section */}
      <footer className="py-20 bg-gradient-to-br from-rose-100 to-pink-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-light text-rose-900 mb-6">
            {groomName} & {brideName}
          </h3>
          <div className="w-24 h-px bg-rose-400 mx-auto mb-6"></div>
          <p className="text-xl text-rose-700 mb-4">{hashtag}</p>
          <p className="text-xl font-medium text-rose-800 mb-8">{weddingDate}</p>
          <div className="space-y-2">
            <p className="text-lg text-rose-600 font-light italic">
              "Cho tất cả những ngày trên con đường chúng ta đi"
            </p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
          <div className="relative max-w-5xl max-h-[90vh] w-full mx-4">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-rose-300 z-10 bg-black bg-opacity-60 rounded-full p-3 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-rose-300 z-10 bg-black bg-opacity-60 rounded-full p-3 transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-rose-300 z-10 bg-black bg-opacity-60 rounded-full p-3 transition-colors"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main image */}
            <div className="relative w-full h-[80vh]">
              <Image
                src={galleryImages[selectedImageIndex]}
                alt={`Gallery image ${selectedImageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-60 px-6 py-3 rounded-full">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Backdrop click to close */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={closeModal}
          ></div>
        </div>
      )}
    </div>
  );
}
