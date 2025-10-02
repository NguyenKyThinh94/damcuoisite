'use client';

import Image from 'next/image';
import { useState } from 'react';
import { DataInterface } from '../data.interface';
import PageDecorator from '@/app/ui/decoration/PageDecorator';

interface Type3ClientProps {
  data: DataInterface;
  decoratorType?: 'type1' | 'type2';
}

export default function Type3({ data, decoratorType = "type2" }: Type3ClientProps) {
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
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Wedding Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-8">
            <div className="inline-block p-6 rounded-full bg-white/10 backdrop-blur-sm mb-8">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-wider">
              {brideName} <span className="text-emerald-300">&</span> {groomName}
            </h1>
          </div>
          
          <div className="space-y-4">
            <div className="inline-block px-8 py-3 bg-white/20 backdrop-blur-sm rounded-full">
              <p className="text-xl md:text-2xl font-medium">{weddingDate}</p>
            </div>
            <p className="text-lg md:text-xl opacity-90">{location}</p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <div className="relative">
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-light text-emerald-900 mb-4">Our Story</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6"></div>
              <p className="text-lg text-emerald-700 italic">Hành trình tình yêu của chúng tôi</p>
            </div>

            {/* Card Style Layout */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* How We Met Card */}
              <div className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={galleryImages[0] || heroImage}
                      alt="How we met"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-emerald-900">GẶP NHAU</h4>
                          <p className="text-emerald-600 font-medium">{howWeMet.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {howWeMet.story}
                  </p>
                </div>
              </div>

              {/* The Proposal Card */}
              <div className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={galleryImages[1] || heroImage}
                      alt="The proposal"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-emerald-900">CẦU HÔN</h4>
                          <p className="text-teal-600 font-medium">{proposal.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {proposal.story}
                  </p>
                </div>
              </div>
            </div>

            {/* Closing Message */}
            <div className="text-center bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8">
              <h4 className="text-2xl font-bold text-emerald-900 mb-4">
                Chúng tôi rất vui mừng được chia sẻ ngày đặc biệt này cùng bạn
              </h4>
              <p className="text-lg text-emerald-700">Hẹn gặp bạn tại Hà Nội!</p>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 bg-gradient-to-b from-emerald-50 to-teal-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-light text-emerald-900 mb-4">About Us</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6"></div>
              <p className="text-lg text-emerald-700 italic">Tìm hiểu về cô dâu và chú rể</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* About the Bride */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={aboutBride.image}
                    alt={aboutBride.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-3xl font-bold text-white mb-2">CÔ DÂU</h4>
                    <h5 className="text-xl font-medium text-emerald-200">{aboutBride.name}</h5>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {aboutBride.description}
                  </p>

                  <div className="space-y-6">
                    {/* Hobbies */}
                    <div>
                      <h6 className="text-lg font-bold text-emerald-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        SỞ THÍCH
                      </h6>
                      <div className="flex flex-wrap gap-2">
                        {aboutBride.hobbies.map((hobby, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full hover:bg-emerald-200 transition-colors"
                          >
                            {hobby}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Favorite Things */}
                    <div>
                      <h6 className="text-lg font-bold text-emerald-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                        ĐIỀU YÊU THÍCH
                      </h6>
                      <div className="flex flex-wrap gap-2">
                        {aboutBride.favoriteThings.map((thing, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-teal-100 text-teal-800 text-sm font-medium rounded-full hover:bg-teal-200 transition-colors"
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
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={aboutGroom.image}
                    alt={aboutGroom.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-3xl font-bold text-white mb-2">CHÚ RỂ</h4>
                    <h5 className="text-xl font-medium text-teal-200">{aboutGroom.name}</h5>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {aboutGroom.description}
                  </p>

                  <div className="space-y-6">
                    {/* Hobbies */}
                    <div>
                      <h6 className="text-lg font-bold text-emerald-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        SỞ THÍCH
                      </h6>
                      <div className="flex flex-wrap gap-2">
                        {aboutGroom.hobbies.map((hobby, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full hover:bg-emerald-200 transition-colors"
                          >
                            {hobby}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Favorite Things */}
                    <div>
                      <h6 className="text-lg font-bold text-emerald-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                        ĐIỀU YÊU THÍCH
                      </h6>
                      <div className="flex flex-wrap gap-2">
                        {aboutGroom.favoriteThings.map((thing, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-teal-100 text-teal-800 text-sm font-medium rounded-full hover:bg-teal-200 transition-colors"
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
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-light text-emerald-900 mb-4">Gallery</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6"></div>
              <p className="text-lg text-emerald-700 italic">Những khoảnh khắc đẹp của chúng tôi</p>
            </div>
            
            {/* Grid Style Gallery Layout */}
            <div className="hidden md:block">
              <div className="grid grid-cols-4 gap-4">
                {galleryImages.slice(0, 12).map((image, index) => (
                  <div 
                    key={index}
                    className={`relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                      index === 0 || index === 5 ? 'col-span-2 row-span-2 h-96' : 'h-44'
                    }`}
                    onClick={() => openModal(index)}
                  >
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Carousel Style */}
            <div className="md:hidden">
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                {galleryImages.slice(0, 6).map((image, index) => (
                  <div 
                    key={index}
                    className="flex-none w-72 h-80 relative overflow-hidden rounded-2xl shadow-md cursor-pointer snap-start"
                    onClick={() => openModal(index)}
                  >
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
              
              {/* Scroll indicator */}
              <div className="text-center mt-6">
                <p className="text-sm text-emerald-600 italic">
                  ← Vuốt để xem thêm ảnh →
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Event Section */}
        <section className="py-20 bg-gradient-to-b from-emerald-50 to-teal-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-light text-emerald-900 mb-4">Schedule</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6"></div>
              <p className="text-lg text-emerald-700 italic">Chương trình đám cưới của chúng tôi</p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl">
              {/* Date Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-3xl font-bold text-emerald-900 mb-2">{event.date}</h4>
                <h5 className="text-2xl font-light text-emerald-700 mb-6">{event.title}</h5>
              </div>

              {/* Event Details */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-emerald-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h6 className="text-lg font-bold text-emerald-900">Thời gian</h6>
                      <p className="text-emerald-700 font-medium">{event.time}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-teal-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h6 className="text-lg font-bold text-emerald-900">Địa điểm</h6>
                      <p className="text-teal-700 font-medium">{event.venue}</p>
                      <p className="text-sm text-gray-600">{event.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  {event.description}
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Xem bản đồ
                </a>
                
                <a
                  href={event.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-emerald-50 text-emerald-600 font-semibold rounded-full border-2 border-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Thêm vào lịch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Gift Registry Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-light text-emerald-900 mb-4">Gift Registry</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6"></div>
              <p className="text-lg text-emerald-700 italic mb-8">
                Sự hiện diện của bạn là món quà tuyệt vời nhất. Nếu bạn muốn gửi tặng chúng tôi,
                chúng tôi rất trân trọng sự đóng góp của bạn.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Bride's Gift Card */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-emerald-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-emerald-900 mb-2">{giftRegistry.bride.name}</h4>
                  <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Ngân hàng:</span>
                      <span className="text-emerald-900 font-bold">{giftRegistry.bride.bankName}</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Số tài khoản:</span>
                      <span className="text-emerald-900 font-bold font-mono">{giftRegistry.bride.accountNumber}</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Tên tài khoản:</span>
                      <span className="text-emerald-900 font-bold">{giftRegistry.bride.accountName}</span>
                    </div>
                  </div>
                </div>

                {/* QR Code */}
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">Quét mã QR để gửi quà</p>
                  <div className="inline-block p-4 bg-white rounded-2xl shadow-md">
                    <Image
                      src={giftRegistry.bride.qrCode}
                      alt={`QR Code for ${giftRegistry.bride.name}`}
                      width={200}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                </div>

                {/* Copy Button */}
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(giftRegistry.bride.accountNumber);
                    alert('Số tài khoản đã được sao chép vào clipboard!');
                  }}
                  className="w-full mt-6 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Sao chép số tài khoản
                </button>
              </div>

              {/* Groom's Gift Card */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-teal-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-teal-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-emerald-900 mb-2">{giftRegistry.groom.name}</h4>
                  <div className="w-16 h-1 bg-teal-600 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Ngân hàng:</span>
                      <span className="text-emerald-900 font-bold">{giftRegistry.groom.bankName}</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Số tài khoản:</span>
                      <span className="text-emerald-900 font-bold font-mono">{giftRegistry.groom.accountNumber}</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Tên tài khoản:</span>
                      <span className="text-emerald-900 font-bold">{giftRegistry.groom.accountName}</span>
                    </div>
                  </div>
                </div>

                {/* QR Code */}
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">Quét mã QR để gửi quà</p>
                  <div className="inline-block p-4 bg-white rounded-2xl shadow-md">
                    <Image
                      src={giftRegistry.groom.qrCode}
                      alt={`QR Code for ${giftRegistry.groom.name}`}
                      width={200}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                </div>

                {/* Copy Button */}
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(giftRegistry.groom.accountNumber);
                    alert('Số tài khoản đã được sao chép vào clipboard!');
                  }}
                  className="w-full mt-6 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Sao chép số tài khoản
                </button>
              </div>
            </div>

            {/* Thank You Message */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl shadow-lg">
              <div className="max-w-3xl mx-auto">
                <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-emerald-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-emerald-900 mb-4">Cảm ơn</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Tình yêu, tiếng cười và sự hiện diện của bạn trong ngày cưới của chúng tôi là món quà tuyệt vời nhất.
                  Cảm ơn bạn đã là một phần của ngày đặc biệt và vì trái tim hào phóng của bạn.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <PageDecorator
          type={decoratorType}
          width={500}
          height={700}
          className='max-w-1/2'
        />
      </div>
      
      {/* Footer Section */}
      <footer className="py-16 bg-gradient-to-b from-emerald-100 to-teal-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-3xl font-light text-emerald-900 mb-4">
            {brideName} & {groomName}
          </h4>
          <p className="text-lg text-emerald-700 mb-2">{hashtag}</p>
          <p className="text-lg font-medium text-emerald-800">{weddingDate}</p>
          <div className="mt-8">
            <p className="text-sm text-emerald-600 italic">
              "Tình yêu là chìa khóa mở ra cánh cửa hạnh phúc"
            </p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-emerald-300 z-10 bg-black bg-opacity-50 rounded-full p-2 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-emerald-300 z-10 bg-black bg-opacity-50 rounded-full p-3 transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-emerald-300 z-10 bg-black bg-opacity-50 rounded-full p-3 transition-colors"
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
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
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
