import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tích hợp RSVP: Quản lý khách mời thông minh | damcuoi.site',
  description: 'Hướng dẫn sử dụng tính năng RSVP để quản lý khách mời hiệu quả. Từ thiết lập form đến theo dõi phản hồi.',
  keywords: ['RSVP đám cưới', 'quản lý khách mời', 'form RSVP', 'website đám cưới', 'tính năng RSVP'],
  openGraph: {
    title: 'Tích hợp RSVP: Quản lý khách mời thông minh',
    description: 'Hướng dẫn sử dụng tính năng RSVP để quản lý khách mời hiệu quả',
    type: 'article',
    images: ['https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function TichHopRSVP() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="aspect-video max-w-4xl mx-auto mb-8 rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Tích hợp RSVP quản lý khách mời"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            Tính năng
          </span>
          <span className="text-gray-500 text-sm">22 tháng 5, 2024</span>
          <span className="text-gray-500 text-sm">7 phút đọc</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
          Tích hợp RSVP: Quản lý khách mời thông minh
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Hướng dẫn sử dụng tính năng RSVP để quản lý khách mời hiệu quả. 
          Từ thiết lập form đến theo dõi phản hồi, tất cả trong một hệ thống thông minh.
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-4xl mx-auto">
        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8">
          <p className="text-purple-800 font-medium mb-0">
            🎯 <strong>Mục tiêu:</strong> Thiết lập hệ thống RSVP hoàn chỉnh giúp bạn quản lý danh sách khách mời, 
            theo dõi phản hồi và tối ưu hóa việc chuẩn bị đám cưới một cách chuyên nghiệp.
          </p>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Tính năng RSVP (Répondez s'il vous plaît) là một trong những công cụ quan trọng nhất của website đám cưới hiện đại. 
          Nó không chỉ giúp bạn biết ai sẽ tham dự mà còn tối ưu hóa toàn bộ quá trình tổ chức.
        </p>

        {/* Why RSVP */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">?</span>
            Tại sao cần RSVP trên website?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Quản lý chính xác số lượng</h4>
                  <p className="text-gray-600 text-sm">Biết chính xác bao nhiêu người tham dự để chuẩn bị phù hợp</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Tiết kiệm chi phí</h4>
                  <p className="text-gray-600 text-sm">Tránh lãng phí do chuẩn bị thừa hoặc thiếu</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Thu thập thông tin</h4>
                  <p className="text-gray-600 text-sm">Ghi chú đặc biệt về ăn kiêng, dị ứng, mong muốn</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Tự động hóa</h4>
                  <p className="text-gray-600 text-sm">Giảm tải việc gọi điện confirm từng người</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phân tích dữ liệu</h4>
                  <p className="text-gray-600 text-sm">Thống kê, báo cáo để ra quyết định</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Trải nghiệm tốt</h4>
                  <p className="text-gray-600 text-sm">Khách mời dễ dàng phản hồi, cảm thấy được quan tâm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RSVP Form Setup */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              1
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Thiết kế Form RSVP hiệu quả</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="RSVP form design"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <h4 className="font-semibold text-gray-900 mb-4">Các trường thông tin cần thiết:</h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-800 mb-3">Thông tin cơ bản</h5>
              <ul className="text-blue-700 space-y-2 text-sm">
                <li>✓ Họ và tên</li>
                <li>✓ Số điện thoại</li>
                <li>✓ Email (tùy chọn)</li>
                <li>✓ Tham dự hay không</li>
                <li>✓ Số người đi cùng</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-semibold text-purple-800 mb-3">Thông tin bổ sung</h5>
              <ul className="text-purple-700 space-y-2 text-sm">
                <li>✓ Ghi chú về ăn kiêng</li>
                <li>✓ Dị ứng thực phẩm</li>
                <li>✓ Lời chúc mừng</li>
                <li>✓ Yêu cầu đặc biệt</li>
                <li>✓ Phương tiện di chuyển</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold text-gray-800 mb-2">💡 Mẹo thiết kế form tốt:</h5>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Giữ form ngắn gọn, chỉ hỏi thông tin cần thiết</li>
              <li>• Sử dụng placeholder text rõ ràng</li>
              <li>• Validation real-time để báo lỗi ngay</li>
              <li>• Mobile-friendly với touch targets lớn</li>
              <li>• Có thể lưu draft để điền sau</li>
            </ul>
          </div>
        </div>

        {/* Implementation Guide */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              2
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Tích hợp vào Website</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-4">Phương pháp tích hợp phổ biến:</h4>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <h5 className="font-semibold text-emerald-700 mb-2">📊 Google Forms</h5>
                  <p className="text-emerald-600 text-sm mb-3">Miễn phí, dễ setup</p>
                  <ul className="text-emerald-600 text-xs space-y-1">
                    <li>✓ Tự động lưu responses</li>
                    <li>✓ Export Excel dễ dàng</li>
                    <li>✓ Customizable design</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <h5 className="font-semibold text-emerald-700 mb-2">💻 Custom Code</h5>
                  <p className="text-emerald-600 text-sm mb-3">Linh hoạt cao</p>
                  <ul className="text-emerald-600 text-xs space-y-1">
                    <li>✓ Design tự do</li>
                    <li>✓ Tích hợp database</li>
                    <li>✓ Real-time updates</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <h5 className="font-semibold text-emerald-700 mb-2">🔌 Third-party</h5>
                  <p className="text-emerald-600 text-sm mb-3">Tính năng đầy đủ</p>
                  <ul className="text-emerald-600 text-xs space-y-1">
                    <li>✓ Advanced analytics</li>
                    <li>✓ Email automation</li>
                    <li>✓ Guest management</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-4">Demo: Form RSVP với React/Next.js</h4>
              <div className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                <pre>{`// RSVPForm.tsx
const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    attending: null,
    guests: 1,
    phone: '',
    notes: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit to API
    await fetch('/api/rsvp', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
};`}</pre>
              </div>
            </div>
          </div>
        </div>

        {/* Management Dashboard */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              3
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Dashboard quản lý RSVP</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="RSVP management dashboard"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Tính năng cần có:</h4>
              
              <div className="bg-pink-50 p-4 rounded-lg">
                <h5 className="font-semibold text-pink-800 mb-2">📈 Thống kê real-time</h5>
                <ul className="text-pink-700 text-sm space-y-1">
                  <li>• Tỷ lệ phản hồi (%)</li>
                  <li>• Số người tham dự/không tham dự</li>
                  <li>• Tổng số khách mời</li>
                  <li>• Biểu đồ timeline phản hồi</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">📋 Quản lý danh sách</h5>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Lọc theo trạng thái phản hồi</li>
                  <li>• Tìm kiếm theo tên/SĐT</li>
                  <li>• Export danh sách CSV/Excel</li>
                  <li>• In seating chart</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Tự động hóa:</h4>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">📧 Email automation</h5>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Confirmation email tự động</li>
                  <li>• Reminder cho chưa RSVP</li>
                  <li>• Thank you message</li>
                  <li>• Last-minute updates</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">🔔 Notifications</h5>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Push notification khi có RSVP mới</li>
                  <li>• Daily/weekly reports</li>
                  <li>• Deadline reminders</li>
                  <li>• Milestone alerts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              💡
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Best Practices & Tips</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-semibold text-yellow-800 mb-2">⏰ Timing quan trọng</h5>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Gửi link RSVP cùng Save the Date</li>
                  <li>• Deadline 2-3 tuần trước đám cưới</li>
                  <li>• Reminder 1 tuần trước deadline</li>
                  <li>• Follow-up cá nhân cho VIP guests</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="font-semibold text-orange-800 mb-2">🎯 UX Tips</h5>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Pre-fill thông tin từ invitation</li>
                  <li>• Progress bar cho multi-step form</li>
                  <li>• Auto-save để tránh mất data</li>
                  <li>• Confirmation page với all details</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">📱 Mobile Optimization</h5>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Single-column layout</li>
                  <li>• Large touch targets (44px+)</li>
                  <li>• Native input types (tel, email)</li>
                  <li>• Minimize typing với dropdowns</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">🔒 Privacy & Security</h5>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• HTTPS cho form submission</li>
                  <li>• Data encryption at rest</li>
                  <li>• GDPR compliance nếu có EU guests</li>
                  <li>• Regular backup của responses</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Common Issues */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            Những vấn đề thường gặp & cách giải quyết
          </h3>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <h5 className="font-semibold text-red-800 mb-2">❌ Tỷ lệ phản hồi thấp</h5>
              <p className="text-red-700 text-sm mb-2"><strong>Nguyên nhân:</strong> Form quá phức tạp, không reminder</p>
              <p className="text-red-700 text-sm"><strong>Giải pháp:</strong> Đơn giản hóa form, gửi reminder định kỳ, follow-up cá nhân</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <h5 className="font-semibold text-red-800 mb-2">❌ Mobile experience kém</h5>
              <p className="text-red-700 text-sm mb-2"><strong>Nguyên nhân:</strong> Form không responsive, input quá nhỏ</p>
              <p className="text-red-700 text-sm"><strong>Giải pháp:</strong> Test trên nhiều device, tối ưu touch targets</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <h5 className="font-semibold text-red-800 mb-2">❌ Data không chính xác</h5>
              <p className="text-red-700 text-sm mb-2"><strong>Nguyên nhân:</strong> Không validation, input type sai</p>
              <p className="text-red-700 text-sm"><strong>Giải pháp:</strong> Thêm validation rules, format checking</p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 text-white text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Chỉ số thành công của RSVP</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Một hệ thống RSVP tốt sẽ mang lại những kết quả cụ thể và đo được
          </p>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-2xl font-bold">85%+</div>
              <div>Tỷ lệ phản hồi</div>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-2xl font-bold">≤3</div>
              <div>Click để hoàn thành</div>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-2xl font-bold">≤2min</div>
              <div>Thời gian điền form</div>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-2xl font-bold">95%+</div>
              <div>Accuracy rate</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl p-8 border border-purple-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sẵn sàng triển khai RSVP cho đám cưới?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Template của chúng tôi đã tích hợp sẵn tính năng RSVP hoàn chỉnh với dashboard quản lý thông minh
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/previews/type7"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-700 transition-all"
            >
              Xem Demo RSVP
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/blogs"
              className="inline-flex items-center px-6 py-3 border-2 border-purple-500 text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-all"
            >
              Đọc thêm Tips
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
