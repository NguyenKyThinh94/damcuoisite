import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cách tùy chỉnh website đám cưới dễ dàng | damcuoi.site',
  description: 'Hướng dẫn từng bước tùy chỉnh website đám cưới theo ý muốn. Thay đổi màu sắc, font chữ, hình ảnh mà không cần biết code.',
  keywords: ['tùy chỉnh website đám cưới', 'customize wedding website', 'chỉnh sửa template', 'personalize wedding site'],
  openGraph: {
    title: 'Cách tùy chỉnh website đám cưới dễ dàng',
    description: 'Hướng dẫn từng bước tùy chỉnh website đám cưới theo ý muốn',
    type: 'article',
    images: ['https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function TuyChinhWebsite() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="aspect-video max-w-4xl mx-auto mb-8 rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Tùy chỉnh website đám cưới dễ dàng"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            Hướng dẫn
          </span>
          <span className="text-gray-500 text-sm">3 tháng 6, 2024</span>
          <span className="text-gray-500 text-sm">8 phút đọc</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
          Cách tùy chỉnh website đám cưới dễ dàng
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Hướng dẫn từng bước tùy chỉnh website đám cưới theo ý muốn. 
          Thay đổi màu sắc, font chữ, hình ảnh mà không cần biết code phức tạp.
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-4xl mx-auto">
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg mb-8">
          <p className="text-emerald-800 font-medium mb-0">
            🎨 <strong>Mục tiêu:</strong> Biến template thành website độc đáo phản ánh cá tính của cặp đôi 
            thông qua 6 bước tùy chỉnh cơ bản mà ai cũng có thể làm được.
          </p>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Một template đẹp chỉ là điểm khởi đầu. Việc customize để tạo ra website độc đáo, 
          phản ánh đúng cá tính và story của cặp đôi mới là điều tạo nên sự khác biệt.
        </p>

        {/* Step 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              1
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Thay đổi Color Palette</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Color palette customization"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Màu sắc là yếu tố đầu tiên tạo impression cho visitors. 
            Chọn palette phù hợp với theme đám cưới và cá tính cặp đôi.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-4">🎨 Cách chọn màu hiệu quả:</h4>
              <ul className="text-emerald-700 space-y-2 text-sm">
                <li>• <strong>Inspiration từ ảnh cưới:</strong> Extract màu từ ảnh yêu thích</li>
                <li>• <strong>Venue theme:</strong> Match với không gian tổ chức</li>
                <li>• <strong>Season wedding:</strong> Spring pastels, autumn warm tones</li>
                <li>• <strong>Personality reflection:</strong> Bold vs subtle, warm vs cool</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-4">🛠️ Tools hữu ích:</h4>
              <ul className="text-teal-700 space-y-2 text-sm">
                <li>• <strong>Adobe Color:</strong> Tạo palette từ ảnh</li>
                <li>• <strong>Coolors.co:</strong> Generate màu tự động</li>
                <li>• <strong>Pinterest:</strong> Browse wedding color ideas</li>
                <li>• <strong>ColorZilla:</strong> Extract màu từ websites</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold text-gray-800 mb-3">💡 Color combination examples:</h5>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="h-8 bg-gradient-to-r from-rose-300 to-pink-400 rounded mb-2"></div>
                <span className="text-sm text-gray-600">Romantic Pink</span>
              </div>
              <div className="text-center">
                <div className="h-8 bg-gradient-to-r from-blue-300 to-indigo-400 rounded mb-2"></div>
                <span className="text-sm text-gray-600">Classic Blue</span>
              </div>
              <div className="text-center">
                <div className="h-8 bg-gradient-to-r from-emerald-300 to-teal-400 rounded mb-2"></div>
                <span className="text-sm text-gray-600">Nature Green</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              2
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Upload & Optimize ảnh cá nhân</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Photo optimization for wedding website"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Hình ảnh là soul của website đám cưới. Chất lượng và cách present ảnh 
            quyết định 80% impression của visitors.
          </p>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-4">📸 Photo categories cần chuẩn bị:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>• <strong>Hero/Cover photo:</strong> Ảnh đẹp nhất, high resolution</li>
                  <li>• <strong>Couple portraits:</strong> 5-8 ảnh đôi đa dạng style</li>
                  <li>• <strong>Engagement photos:</strong> Timeline love story</li>
                  <li>• <strong>Family photos:</strong> Introduce families</li>
                </ul>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>• <strong>Venue photos:</strong> Địa điểm tổ chức</li>
                  <li>• <strong>Detail shots:</strong> Rings, flowers, decorations</li>
                  <li>• <strong>Behind the scenes:</strong> Preparation moments</li>
                  <li>• <strong>Fun moments:</strong> Candid, natural expressions</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-indigo-800 mb-4">⚡ Optimization tips:</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">📏</div>
                  <h5 className="font-semibold text-indigo-700 mb-2">Resolution</h5>
                  <ul className="text-indigo-600 text-sm space-y-1">
                    <li>Hero: 1920x1080px</li>
                    <li>Gallery: 800x600px</li>
                    <li>Portraits: 600x800px</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">💾</div>
                  <h5 className="font-semibold text-indigo-700 mb-2">File Size</h5>
                  <ul className="text-indigo-600 text-sm space-y-1">
                    <li>Hero: &lt; 500KB</li>
                    <li>Gallery: &lt; 200KB</li>
                    <li>Thumbnails: &lt; 50KB</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">🖼️</div>
                  <h5 className="font-semibold text-indigo-700 mb-2">Format</h5>
                  <ul className="text-indigo-600 text-sm space-y-1">
                    <li>JPEG: Photos</li>
                    <li>PNG: Graphics/logos</li>
                    <li>WebP: Modern browsers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              3
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Personalize Content & Copy</h2>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Nội dung text là cách kể câu chuyện của cặp đôi. Mỗi từ ngữ cần phản ánh 
            đúng tính cách và mối quan hệ đặc biệt của hai người.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-4">✍️ Content sections chính:</h4>
              <ul className="text-purple-700 space-y-3 text-sm">
                <li>
                  <strong>• Hero headline:</strong><br/>
                  <span className="text-purple-600">"John & Sarah are getting married!"</span>
                </li>
                <li>
                  <strong>• Love story:</strong><br/>
                  <span className="text-purple-600">How you met, first date, proposal</span>
                </li>
                <li>
                  <strong>• Event details:</strong><br/>
                  <span className="text-purple-600">Time, venue, dress code, schedule</span>
                </li>
                <li>
                  <strong>• Thank you message:</strong><br/>
                  <span className="text-purple-600">Gratitude to family & friends</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg">
              <h4 className="font-semibold text-pink-800 mb-4">💡 Writing tips:</h4>
              <ul className="text-pink-700 space-y-2 text-sm">
                <li>• <strong>Tone:</strong> Casual vs formal based on personality</li>
                <li>• <strong>Length:</strong> Concise but meaningful</li>
                <li>• <strong>Voice:</strong> First person "We" creates intimacy</li>
                <li>• <strong>Emotions:</strong> Share genuine feelings</li>
                <li>• <strong>Details:</strong> Specific moments over generic</li>
                <li>• <strong>Call-to-actions:</strong> Clear RSVP instructions</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-6 bg-gray-50 rounded-lg">
            <h5 className="font-semibold text-gray-800 mb-3">📝 Example love story copy:</h5>
            <div className="bg-white p-4 rounded border-l-4 border-purple-500">
              <p className="text-gray-700 italic">
                "We first met at a coffee shop on a rainy Tuesday morning in 2019. 
                Sarah was reading her favorite book, and John couldn't help but notice 
                her beautiful smile. Three years later, on the same rainy Tuesday, 
                John proposed at that exact coffee shop. Now we're ready to start 
                our forever together, and we want you to be part of our special day!"
              </p>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              4
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Customize Typography & Fonts</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Typography customization"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Typography tạo nên personality cho website. Mỗi font family truyền tải 
            một emotion khác nhau và cần phù hợp với overall style.
          </p>
          
          <div className="space-y-6">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-4">🔤 Font categories & mood:</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-serif text-lg font-bold text-orange-700 mb-2">Serif Fonts</h5>
                  <p className="text-orange-600 text-sm mb-3">Traditional, elegant, trustworthy</p>
                  <ul className="text-orange-600 text-xs space-y-1">
                    <li>• Playfair Display</li>
                    <li>• Crimson Text</li>
                    <li>• Lora</li>
                    <li>• Merriweather</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-sans text-lg font-bold text-orange-700 mb-2">Sans-Serif</h5>
                  <p className="text-orange-600 text-sm mb-3">Modern, clean, friendly</p>
                  <ul className="text-orange-600 text-xs space-y-1">
                    <li>• Montserrat</li>
                    <li>• Open Sans</li>
                    <li>• Poppins</li>
                    <li>• Roboto</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="text-lg font-bold text-orange-700 mb-2" style={{fontFamily: 'cursive'}}>Script Fonts</h5>
                  <p className="text-orange-600 text-sm mb-3">Romantic, personal, artistic</p>
                  <ul className="text-orange-600 text-xs space-y-1">
                    <li>• Dancing Script</li>
                    <li>• Great Vibes</li>
                    <li>• Pacifico</li>
                    <li>• Sacramento</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-4">⚙️ Font pairing best practices:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-red-700 mb-2">✅ Good combinations:</h5>
                  <ul className="text-red-600 text-sm space-y-1">
                    <li>• Serif headlines + Sans-serif body</li>
                    <li>• Script names + Sans-serif details</li>
                    <li>• Bold sans + Light sans</li>
                    <li>• Contrast weights same family</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-red-700 mb-2">❌ Avoid:</h5>
                  <ul className="text-red-600 text-sm space-y-1">
                    <li>• More than 3 different fonts</li>
                    <li>• Similar script fonts together</li>
                    <li>• Hard-to-read decorative fonts</li>
                    <li>• Mixing too many styles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              5
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Configure Features & Functionality</h2>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Customize các tính năng để phù hợp với needs cụ thể của đám cưới. 
            Enable/disable features based on guest preferences và wedding style.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-teal-50 p-6 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-4">🎵 Audio customization:</h4>
              <ul className="text-teal-700 space-y-3 text-sm">
                <li>
                  <strong>• Background music:</strong><br/>
                  <span className="text-teal-600">Upload couple's favorite song, control autoplay</span>
                </li>
                <li>
                  <strong>• Music controls:</strong><br/>
                  <span className="text-teal-600">Play/pause button, volume slider, mute option</span>
                </li>
                <li>
                  <strong>• Playlist:</strong><br/>
                  <span className="text-teal-600">Multiple songs for different sections</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h4 className="font-semibold text-cyan-800 mb-4">📱 RSVP customization:</h4>
              <ul className="text-cyan-700 space-y-3 text-sm">
                <li>
                  <strong>• Form fields:</strong><br/>
                  <span className="text-cyan-600">Dietary restrictions, +1 guests, special requests</span>
                </li>
                <li>
                  <strong>• Deadline:</strong><br/>
                  <span className="text-cyan-600">Set RSVP cutoff date, automatic reminders</span>
                </li>
                <li>
                  <strong>• Thank you message:</strong><br/>
                  <span className="text-cyan-600">Custom confirmation after submission</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-4">🔧 Additional features to configure:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <ul className="text-gray-600 text-sm space-y-2">
                <li>✓ Countdown timer to wedding day</li>
                <li>✓ Google Calendar integration</li>
                <li>✓ Social media links</li>
                <li>✓ Contact information</li>
              </ul>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>✓ Gift registry links</li>
                <li>✓ Accommodation recommendations</li>
                <li>✓ Transportation info</li>
                <li>✓ Weather forecast widget</li>
              </ul>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>✓ Password protection</li>
                <li>✓ Guest book/comments</li>
                <li>✓ Live streaming link</li>
                <li>✓ Photo sharing gallery</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 6 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-rose-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              6
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Test & Launch Checklist</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Website testing and launch"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Trước khi share với guests, cần test kỹ lưỡng mọi aspect của website 
            để đảm bảo experience hoàn hảo cho người dùng.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-rose-50 p-6 rounded-lg">
              <h4 className="font-semibold text-rose-800 mb-4">🧪 Technical testing:</h4>
              <ul className="text-rose-700 space-y-2 text-sm">
                <li>✓ <strong>Mobile responsiveness:</strong> Test on different screen sizes</li>
                <li>✓ <strong>Browser compatibility:</strong> Chrome, Safari, Firefox</li>
                <li>✓ <strong>Loading speed:</strong> All pages load &lt; 3 seconds</li>
                <li>✓ <strong>Image optimization:</strong> Photos display correctly</li>
                <li>✓ <strong>Form functionality:</strong> RSVP submits properly</li>
                <li>✓ <strong>Links testing:</strong> All internal/external links work</li>
              </ul>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg">
              <h4 className="font-semibold text-pink-800 mb-4">📝 Content review:</h4>
              <ul className="text-pink-700 space-y-2 text-sm">
                <li>✓ <strong>Spelling & grammar:</strong> Proofread all text</li>
                <li>✓ <strong>Dates & times:</strong> Verify all event details</li>
                <li>✓ <strong>Contact info:</strong> Phone numbers, addresses correct</li>
                <li>✓ <strong>Photo quality:</strong> High resolution, well-cropped</li>
                <li>✓ <strong>Names spelling:</strong> Double-check all names</li>
                <li>✓ <strong>Final approval:</strong> Both partners review together</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Advanced Tips */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white mb-8">
          <h3 className="text-2xl font-bold mb-4 text-center">🚀 Advanced Customization Tips</h3>
          <p className="text-lg opacity-90 mb-6 text-center max-w-2xl mx-auto">
            Những tricks nâng cao để website trở nên truly unique và professional
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">🎨 Visual Hierarchy</h4>
              <ul className="space-y-1 text-white/90">
                <li>• Size contrast for importance</li>
                <li>• Color to guide attention</li>
                <li>• White space for breathing</li>
                <li>• Consistent spacing system</li>
              </ul>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">📐 Layout Balance</h4>
              <ul className="space-y-1 text-white/90">
                <li>• Asymmetrical for dynamic</li>
                <li>• Grid system for order</li>
                <li>• Rule of thirds for photos</li>
                <li>• Focal points strategy</li>
              </ul>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">✨ Micro-interactions</h4>
              <ul className="space-y-1 text-white/90">
                <li>• Hover effects on buttons</li>
                <li>• Smooth scroll animations</li>
                <li>• Loading states feedback</li>
                <li>• Form validation hints</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            Common Customization Mistakes
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h5 className="font-semibold text-red-800 mb-2">❌ Too many fonts</h5>
                <p className="text-red-700 text-sm mb-2"><strong>Problem:</strong> Website looks chaotic and unprofessional</p>
                <p className="text-red-700 text-sm"><strong>Solution:</strong> Stick to 2-3 font families maximum</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h5 className="font-semibold text-red-800 mb-2">❌ Poor photo quality</h5>
                <p className="text-red-700 text-sm mb-2"><strong>Problem:</strong> Pixelated or blurry images ruin impression</p>
                <p className="text-red-700 text-sm"><strong>Solution:</strong> Use high-res photos, optimize for web</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h5 className="font-semibold text-red-800 mb-2">❌ Information overload</h5>
                <p className="text-red-700 text-sm mb-2"><strong>Problem:</strong> Too much text overwhelms visitors</p>
                <p className="text-red-700 text-sm"><strong>Solution:</strong> Prioritize essential info, use hierarchy</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h5 className="font-semibold text-red-800 mb-2">❌ Ignoring mobile</h5>
                <p className="text-red-700 text-sm mb-2"><strong>Problem:</strong> 70% guests use mobile, poor experience</p>
                <p className="text-red-700 text-sm"><strong>Solution:</strong> Test extensively on mobile devices</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl p-8 border border-emerald-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sẵn sàng customize website đám cưới của bạn?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Bắt đầu với template dễ customize và làm theo 6 bước trên để có website độc đáo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/previews/type1"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all"
            >
              Chọn Template để Customize
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/blogs"
              className="inline-flex items-center px-6 py-3 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-all"
            >
              Đọc thêm Hướng dẫn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
