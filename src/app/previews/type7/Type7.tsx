'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { DataInterface } from '../data.interface';
import { RSVPData, RSVPFormData } from './rsvp.interface';

interface Type7ClientProps {
  data: DataInterface;
}

export default function Type7({ data }: Type7ClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [rsvpList, setRSVPList] = useState<RSVPData[]>([]);
  const [showRSVPForm, setShowRSVPForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    email: '',
    phone: '',
    attendance: 'yes',
    guestCount: 1,
    message: '',
    dietaryRestrictions: ''
  });

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

  // Fetch RSVP data
  useEffect(() => {
    fetchRSVPData();
  }, []);

  const fetchRSVPData = async () => {
    try {
      const response = await fetch('/api/rsvp');
      const result = await response.json();
      if (result.success) {
        setRSVPList(result.data);
      }
    } catch (error) {
      console.error('Error fetching RSVP data:', error);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (result.success) {
        alert('RSVP đã được gửi thành công!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          attendance: 'yes',
          guestCount: 1,
          message: '',
          dietaryRestrictions: ''
        });
        setShowRSVPForm(false);
        fetchRSVPData(); // Refresh the list
      } else {
        alert('Có lỗi xảy ra: ' + result.error);
      }
    } catch (error) {
      alert('Có lỗi xảy ra khi gửi RSVP');
      console.error('Error submitting RSVP:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guestCount' ? parseInt(value) || 0 : value
    }));
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section - Ocean Theme */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600">
        {/* Background Image with Ocean Overlay */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Wedding Hero"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-800/70 via-cyan-700/60 to-blue-800/70"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="space-y-12">
            {/* Names with Ocean Style */}
            <div className="space-y-8">
              <div className="relative">
                <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-wider uppercase bg-gradient-to-r from-white via-cyan-100 to-teal-100 bg-clip-text text-transparent drop-shadow-2xl">
                  {groomName}
                </h1>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 blur-3xl -z-10"></div>
              </div>
              
              <div className="flex items-center justify-center space-x-12">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-cyan-200"></div>
                <div className="relative">
                  <span className="text-4xl font-light">❤</span>
                  <div className="absolute inset-0 animate-ping">
                    <span className="text-4xl font-light opacity-40">❤</span>
                  </div>
                </div>
                <div className="w-32 h-1 bg-gradient-to-l from-transparent via-white to-cyan-200"></div>
              </div>
              
              <div className="relative">
                <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-wider uppercase bg-gradient-to-r from-teal-100 via-cyan-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                  {brideName}
                </h1>
                <div className="absolute -inset-4 bg-gradient-to-l from-cyan-400/20 to-teal-400/20 blur-3xl -z-10"></div>
              </div>
            </div>

            {/* Wedding Info */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <p className="text-2xl md:text-3xl font-medium mb-4 text-cyan-100">{weddingDate}</p>
                <p className="text-xl md:text-2xl text-white/90">{location}</p>
                <p className="text-lg mt-4 text-cyan-200">{hashtag}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center bg-white/5 backdrop-blur-sm">
              <div className="w-1 h-4 bg-white/80 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Clean Ocean Design */}
      <section className="py-24 bg-gradient-to-b from-cyan-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-teal-700 via-cyan-600 to-blue-600 bg-clip-text mb-8">
              About Us
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-8"></div>
            <p className="text-xl text-teal-700">Câu chuyện của chúng tôi</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Bride Card */}
            <div className="group relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-teal-200/50 hover:shadow-2xl transition-all duration-500">
                <div className="text-center mb-8">
                  <div className="relative w-80 h-80 mx-auto mb-8">
                    <Image
                      src={aboutBride.image}
                      alt={aboutBride.name}
                      fill
                      className="object-cover rounded-full shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-teal-500/20 to-transparent"></div>
                  </div>
                  <h3 className="text-4xl font-bold text-teal-800 mb-2">Cô dâu</h3>
                  <h4 className="text-3xl font-medium text-cyan-700 mb-6">{aboutBride.name}</h4>
                  <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto"></div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                  {aboutBride.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-semibold text-teal-800 mb-4">Sở thích</h5>
                    <div className="flex flex-wrap gap-3">
                      {aboutBride.hobbies.map((hobby, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-teal-100 text-teal-800 text-sm font-medium rounded-full hover:bg-teal-200 transition-colors"
                        >
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-teal-800 mb-4">Điều yêu thích</h5>
                    <div className="flex flex-wrap gap-3">
                      {aboutBride.favoriteThings.map((thing, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-cyan-100 text-cyan-800 text-sm font-medium rounded-full hover:bg-cyan-200 transition-colors"
                        >
                          {thing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Groom Card */}
            <div className="group relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-cyan-200/50 hover:shadow-2xl transition-all duration-500">
                <div className="text-center mb-8">
                  <div className="relative w-80 h-80 mx-auto mb-8">
                    <Image
                      src={aboutGroom.image}
                      alt={aboutGroom.name}
                      fill
                      className="object-cover rounded-full shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
                  </div>
                  <h3 className="text-4xl font-bold text-cyan-800 mb-2">Chú rể</h3>
                  <h4 className="text-3xl font-medium text-teal-700 mb-6">{aboutGroom.name}</h4>
                  <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto"></div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                  {aboutGroom.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-semibold text-cyan-800 mb-4">Sở thích</h5>
                    <div className="flex flex-wrap gap-3">
                      {aboutGroom.hobbies.map((hobby, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-cyan-100 text-cyan-800 text-sm font-medium rounded-full hover:bg-cyan-200 transition-colors"
                        >
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-cyan-800 mb-4">Điều yêu thích</h5>
                    <div className="flex flex-wrap gap-3">
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

      {/* Gallery Section - Ocean Grid */}
      <section className="py-24 bg-gradient-to-b from-teal-50 to-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-cyan-700 via-teal-600 to-blue-600 bg-clip-text mb-8">
              Gallery
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-8"></div>
            <p className="text-xl text-cyan-700">Những khoảnh khắc đẹp của chúng tôi</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white/50 backdrop-blur-sm"
                onClick={() => openModal(index)}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm font-semibold text-teal-800">{index + 1}</span>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <svg className="w-6 h-6 text-teal-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section - Main Feature */}
      <section className="py-24 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
              RSVP
            </h2>
            <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Vui lòng xác nhận tham dự để chúng tôi có thể chuẩn bị tốt nhất cho ngày đặc biệt này
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* RSVP Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-teal-800 mb-8 text-center">Xác nhận tham dự</h3>
              
              {!showRSVPForm ? (
                <div className="text-center">
                  <button
                    onClick={() => setShowRSVPForm(true)}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Gửi RSVP
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-teal-800 mb-2">
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder="Nhập họ và tên"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-teal-800 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder="Nhập email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-teal-800 mb-2">
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-teal-800 mb-2">
                        Tham dự *
                      </label>
                      <select
                        name="attendance"
                        value={formData.attendance}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      >
                        <option value="yes">Có, tôi sẽ tham dự</option>
                        <option value="no">Không, tôi không thể tham dự</option>
                        <option value="maybe">Có thể, chưa chắc chắn</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-teal-800 mb-2">
                      Số lượng khách
                    </label>
                    <input
                      type="number"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      min="0"
                      max="10"
                      className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-teal-800 mb-2">
                      Yêu cầu đặc biệt về thực phẩm
                    </label>
                    <input
                      type="text"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="Ví dụ: Ăn chay, dị ứng..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-teal-800 mb-2">
                      Lời nhắn
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Gửi lời chúc đến cô dâu chú rể..."
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowRSVPForm(false)}
                      className="flex-1 px-6 py-3 border-2 border-teal-500 text-teal-600 font-semibold rounded-xl hover:bg-teal-50 transition-colors"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Đang gửi...' : 'Gửi RSVP'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* RSVP List */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-teal-800 mb-8 text-center">Danh sách xác nhận</h3>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {rsvpList.map((rsvp) => (
                  <div key={rsvp.id} className="bg-teal-50 rounded-xl p-4 border border-teal-100">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-teal-800">{rsvp.name}</h4>
                        <p className="text-sm text-teal-600">{rsvp.email}</p>
                        <div className="flex items-center mt-2 space-x-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            rsvp.attendance === 'yes' 
                              ? 'bg-green-100 text-green-800' 
                              : rsvp.attendance === 'no'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {rsvp.attendance === 'yes' ? 'Tham dự' : rsvp.attendance === 'no' ? 'Không tham dự' : 'Chưa chắc'}
                          </span>
                          {rsvp.guestCount > 0 && (
                            <span className="text-xs text-teal-600">
                              {rsvp.guestCount} khách
                            </span>
                          )}
                        </div>
                        {rsvp.message && (
                          <p className="text-sm text-gray-600 mt-2 italic">"{rsvp.message}"</p>
                        )}
                      </div>
                      <span className="text-xs text-teal-500">
                        {new Date(rsvp.createdAt).toLocaleDateString('vi-VN')}
                      </span>
                    </div>
                  </div>
                ))}
                
                {rsvpList.length === 0 && (
                  <div className="text-center py-8 text-teal-600">
                    <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p>Chưa có xác nhận tham dự nào</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section className="py-24 bg-gradient-to-b from-cyan-100 to-teal-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-teal-700 via-cyan-600 to-blue-600 bg-clip-text mb-8">
              Wedding Details
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-8"></div>
            <p className="text-xl text-teal-700">Thông tin chi tiết về đám cưới</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-teal-200/50">
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-8 py-12 text-center text-white">
              <h3 className="text-4xl font-bold mb-4">{event.date}</h3>
              <h4 className="text-2xl font-medium">{event.title}</h4>
            </div>
            
            <div className="p-12">
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h5 className="text-xl font-bold text-teal-800 mb-4">Thời gian</h5>
                  <p className="text-lg text-gray-700">{event.time}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h5 className="text-xl font-bold text-cyan-800 mb-4">Địa điểm</h5>
                  <p className="text-lg text-gray-700 font-medium">{event.venue}</p>
                  <p className="text-gray-600">{event.address}</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 mb-12">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  {event.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Xem bản đồ
                </a>
                
                <a
                  href={event.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-teal-50 text-teal-600 font-semibold rounded-2xl border-2 border-teal-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
      <section className="py-24 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-cyan-700 via-teal-600 to-blue-600 bg-clip-text mb-8">
              Gift Registry
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-8"></div>
            <p className="text-xl text-teal-700 max-w-4xl mx-auto">
              Sự hiện diện của bạn trong đám cưới là món quà tuyệt vời nhất. Tuy nhiên, nếu bạn muốn dành tặng chúng tôi một món quà,
              chúng tôi rất biết ơn sự đóng góp của bạn cho tương lai chung.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bride's Gift Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-teal-200/50">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-center py-10">
                <h3 className="text-3xl font-bold">{giftRegistry.bride.name}</h3>
              </div>
              
              <div className="p-8">
                <div className="space-y-6 mb-8">
                  <div className="bg-teal-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-teal-700 font-semibold">Ngân hàng</span>
                      <span className="text-teal-900 font-bold">{giftRegistry.bride.bankName}</span>
                    </div>
                  </div>
                  
                  <div className="bg-cyan-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-cyan-700 font-semibold">Số tài khoản</span>
                      <span className="text-cyan-900 font-bold font-mono">{giftRegistry.bride.accountNumber}</span>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-teal-700 font-semibold">Tên tài khoản</span>
                      <span className="text-teal-900 font-bold">{giftRegistry.bride.accountName}</span>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <p className="text-sm text-teal-600 mb-4">Quét mã QR để gửi quà</p>
                  <div className="inline-block p-4 bg-white rounded-2xl shadow-lg border border-teal-200">
                    <Image
                      src={giftRegistry.bride.qrCode}
                      alt={`QR Code for ${giftRegistry.bride.name}`}
                      width={160}
                      height={160}
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(giftRegistry.bride.accountNumber);
                    alert('Số tài khoản đã được sao chép!');
                  }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Sao chép số tài khoản
                </button>
              </div>
            </div>

            {/* Groom's Gift Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-cyan-200/50">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-10">
                <h3 className="text-3xl font-bold">{giftRegistry.groom.name}</h3>
              </div>
              
              <div className="p-8">
                <div className="space-y-6 mb-8">
                  <div className="bg-cyan-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-cyan-700 font-semibold">Ngân hàng</span>
                      <span className="text-cyan-900 font-bold">{giftRegistry.groom.bankName}</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-700 font-semibold">Số tài khoản</span>
                      <span className="text-blue-900 font-bold font-mono">{giftRegistry.groom.accountNumber}</span>
                    </div>
                  </div>
                  
                  <div className="bg-cyan-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-cyan-700 font-semibold">Tên tài khoản</span>
                      <span className="text-cyan-900 font-bold">{giftRegistry.groom.accountName}</span>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <p className="text-sm text-cyan-600 mb-4">Quét mã QR để gửi quà</p>
                  <div className="inline-block p-4 bg-white rounded-2xl shadow-lg border border-cyan-200">
                    <Image
                      src={giftRegistry.groom.qrCode}
                      alt={`QR Code for ${giftRegistry.groom.name}`}
                      width={160}
                      height={160}
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(giftRegistry.groom.accountNumber);
                    alert('Số tài khoản đã được sao chép!');
                  }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Sao chép số tài khoản
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-gradient-to-br from-teal-800 via-cyan-800 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold mb-6">
            {groomName} & {brideName}
          </h3>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl mb-4">{hashtag}</p>
          <p className="text-xl font-medium mb-8">{weddingDate}</p>
          <div className="space-y-2">
            <p className="text-lg font-light italic">
              "Tình yêu là điều duy nhất tăng lên khi được chia sẻ"
            </p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
          <div className="relative max-w-5xl max-h-[90vh] w-full mx-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-cyan-300 z-10 bg-black bg-opacity-60 rounded-full p-3 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-cyan-300 z-10 bg-black bg-opacity-60 rounded-full p-3 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-cyan-300 z-10 bg-black bg-opacity-60 rounded-full p-3 transition-colors"
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
