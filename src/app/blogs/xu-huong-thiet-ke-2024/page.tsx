import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Xu hướng thiết kế website đám cưới 2024 | damcuoi.site',
  description: 'Cập nhật những xu hướng mới nhất trong thiết kế website đám cưới. Từ minimalist đến luxury, khám phá style nào phù hợp với bạn.',
  keywords: ['xu hướng đám cưới 2024', 'thiết kế website cưới', 'template đám cưới hiện đại', 'minimalist wedding', 'luxury wedding website'],
  openGraph: {
    title: 'Xu hướng thiết kế website đám cưới 2024',
    description: 'Cập nhật những xu hướng mới nhất trong thiết kế website đám cưới',
    type: 'article',
    images: ['https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function XuHuongThietKe2024() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="aspect-video max-w-4xl mx-auto mb-8 rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Xu hướng thiết kế website đám cưới 2024"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            Xu hướng
          </span>
          <span className="text-gray-500 text-sm">5 tháng 6, 2024</span>
          <span className="text-gray-500 text-sm">6 phút đọc</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-6">
          Xu hướng thiết kế website đám cưới 2024
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Cập nhật những xu hướng mới nhất trong thiết kế website đám cưới. Từ minimalist đến luxury, 
          khám phá style nào phù hợp với bạn và ngày trọng đại.
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-4xl mx-auto">
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg mb-8">
          <p className="text-emerald-800 font-medium mb-0">
            💡 <strong>Tóm tắt nhanh:</strong> Năm 2024 đánh dấu sự chuyển mình mạnh mẽ trong thiết kế website đám cưới, 
            với 6 xu hướng chính từ minimalist đến maximalist, tất cả đều hướng đến trải nghiệm người dùng tối ưu.
          </p>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Năm 2024 là một năm đầy hứa hẹn cho ngành thiết kế website đám cưới. Với sự phát triển của công nghệ 
          và thay đổi trong hành vi người dùng, các xu hướng thiết kế cũng có những bước chuyển mình đáng chú ý.
        </p>

        {/* Trend 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              1
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Minimalist Design - Tối giản nhưng tinh tế</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Minimalist wedding design"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <p className="text-gray-600 leading-relaxed mb-4">
            Xu hướng minimalist tiếp tục dẫn đầu trong năm 2024. Các cặp đôi hiện đại ưa chuộng sự đơn giản, 
            tinh tế với nhiều khoảng trắng, typography sạch sẽ và màu sắc nhẹ nhàng.
          </p>
          
          <div className="bg-emerald-50 p-4 rounded-lg">
            <h4 className="font-semibold text-emerald-800 mb-2">Đặc điểm nổi bật:</h4>
            <ul className="text-emerald-700 space-y-1">
              <li>• Palette màu trung tính (trắng, be, xám nhạt)</li>
              <li>• Typography serif hiện đại</li>
              <li>• Nhiều khoảng trắng</li>
              <li>• Ảnh cưới làm điểm nhấn chính</li>
            </ul>
          </div>
        </div>

        {/* Trend 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              2
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Bold Typography - Chữ to, ấn tượng</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Bold typography wedding design"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <p className="text-gray-600 leading-relaxed mb-4">
            Typography đậm và có cá tính đang trở thành xu hướng mạnh. Các font chữ custom, 
            handwriting và display fonts được sử dụng để tạo điểm nhấn và thể hiện cá tính cặp đôi.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Font phổ biến 2024:</h4>
            <ul className="text-blue-700 space-y-1">
              <li>• Playfair Display (serif sang trọng)</li>
              <li>• Montserrat (sans-serif hiện đại)</li>
              <li>• Script fonts cho tiêu đề</li>
              <li>• Custom typography cho tên cặp đôi</li>
            </ul>
          </div>
        </div>

        {/* Trend 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              3
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Interactive Elements - Tương tác phong phú</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Interactive wedding website elements"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <p className="text-gray-600 leading-relaxed mb-4">
            Người dùng mong muốn nhiều tương tác hơn. Các element như hover effects, 
            smooth animations, parallax scrolling và micro-interactions đang được ứng dụng rộng rãi.
          </p>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">Tính năng tương tác hot:</h4>
            <ul className="text-purple-700 space-y-1">
              <li>• Gallery với lightbox và swipe gestures</li>
              <li>• RSVP forms tương tác</li>
              <li>• Countdown timer động</li>
              <li>• Music player với playlist cưới</li>
            </ul>
          </div>
        </div>

        {/* Trend 4 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-rose-100 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              4
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Sustainability Theme - Xanh và bền vững</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Sustainable green wedding design"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <p className="text-gray-600 leading-relaxed mb-4">
            Ý thức về môi trường đang ảnh hưởng đến thiết kế wedding website. 
            Màu xanh lá cây, botanical elements và concept "green wedding" trở nên phổ biến.
          </p>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Elements bền vững:</h4>
            <ul className="text-green-700 space-y-1">
              <li>• Botanical illustrations</li>
              <li>• Earth tone color palette</li>
              <li>• Digital-first approach (ít in ấn)</li>
              <li>• QR codes thay thế paper invites</li>
            </ul>
          </div>
        </div>

        {/* Trend 5 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              5
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Mobile-First Design - Ưu tiên di động</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Mobile-first wedding website design"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <p className="text-gray-600 leading-relaxed mb-4">
            Với hơn 80% khách mời truy cập website qua mobile, thiết kế mobile-first không còn là lựa chọn 
            mà là bắt buộc. Touch-friendly interface và loading speed được ưu tiên hàng đầu.
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">Tối ưu mobile:</h4>
            <ul className="text-yellow-700 space-y-1">
              <li>• One-thumb navigation</li>
              <li>• Large touch targets (min 44px)</li>
              <li>• Swipe gestures cho gallery</li>
              <li>• Progressive Web App (PWA) features</li>
            </ul>
          </div>
        </div>

        {/* Trend 6 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-100 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              6
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Personalization - Cá nhân hóa tối đa</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Personalized wedding website"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <p className="text-gray-600 leading-relaxed mb-4">
            Mỗi cặp đôi muốn website của mình là duy nhất. Custom illustrations, 
            personal timeline, unique color schemes và storytelling đang trở thành tiêu chuẩn.
          </p>
          
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h4 className="font-semibold text-indigo-800 mb-2">Cá nhân hóa phổ biến:</h4>
            <ul className="text-indigo-700 space-y-1">
              <li>• Custom color palette từ ảnh cưới</li>
              <li>• Timeline câu chuyện tình yêu</li>
              <li>• Monogram và logo cặp đôi</li>
              <li>• Playlist nhạc cá nhân</li>
            </ul>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-8 text-white text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Lựa chọn xu hướng phù hợp</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Không nhất thiết phải theo tất cả xu hướng. Hãy chọn những elements phù hợp với 
            phong cách và budget của bạn để tạo ra website đám cưới hoàn hảo.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/20 p-4 rounded-lg">
              <strong>Budget thấp:</strong><br/>
              Minimalist + Mobile-first
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <strong>Budget trung bình:</strong><br/>
              + Interactive elements
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <strong>Budget cao:</strong><br/>
              + Full personalization
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl p-8 border border-emerald-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sẵn sàng áp dụng xu hướng 2024?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Khám phá các template đám cưới của chúng tôi đã tích hợp sẵn những xu hướng hot nhất 2024
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/previews/type1"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-blue-700 transition-all"
            >
              Xem Templates 2024
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/blogs"
              className="inline-flex items-center px-6 py-3 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-all"
            >
              Đọc thêm Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
