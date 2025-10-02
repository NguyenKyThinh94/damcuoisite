'use client';

import Image from 'next/image';
import { useState } from 'react';
import { DataInterface } from '../data.interface';
import PageDecorator from '@/app/ui/decoration/PageDecorator';

interface Type1ClientProps {
  data: DataInterface;
  decoratorType?: 'type1' | 'type2';
}

export default function Type1({ data, decoratorType = "type1" }: Type1ClientProps) {
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
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
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
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-8">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide">
              {groomName}
            </h2>
            <div className="text-4xl md:text-6xl font-light mb-4">&</div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-wide">
              {brideName}
            </h2>
          </div>
          
          <div className="space-y-2">
            <p className="text-xl md:text-2xl font-medium">{weddingDate}</p>
            <p className="text-lg md:text-xl">{location}</p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <div className="relative">
              <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">OUR STORY</h3>
            <p className="text-lg text-orange-700 italic">Từ lúc chúng tôi gặp nhau đến câu chuyện tình yêu vĩnh cửu</p>
          </div>

          <div className="space-y-16">
            {/* How We Met */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-orange-900 mb-3">CHÚNG TÔI ĐÃ GẶP NHAU NHƯ THẾ NÀO</h4>
              <p className="text-lg text-orange-600 font-medium mb-6">{howWeMet.date}</p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                {howWeMet.story}
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-orange-200"></div>
              <div className="mx-4">
                <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-orange-200"></div>
            </div>

            {/* The Proposal */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-orange-900 mb-3">LỜI CẦU HÔN</h4>
              <p className="text-lg text-orange-600 font-medium mb-6">{proposal.date}</p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                {proposal.story}
              </p>
              <div className="space-y-4">
                <p className="text-xl font-medium text-orange-900">
                  Chúng tôi rất vui mừng được chia sẻ chương tiếp theo trong cuộc đời chúng tôi cùng với bạn.
                </p>
                <p className="text-lg text-gray-700">Hẹn gặp bạn tại Hà Nội!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* About Us Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">ABOUT US</h3>
            <p className="text-lg text-orange-700 italic">Tìm hiểu thêm về cặp đôi hạnh phúc</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* About the Bride */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-lg">
                  <Image
                    src={aboutBride.image}
                    alt={aboutBride.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-3xl font-bold text-orange-900 mb-2">CÔ DÂU</h4>
                <h5 className="text-xl font-medium text-orange-700">{aboutBride.name}</h5>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 text-center">
                {aboutBride.description}
              </p>

              <div className="space-y-6">
                {/* Hobbies */}
                <div>
                  <h6 className="text-lg font-bold text-orange-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    SỞ THÍCH
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {aboutBride.hobbies.map((hobby, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full"
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Favorite Things */}
                <div>
                  <h6 className="text-lg font-bold text-orange-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    ĐIỀU YÊU THÍCH
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {aboutBride.favoriteThings.map((thing, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-pink-100 text-pink-800 text-sm font-medium rounded-full"
                      >
                        {thing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* About the Groom */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-lg">
                  <Image
                    src={aboutGroom.image}
                    alt={aboutGroom.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-3xl font-bold text-orange-900 mb-2">CHÚ RỂ</h4>
                <h5 className="text-xl font-medium text-orange-700">{aboutGroom.name}</h5>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 text-center">
                {aboutGroom.description}
              </p>

              <div className="space-y-6">
                {/* Hobbies */}
                <div>
                  <h6 className="text-lg font-bold text-orange-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    SỞ THÍCH
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {aboutGroom.hobbies.map((hobby, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full"
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Favorite Things */}
                <div>
                  <h6 className="text-lg font-bold text-orange-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    ĐIỀU YÊU THÍCH
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {aboutGroom.favoriteThings.map((thing, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
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
      </section>





      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">GALLERY</h3>
            <p className="text-lg text-orange-700 italic">Một vài bức ảnh của chúng tôi qua các năm...</p>
          </div>
          
          {/* Desktop Layout - Custom 2 Row Layout */}
          <div className="hidden md:block space-y-6">
            {/* Row 1: 1 ảnh lớn (3/4) + 3 ảnh nhỏ (1/4) */}
            <div className="flex gap-4 h-96">
              {/* Ảnh lớn đầu tiên - 3/4 width */}
              <div 
                className="w-3/4 relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => openModal(0)}
              >
                <Image
                  src={galleryImages[0]}
                  alt="Gallery image 1"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* 3 ảnh nhỏ - 1/4 width */}
              <div className="w-1/4 flex flex-col gap-4">
                {galleryImages.slice(1, 4).map((image, index) => (
                  <div 
                    key={index + 1}
                    className="flex-1 relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    onClick={() => openModal(index + 1)}
                  >
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: 4 ảnh nhỏ (1/2) + 1 ảnh lớn (1/2) */}
            <div className="flex gap-4 h-96">
              {/* 4 ảnh nhỏ - 1/2 width */}
              <div className="w-1/2 grid grid-cols-2 gap-4">
                {galleryImages.slice(4, 8).map((image, index) => (
                  <div 
                    key={index + 4}
                    className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    onClick={() => openModal(index + 4)}
                  >
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 5}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Ảnh lớn cuối - 1/2 width */}
              <div 
                className="w-1/2 relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => openModal(8)}
              >
                <Image
                  src={galleryImages[8]}
                  alt="Gallery image 9"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mobile Layout - 4 images only */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {galleryImages.slice(0, 4).map((image, index) => (
                <div 
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* View More Button */}
            <div className="text-center">
              <button
                onClick={() => openModal(0)}
                className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Xem thêm
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">SCHEDULE</h3>
            <p className="text-lg text-orange-700 italic">Đây là chương trình trong ngày cưới của chúng tôi. Chúng tôi rất mong được chung vui cùng bạn!</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 shadow-lg">
            {/* Date Header */}
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-orange-900 mb-2">{event.date}</h4>
            </div>

            {/* Event Card */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Event Info */}
                <div className="flex-1">
                  <h5 className="text-2xl font-bold text-orange-900 mb-3">{event.title}</h5>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-orange-700">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">{event.time}</span>
                    </div>
                    
                    <div className="flex items-start text-orange-700">
                      <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <div className="font-medium">{event.venue}</div>
                        <div className="text-sm text-gray-600">{event.address}</div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {event.description}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={event.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
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
                      className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-orange-50 text-orange-600 font-semibold rounded-full border-2 border-orange-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Thêm vào lịch
                    </a>
                  </div>
                </div>
                
                {/* Decorative Image */}
                <div className="w-full md:w-1/3">
                  <div className="relative h-48 md:h-full min-h-[200px] rounded-lg overflow-hidden">
                    <Image
                      src="https://images.zola.com/a02abc84-27c9-46af-b9c4-bd776d548ecc?w=500"
                      alt="Wedding decoration"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Registry Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">GIFT REGISTRY</h3>
            <p className="text-lg text-orange-700 italic mb-8">
              Sự hiện diện của bạn trong đám cưới là món quà tuyệt vời nhất. Tuy nhiên, nếu bạn muốn dành tặng chúng tôi một món quà,
              chúng tôi rất biết ơn sự đóng góp của bạn cho tương lai chung của chúng tôi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bride's Gift Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-orange-900 mb-2">{giftRegistry.bride.name}</h4>
                <div className="w-16 h-1 bg-orange-600 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="text-gray-600 font-medium">Ngân hàng:</span>
                  <span className="text-orange-900 font-bold">{giftRegistry.bride.bankName}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="text-gray-600 font-medium">Số tài khoản:</span>
                  <span className="text-orange-900 font-bold font-mono">{giftRegistry.bride.accountNumber}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="text-gray-600 font-medium">Tên tài khoản:</span>
                  <span className="text-orange-900 font-bold">{giftRegistry.bride.accountName}</span>
                </div>
              </div>

              {/* QR Code */}
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">Quét mã QR để gửi quà</p>
                <div className="inline-block p-4 bg-white rounded-xl shadow-md">
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
                className="w-full mt-6 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Sao chép số tài khoản
              </button>
            </div>

            {/* Groom's Gift Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-orange-900 mb-2">{giftRegistry.groom.name}</h4>
                <div className="w-16 h-1 bg-orange-600 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="text-gray-600 font-medium">Ngân hàng:</span>
                  <span className="text-orange-900 font-bold">{giftRegistry.groom.bankName}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="text-gray-600 font-medium">Số tài khoản:</span>
                  <span className="text-orange-900 font-bold font-mono">{giftRegistry.groom.accountNumber}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="text-gray-600 font-medium">Tên tài khoản:</span>
                  <span className="text-orange-900 font-bold">{giftRegistry.groom.accountName}</span>
                </div>
              </div>

              {/* QR Code */}
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">Quét mã QR để gửi quà</p>
                <div className="inline-block p-4 bg-white rounded-xl shadow-md">
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
                className="w-full mt-6 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Sao chép số tài khoản
              </button>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="text-center mt-12 p-8 bg-white rounded-2xl shadow-lg">
            <div className="max-w-3xl mx-auto">
              <svg className="w-12 h-12 text-orange-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <h4 className="text-2xl font-bold text-orange-900 mb-4">Cảm ơn</h4>
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
      <footer className="py-16 bg-gradient-to-b from-orange-100 to-orange-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-3xl font-bold text-orange-900 mb-4">
            {groomName} & {brideName}
          </h4>
          <p className="text-lg text-orange-700 mb-2">{hashtag}</p>
          <p className="text-lg font-medium text-orange-800">{weddingDate}</p>
          <div className="mt-8">
            <p className="text-sm text-orange-600 italic">
              "Cho tất cả những ngày trên con đường chúng ta đi"
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
              className="absolute top-4 right-4 text-white hover:text-orange-300 z-10 bg-black bg-opacity-50 rounded-full p-2 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-300 z-10 bg-black bg-opacity-50 rounded-full p-3 transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-300 z-10 bg-black bg-opacity-50 rounded-full p-3 transition-colors"
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
