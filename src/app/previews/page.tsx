'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PreviewsPage() {
  const previews = [
    {
      id: 'type1',
      name: 'Classic Peachy',
      description: 'Thiết kế cổ điển với tone màu cam đào ấm áp, phù hợp với đám cưới truyền thống',
      thumbnail: '/images/img13.jpg',
      href: '/previews/type1',
      colors: 'from-orange-500 to-red-500',
      textColor: 'text-orange-600'
    },
    {
      id: 'type2',
      name: 'Timeline Blue',
      description: 'Phong cách timeline hiện đại với màu xanh dương và tím, kể câu chuyện tình yêu',
      thumbnail: '/images/img14.jpg',
      href: '/previews/type2',
      colors: 'from-blue-500 to-purple-600',
      textColor: 'text-blue-600'
    },
    {
      id: 'type3',
      name: 'Botanical Green',
      description: 'Thiết kế botanical với tone màu xanh lá cây, tươi mới và tự nhiên',
      thumbnail: '/images/img15.jpg',
      href: '/previews/type3',
      colors: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-600'
    },
    {
      id: 'type4',
      name: 'Minimalist Rose',
      description: 'Phong cách tối giản hiện đại với màu hồng rose, thanh lịch và tinh tế',
      thumbnail: '/images/img16.jpg',
      href: '/previews/type4',
      colors: 'from-rose-500 to-pink-600',
      textColor: 'text-rose-600'
    },
    {
      id: 'type5',
      name: 'Elegant Lavender',
      description: 'Thiết kế thanh lịch với tone màu tím nhạt, mang lại cảm giác sang trọng và tinh tế',
      thumbnail: '/images/img5.jpg',
      href: '/previews/type5',
      colors: 'from-purple-400 to-indigo-500',
      textColor: 'text-purple-600'
    },
    {
      id: 'type6',
      name: 'Modern Sunset',
      description: 'Phong cách hiện đại với gradient hoàng hôn, ấm áp và lãng mạn',
      thumbnail: '/images/img6.jpg',
      href: '/previews/type6',
      colors: 'from-orange-400 to-pink-500',
      textColor: 'text-orange-600'
    },
    {
      id: 'type7',
      name: 'Vintage Garden',
      description: 'Thiết kế vintage với chi tiết hoa lá, mang lại sự lãng mạn và cổ điển',
      thumbnail: '/images/img7.jpg',
      href: '/previews/type7',
      colors: 'from-amber-600 to-rose-600',
      textColor: 'text-amber-700'
    },
    {
      id: 'type8',
      name: 'Contemporary Chic',
      description: 'Thiết kế hiện đại và nổi bật với màu sắc độc đáo, phù hợp với cặp đôi trendy',
      thumbnail: '/images/img8.jpg',
      href: '/previews/type8',
      colors: 'from-slate-600 to-gray-700',
      textColor: 'text-slate-700'
    },
    {
      id: 'type9',
      name: 'Modern Simple',
      description: 'Phong cách đơn giản, tối ưu hoàn toàn cho mobile, dễ nhìn, thoải mái',
      thumbnail: '/images/img9.jpg',
      href: '/previews/type9',
      colors: 'from-blue-500 to-cyan-500',
      textColor: 'text-blue-600'
    },
    {
      id: 'type10',
      name: 'Minimal Clean',
      description: 'Thiết kế tối giản, sạch sẽ, mobile-first, nhanh tải, tinh tế',
      thumbnail: '/images/img10.jpg',
      href: '/previews/type10',
      colors: 'from-gray-600 to-gray-700',
      textColor: 'text-gray-700'
    },
    {
      id: 'type11',
      name: 'Modern Compact',
      description: 'Compact layout, nhanh tải, ít khoảng trắng, hoàn hảo cho di động',
      thumbnail: '/images/img11.jpg',
      href: '/previews/type11',
      colors: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-600'
    },
    {
      id: 'type12',
      name: 'Sweet & Simple',
      description: 'Ngọt ngào, đơn giản, đẹp mắt, phù hợp với cặp đôi yêu thích sự thanh lịch',
      thumbnail: '/images/img12.jpg',
      href: '/previews/type12',
      colors: 'from-pink-500 to-rose-600',
      textColor: 'text-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="relative overflow-hidden pt-12 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 via-purple-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-gray-100 transition-colors mb-6 shadow-lg"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              12+ Ví Dụ Đám Cưới
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chọn một ví dụ dưới đây để xem bản demo chi tiết. Mỗi ví dụ đều có thể tùy chỉnh hoàn toàn theo ý của bạn.
            </p>
          </div>
        </div>
      </header>

      {/* Preview Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {previews.map((preview, index) => (
              <Link
                key={preview.id}
                href={preview.href}
                className="group"
              >
                <div className="h-full flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer">
                  {/* Thumbnail */}
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <Image
                      src={preview.thumbnail}
                      alt={preview.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    
                    {/* Template Number Badge */}
                    <div className={`absolute bottom-4 right-4 bg-gradient-to-br ${preview.colors} rounded-full w-14 h-14 flex items-center justify-center shadow-lg`}>
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className={`text-2xl font-bold ${preview.textColor} mb-2`}>
                      {preview.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                      {preview.description}
                    </p>
                    
                    {/* View Button */}
                    <div className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${preview.colors} hover:shadow-lg text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 group`}>
                      <span>Xem Demo</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
