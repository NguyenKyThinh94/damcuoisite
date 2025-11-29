import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '10 mẹo chọn template đám cưới hoàn hảo | damcuoi.site',
  description: 'Hướng dẫn chi tiết cách chọn template phù hợp với phong cách đám cưới của bạn. Từ màu sắc đến layout, tất cả đều quan trọng.',
  keywords: ['chọn template đám cưới', 'thiết kế website cưới', 'template wedding', 'mẹo chọn template', 'phong cách đám cưới'],
  openGraph: {
    title: '10 mẹo chọn template đám cưới hoàn hảo',
    description: 'Hướng dẫn chi tiết cách chọn template phù hợp với phong cách đám cưới của bạn',
    type: 'article',
    images: ['https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function ChonTemplateDamCuoi() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="aspect-video max-w-4xl mx-auto mb-8 rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Chọn template đám cưới hoàn hảo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            Thiết kế
          </span>
          <span className="text-gray-500 text-sm">8 tháng 6, 2024</span>
          <span className="text-gray-500 text-sm">7 phút đọc</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          10 mẹo chọn template đám cưới hoàn hảo
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Hướng dẫn chi tiết cách chọn template phù hợp với phong cách đám cưới của bạn. 
          Từ màu sắc đến layout, tất cả đều quan trọng cho ngày trọng đại.
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-4xl mx-auto">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
          <p className="text-blue-800 font-medium mb-0">
            🎨 <strong>Quick Guide:</strong> Chọn template đám cưới không chỉ về thẩm mỹ mà còn về functionality, 
            user experience và khả năng reflect cá tính của cặp đôi. 10 tips này sẽ giúp bạn ra quyết định đúng đắn.
          </p>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Với hàng trăm template đám cưới có sẵn trên thị trường, việc chọn lựa có thể trở nên overwhelming. 
          Đây là hướng dẫn từng bước giúp bạn tìm được template hoàn hảo cho ngày trọng đại.
        </p>

        {/* Tip 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              1
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Xác định phong cách đám cưới</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1460978812857-470ed1c77af0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Wedding style guide"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <p className="text-gray-600 leading-relaxed mb-4">
            Trước khi chọn template, hãy xác định rõ phong cách đám cưới của bạn. 
            Điều này sẽ làm nền tảng cho mọi quyết định thiết kế sau này.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">🎭 Phong cách phổ biến:</h4>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Classic/Traditional - Thanh lịch, trang trọng</li>
                <li>• Modern/Contemporary - Hiện đại, tối giản</li>
                <li>• Rustic/Bohemian - Tự nhiên, phóng khoáng</li>
                <li>• Vintage/Retro - Cổ điển, hoài cổ</li>
                <li>• Luxury/Glamorous - Sang trọng, lộng lẫy</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">💡 Cách xác định:</h4>
              <ul className="text-purple-700 space-y-1 text-sm">
                <li>• Xem lại Pinterest board của bạn</li>
                <li>• Phong cách trang phục cưới</li>
                <li>• Venue/địa điểm tổ chức</li>
                <li>• Sở thích cá nhân của cặp đôi</li>
                <li>• Budget và quy mô đám cưới</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tip 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-rose-100 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              2
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Chọn color palette phù hợp</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Wedding color palette"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <p className="text-gray-600 leading-relaxed mb-4">
            Màu sắc quyết định 70% cảm xúc đầu tiên của người xem. Chọn palette phù hợp với 
            theme đám cưới và có thể customize dễ dàng.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <div className="w-full h-20 bg-gradient-to-r from-red-300 to-pink-400 rounded-lg mb-3"></div>
              <h5 className="font-semibold text-red-800">Warm Tones</h5>
              <p className="text-red-600 text-sm">Romantic, passionate</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="w-full h-20 bg-gradient-to-r from-blue-300 to-purple-400 rounded-lg mb-3"></div>
              <h5 className="font-semibold text-blue-800">Cool Tones</h5>
              <p className="text-blue-600 text-sm">Elegant, peaceful</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="w-full h-20 bg-gradient-to-r from-green-300 to-emerald-400 rounded-lg mb-3"></div>
              <h5 className="font-semibold text-green-800">Earth Tones</h5>
              <p className="text-green-600 text-sm">Natural, grounded</p>
            </div>
          </div>
        </div>

        {/* Tip 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              3
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Kiểm tra tính năng cần thiết</h2>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Đảm bảo template có đầy đủ tính năng bạn cần cho đám cưới. 
            Một template đẹp nhưng thiếu function quan trọng sẽ gây khó khăn sau này.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-3">✅ Tính năng cơ bản:</h4>
              <ul className="text-emerald-700 space-y-2 text-sm">
                <li>📸 Photo gallery với lightbox</li>
                <li>📝 RSVP form integration</li>
                <li>📅 Event details & countdown</li>
                <li>🗺️ Google Maps integration</li>
                <li>💰 Gift registry/mừng cưới online</li>
                <li>📱 Mobile responsive design</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 p-4 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-3">⭐ Tính năng nâng cao:</h4>
              <ul className="text-teal-700 space-y-2 text-sm">
                <li>🎵 Background music player</li>
                <li>📖 Love story timeline</li>
                <li>👥 Wedding party introduction</li>
                <li>📧 Email notification system</li>
                <li>🔐 Password protection</li>
                <li>📊 Analytics & visitor tracking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tip 4 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              4
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Test responsive trên mobile</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Mobile responsive testing"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <p className="text-gray-600 leading-relaxed mb-4">
            Hơn 75% khách mời sẽ xem website đám cưới trên mobile. 
            Template phải hoạt động hoàn hảo trên mọi thiết bị và screen size.
          </p>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-4">📱 Checklist mobile testing:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-purple-700 space-y-2 text-sm">
                <li>✓ Navigation menu hoạt động tốt</li>
                <li>✓ Images load nhanh và sắc nét</li>
                <li>✓ Form RSVP dễ điền trên touch screen</li>
                <li>✓ Gallery có swipe gestures</li>
              </ul>
              <ul className="text-purple-700 space-y-2 text-sm">
                <li>✓ Text đủ lớn để đọc (min 16px)</li>
                <li>✓ Buttons có touch target đủ lớn</li>
                <li>✓ Page load speed &lt; 3 seconds</li>
                <li>✓ No horizontal scrolling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tip 5 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              5
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Đánh giá khả năng customization</h2>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Mỗi cặp đôi đều có cá tính riêng. Template cần flexible để bạn có thể customize 
            theo ý muốn mà không cần technical skills phức tạp.
          </p>
          
          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">🎨 Dễ customize:</h4>
              <ul className="text-orange-700 grid md:grid-cols-2 gap-2 text-sm">
                <li>• Thay đổi màu sắc chủ đạo</li>
                <li>• Upload và thay thế hình ảnh</li>
                <li>• Edit text content</li>
                <li>• Rearrange sections</li>
                <li>• Add/remove pages</li>
                <li>• Customize fonts</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">⚠️ Red flags:</h4>
              <ul className="text-red-700 grid md:grid-cols-2 gap-2 text-sm">
                <li>• Cần code để thay đổi cơ bản</li>
                <li>• Hard-coded colors/images</li>
                <li>• Limited font options</li>
                <li>• No page builder interface</li>
                <li>• Complex file structure</li>
                <li>• No documentation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tips 6-8 in a grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Tip 6 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                6
              </div>
              <h3 className="text-lg font-bold text-gray-900">SEO friendly</h3>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="SEO optimization"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Template cần có structure tốt cho SEO để khách mời dễ tìm thấy website.
            </p>
            <ul className="text-pink-700 text-xs space-y-1">
              <li>✓ Meta tags optimization</li>
              <li>✓ Fast loading speed</li>
              <li>✓ Clean URL structure</li>
              <li>✓ Image alt attributes</li>
            </ul>
          </div>

          {/* Tip 7 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                7
              </div>
              <h3 className="text-lg font-bold text-gray-900">Loading speed</h3>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Website speed optimization"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Tốc độ load ảnh hưởng trực tiếp đến user experience và SEO ranking.
            </p>
            <ul className="text-indigo-700 text-xs space-y-1">
              <li>✓ Target: &lt; 3 seconds</li>
              <li>✓ Optimized images</li>
              <li>✓ Minified CSS/JS</li>
              <li>✓ CDN integration</li>
            </ul>
          </div>

          {/* Tip 8 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                8
              </div>
              <h3 className="text-lg font-bold text-gray-900">Browser compatibility</h3>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Browser compatibility testing"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Template phải hiển thị đúng trên mọi browser phổ biến.
            </p>
            <ul className="text-green-700 text-xs space-y-1">
              <li>✓ Chrome, Firefox, Safari</li>
              <li>✓ Mobile browsers</li>
              <li>✓ Older IE versions</li>
              <li>✓ Cross-platform testing</li>
            </ul>
          </div>
        </div>

        {/* Tips 9-10 */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Tip 9 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                9
              </div>
              <h2 className="text-xl font-bold text-gray-900">Support & documentation</h2>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              Khi gặp vấn đề, bạn sẽ cần support. Kiểm tra quality của documentation và responsive support team.
            </p>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">📚 Cần có:</h4>
              <ul className="text-yellow-700 space-y-1 text-sm">
                <li>• Setup guide chi tiết</li>
                <li>• Video tutorials</li>
                <li>• FAQ section comprehensive</li>
                <li>• Active support forum/chat</li>
                <li>• Regular updates</li>
              </ul>
            </div>
          </div>

          {/* Tip 10 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-cyan-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                10
              </div>
              <h2 className="text-xl font-bold text-gray-900">Budget vs features</h2>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              Cân bằng giữa budget và features cần thiết. Không nhất thiết phải chọn template đắt nhất.
            </p>
            
            <div className="bg-cyan-50 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-800 mb-2">💰 Price ranges:</h4>
              <ul className="text-cyan-700 space-y-1 text-sm">
                <li>• Free: Basic features, limited support</li>
                <li>• $50-150: Good quality, full features</li>
                <li>• $200+: Premium, advanced customization</li>
                <li>• Custom: Unlimited, unique design</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Decision Matrix */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🎯 Template Decision Matrix
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Criteria</th>
                  <th className="text-center p-3 font-semibold">Weight</th>
                  <th className="text-center p-3 font-semibold">Template A</th>
                  <th className="text-center p-3 font-semibold">Template B</th>
                  <th className="text-center p-3 font-semibold">Template C</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b">
                  <td className="p-3">Visual Appeal</td>
                  <td className="text-center p-3">20%</td>
                  <td className="text-center p-3">8/10</td>
                  <td className="text-center p-3">9/10</td>
                  <td className="text-center p-3">7/10</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3">Mobile Experience</td>
                  <td className="text-center p-3">25%</td>
                  <td className="text-center p-3">7/10</td>
                  <td className="text-center p-3">8/10</td>
                  <td className="text-center p-3">9/10</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Features</td>
                  <td className="text-center p-3">20%</td>
                  <td className="text-center p-3">9/10</td>
                  <td className="text-center p-3">7/10</td>
                  <td className="text-center p-3">8/10</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3">Customization</td>
                  <td className="text-center p-3">15%</td>
                  <td className="text-center p-3">6/10</td>
                  <td className="text-center p-3">9/10</td>
                  <td className="text-center p-3">8/10</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Performance</td>
                  <td className="text-center p-3">10%</td>
                  <td className="text-center p-3">8/10</td>
                  <td className="text-center p-3">7/10</td>
                  <td className="text-center p-3">9/10</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3">Support</td>
                  <td className="text-center p-3">10%</td>
                  <td className="text-center p-3">9/10</td>
                  <td className="text-center p-3">6/10</td>
                  <td className="text-center p-3">8/10</td>
                </tr>
                <tr className="border-b font-semibold bg-blue-50">
                  <td className="p-3">Total Score</td>
                  <td className="text-center p-3">100%</td>
                  <td className="text-center p-3 text-blue-600">7.7</td>
                  <td className="text-center p-3 text-blue-600">8.1</td>
                  <td className="text-center p-3 text-blue-600">8.2</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-500 text-sm mt-4 text-center">
            💡 Tạo matrix tương tự để so sánh ví dụ bạn đang cân nhắc
          </p>
        </div>

        {/* Final Checklist */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Final Checklist trước khi quyết định</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Checklist cuối cùng để đảm bảo bạn chọn đúng template cho ngày trọng đại
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-left">
            <div className="bg-white/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Technical Checks ✅</h4>
              <ul className="space-y-1 text-white/90">
                <li>□ Mobile responsive test passed</li>
                <li>□ Loading speed &lt; 3 seconds</li>
                <li>□ All features work correctly</li>
                <li>□ Browser compatibility verified</li>
              </ul>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Content & Design ✅</h4>
              <ul className="space-y-1 text-white/90">
                <li>□ Matches wedding style/theme</li>
                <li>□ Easy to customize colors/fonts</li>
                <li>□ Good documentation available</li>
                <li>□ Fits within budget constraints</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl p-8 border border-blue-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sẵn sàng khám phá ví dụ chất lượng?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Xem bộ sưu tập 8+ ví dụ đám cưới đã được optimize theo 10 tiêu chí trên
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/previews/type1"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              Browse Ví Dụ
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/blogs"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all"
            >
              Đọc thêm Tips
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
