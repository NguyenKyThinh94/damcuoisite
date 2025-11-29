'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const templates = [
    {
      id: 'type1',
      name: 'Classic Peachy',
      description: 'Thiết kế cổ điển với tone màu cam đào ấm áp, phù hợp với đám cưới truyền thống',
      image: '/images/img13.jpg',
      href: '/previews/type1'
    },
    {
      id: 'type2', 
      name: 'Timeline Blue',
      description: 'Phong cách timeline hiện đại với màu xanh dương và tím, kể câu chuyện tình yêu',
      image: '/images/img14.jpg',
      href: '/previews/type2'
    },
    {
      id: 'type3',
      name: 'Botanical Green', 
      description: 'Thiết kế botanical với tone màu xanh lá cây, tươi mới và tự nhiên',
      image: '/images/img15.jpg',
      href: '/previews/type3'
    },
    {
      id: 'type4',
      name: 'Minimalist Rose',
      description: 'Phong cách tối giản hiện đại với màu hồng rose, thanh lịch và tinh tế',
      image: '/images/img16.jpg', 
      href: '/previews/type4'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 via-purple-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            {/* Logo/Brand */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                damcuoi.site
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
            </div>
            
            {/* Hero Content */}
            <h2 className="text-3xl md:text-5xl font-light text-gray-800 mb-6">
              Tạo Website Đám Cưới
              <span className="block text-2xl md:text-4xl font-normal text-gray-600 mt-2">
                Đẹp & Chuyên Nghiệp
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Dịch vụ thiết kế website đám cưới hiện đại với nhiều template tuyệt đẹp. 
              Dễ dàng tùy chỉnh, responsive hoàn hảo, và tích hợp đầy đủ tính năng cho ngày trọng đại của bạn.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/previews"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Xem Demo Ngay
              </Link>
              <a 
                href="https://zalo.me/0769779800"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-full border-2 border-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Liên Hệ Tư Vấn
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Templates Section */}
      <section id="templates" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              8+ Ví Dụ Tuyệt Đẹp
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chọn ví dụ phù hợp với phong cách đám cưới của bạn. Mỗi ví dụ đều responsive và có thể tùy chỉnh hoàn toàn.
            </p>
          </div>
          
          {/* Template Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {templates.map((template, index) => {
              // Define theme colors for each template
              const themeColors = {
                'type1': {
                  gradient: 'from-orange-500 to-red-500',
                  hoverGradient: 'hover:from-orange-500 hover:to-red-600',
                  shadow: 'shadow-orange-200',
                  hoverShadow: 'hover:shadow-orange-300'
                },
                'type2': {
                  gradient: 'from-blue-500 to-purple-600',
                  hoverGradient: 'hover:from-blue-500 hover:to-purple-600',
                  shadow: 'shadow-blue-200',
                  hoverShadow: 'hover:shadow-blue-300'
                },
                'type3': {
                  gradient: 'from-emerald-500 to-teal-600',
                  hoverGradient: 'hover:from-emerald-500 hover:to-teal-600',
                  shadow: 'shadow-emerald-200',
                  hoverShadow: 'hover:shadow-emerald-300'
                },
                'type4': {
                  gradient: 'from-rose-500 to-pink-600',
                  hoverGradient: 'hover:from-rose-500 hover:to-pink-600',
                  shadow: 'shadow-rose-200',
                  hoverShadow: 'hover:shadow-rose-300'
                }
              };
              
              const colors = themeColors[template.id as keyof typeof themeColors];
              
              return (
                <div key={template.id} className="group relative h-full">
                  {/* Template Card */}
                  <div className={`h-full flex flex-col bg-white rounded-2xl shadow-lg ${colors.shadow} hover:shadow-2xl ${colors.hoverShadow} transition-all duration-500 transform hover:-translate-y-4 overflow-hidden`}>
                    {/* Template Preview */}
                    <div className="relative h-64 overflow-hidden flex-shrink-0">
                      <Image
                        src={template.image}
                        alt={template.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Template Number */}
                      <div className={`absolute bottom-4 left-4 bg-gradient-to-br ${colors.gradient} rounded-full w-12 h-12 flex items-center justify-center shadow-lg`}>
                        <span className="text-lg font-bold text-white">{index + 1}</span>
                      </div>
                    </div>
                    
                    {/* Template Info */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="text-xl font-bold text-gray-800 mb-3">{template.name}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                        {template.description}
                      </p>
                      
                      {/* View Demo Button */}
                      <Link
                        href={template.href}
                        className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 ${colors.hoverGradient} text-gray-800 hover:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 group mt-auto`}
                      >
                        <span>Xem Demo</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Templates Button */}
          <div className="text-center mt-12">
            <Link
              href="/previews"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-pink-500 hover:to-purple-600 text-gray-800 hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Xem Thêm Ví Dụ</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="text-sm text-gray-500 mt-3">
              Type5, Type6, Type7, Type8 và nhiều hơn nữa...
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tính Năng Nổi Bật
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Responsive Design</h4>
              <p className="text-gray-600">Hiển thị hoàn hảo trên mọi thiết bị từ desktop đến mobile</p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Tùy Chỉnh Dễ Dàng</h4>
              <p className="text-gray-600">Thay đổi nội dung, hình ảnh và màu sắc theo ý muốn</p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Tốc Độ Nhanh</h4>
              <p className="text-gray-600">Tối ưu hiệu suất với Next.js và Tailwind CSS</p>
            </div>
            
            {/* Feature 4 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Gallery Đẹp</h4>
              <p className="text-gray-600">Trưng bày ảnh cưới với gallery responsive và lightbox</p>
            </div>
            
            {/* Feature 5 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Thông Tin Sự Kiện</h4>
              <p className="text-gray-600">Hiển thị địa điểm, thời gian và thêm vào lịch dễ dàng</p>
            </div>
            
            {/* Feature 6 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Mừng Cưới Online</h4>
              <p className="text-gray-600">Tích hợp QR code và thông tin tài khoản nhận mừng cưới</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Blogs
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá những bài viết hữu ích về xu hướng đám cưới và mẹo thiết kế website
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Blog Post 1 */}
            <Link href="/blogs/vi-sao-can-website" className="group block">
              <article className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-r from-pink-300 to-purple-400 relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Vì sao cần website đám cưới"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Xu hướng
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors mb-3">
                    Vì sao cần website đám cưới?
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Khám phá tầm quan trọng của website đám cưới trong thời đại số và những lợi ích không ngờ...
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>5 phút đọc</span>
                    <span className="text-pink-600 font-medium">Đọc tiếp →</span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Blog Post 2 */}
            <Link href="/blogs/chon-template-dam-cuoi" className="group block">
              <article className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-r from-blue-300 to-purple-400 relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Chọn template đám cưới"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Thiết kế
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-3">
                    10 mẹo chọn template hoàn hảo
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Hướng dẫn chi tiết cách chọn template phù hợp với phong cách đám cưới của bạn...
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>7 phút đọc</span>
                    <span className="text-blue-600 font-medium">Đọc tiếp →</span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Blog Post 3 */}
            <Link href="/blogs/xu-huong-thiet-ke-2024" className="group block">
              <article className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-r from-emerald-300 to-blue-400 relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Xu hướng thiết kế 2024"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Xu hướng
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors mb-3">
                    Xu hướng thiết kế 2024
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Cập nhật những xu hướng mới nhất trong thiết kế website đám cưới hiện đại...
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>6 phút đọc</span>
                    <span className="text-emerald-600 font-medium">Đọc tiếp →</span>
                  </div>
                </div>
              </article>
            </Link>
          </div>

          {/* View All Blogs Button */}
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Xem Tất Cả Blog</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              damcuoi.site
            </h4>
            <p className="text-gray-400 mb-6">
              Dịch vụ thiết kế website đám cưới chuyên nghiệp và hiện đại
            </p>
            
            <div className="flex justify-center space-x-8 mb-8">
              <a 
                href="https://www.facebook.com/kythinh.nguyen" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a 
                href="https://zalo.me/0769779800"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Zalo: 0769779800
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © 2024 damcuoi.site. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
