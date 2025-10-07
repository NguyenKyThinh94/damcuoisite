import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Checklist hoàn chỉnh cho website đám cưới | damcuoi.site',
  description: 'Danh sách kiểm tra đầy đủ để đảm bảo website đám cưới của bạn có tất cả thông tin cần thiết và hoạt động hoàn hảo.',
  keywords: ['checklist đám cưới', 'website đám cưới hoàn chỉnh', 'danh sách kiểm tra', 'chuẩn bị đám cưới'],
  openGraph: {
    title: 'Checklist hoàn chỉnh cho website đám cưới',
    description: 'Danh sách kiểm tra đầy đủ để đảm bảo website đám cưới hoàn hảo',
    type: 'article',
    images: ['https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function ChecklistWebsite() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="aspect-video max-w-4xl mx-auto mb-8 rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Checklist hoàn chỉnh cho website đám cưới"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            Hướng dẫn
          </span>
          <span className="text-gray-500 text-sm">28 tháng 5, 2024</span>
          <span className="text-gray-500 text-sm">10 phút đọc</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
          Checklist hoàn chỉnh cho website đám cưới
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Danh sách kiểm tra đầy đủ để đảm bảo website đám cưới của bạn có tất cả thông tin cần thiết 
          và hoạt động hoàn hảo cho ngày trọng đại.
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-4xl mx-auto">
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
          <p className="text-green-800 font-medium mb-0">
            ✅ <strong>Complete Guide:</strong> Checklist gồm 50+ items quan trọng được chia thành 8 categories chính, 
            từ content cơ bản đến technical optimization. Print ra để check từng mục một cách có hệ thống.
          </p>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Tạo một website đám cưới hoàn hảo đòi hỏi sự chú ý đến nhiều chi tiết. 
          Checklist này sẽ đảm bảo bạn không bỏ sót bất kỳ yếu tố quan trọng nào.
        </p>

        {/* Pre-Launch Planning */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              1
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Pre-Launch Planning</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Wedding planning checklist"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-4">📋 Planning Essentials:</h4>
              <ul className="text-green-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-green-600" />
                  <span>Xác định wedding date & venue</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-green-600" />
                  <span>Chọn domain name (ideally: tencapledoi.com)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-green-600" />
                  <span>Thu thập photos: engagement, couple, family</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-green-600" />
                  <span>Viết love story draft</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-green-600" />
                  <span>Xác định guest list sơ bộ</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-green-600" />
                  <span>Quyết định website style/theme</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-4">🎨 Design Decisions:</h4>
              <ul className="text-emerald-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-emerald-600" />
                  <span>Chọn color palette chính</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-emerald-600" />
                  <span>Quyết định typography (fonts)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-emerald-600" />
                  <span>Chọn template/design style</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-emerald-600" />
                  <span>Tạo mood board/inspiration</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-emerald-600" />
                  <span>Quyết định navigation structure</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-emerald-600" />
                  <span>Plan page hierarchy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Essential Content */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              2
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Essential Content</h2>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Đây là những thông tin cần thiết mà mọi wedding website phải có để guests 
            có đầy đủ thông tin về đám cưới của bạn.
          </p>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-4">💕 Couple Information:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-blue-600" />
                    <span>Tên đầy đủ cả hai</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-blue-600" />
                    <span>Hero photo chất lượng cao</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-blue-600" />
                    <span>Love story/How we met</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-blue-600" />
                    <span>Proposal story</span>
                  </li>
                </ul>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-blue-600" />
                    <span>Individual photos/bios</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-blue-600" />
                    <span>Timeline relationship</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-blue-600" />
                    <span>Fun facts về cặp đôi</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-blue-600" />
                    <span>Wedding hashtag</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h4 className="font-semibold text-cyan-800 mb-4">📅 Event Details:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-cyan-700 space-y-2 text-sm">
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-cyan-600" />
                    <span>Wedding date & time</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-cyan-600" />
                    <span>Ceremony venue & address</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-cyan-600" />
                    <span>Reception venue & address</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-cyan-600" />
                    <span>Detailed timeline/schedule</span>
                  </li>
                </ul>
                <ul className="text-cyan-700 space-y-2 text-sm">
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-cyan-600" />
                    <span>Dress code instructions</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-cyan-600" />
                    <span>Weather forecast widget</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-cyan-600" />
                    <span>Parking information</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-cyan-600" />
                    <span>Contact numbers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Features */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              3
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Interactive Features</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-4">📝 RSVP System:</h4>
              <ul className="text-purple-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-purple-600" />
                  <span>RSVP form với tất cả fields cần thiết</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-purple-600" />
                  <span>RSVP deadline rõ ràng</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-purple-600" />
                  <span>Meal preferences options</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-purple-600" />
                  <span>Dietary restrictions field</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-purple-600" />
                  <span>+1 guest options</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-purple-600" />
                  <span>Confirmation email setup</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-purple-600" />
                  <span>Admin dashboard để view responses</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg">
              <h4 className="font-semibold text-pink-800 mb-4">📸 Media Features:</h4>
              <ul className="text-pink-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-pink-600" />
                  <span>Photo gallery với lightbox</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-pink-600" />
                  <span>Video embeds (proposal, engagement)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-pink-600" />
                  <span>Background music player</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-pink-600" />
                  <span>Guest photo sharing feature</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-pink-600" />
                  <span>Instagram feed integration</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-pink-600" />
                  <span>Social media share buttons</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guest Information */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              4
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Guest Information & Services</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-4">🏨 Accommodation:</h4>
              <ul className="text-orange-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-orange-600" />
                  <span>Hotel recommendations</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-orange-600" />
                  <span>Group booking codes</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-orange-600" />
                  <span>Distance to venue</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-orange-600" />
                  <span>Hotel contact info</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-orange-600" />
                  <span>Alternative options</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-4">🚗 Transportation:</h4>
              <ul className="text-red-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-red-600" />
                  <span>Directions to venues</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-red-600" />
                  <span>Google Maps integration</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-red-600" />
                  <span>Parking information</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-red-600" />
                  <span>Public transport options</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-red-600" />
                  <span>Ride sharing suggestions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-rose-50 p-6 rounded-lg">
              <h4 className="font-semibold text-rose-800 mb-4">🎁 Gifts & Registry:</h4>
              <ul className="text-rose-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-rose-600" />
                  <span>Gift registry links</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-rose-600" />
                  <span>Honeymoon fund option</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-rose-600" />
                  <span>Bank transfer details</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-rose-600" />
                  <span>QR code cho chuyển khoản</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-rose-600" />
                  <span>Gift delivery instructions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Optimization */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              5
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Technical Optimization</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-teal-50 p-6 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-4">📱 Mobile & Performance:</h4>
              <ul className="text-teal-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-teal-600" />
                  <span>Mobile responsive design</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-teal-600" />
                  <span>Touch-friendly interface</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-teal-600" />
                  <span>Fast loading speed (&lt; 3s)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-teal-600" />
                  <span>Optimized images</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-teal-600" />
                  <span>Cross-browser compatibility</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-teal-600" />
                  <span>SSL certificate (HTTPS)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h4 className="font-semibold text-cyan-800 mb-4">🔍 SEO & Analytics:</h4>
              <ul className="text-cyan-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-cyan-600" />
                  <span>Page titles & meta descriptions</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-cyan-600" />
                  <span>Alt text cho tất cả images</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-cyan-600" />
                  <span>Google Analytics setup</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-cyan-600" />
                  <span>Social media meta tags</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-cyan-600" />
                  <span>Sitemap generation</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-cyan-600" />
                  <span>Robots.txt file</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testing & QA */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              6
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Testing & Quality Assurance</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-indigo-800 mb-4">🔍 Functionality Testing:</h4>
              <ul className="text-indigo-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-indigo-600" />
                  <span>All links work correctly</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-indigo-600" />
                  <span>RSVP form submits properly</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-indigo-600" />
                  <span>Contact forms functional</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-indigo-600" />
                  <span>Image gallery works</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-indigo-600" />
                  <span>Music player functions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-4">📱 Device Testing:</h4>
              <ul className="text-purple-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-purple-600" />
                  <span>iPhone (Safari)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-purple-600" />
                  <span>Android (Chrome)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-purple-600" />
                  <span>iPad (Safari)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-purple-600" />
                  <span>Desktop Chrome</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-purple-600" />
                  <span>Desktop Firefox</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg">
              <h4 className="font-semibold text-pink-800 mb-4">✍️ Content Review:</h4>
              <ul className="text-pink-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-pink-600" />
                  <span>Spell check tất cả content</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-pink-600" />
                  <span>Verify dates & times</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-pink-600" />
                  <span>Check addresses chính xác</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-pink-600" />
                  <span>Confirm phone numbers</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-pink-600" />
                  <span>Final partner approval</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Launch & Promotion */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-rose-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              7
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Launch & Promotion</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-rose-50 p-6 rounded-lg">
              <h4 className="font-semibold text-rose-800 mb-4">🚀 Pre-Launch:</h4>
              <ul className="text-rose-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-rose-600" />
                  <span>Backup website completely</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-rose-600" />
                  <span>Set up monitoring/uptime alerts</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-rose-600" />
                  <span>Test RSVP submissions</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-rose-600" />
                  <span>Prepare social media posts</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-rose-600" />
                  <span>Create QR code cho easy sharing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg">
              <h4 className="font-semibold text-pink-800 mb-4">📢 Sharing Strategy:</h4>
              <ul className="text-pink-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-pink-600" />
                  <span>Share với family trước</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-pink-600" />
                  <span>Post trên social media</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-pink-600" />
                  <span>Send direct messages</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-pink-600" />
                  <span>Include trong paper invitations</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-pink-600" />
                  <span>Email announcements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Post-Launch Maintenance */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              8
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Post-Launch Maintenance</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-4">📊 Monitoring & Updates:</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-gray-600" />
                  <span>Monitor RSVP responses weekly</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-gray-600" />
                  <span>Check website uptime daily</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-gray-600" />
                  <span>Update content khi có thay đổi</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-gray-600" />
                  <span>Review analytics weekly</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-gray-600" />
                  <span>Backup data regularly</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="font-semibold text-slate-800 mb-4">💌 Guest Communication:</h4>
              <ul className="text-slate-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-slate-600" />
                  <span>Send RSVP reminders</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-slate-600" />
                  <span>Post updates về weather/changes</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-slate-600" />
                  <span>Share additional photos</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-slate-600" />
                  <span>Thank you message post-wedding</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 text-slate-600" />
                  <span>Archive site sau đám cưới</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Printable Summary */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">🖨️ Printable Quick Checklist</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Download và print checklist tóm tắt để track progress một cách dễ dàng
          </p>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-2xl font-bold">15</div>
              <div>Planning items</div>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-2xl font-bold">18</div>
              <div>Content pieces</div>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-2xl font-bold">12</div>
              <div>Technical checks</div>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-2xl font-bold">8</div>
              <div>Launch tasks</div>
            </div>
          </div>
        </div>

        {/* Timeline Suggestion */}
        <div className="bg-white rounded-2xl p-8 border border-green-200 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ⏰ Suggested Timeline
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                6-8W
              </div>
              <div>
                <h4 className="font-semibold text-green-800">6-8 tuần trước đám cưới</h4>
                <p className="text-green-600 text-sm">Start planning, chọn template, gather content</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                4-6W
              </div>
              <div>
                <h4 className="font-semibold text-blue-800">4-6 tuần trước</h4>
                <p className="text-blue-600 text-sm">Build website, add content, setup RSVP</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                2-4W
              </div>
              <div>
                <h4 className="font-semibold text-purple-800">2-4 tuần trước</h4>
                <p className="text-purple-600 text-sm">Test thoroughly, launch, start sharing</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-orange-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                0-2W
              </div>
              <div>
                <h4 className="font-semibold text-orange-800">0-2 tuần trước</h4>
                <p className="text-orange-600 text-sm">Monitor RSVPs, send reminders, final updates</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl p-8 border border-green-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sẵn sàng bắt đầu với checklist này?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Template của chúng tôi đã tích hợp sẵn tất cả features trong checklist để bạn không bỏ sót gì
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/previews/type1"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-emerald-700 transition-all"
            >
              Chọn Template & Bắt đầu
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/blogs"
              className="inline-flex items-center px-6 py-3 border-2 border-green-500 text-green-600 font-semibold rounded-full hover:bg-green-50 transition-all"
            >
              Đọc thêm Hướng dẫn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
