import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vì sao cần website đám cưới? | damcuoi.site Blog',
  description: 'Khám phá tầm quan trọng của website đám cưới trong thời đại số. Tại sao các cặp đôi hiện đại nên có website riêng cho ngày trọng đại?',
  keywords: ['website đám cưới', 'tầm quan trọng website cưới', 'lợi ích website đám cưới', 'thiết kế web cưới'],
  openGraph: {
    title: 'Vì sao cần website đám cưới?',
    description: 'Khám phá tầm quan trọng của website đám cưới trong thời đại số',
    type: 'article',
  },
};

export default function ViSaoCanWebsitePage() {
  return (
    <article className="max-w-none">
      {/* Hero Section */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-pink-200/50 mb-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Vì sao cần website đám cưới?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trong thời đại số hiện tại, website đám cưới không chỉ là xu hướng mà đã trở thành 
            nhu cầu thiết yếu cho mọi cặp đôi hiện đại
          </p>
        </div>
        
        {/* Article Meta */}
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 border-t border-pink-100 pt-6">
          <span>📅 10 tháng 6, 2024</span>
          <span>👤 damcuoi.site Team</span>
          <span>⏱️ 5 phút đọc</span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-pink-200/50 prose prose-lg max-w-none">
        
        {/* Introduction */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Bạn đã bao giờ tự hỏi tại sao ngày càng nhiều cặp đôi lựa chọn tạo website riêng cho đám cưới của mình? 
            Hay đơn giản chỉ cần gửi thiệp mời qua Zalo, Facebook là đủ? Hãy cùng khám phá những lý do thuyết phục 
            tại sao website đám cưới lại quan trọng đến vậy trong thời đại hiện tại.
          </p>
        </div>

        {/* Reason 1 */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
              1
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Tạo ấn tượng chuyên nghiệp và đáng nhớ</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Website đám cưới tạo ra ấn tượng đầu tiên vô cùng chuyên nghiệp với khách mời. Thay vì chỉ nhận được 
            một tin nhắn đơn giản, khách mời sẽ được trải nghiệm một trang web đẹp mắt, đầy đủ thông tin và 
            thể hiện cá tính riêng của cặp đôi.
          </p>
          <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded">
            <p className="text-pink-800 italic">
              "Khách mời sẽ cảm nhận được sự đầu tư, chu đáo và tình yêu mà cặp đôi dành cho ngày trọng đại này."
            </p>
          </div>
        </section>

        {/* Reason 2 */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
              2
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Cung cấp thông tin đầy đủ và chi tiết</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Website cho phép bạn chia sẻ tất cả thông tin cần thiết một cách có tổ chức:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
            <li>📅 <strong>Thời gian, địa điểm:</strong> Chi tiết cụ thể với bản đồ tích hợp</li>
            <li>👗 <strong>Dress code:</strong> Hướng dẫn trang phục phù hợp</li>
            <li>🍽️ <strong>Thực đơn:</strong> Thông tin về món ăn, đặc biệt quan trọng cho người ăn chay/có dị ứng</li>
            <li>🎁 <strong>Quà cưới:</strong> Thông tin tài khoản ngân hàng hoặc danh sách quà mong muốn</li>
            <li>📋 <strong>Lịch trình:</strong> Các hoạt động trong ngày cưới</li>
          </ul>
        </section>

        {/* Reason 3 */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
              3
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Kể câu chuyện tình yêu của bạn</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Website là nơi hoàn hảo để chia sẻ hành trình tình yêu của hai bạn. Từ lần gặp đầu tiên, 
            những kỷ niệm đáng nhớ, đến quyết định bước vào hôn nhân - tất cả được kể một cách lãng mạn 
            và cảm động qua hình ảnh và lời văn.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">📸 Gallery ảnh</h4>
              <p className="text-purple-700 text-sm">Chia sẻ những khoảnh khắc đẹp nhất của hai bạn</p>
            </div>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
              <h4 className="font-semibold text-pink-800 mb-2">💕 Câu chuyện</h4>
              <p className="text-pink-700 text-sm">Kể về hành trình từ lúc quen nhau đến khi về chung nhà</p>
            </div>
          </div>
        </section>

        {/* Reason 4 */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
              4
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Quản lý khách mời hiệu quả với RSVP</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tính năng RSVP (Répondez s'il vous plaît) trực tuyến giúp bạn:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">📊</div>
              <h4 className="font-semibold text-blue-800 mb-1">Thống kê</h4>
              <p className="text-blue-700 text-sm">Theo dõi số lượng khách tham dự real-time</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🍽️</div>
              <h4 className="font-semibold text-green-800 mb-1">Thực đơn</h4>
              <p className="text-green-700 text-sm">Biết trước nhu cầu ăn uống của khách</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">⏰</div>
              <h4 className="font-semibold text-purple-800 mb-1">Tiết kiệm</h4>
              <p className="text-purple-700 text-sm">Giảm thời gian gọi điện xác nhận từng người</p>
            </div>
          </div>
        </section>

        {/* Reason 5 */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
              5
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Tiết kiệm chi phí và thân thiện môi trường</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            So với thiệp cưới truyền thống, website đám cưới mang lại nhiều lợi ích:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                <span className="mr-2">💰</span> Tiết kiệm chi phí
              </h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Không cần in thiệp giấy</li>
                <li>• Không phí vận chuyển</li>
                <li>• Có thể cập nhật thông tin miễn phí</li>
                <li>• Sử dụng lâu dài làm kỷ niệm</li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
              <h4 className="font-semibold text-emerald-800 mb-3 flex items-center">
                <span className="mr-2">🌱</span> Thân thiện môi trường
              </h4>
              <ul className="text-emerald-700 text-sm space-y-1">
                <li>• Không sử dụng giấy</li>
                <li>• Giảm phát thải CO2 từ vận chuyển</li>
                <li>• Không tạo rác thải</li>
                <li>• Bảo vệ rừng xanh</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reason 6 */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
              6
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Chia sẻ dễ dàng trên mạng xã hội</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Website có thể được chia sẻ ngay lập tức qua:
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">📱 Zalo</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">💬 Facebook Messenger</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">📞 WhatsApp</span>
            <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">📧 Email</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">📨 SMS</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Khách mời có thể dễ dàng chia sẻ thông tin đám cưới với người thân, bạn bè chỉ bằng một cú click.
          </p>
        </section>

        {/* Reason 7 */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
              7
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Lưu giữ kỷ niệm mãi mãi</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Website đám cưới không chỉ hữu ích trong giai đoạn chuẩn bị mà còn là món quà kỷ niệm 
            vô giá cho tương lai:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
            <li>💝 <strong>Kỷ niệm số:</strong> Lưu trữ mãi mãi trên internet</li>
            <li>👶 <strong>Chia sẻ với con cái:</strong> Cho các con xem câu chuyện tình yêu của bố mẹ</li>
            <li>🎂 <strong>Kỷ niệm hàng năm:</strong> Quay lại xem vào những ngày kỷ niệm</li>
            <li>📱 <strong>Dễ dàng truy cập:</strong> Xem bất cứ lúc nào, ở bất cứ đâu</li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-2xl border border-pink-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kết luận</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Website đám cưới không chỉ là một xu hướng tạm thời mà đã trở thành một phần quan trọng 
              trong việc tổ chức đám cưới hiện đại. Nó mang lại giá trị thực tế to lớn từ việc quản lý 
              thông tin, tiết kiệm chi phí, đến việc tạo ra những kỷ niệm đáng nhớ.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium">
              Nếu bạn đang chuẩn bị cho đám cưới của mình, hãy cân nhắc tạo một website đám cưới. 
              Đó sẽ là một quyết định thông minh mà bạn sẽ không bao giờ hối hận!
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Sẵn sàng tạo website đám cưới của bạn?</h3>
            <p className="text-lg opacity-90 mb-6">
              Khám phá hơn 8 template đám cưới tuyệt đẹp, dễ dàng tùy chỉnh và hoàn toàn miễn phí!
            </p>
            <Link 
              href="/previews"
              className="inline-flex items-center space-x-2 bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-colors"
            >
              <span>Xem Ví Dụ Ngay</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
