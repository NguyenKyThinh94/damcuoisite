import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tối ưu website đám cưới cho mobile | damcuoi.site',
  description: 'Hơn 70% khách mời sẽ xem website đám cưới trên điện thoại. Tìm hiểu cách tối ưu trải nghiệm mobile cho website của bạn.',
  keywords: ['tối ưu mobile', 'responsive wedding website', 'mobile optimization', 'website đám cưới mobile'],
  openGraph: {
    title: 'Tối ưu website đám cưới cho mobile',
    description: 'Tìm hiểu cách tối ưu trải nghiệm mobile cho website đám cưới',
    type: 'article',
    images: ['https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function ToiUuMobile() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="aspect-video max-w-4xl mx-auto mb-8 rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Tối ưu website đám cưới cho mobile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            Thiết kế
          </span>
          <span className="text-gray-500 text-sm">1 tháng 6, 2024</span>
          <span className="text-gray-500 text-sm">5 phút đọc</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
          Tối ưu website đám cưới cho mobile
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Hơn 70% khách mời sẽ xem website đám cưới trên điện thoại. 
          Tìm hiểu cách tối ưu trải nghiệm mobile để tạo ấn tượng hoàn hảo.
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-4xl mx-auto">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
          <p className="text-blue-800 font-medium mb-0">
            📱 <strong>Thống kê quan trọng:</strong> 73% guests sử dụng mobile để xem wedding website, 
            47% sẽ rời đi nếu trang load chậm hơn 3 giây. Mobile-first design không còn là option mà là necessity.
          </p>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Trong thời đại smartphone, trải nghiệm mobile quyết định success hay failure của wedding website. 
          Một site không tối ưu cho mobile có thể khiến guests bỏ lỡ thông tin quan trọng hoặc không RSVP.
        </p>

        {/* Mobile Statistics */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            📊 Tại sao Mobile-First quan trọng?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                73%
              </div>
              <p className="text-gray-600 text-sm font-medium">Guests sử dụng mobile</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                47%
              </div>
              <p className="text-gray-600 text-sm font-medium">Bounce nếu load &gt; 3s</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                85%
              </div>
              <p className="text-gray-600 text-sm font-medium">RSVP trên mobile</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                92%
              </div>
              <p className="text-gray-600 text-sm font-medium">Expect seamless UX</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">💡 Key Insights:</h4>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li>• Guests thường check website multiple times trên mobile trong quá trình chuẩn bị</li>
              <li>• RSVP form là interaction chính, cần optimize đặc biệt kỹ</li>
              <li>• Photos và videos được view nhiều nhất, cần loading optimization</li>
              <li>• Navigation phải simple và intuitive cho thumb navigation</li>
            </ul>
          </div>
        </div>

        {/* Responsive Design Principles */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-cyan-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              1
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Responsive Design Fundamentals</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Responsive design principles"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Responsive design đảm bảo website hiển thị hoàn hảo trên mọi screen size, 
            từ smartphone nhỏ đến tablet và desktop.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h4 className="font-semibold text-cyan-800 mb-4">📱 Mobile (320-768px)</h4>
              <ul className="text-cyan-700 space-y-2 text-sm">
                <li>• Single column layout</li>
                <li>• Stacked navigation menu</li>
                <li>• Touch-friendly buttons (44px+)</li>
                <li>• Vertical image orientation</li>
                <li>• Simplified content hierarchy</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-4">📱 Tablet (768-1024px)</h4>
              <ul className="text-blue-700 space-y-2 text-sm">
                <li>• Two-column layouts</li>
                <li>• Horizontal navigation possible</li>
                <li>• Medium-sized images</li>
                <li>• Balanced content distribution</li>
                <li>• Hybrid touch/cursor interface</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-4">💻 Desktop (1024px+)</h4>
              <ul className="text-teal-700 space-y-2 text-sm">
                <li>• Multi-column layouts</li>
                <li>• Full horizontal navigation</li>
                <li>• Large hero images</li>
                <li>• Detailed content sections</li>
                <li>• Hover effects và animations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Touch-Friendly Interface */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              2
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Touch-Friendly Interface Design</h2>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Mobile interface cần thiết kế cho fingers chứ không phải mouse cursor. 
            Touch targets, spacing và gestures đều cần optimize riêng.
          </p>
          
          <div className="space-y-6">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-4">👆 Touch Target Guidelines:</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-emerald-700 mb-3">✅ Recommended sizes:</h5>
                  <ul className="text-emerald-600 space-y-2 text-sm">
                    <li>• <strong>Buttons:</strong> Minimum 44x44px (iOS), 48x48px (Android)</li>
                    <li>• <strong>Form inputs:</strong> Height 44px+, full width on mobile</li>
                    <li>• <strong>Navigation items:</strong> 44px height với adequate spacing</li>
                    <li>• <strong>Social icons:</strong> 32x32px minimum</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-emerald-700 mb-3">📏 Spacing principles:</h5>
                  <ul className="text-emerald-600 space-y-2 text-sm">
                    <li>• <strong>Between buttons:</strong> 8px minimum separation</li>
                    <li>• <strong>Thumb reach:</strong> Most important actions in bottom 2/3</li>
                    <li>• <strong>Edge margins:</strong> 16px từ screen edges</li>
                    <li>• <strong>Content padding:</strong> 16-24px cho readability</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-4">👋 Gesture Support:</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-teal-700 mb-2">📸 Photo Gallery</h5>
                  <ul className="text-teal-600 text-sm space-y-1">
                    <li>• Swipe để next/previous</li>
                    <li>• Pinch to zoom</li>
                    <li>• Tap to fullscreen</li>
                    <li>• Double-tap to zoom</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-teal-700 mb-2">📜 Navigation</h5>
                  <ul className="text-teal-600 text-sm space-y-1">
                    <li>• Scroll momentum</li>
                    <li>• Pull to refresh</li>
                    <li>• Smooth scroll to sections</li>
                    <li>• Swipe back gesture</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-teal-700 mb-2">📝 Forms</h5>
                  <ul className="text-teal-600 text-sm space-y-1">
                    <li>• Focus input auto-scroll</li>
                    <li>• Keyboard-friendly design</li>
                    <li>• Touch to select options</li>
                    <li>• Swipe to dismiss alerts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Optimization */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              3
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Performance Optimization</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Website performance optimization"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Mobile users có ít patience hơn desktop users. Performance optimization 
            trực tiếp ảnh hưởng đến user experience và conversion rates.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-4">🖼️ Image Optimization:</h4>
              <ul className="text-orange-700 space-y-3 text-sm">
                <li>
                  <strong>• Responsive images:</strong><br/>
                  <span className="text-orange-600">Serve different sizes cho different screens</span>
                </li>
                <li>
                  <strong>• Modern formats:</strong><br/>
                  <span className="text-orange-600">WebP, AVIF cho better compression</span>
                </li>
                <li>
                  <strong>• Lazy loading:</strong><br/>
                  <span className="text-orange-600">Load images khi user scroll đến</span>
                </li>
                <li>
                  <strong>• Compression:</strong><br/>
                  <span className="text-orange-600">80-85% quality cho optimal balance</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-4">⚡ Loading Speed:</h4>
              <ul className="text-red-700 space-y-3 text-sm">
                <li>
                  <strong>• Critical CSS:</strong><br/>
                  <span className="text-red-600">Inline above-the-fold styles</span>
                </li>
                <li>
                  <strong>• JavaScript optimization:</strong><br/>
                  <span className="text-red-600">Minify, compress, defer non-critical</span>
                </li>
                <li>
                  <strong>• CDN usage:</strong><br/>
                  <span className="text-red-600">Serve content from nearest server</span>
                </li>
                <li>
                  <strong>• Caching strategies:</strong><br/>
                  <span className="text-red-600">Browser và server-side caching</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold text-gray-800 mb-3">🎯 Performance targets cho mobile:</h5>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">&lt; 2s</div>
                <div className="text-sm text-gray-600">First Contentful Paint</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">&lt; 3s</div>
                <div className="text-sm text-gray-600">Fully Loaded</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">&lt; 100ms</div>
                <div className="text-sm text-gray-600">Touch Response</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              4
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Mobile Navigation Patterns</h2>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Navigation trên mobile cần balance giữa accessibility và screen real estate. 
            Chọn pattern phù hợp với content structure và user journey.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-4">🍔 Hamburger Menu</h4>
              <div className="w-full h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="space-y-1">
                  <div className="w-6 h-0.5 bg-purple-600"></div>
                  <div className="w-6 h-0.5 bg-purple-600"></div>
                  <div className="w-6 h-0.5 bg-purple-600"></div>
                </div>
              </div>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>✓ Saves screen space</li>
                <li>✓ Works với many menu items</li>
                <li>✓ Familiar pattern</li>
                <li>⚠️ Hidden by default</li>
              </ul>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg">
              <h4 className="font-semibold text-pink-800 mb-4">📍 Bottom Tab Bar</h4>
              <div className="w-full h-32 bg-gradient-to-br from-pink-200 to-rose-200 rounded-lg mb-4 relative">
                <div className="absolute bottom-2 left-2 right-2 bg-white rounded flex justify-around py-2">
                  <div className="w-6 h-6 bg-pink-400 rounded"></div>
                  <div className="w-6 h-6 bg-pink-300 rounded"></div>
                  <div className="w-6 h-6 bg-pink-300 rounded"></div>
                </div>
              </div>
              <ul className="text-pink-700 text-sm space-y-1">
                <li>✓ Always visible</li>
                <li>✓ Thumb-friendly location</li>
                <li>✓ App-like experience</li>
                <li>⚠️ Limited to 3-5 items</li>
              </ul>
            </div>
            
            <div className="bg-rose-50 p-6 rounded-lg">
              <h4 className="font-semibold text-rose-800 mb-4">➡️ Horizontal Scroll</h4>
              <div className="w-full h-32 bg-gradient-to-br from-rose-200 to-red-200 rounded-lg mb-4 relative">
                <div className="absolute top-2 left-2 right-2 bg-white rounded flex space-x-2 p-2 overflow-hidden">
                  <div className="w-16 h-6 bg-rose-400 rounded flex-shrink-0"></div>
                  <div className="w-16 h-6 bg-rose-300 rounded flex-shrink-0"></div>
                  <div className="w-16 h-6 bg-rose-300 rounded flex-shrink-0"></div>
                </div>
              </div>
              <ul className="text-rose-700 text-sm space-y-1">
                <li>✓ Discoverable content</li>
                <li>✓ Natural swipe gesture</li>
                <li>✓ Progressive disclosure</li>
                <li>⚠️ Không phù hợp main nav</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Form Optimization */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              5
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Mobile Form Optimization</h2>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            RSVP form là critical interaction point. Mobile form UX quyết định 
            success rate của guest responses và overall satisfaction.
          </p>
          
          <div className="space-y-6">
            <div className="bg-teal-50 p-6 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-4">📝 Input Field Best Practices:</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-teal-700 mb-3">🎯 Input types:</h5>
                  <ul className="text-teal-600 space-y-2 text-sm">
                    <li>• <code className="bg-teal-100 px-1 rounded">type="tel"</code> - Tự động numeric keypad</li>
                    <li>• <code className="bg-teal-100 px-1 rounded">type="email"</code> - Email keyboard layout</li>
                    <li>• <code className="bg-teal-100 px-1 rounded">type="date"</code> - Native date picker</li>
                    <li>• <code className="bg-teal-100 px-1 rounded">type="number"</code> - Numeric input</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-teal-700 mb-3">📏 Sizing & layout:</h5>
                  <ul className="text-teal-600 space-y-2 text-sm">
                    <li>• Minimum height 44px cho easy tapping</li>
                    <li>• Full-width inputs trên mobile</li>
                    <li>• 16px font size to prevent zoom</li>
                    <li>• Adequate spacing between fields</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h4 className="font-semibold text-cyan-800 mb-4">⌨️ Keyboard Optimization:</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-cyan-700 mb-2">📱 Keyboard Types</h5>
                  <ul className="text-cyan-600 text-sm space-y-1">
                    <li>• Default: Text input</li>
                    <li>• Numeric: Numbers only</li>
                    <li>• Phone: Phone number</li>
                    <li>• Email: @ và . keys</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-cyan-700 mb-2">🔧 Input Attributes</h5>
                  <ul className="text-cyan-600 text-sm space-y-1">
                    <li>• <code>autocomplete</code></li>
                    <li>• <code>autocapitalize</code></li>
                    <li>• <code>autocorrect</code></li>
                    <li>• <code>inputmode</code></li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-cyan-700 mb-2">⚡ UX Enhancements</h5>
                  <ul className="text-cyan-600 text-sm space-y-1">
                    <li>• Auto-focus first field</li>
                    <li>• Tab order optimization</li>
                    <li>• Submit on enter key</li>
                    <li>• Hide/show password</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testing & Debugging */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              6
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Testing & Debugging Mobile UX</h2>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Testing trên real devices là must-do. Emulators không thể replicate 
            hoàn toàn touch experience và performance của actual mobile devices.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-indigo-800 mb-4">🔍 Testing Methods:</h4>
              <ul className="text-indigo-700 space-y-3 text-sm">
                <li>
                  <strong>• Real device testing:</strong><br/>
                  <span className="text-indigo-600">Test trên iOS và Android devices</span>
                </li>
                <li>
                  <strong>• Browser dev tools:</strong><br/>
                  <span className="text-indigo-600">Chrome DevTools responsive mode</span>
                </li>
                <li>
                  <strong>• BrowserStack/Sauce Labs:</strong><br/>
                  <span className="text-indigo-600">Cloud-based device testing</span>
                </li>
                <li>
                  <strong>• User testing:</strong><br/>
                  <span className="text-indigo-600">Real users with their devices</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-4">✅ Testing Checklist:</h4>
              <ul className="text-purple-700 space-y-2 text-sm">
                <li>□ Touch targets có ít nhất 44x44px</li>
                <li>□ Text readable without zoom</li>
                <li>□ Forms easy to fill trên mobile</li>
                <li>□ Images load và scale properly</li>
                <li>□ Navigation accessible và intuitive</li>
                <li>□ Page loads under 3 seconds</li>
                <li>□ No horizontal scrolling required</li>
                <li>□ Gestures work as expected</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold text-gray-800 mb-3">🛠️ Debugging tools:</h5>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-2">🔧</div>
                <p className="font-semibold text-gray-700">Chrome DevTools</p>
                <p className="text-gray-600 text-sm">Device simulation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-2">📱</div>
                <p className="font-semibold text-gray-700">Safari Web Inspector</p>
                <p className="text-gray-600 text-sm">iOS device debugging</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-2">⚡</div>
                <p className="font-semibold text-gray-700">Lighthouse</p>
                <p className="text-gray-600 text-sm">Performance analysis</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progressive Web App */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-8 text-white text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">🚀 Progressive Web App (PWA) Features</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Nâng website lên tầm cao mới với PWA features cho trải nghiệm app-like
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">📲 Add to Home Screen</h4>
              <p className="text-white/90">Guests có thể install website như app</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">🔄 Offline Support</h4>
              <p className="text-white/90">Basic content available without internet</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">🔔 Push Notifications</h4>
              <p className="text-white/90">Updates và reminders cho guests</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl p-8 border border-blue-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sẵn sàng optimize mobile experience?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Template của chúng tôi đã được optimize hoàn toàn cho mobile với tất cả best practices trên
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/previews/type8"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-cyan-700 transition-all"
            >
              Xem Mobile-First Template
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
