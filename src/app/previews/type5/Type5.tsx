'use client';

import Image from 'next/image';
import { useState } from 'react';
import { DataInterface } from '../data.interface';

interface Type5ClientProps {
  data: DataInterface;
}

export default function Type5({ data }: Type5ClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Destructure data with fallbacks
  const {
    brideName = "AVIVA",
    groomName = "BENJI",
    weddingDate = "JULY 13, 2024",
    location = "San Francisco, CA",
    hashtag = "#AvivaAndBenji",
    heroImage = "https://images.zola.com/07660b47-0cdb-4c0a-9425-ebcc5525de00?w=1000",
    storyVideo = { url: "", title: "Câu chuyện tình yêu của chúng tôi", description: "" },
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
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-purple-50/30 to-indigo-50/20">
      {/* Hero Section - Ultra Modern Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Advanced Overlay */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Wedding Hero"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/60 via-purple-900/40 to-indigo-900/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-xl"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          {/* Modern Typography Layout */}
          <div className="mb-16">
            <div className="flex flex-col items-center space-y-8">
              {/* Names with Glassmorphism Effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20"></div>
                <div className="relative px-12 py-8">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                    <div className="text-center md:text-right">
                      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.2em] mb-3 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
                        {groomName}
                      </h1>
                      <div className="w-20 h-px bg-gradient-to-r from-transparent to-white/60 ml-auto md:ml-auto"></div>
                    </div>
                    
                    <div className="relative">
                      <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-pink-500/30 to-rose-500/30 flex items-center justify-center">
                          <svg className="w-6 h-6 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left">
                      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.2em] mb-3 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
                        {brideName}
                      </h1>
                      <div className="w-20 h-px bg-gradient-to-l from-transparent to-white/60"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Wedding Details with Modern Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20"></div>
                <div className="relative px-8 py-6 space-y-3">
                  <p className="text-xl md:text-2xl font-light tracking-wide text-gray-100">{weddingDate}</p>
                  <p className="text-lg md:text-xl text-gray-200/90">{location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modern Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
              <div className="w-1 h-4 bg-gradient-to-b from-white/80 to-transparent rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Video Section - Modern Design */}
      <section className="py-32 bg-gradient-to-b from-rose-50/90 via-purple-50/50 to-indigo-50/30 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-rose-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-24">
            <div className="inline-block">
              <h2 className="text-6xl md:text-7xl font-extralight text-transparent bg-gradient-to-r from-rose-800 via-purple-700 to-indigo-800 bg-clip-text mb-8">
                Our Story
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-purple-600 font-light max-w-2xl mx-auto">
                Hành trình tình yêu của chúng tôi
              </p>
            </div>
          </div>

          {/* Video Container - Ultra Modern Design */}
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              {/* Glassmorphism Container */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>

                {/* Video Container with Modern Frame */}
                <div className="relative group">
                  <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                    {/* Animated Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm"></div>
                    
                    <div className="aspect-video relative z-10">
                      {storyVideo.url ? (
                        <iframe
                          src={storyVideo.url}
                          title={storyVideo.title}
                          className="w-full h-full rounded-xl"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-100 to-purple-100 rounded-xl">
                          <div className="text-center">
                            <div className="relative mb-6">
                              <div className="w-20 h-20 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-purple-500 text-lg font-medium">Video sẽ được cập nhật sớm</p>
                            <p className="text-purple-400 text-sm mt-2">Hãy quay lại sau để xem câu chuyện tình yêu của chúng tôi</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Enhanced Description */}
                <div className="mt-12 text-center">
                  <div className="bg-gradient-to-r from-rose-50/80 to-purple-50/80 rounded-2xl p-8 border border-rose-200/50">
                    <p className="text-lg text-purple-700 leading-relaxed max-w-4xl mx-auto">
                      Hãy cùng xem video đặc biệt kể về hành trình tình yêu từ lúc chúng tôi gặp nhau đến khi quyết định về chung một nhà.
                      Mỗi khoảnh khắc đều mang trong mình một ý nghĩa riêng và tạo nên câu chuyện tình yêu tuyệt đẹp của chúng tôi.
                    </p>
                    
                    {/* Decorative Elements */}
                    <div className="flex items-center justify-center mt-8 space-x-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Ultra Modern Layout */}
      <section className="py-32 bg-gradient-to-br from-rose-50/90 via-purple-50/50 to-indigo-50/30 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-20 w-64 h-64 bg-gradient-to-r from-rose-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-extralight text-transparent bg-gradient-to-r from-rose-800 via-purple-700 to-indigo-800 bg-clip-text mb-8">
              About Us
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-purple-600 font-light">Tìm hiểu thêm về chúng tôi</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
            {/* About the Bride - Modern Card */}
            <div className="group">
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>
                
                {/* Image with Modern Frame */}
                <div className="text-center lg:text-left mb-10">
                  <div className="relative inline-block">
                    <div className="relative w-72 h-72 mx-auto lg:mx-0 overflow-hidden rounded-full shadow-2xl border-4 border-white/80">
                      <Image
                        src={aboutBride.image}
                        alt={aboutBride.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent"></div>
                    </div>
                    {/* Floating Decorative Elements */}
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-rose-500/30 to-purple-500/30 rounded-full blur-lg hidden lg:block"></div>
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-xl hidden lg:block"></div>
                  </div>
                </div>
                
                <div className="text-center lg:text-left">
                  <div className="mb-8">
                    <h3 className="text-4xl lg:text-5xl font-extralight text-slate-800 mb-3">Cô dâu</h3>
                    <h4 className="text-2xl lg:text-3xl font-medium bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-6">
                      {aboutBride.name}
                    </h4>
                    <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-purple-400 mx-auto lg:mx-0"></div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-12">
                    {aboutBride.description}
                  </p>

                  <div className="space-y-10">
                    {/* Hobbies with Modern Design */}
                    <div>
                      <h5 className="text-xl font-medium text-slate-800 mb-6 flex items-center justify-center lg:justify-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full mr-3"></div>
                        Sở thích
                      </h5>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        {aboutBride.hobbies.map((hobby, index) => (
                          <span
                            key={index}
                            className="px-6 py-3 bg-white/80 backdrop-blur-sm text-slate-700 text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-200/50 hover:border-rose-300/50 hover:-translate-y-1"
                          >
                            {hobby}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Favorite Things */}
                    <div>
                      <h5 className="text-xl font-medium text-slate-800 mb-6 flex items-center justify-center lg:justify-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mr-3"></div>
                        Điều yêu thích
                      </h5>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        {aboutBride.favoriteThings.map((thing, index) => (
                          <span
                            key={index}
                            className="px-6 py-3 bg-gradient-to-r from-rose-100/80 to-purple-100/80 backdrop-blur-sm text-rose-800 text-sm font-medium rounded-full hover:from-rose-200/80 hover:to-purple-200/80 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
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

            {/* About the Groom - Modern Card */}
            <div className="group">
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>
                
                {/* Image with Modern Frame */}
                <div className="text-center lg:text-right mb-10">
                  <div className="relative inline-block">
                    <div className="relative w-72 h-72 mx-auto lg:mx-0 overflow-hidden rounded-full shadow-2xl border-4 border-white/80">
                      <Image
                        src={aboutGroom.image}
                        alt={aboutGroom.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
                    </div>
                    {/* Floating Decorative Elements */}
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-full blur-lg hidden lg:block"></div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl hidden lg:block"></div>
                  </div>
                </div>
                
                <div className="text-center lg:text-right">
                  <div className="mb-8">
                    <h3 className="text-4xl lg:text-5xl font-extralight text-slate-800 mb-3">Chú rể</h3>
                    <h4 className="text-2xl lg:text-3xl font-medium bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                      {aboutGroom.name}
                    </h4>
                    <div className="w-24 h-px bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto lg:ml-auto lg:mr-0"></div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-12">
                    {aboutGroom.description}
                  </p>

                  <div className="space-y-10">
                    {/* Hobbies with Modern Design */}
                    <div>
                      <h5 className="text-xl font-medium text-slate-800 mb-6 flex items-center justify-center lg:justify-end">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mr-3"></div>
                        Sở thích
                      </h5>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
                        {aboutGroom.hobbies.map((hobby, index) => (
                          <span
                            key={index}
                            className="px-6 py-3 bg-white/80 backdrop-blur-sm text-slate-700 text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200/50 hover:border-purple-300/50 hover:-translate-y-1"
                          >
                            {hobby}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Favorite Things */}
                    <div>
                      <h5 className="text-xl font-medium text-slate-800 mb-6 flex items-center justify-center lg:justify-end">
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></div>
                        Điều yêu thích
                      </h5>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
                        {aboutGroom.favoriteThings.map((thing, index) => (
                          <span
                            key={index}
                            className="px-6 py-3 bg-gradient-to-r from-purple-100/80 to-indigo-100/80 backdrop-blur-sm text-purple-800 text-sm font-medium rounded-full hover:from-purple-200/80 hover:to-indigo-200/80 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
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
        </div>
      </section>

      {/* Gallery Section - Ultra Modern Grid */}
      <section className="py-32 bg-gradient-to-b from-rose-50/90 via-purple-50/50 to-indigo-50/30 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-40 left-32 w-96 h-96 bg-gradient-to-r from-rose-500/8 to-purple-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-32 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-indigo-500/8 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-extralight text-transparent bg-gradient-to-r from-rose-800 via-purple-700 to-indigo-800 bg-clip-text mb-8">
              Gallery
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-purple-600 font-light">Những khoảnh khắc đẹp của chúng tôi</p>
          </div>
          
          {/* Ultra Modern Responsive Grid Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white/50 backdrop-blur-sm border border-white/30"
                onClick={() => openModal(index)}
              >
                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Modern Image Number Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm font-semibold text-slate-800">{index + 1}</span>
                </div>
                
                {/* Play Button Effect */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-6 h-6 text-slate-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>

                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm -z-10"></div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-16">
            <button
              onClick={() => openModal(0)}
              className="group relative inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white/90 text-slate-800 font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-white/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-indigo-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Xem tất cả ảnh
            </button>
          </div>
        </div>
      </section>

      {/* Event Section - Elegant Card */}
      <section className="py-24 bg-gradient-to-br from-rose-50/90 via-purple-50/50 to-indigo-50/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-transparent bg-gradient-to-r from-rose-800 via-purple-700 to-indigo-800 bg-clip-text mb-6">Schedule</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-purple-600 font-light">Chương trình ngày cưới của chúng tôi</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-rose-500 to-purple-500 px-8 py-12 text-center text-white">
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
                    <h5 className="text-lg font-medium text-purple-900">Thời gian</h5>
                    <p className="text-xl text-purple-700">{event.time}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-purple-900">Địa điểm</h5>
                    <p className="text-xl text-purple-700">{event.venue}</p>
                    <p className="text-purple-600">{event.address}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-rose-50/80 to-purple-50/80 rounded-2xl p-8 mb-10">
                <p className="text-lg text-purple-700 leading-relaxed text-center">
                  {event.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
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
      <section className="py-24 bg-gradient-to-br from-rose-50/90 via-purple-50/50 to-indigo-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-transparent bg-gradient-to-r from-rose-800 via-purple-700 to-indigo-800 bg-clip-text mb-6">Gift Registry</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-purple-600 font-light max-w-3xl mx-auto">
              Sự hiện diện của bạn trong đám cưới là món quà tuyệt vời nhất. Tuy nhiên, nếu bạn muốn dành tặng chúng tôi một món quà,
              chúng tôi rất biết ơn sự đóng góp của bạn cho tương lai chung.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bride's Gift Card */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-light text-transparent bg-gradient-to-r from-rose-800 via-purple-700 to-indigo-800 bg-clip-text mb-4">{giftRegistry.bride.name}</h3>
                <div className="w-16 h-px bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 mx-auto"></div>
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
      <footer className="py-20 bg-gradient-to-br from-rose-100/90 via-purple-100/70 to-indigo-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-light text-transparent bg-gradient-to-r from-rose-800 via-purple-700 to-indigo-800 bg-clip-text mb-6">
            {groomName} & {brideName}
          </h3>
          <div className="w-24 h-px bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 mx-auto mb-6"></div>
          <p className="text-xl text-purple-700 mb-4">{hashtag}</p>
          <p className="text-xl font-medium text-purple-800 mb-8">{weddingDate}</p>
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
